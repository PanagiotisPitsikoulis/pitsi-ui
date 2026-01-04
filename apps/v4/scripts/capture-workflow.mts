#!/usr/bin/env bun
import { spawn, execSync, type ChildProcess } from "child_process"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const V4_DIR = path.join(__dirname, "..")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  dim: "\x1b[2m",
}

function log(message: string, color: keyof typeof colors = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function logStep(step: number, message: string) {
  log(`\n[Step ${step}/4] ${message}`, "cyan")
}

// ----------------------------------------------------------------------------
// Step 1: Kill any running Next.js servers on port 4000
// ----------------------------------------------------------------------------
function killNextServers(): void {
  logStep(1, "Killing any running Next.js servers on port 4000...")

  try {
    // Find PIDs listening on port 4000
    const result = execSync("lsof -ti:4000 2>/dev/null || true", {
      encoding: "utf-8",
    }).trim()

    if (result) {
      const pids = result.split("\n").filter(Boolean)
      for (const pid of pids) {
        try {
          execSync(`kill -9 ${pid} 2>/dev/null || true`)
          log(`  Killed process ${pid}`, "yellow")
        } catch {
          // Process might already be dead
        }
      }
      // Wait a moment for ports to be released
      execSync("sleep 1")
      log("  All Next.js servers killed", "green")
    } else {
      log("  No running Next.js servers found", "dim")
    }
  } catch (error) {
    // lsof might not find anything, that's fine
    log("  No running Next.js servers found", "dim")
  }
}

// ----------------------------------------------------------------------------
// Step 2: Clear .next cache and run build
// ----------------------------------------------------------------------------
function runBuild(): void {
  logStep(2, "Building the application...")

  // Clear .next cache to avoid stale chunk errors
  try {
    const nextCachePath = path.join(V4_DIR, ".next")
    execSync(`rm -rf "${nextCachePath}"`, { cwd: V4_DIR })
    log("  Cleared .next cache", "dim")
  } catch {
    // Cache might not exist, that's fine
  }

  try {
    execSync("bun run build", {
      cwd: V4_DIR,
      stdio: "inherit",
    })
    log("\n  Build completed successfully", "green")
  } catch (error) {
    log("\n  Build failed!", "red")
    process.exit(1)
  }
}

// ----------------------------------------------------------------------------
// Step 3: Run start and capture simultaneously
// ----------------------------------------------------------------------------
async function runStartAndCapture(): Promise<void> {
  logStep(3, "Starting server and running capture...")

  return new Promise((resolve, reject) => {
    let startProcess: ChildProcess | null = null
    let captureProcess: ChildProcess | null = null
    let serverReady = false

    // Cleanup function
    const cleanup = () => {
      if (startProcess && !startProcess.killed) {
        log("\n  Stopping Next.js server...", "yellow")
        startProcess.kill("SIGTERM")
        // Force kill after 3 seconds if still running
        setTimeout(() => {
          if (startProcess && !startProcess.killed) {
            startProcess.kill("SIGKILL")
          }
        }, 3000)
      }
    }

    // Handle process termination signals
    process.on("SIGINT", () => {
      log("\n\nReceived SIGINT, cleaning up...", "yellow")
      cleanup()
      process.exit(130)
    })

    process.on("SIGTERM", () => {
      log("\n\nReceived SIGTERM, cleaning up...", "yellow")
      cleanup()
      process.exit(143)
    })

    // Start the Next.js production server
    log("  Starting Next.js production server...", "dim")
    startProcess = spawn("bun", ["run", "start"], {
      cwd: V4_DIR,
      stdio: ["ignore", "pipe", "pipe"],
    })

    // Monitor server output for ready signal
    startProcess.stdout?.on("data", (data: Buffer) => {
      const output = data.toString()
      if (output.includes("Ready in") || output.includes("started server") || output.includes(":4000")) {
        if (!serverReady) {
          serverReady = true
          log("  Server is ready!", "green")

          // Give the server a moment to fully initialize
          setTimeout(() => {
            // Start the capture process
            log("  Starting registry capture...", "dim")
            captureProcess = spawn("bun", ["run", "registry:capture:debug"], {
              cwd: V4_DIR,
              stdio: "inherit",
            })

            captureProcess.on("close", (code) => {
              if (code === 0) {
                log("\n  Capture completed successfully!", "green")
              } else {
                log(`\n  Capture exited with code ${code}`, "red")
              }
              cleanup()
              resolve()
            })

            captureProcess.on("error", (error) => {
              log(`\n  Capture error: ${error.message}`, "red")
              cleanup()
              reject(error)
            })
          }, 2000)
        }
      }
      // Optionally log server output
      // process.stdout.write(output)
    })

    startProcess.stderr?.on("data", (data: Buffer) => {
      const output = data.toString()
      // Only show errors, not routine messages
      if (output.toLowerCase().includes("error")) {
        process.stderr.write(data)
      }
    })

    startProcess.on("error", (error) => {
      log(`  Server error: ${error.message}`, "red")
      cleanup()
      reject(error)
    })

    startProcess.on("close", (code) => {
      if (!serverReady) {
        log(`  Server exited unexpectedly with code ${code}`, "red")
        reject(new Error(`Server exited with code ${code}`))
      }
    })

    // Timeout if server doesn't start within 60 seconds
    setTimeout(() => {
      if (!serverReady) {
        log("  Server failed to start within 60 seconds", "red")
        cleanup()
        reject(new Error("Server startup timeout"))
      }
    }, 60000)
  })
}

// ----------------------------------------------------------------------------
// Step 4: Start the dev server
// ----------------------------------------------------------------------------
function runDevServer(): void {
  logStep(4, "Starting dev server...")

  log("  Dev server starting on http://localhost:4000", "green")
  log("  Press Ctrl+C to stop", "dim")
  log("")

  // Run dev server with inherited stdio so user can see output and interact
  try {
    execSync("bun run dev", {
      cwd: V4_DIR,
      stdio: "inherit",
    })
  } catch {
    // User pressed Ctrl+C, that's fine
  }
}

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------
async function main() {
  console.clear()
  log("=" .repeat(60), "cyan")
  log("  Registry Capture Workflow", "cyan")
  log("=".repeat(60), "cyan")
  log("")
  log("This script will:", "dim")
  log("  1. Kill any running Next.js servers", "dim")
  log("  2. Build the application", "dim")
  log("  3. Start the production server and run capture", "dim")
  log("  4. Start the dev server", "dim")
  log("")

  const startTime = Date.now()

  try {
    // Step 1: Kill existing servers
    killNextServers()

    // Step 2: Build
    runBuild()

    // Step 3: Start server and capture
    await runStartAndCapture()

    const duration = ((Date.now() - startTime) / 1000).toFixed(1)
    log("")
    log("=".repeat(60), "green")
    log(`  Capture workflow completed in ${duration}s`, "green")
    log("=".repeat(60), "green")

    // Step 4: Start dev server
    runDevServer()

  } catch (error: any) {
    log("")
    log("=".repeat(60), "red")
    log(`  Workflow failed: ${error.message}`, "red")
    log("=".repeat(60), "red")
    log("")
    process.exit(1)
  }
}

main()
