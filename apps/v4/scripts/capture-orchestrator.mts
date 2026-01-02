#!/usr/bin/env bun
import { execSync, spawn, ChildProcess } from "child_process"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.join(__dirname, "..")

const PORT = 4000

// ANSI colors for output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
}

function log(message: string, color = colors.reset): void {
  console.log(`${color}${message}${colors.reset}`)
}

function logStep(step: number, total: number, message: string): void {
  log(`\n${colors.bright}[Step ${step}/${total}]${colors.reset} ${colors.cyan}${message}${colors.reset}`)
  log("─".repeat(50))
}

// Kill any process running on the target port
function killProcessOnPort(port: number): void {
  try {
    const pids = execSync(`lsof -ti:${port}`, { encoding: "utf-8" })
      .trim()
      .split("\n")
      .filter(Boolean)

    if (pids.length > 0) {
      log(`Found ${pids.length} process(es) on port ${port}, killing...`, colors.yellow)
      for (const pid of pids) {
        try {
          execSync(`kill -9 ${pid}`, { stdio: "ignore" })
          log(`  Killed PID ${pid}`, colors.yellow)
        } catch {
          // Process may have already exited
        }
      }
      // Give OS time to release the port
      execSync("sleep 1")
    } else {
      log(`No processes found on port ${port}`, colors.green)
    }
  } catch {
    // lsof returns error if no processes found
    log(`No processes found on port ${port}`, colors.green)
  }
}

// Run a command and stream output
function runCommand(command: string, args: string[], cwd: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    })

    child.on("close", (code) => {
      resolve(code ?? 0)
    })

    child.on("error", (err) => {
      reject(err)
    })
  })
}

// Start server as background process (quiet - no output prefixing)
function startServerQuiet(command: string, args: string[], cwd: string): ChildProcess {
  const child = spawn(command, args, {
    cwd,
    stdio: ["ignore", "ignore", "ignore"],
    shell: true,
    detached: false,
  })

  return child
}

// Kill a child process and wait for it to die
async function killProcessAndWait(child: ChildProcess): Promise<void> {
  if (!child || child.killed) return

  return new Promise((resolve) => {
    child.on("exit", () => resolve())
    child.kill("SIGTERM")

    // Force kill after 3 seconds if still running
    setTimeout(() => {
      if (!child.killed) {
        child.kill("SIGKILL")
      }
      resolve()
    }, 3000)
  })
}

// Main orchestration
async function main(): Promise<void> {
  log("\n" + "=".repeat(50), colors.bright)
  log("  Capture Orchestrator", colors.bright)
  log("=".repeat(50) + "\n", colors.bright)

  let serverProcess: ChildProcess | null = null
  let exitCode = 0

  try {
    // Step 1: Kill any existing server on port 4000
    logStep(1, 5, "Killing any active Next.js server on port 4000")
    killProcessOnPort(PORT)

    // Step 2: Run build
    logStep(2, 5, "Building v4 (pitsi + next build)")
    const buildCode = await runCommand("bun", ["run", "build"], ROOT_DIR)
    if (buildCode !== 0) {
      throw new Error(`Build failed with exit code ${buildCode}`)
    }
    log("Build completed successfully!", colors.green)

    // Step 3: Start production server + run capture simultaneously
    logStep(3, 5, "Starting server & running capture (parallel)")
    log("Starting production server in background...", colors.blue)
    serverProcess = startServerQuiet("bun", ["run", "start"], ROOT_DIR)

    // Give server a moment to bind the port, then start capture
    // Capture script has built-in retry logic for page loads
    await new Promise((resolve) => setTimeout(resolve, 2000))

    log("Running capture with debug flags...", colors.blue)
    log("Flags: --show-browser --verbose --force", colors.blue)
    const captureCode = await runCommand(
      "bun",
      ["--bun", "./scripts/capture-registry.mts", "--show-browser", "--verbose", "--force"],
      ROOT_DIR
    )

    if (captureCode !== 0) {
      log(`Capture completed with warnings (exit code ${captureCode})`, colors.yellow)
    } else {
      log("Capture completed successfully!", colors.green)
    }

    // Step 4: Kill all servers
    logStep(4, 5, "Stopping all servers")
    if (serverProcess) {
      await killProcessAndWait(serverProcess)
      log("Production server stopped", colors.green)
    }
    killProcessOnPort(PORT) // Ensure port is freed
    log("All servers stopped", colors.green)

    // Step 5: Start dev server
    logStep(5, 5, "Starting development server (next dev)")
    log("Dev server starting in foreground...", colors.blue)
    log("Press Ctrl+C to stop\n", colors.yellow)

    await runCommand("bun", ["run", "dev"], ROOT_DIR)

  } catch (error: any) {
    log(`\nError: ${error.message}`, colors.red)
    exitCode = 1

    // Cleanup on error
    if (serverProcess) {
      await killProcessAndWait(serverProcess)
    }
    killProcessOnPort(PORT)
  }

  process.exit(exitCode)
}

main().catch((error) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
