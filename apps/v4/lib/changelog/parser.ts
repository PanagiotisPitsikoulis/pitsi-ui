import fs from "fs"
import path from "path"

export type ChangeType = "major" | "minor" | "patch"

export interface ChangelogChange {
  type: "major" | "minor" | "patch"
  pr?: string
  commit?: string
  author?: string
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
  // Match lines like:
  // - [#8555](https://...) [`commit`](https://...) Thanks [@user](...) - description
  // or simpler: - [`commit`](https://...) Thanks [@user](...) - description
  const prMatch = line.match(/\[#(\d+)\]\(([^)]+)\)/)
  const commitMatch = line.match(/\[`([a-f0-9]+)`\]\(([^)]+)\)/)
  const authorMatch = line.match(/Thanks \[@([^\]]+)\]/)
  const descriptionMatch = line.match(/! (.+)$/)

  if (!descriptionMatch) return null

  return {
    type: "patch",
    pr: prMatch ? prMatch[1] : undefined,
    commit: commitMatch ? commitMatch[1] : undefined,
    author: authorMatch ? authorMatch[1] : undefined,
    description: descriptionMatch[1].trim(),
  }
}

export function parseChangelog(content: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = []
  const lines = content.split("\n")

  let currentEntry: ChangelogEntry | null = null
  let currentChangeType: "major" | "minor" | "patch" | null = null

  for (const line of lines) {
    // Match version headers like "## 3.5.0"
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
  const changelogPath = path.join(
    process.cwd(),
    "..",
    "..",
    "packages",
    "pitsi",
    "CHANGELOG.md"
  )

  try {
    const content = fs.readFileSync(changelogPath, "utf-8")
    return parseChangelog(content)
  } catch {
    // Fallback: try relative path from apps/v4
    try {
      const fallbackPath = path.join(
        process.cwd(),
        "packages",
        "pitsi",
        "CHANGELOG.md"
      )
      const content = fs.readFileSync(fallbackPath, "utf-8")
      return parseChangelog(content)
    } catch {
      return []
    }
  }
}

export function getChangeType(entry: ChangelogEntry): ChangeType {
  if (entry.changes.major.length > 0) return "major"
  if (entry.changes.minor.length > 0) return "minor"
  return "patch"
}

export function getChangeTypeLabel(type: ChangeType): string {
  switch (type) {
    case "major":
      return "Major Release"
    case "minor":
      return "New Features"
    case "patch":
      return "Bug Fixes"
  }
}

export function getAllChanges(entry: ChangelogEntry): ChangelogChange[] {
  return [
    ...entry.changes.major,
    ...entry.changes.minor,
    ...entry.changes.patch,
  ]
}
