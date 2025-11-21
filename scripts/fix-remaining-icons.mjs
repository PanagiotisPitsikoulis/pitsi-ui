#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs"

// Additional icon mappings for remaining icons
const additionalMappings = {
  RiMoreLine: "MoreHorizontal",
  RiMailCheckLine: "MailCheck",
  RiArchiveLine: "Archive",
  RiTimeLine: "Clock",
  RiCalendarEventLine: "CalendarDays",
  RiPlayListAddLine: "ListPlus",
  RiPriceTag3Line: "Tag",
  RiDeleteBinLine: "Trash2",
  RiArrowUpDownLine: "ArrowUpDown",
  RiArrowLeftSLine: "ChevronLeft",
  RiQuestionLine: "HelpCircle",
}

const files = [
  "apps/v4/registry/new-york-v4/examples/button-group-demo.tsx",
  "apps/v4/registry/new-york-v4/examples/calendar-hijri.tsx",
  "apps/v4/registry/new-york-v4/examples/data-table-demo.tsx",
  "apps/v4/registry/new-york-v4/examples/input-group-tooltip.tsx",
]

for (const file of files) {
  try {
    let content = readFileSync(file, "utf-8")
    console.log(`\nProcessing: ${file}`)

    // Find all Remix icons used in this file
    const usedIcons = new Set()
    for (const [remixIcon, lucideIcon] of Object.entries(additionalMappings)) {
      if (content.includes(remixIcon)) {
        usedIcons.add({ remix: remixIcon, lucide: lucideIcon })
      }
    }

    if (usedIcons.size === 0) {
      console.log("  No Remix icons found")
      continue
    }

    // Replace all icon usages
    for (const { remix, lucide } of usedIcons) {
      const regex = new RegExp(`<${remix}\\b`, "g")
      content = content.replace(regex, `<${lucide}`)

      // Also replace direct references
      const refRegex = new RegExp(`\\b${remix}\\b`, "g")
      content = content.replace(refRegex, lucide)

      console.log(`  Replaced: ${remix} → ${lucide}`)
    }

    // Update imports - find lucide-react import and add new icons
    const lucideIcons = Array.from(usedIcons).map(({ lucide }) => lucide)

    // Find existing lucide import
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/
    const match = content.match(importRegex)

    if (match) {
      const existingImports = match[1].split(",").map((s) => s.trim())
      const allImports = [...new Set([...existingImports, ...lucideIcons])].sort()
      content = content.replace(importRegex, `import { ${allImports.join(", ")} } from "lucide-react"`)
      console.log(`  Updated imports: added ${lucideIcons.join(", ")}`)
    } else {
      // Add new import at the top
      const lines = content.split("\n")
      let insertIndex = 0
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("import")) {
          insertIndex = i + 1
        } else if (insertIndex > 0) {
          break
        }
      }
      lines.splice(insertIndex, 0, `import { ${lucideIcons.join(", ")} } from "lucide-react"`)
      content = lines.join("\n")
      console.log(`  Added new import: ${lucideIcons.join(", ")}`)
    }

    writeFileSync(file, content, "utf-8")
    console.log(`  ✓ Updated successfully`)
  } catch (err) {
    console.log(`  ⚠️  Error: ${err.message}`)
  }
}

console.log("\n✅ Done!")
