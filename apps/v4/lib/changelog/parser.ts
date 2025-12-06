import fs from "fs"
import path from "path"

export type ChangeType = "major" | "minor" | "patch"

export interface ChangelogChange {
  type: ChangeType
  commit?: string
  description: string
}

export interface ChangelogEntry {
  version: string
  changes: {
    major: ChangelogChange[]
    minor: ChangelogChange[]
    patch: ChangelogChange[]
  }
}

function parseChangeEntry(line: string): ChangelogChange | null {
  // Match commit hash pattern: [`hash`](url)
  const commitMatch = line.match(/\[`([a-f0-9]+)`\]\(([^)]+)\)/)

  // Extract description - try multiple patterns
  let description: string | null = null

  // Pattern 1: "- [`commit`](url) - description"
  const dashMatch = line.match(/\]\([^)]+\)\s*-\s*(.+)$/)
  if (dashMatch) {
    description = dashMatch[1].trim()
  }

  // Pattern 2: Simple list item without commit link "- description"
  if (!description && line.startsWith("- ") && !line.includes("](")) {
    description = line.slice(2).trim()
  }

  if (!description) return null

  return {
    type: "patch",
    commit: commitMatch ? commitMatch[1] : undefined,
    description,
  }
}

export function parseChangelog(content: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = []
  const lines = content.split("\n")

  let currentEntry: ChangelogEntry | null = null
  let currentChangeType: ChangeType | null = null

  for (const line of lines) {
    // Match version headers like "## 4.4.0"
    const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/)
    if (versionMatch) {
      if (currentEntry) {
        entries.push(currentEntry)
      }
      currentEntry = {
        version: versionMatch[1],
        changes: {
          major: [],
          minor: [],
          patch: [],
        },
      }
      currentChangeType = null
      continue
    }

    // Match change type headers
    if (line.includes("### Major Changes")) {
      currentChangeType = "major"
      continue
    }
    if (line.includes("### Minor Changes")) {
      currentChangeType = "minor"
      continue
    }
    if (line.includes("### Patch Changes")) {
      currentChangeType = "patch"
      continue
    }

    // Parse change entries
    if (currentEntry && currentChangeType && line.startsWith("- ")) {
      const change = parseChangeEntry(line)
      if (change) {
        change.type = currentChangeType
        currentEntry.changes[currentChangeType].push(change)
      }
    }
  }

  // Push the last entry
  if (currentEntry) {
    entries.push(currentEntry)
  }

  return entries
}

export function getChangelogEntries(): ChangelogEntry[] {
  const possiblePaths = [
    path.join(process.cwd(), "CHANGELOG.md"),
    path.join(process.cwd(), "apps", "v4", "CHANGELOG.md"),
    path.join(process.cwd(), "..", "apps", "v4", "CHANGELOG.md"),
  ]

  for (const changelogPath of possiblePaths) {
    try {
      const content = fs.readFileSync(changelogPath, "utf-8")
      return parseChangelog(content)
    } catch {
      // Try next path
    }
  }

  return []
}

export function getChangeType(entry: ChangelogEntry): ChangeType {
  if (entry.changes.major.length > 0) return "major"
  if (entry.changes.minor.length > 0) return "minor"
  return "patch"
}

export function getAllChanges(entry: ChangelogEntry): ChangelogChange[] {
  return [
    ...entry.changes.major,
    ...entry.changes.minor,
    ...entry.changes.patch,
  ]
}
