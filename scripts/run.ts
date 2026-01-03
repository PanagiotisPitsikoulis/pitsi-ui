#!/usr/bin/env bun
import { execSync } from "child_process"
import { existsSync, readFileSync, readdirSync } from "fs"
import { basename, join } from "path"

import * as p from "@clack/prompts"

const ROOT_DIR = join(import.meta.dirname, "..")

interface PackageJson {
  name?: string
  scripts?: Record<string, string>
  workspaces?: string[]
}

interface Script {
  name: string
  command: string
  source: string
  cwd: string
}

function readPackageJson(dir: string): PackageJson | null {
  const pkgPath = join(dir, "package.json")
  if (!existsSync(pkgPath)) return null
  return JSON.parse(readFileSync(pkgPath, "utf-8"))
}

function getWorkspaceDirs(rootPkg: PackageJson): string[] {
  if (!rootPkg.workspaces) return []

  const dirs: string[] = []
  for (const pattern of rootPkg.workspaces) {
    if (pattern.endsWith("/*")) {
      const baseDir = join(ROOT_DIR, pattern.slice(0, -2))
      if (existsSync(baseDir)) {
        const entries = readdirSync(baseDir, { withFileTypes: true })
        for (const entry of entries) {
          if (entry.isDirectory()) {
            dirs.push(join(baseDir, entry.name))
          }
        }
      }
    } else {
      const dir = join(ROOT_DIR, pattern)
      if (existsSync(dir)) {
        dirs.push(dir)
      }
    }
  }
  return dirs
}

function getAllScripts(): Script[] {
  const scripts: Script[] = []

  const rootPkg = readPackageJson(ROOT_DIR)
  if (rootPkg?.scripts) {
    for (const [name, command] of Object.entries(rootPkg.scripts)) {
      scripts.push({ name, command, source: "root", cwd: ROOT_DIR })
    }
  }

  if (rootPkg) {
    const workspaceDirs = getWorkspaceDirs(rootPkg)
    for (const dir of workspaceDirs) {
      const pkg = readPackageJson(dir)
      if (pkg?.scripts) {
        const sourceName = pkg.name || basename(dir)
        for (const [name, command] of Object.entries(pkg.scripts)) {
          scripts.push({ name, command, source: sourceName, cwd: dir })
        }
      }
    }
  }

  return scripts
}

function groupBySource(scripts: Script[]): Record<string, Script[]> {
  const groups: Record<string, Script[]> = {}
  for (const script of scripts) {
    if (!groups[script.source]) groups[script.source] = []
    groups[script.source].push(script)
  }
  return groups
}

function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase()
  const t = text.toLowerCase()

  // Direct substring match
  if (t.includes(q)) return true

  // Fuzzy match: all query chars appear in order
  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return qi === q.length
}

function searchScripts(scripts: Script[], query: string): Script[] {
  if (!query.trim()) return scripts

  return scripts.filter((s) => {
    const searchText = `${s.source}:${s.name} ${s.command}`
    return fuzzyMatch(query, searchText)
  })
}

async function runScript(script: Script) {
  const runCmd =
    script.source === "root"
      ? `bun run ${script.name}`
      : `bun run --cwd ${script.cwd} ${script.name}`

  p.outro(`Running: ${runCmd}`)

  try {
    execSync(runCmd, { cwd: ROOT_DIR, stdio: "inherit" })
  } catch {
    process.exit(1)
  }
}

function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + "..."
}

async function browseMode(scripts: Script[]) {
  const groups = groupBySource(scripts)
  const sourceNames = Object.keys(groups).sort((a, b) => {
    if (a === "root") return -1
    if (b === "root") return 1
    return a.localeCompare(b)
  })

  const selectedSource = await p.select({
    message: "Select a workspace",
    options: sourceNames.map((name) => ({
      value: name,
      label: name === "root" ? "root (monorepo)" : name,
      hint: `${groups[name].length} scripts`,
    })),
  })

  if (p.isCancel(selectedSource)) {
    p.cancel("Cancelled")
    process.exit(0)
  }

  const sourceScripts = groups[selectedSource as string]

  const selectedScript = await p.select({
    message: "Select a script to run",
    options: sourceScripts.map((script) => ({
      value: script.name,
      label: script.name,
      hint: truncate(script.command, 50),
    })),
  })

  if (p.isCancel(selectedScript)) {
    p.cancel("Cancelled")
    process.exit(0)
  }

  const script = sourceScripts.find((s) => s.name === selectedScript)
  if (script) await runScript(script)
}

async function searchMode(scripts: Script[]) {
  const query = await p.text({
    message: "Search scripts",
    placeholder: "Type to search (e.g. 'dev', 'build', 'v4:lint')",
  })

  if (p.isCancel(query)) {
    p.cancel("Cancelled")
    process.exit(0)
  }

  const results = searchScripts(scripts, query as string)

  if (results.length === 0) {
    p.log.warn("No scripts found matching your query")
    const retry = await p.confirm({ message: "Try another search?" })
    if (p.isCancel(retry) || !retry) {
      process.exit(0)
    }
    return searchMode(scripts)
  }

  const selectedScript = await p.select({
    message: `Found ${results.length} scripts`,
    options: results.slice(0, 20).map((script) => ({
      value: `${script.source}::${script.name}`,
      label: `${script.source}:${script.name}`,
      hint: truncate(script.command, 40),
    })),
  })

  if (p.isCancel(selectedScript)) {
    p.cancel("Cancelled")
    process.exit(0)
  }

  const [source, name] = (selectedScript as string).split("::")
  const script = results.find((s) => s.source === source && s.name === name)
  if (script) await runScript(script)
}

async function main() {
  console.clear()

  p.intro("Script Runner")

  const scripts = getAllScripts()

  if (scripts.length === 0) {
    p.outro("No scripts found")
    process.exit(0)
  }

  const mode = await p.select({
    message: "How do you want to find scripts?",
    options: [
      { value: "search", label: "Search", hint: "Type to find scripts" },
      { value: "browse", label: "Browse", hint: "Navigate by workspace" },
    ],
  })

  if (p.isCancel(mode)) {
    p.cancel("Cancelled")
    process.exit(0)
  }

  if (mode === "search") {
    await searchMode(scripts)
  } else {
    await browseMode(scripts)
  }
}

main().catch(console.error)
