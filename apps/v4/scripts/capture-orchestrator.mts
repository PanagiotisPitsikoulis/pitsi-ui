#!/usr/bin/env bun
import { execSync, spawn, ChildProcess } from "child_process"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.join(__dirname, "..")

const PORT = 4000
const SERVER_URL = `http://localhost:${PORT}`

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

function logStep(step: number, message: string): void {
  log(`\n${colors.bright}[Step ${step}/6]${colors.reset} ${colors.cyan}${message}${colors.reset}`)
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

// Wait for server to be ready
async function waitForServer(url: string, maxAttempts = 60): Promise<boolean> {
  log(`Waiting for server at ${url}...`, colors.blue)

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(url)
      if (response.ok || response.status === 200 || response.status === 404) {
        log(`Server ready after ${attempt} attempts`, colors.green)
        return true
      }
    } catch {
      // Server not ready yet
    }

    if (attempt % 10 === 0) {
      log(`  Still waiting... (attempt ${attempt}/${maxAttempts})`, colors.yellow)
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return false
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

// Start server as background process
function startServer(command: string, args: string[], cwd: string): ChildProcess {
  const child = spawn(command, args, {
    cwd,
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
    detached: false,
  })

  // Prefix server output
  child.stdout?.on("data", (data) => {
    const lines = data.toString().split("\n").filter(Boolean)
    for (const line of lines) {
      console.log(`${colors.blue}[server]${colors.reset} ${line}`)
    }
  })

  child.stderr?.on("data", (data) => {
    const lines = data.toString().split("\n").filter(Boolean)
    for (const line of lines) {
      console.log(`${colors.red}[server]${colors.reset} ${line}`)
    }
  })

  return child
}

// Kill a child process
function killProcess(child: ChildProcess): void {
  if (child && !child.killed) {
    child.kill("SIGTERM")
    // Give it a moment to clean up
    setTimeout(() => {
      if (!child.killed) {
        child.kill("SIGKILL")
      }
    }, 2000)
  }
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
    logStep(1, "Killing any active Next.js server on port 4000")
    killProcessOnPort(PORT)

    // Step 2: Run build
    logStep(2, "Building v4 (pitsi + next build)")
    const buildCode = await runCommand("bun", ["run", "build"], ROOT_DIR)
    if (buildCode !== 0) {
      throw new Error(`Build failed with exit code ${buildCode}`)
    }
    log("Build completed successfully!", colors.green)

    // Step 3: Start production server
    logStep(3, "Starting production server (next start)")
    serverProcess = startServer("bun", ["run", "start"], ROOT_DIR)

    const serverReady = await waitForServer(SERVER_URL)
    if (!serverReady) {
      throw new Error("Server failed to start within timeout")
    }

    // Step 4: Run capture with debug flags
    logStep(4, "Running registry:capture:debug")
    log("Flags: --show-browser --verbose --force", colors.blue)
    const captureCode = await runCommand(
      "bun",
      ["--bun", "./scripts/capture-registry.mts", "--show-browser", "--verbose", "--force"],
      ROOT_DIR
    )
    if (captureCode !== 0) {
      log(`Capture completed with warnings (exit code ${captureCode})`, colors.yellow)
      // Don't throw - continue to cleanup
    } else {
      log("Capture completed successfully!", colors.green)
    }
  } catch (error: any) {
    log(`\nError: ${error.message}`, colors.red)
    exitCode = 1
  } finally {
    // Step 5: Kill production server
    logStep(5, "Stopping production server")
    if (serverProcess) {
      killProcess(serverProcess)
      log("Production server stopped", colors.green)
    }
    killProcessOnPort(PORT) // Ensure port is freed

    // Step 6: Start dev server
    logStep(6, "Starting development server (next dev)")
    log("Dev server starting in foreground...", colors.blue)
    log("Press Ctrl+C to stop\n", colors.yellow)

    // Replace this process with dev server
    await runCommand("bun", ["run", "dev"], ROOT_DIR)
  }

  process.exit(exitCode)
}

main().catch((error) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
