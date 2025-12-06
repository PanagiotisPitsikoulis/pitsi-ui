import fs from "fs"
import path from "path"

export type RoadmapStatus = "completed" | "in-progress" | "planned" | "exploring"

export interface RoadmapItem {
  quarter: string
  status: RoadmapStatus
  items: string[]
}

function parseStatus(header: string): RoadmapStatus | null {
  const lower = header.toLowerCase()
  if (lower.includes("completed")) return "completed"
  if (lower.includes("in progress") || lower.includes("in-progress")) return "in-progress"
  if (lower.includes("planned")) return "planned"
  if (lower.includes("exploring")) return "exploring"
  return null
}

export function parseRoadmap(content: string): RoadmapItem[] {
  const entries: RoadmapItem[] = []
  const lines = content.split("\n")

  let currentEntry: RoadmapItem | null = null
  let currentStatus: RoadmapStatus | null = null

  for (const line of lines) {
    // Match quarter headers like "## Q4 2024" or "## Future"
    const quarterMatch = line.match(/^## (.+)$/)
    if (quarterMatch && !line.includes("###")) {
      if (currentEntry && currentEntry.items.length > 0) {
        entries.push(currentEntry)
      }
      currentEntry = {
        quarter: quarterMatch[1].trim(),
        status: "planned",
        items: [],
      }
      currentStatus = null
      continue
    }

    // Match status headers like "### Completed", "### In Progress", etc.
    const statusMatch = line.match(/^### (.+)$/)
    if (statusMatch) {
      const status = parseStatus(statusMatch[1])
      if (status && currentEntry) {
        currentStatus = status
        currentEntry.status = status
      }
      continue
    }

    // Parse list items
    if (currentEntry && currentStatus && line.startsWith("- ")) {
      const item = line.slice(2).trim()
      if (item) {
        currentEntry.items.push(item)
      }
    }
  }

  // Push the last entry
  if (currentEntry && currentEntry.items.length > 0) {
    entries.push(currentEntry)
  }

  return entries
}

export function getRoadmapEntries(): RoadmapItem[] {
  const possiblePaths = [
    path.join(process.cwd(), "ROADMAP.md"),
    path.join(process.cwd(), "apps", "v4", "ROADMAP.md"),
    path.join(process.cwd(), "..", "apps", "v4", "ROADMAP.md"),
  ]

  for (const roadmapPath of possiblePaths) {
    try {
      const content = fs.readFileSync(roadmapPath, "utf-8")
      return parseRoadmap(content)
    } catch {
      // Try next path
    }
  }

  return []
}

export function getStatusLabel(status: RoadmapStatus): string {
  const labels: Record<RoadmapStatus, string> = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
    exploring: "Exploring",
  }
  return labels[status]
}
