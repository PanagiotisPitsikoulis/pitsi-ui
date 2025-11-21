#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"

const registryDir = "apps/v4/registry/new-york-v4"

// Find all _registry.ts files
const dirs = ["blocks", "ui", "lib", "hooks", "internal", "examples"]

for (const dir of dirs) {
  const registryFile = join(registryDir, dir, "_registry.ts")
  try {
    let content = readFileSync(registryFile, "utf-8")

    if (content.includes("readiness:")) {
      console.log(`✓ ${dir}/_registry.ts already has readiness`)
      continue
    }

    console.log(`Processing ${dir}/_registry.ts...`)

    // Simple approach: add readiness: "alpha", before every closing brace
    // that comes after a comma (indicating end of a property in an object)
    const lines = content.split("\n")
    const result = []
    let inArray = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Track if we're in the main array
      if (trimmed.match(/^export const \w+.*=\s*\[/)) {
        inArray = 1
      }

      // If we're in the array and hit a closing brace followed by comma
      // this is likely the end of a registry object
      if (
        inArray > 0 &&
        (trimmed === "}," || trimmed.startsWith("},"))
      ) {
        // Add readiness before this line
        const indent = line.match(/^(\s*)/)[0]
        result.push(`${indent}  readiness: "alpha",`)
      }

      result.push(line)
    }

    writeFileSync(registryFile, result.join("\n"), "utf-8")
    console.log(`✓ Added readiness to ${dir}/_registry.ts`)
  } catch (err) {
    console.log(`⚠️  Could not process ${dir}/_registry.ts:`, err.message)
  }
}

console.log("\n✅ Done!")
