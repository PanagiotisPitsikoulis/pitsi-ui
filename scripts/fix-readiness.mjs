#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const registryDir = "apps/v4/registry/new-york-v4"
const dirs = ["blocks", "ui", "lib", "hooks", "internal", "examples"]

for (const dir of dirs) {
  const registryFile = join(registryDir, dir, "_registry.ts")
  try {
    let content = readFileSync(registryFile, "utf-8")
    console.log(`Processing ${dir}/_registry.ts...`)

    // Remove readiness from inside files arrays
    // Pattern: Look for readiness inside a files array object
    const lines = content.split("\n")
    const result = []
    let inFilesArray = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Track if we're in a files array
      if (trimmed.startsWith("files:")) {
        inFilesArray = true
      }

      // Exit files array when we hit a closing bracket at the start of the line
      if (inFilesArray && trimmed === "],") {
        inFilesArray = false
      }

      // Skip lines with readiness that are inside files arrays
      if (inFilesArray && trimmed.startsWith("readiness:")) {
        console.log(`  Removing: ${trimmed}`)
        continue
      }

      result.push(line)
    }

    writeFileSync(registryFile, result.join("\n"), "utf-8")
    console.log(`✓ Fixed ${dir}/_registry.ts`)
  } catch (err) {
    console.log(`⚠️  Could not process ${dir}/_registry.ts:`, err.message)
  }
}

console.log("\n✅ Done!")
