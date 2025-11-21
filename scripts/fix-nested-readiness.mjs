#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs"

const registryFile = "apps/v4/registry/new-york-v4/ui/_registry.ts"

let content = readFileSync(registryFile, "utf-8")
console.log("Processing ui/_registry.ts...")

const lines = content.split("\n")
const result = []
let inTailwindOrCssVars = false
let depth = 0

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const trimmed = line.trim()

  // Track when we enter tailwind or cssVars sections
  if (trimmed.startsWith("tailwind:") || trimmed.startsWith("cssVars:")) {
    inTailwindOrCssVars = true
    depth = 0
  }

  // Count braces to track depth
  if (inTailwindOrCssVars) {
    for (const char of line) {
      if (char === "{") depth++
      if (char === "}") depth--
    }

    // Exit when we close all braces
    if (depth === 0 && (line.includes("},") || trimmed === "}")) {
      inTailwindOrCssVars = false
    }
  }

  // Skip readiness lines inside tailwind/cssVars sections
  if (inTailwindOrCssVars && trimmed.startsWith("readiness:")) {
    console.log(`  Removing nested: ${trimmed}`)
    continue
  }

  result.push(line)
}

writeFileSync(registryFile, result.join("\n"), "utf-8")
console.log("✓ Fixed ui/_registry.ts")
