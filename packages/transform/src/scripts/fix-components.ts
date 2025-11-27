#!/usr/bin/env tsx
/**
 * Fix common import errors in all generated components
 */

import * as path from "path"
import { fileURLToPath } from "url"
import { fixComponentsInDirectory } from "../utils/fix-component-imports.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COMPONENTS_DIR = path.join(__dirname, "..", "..", "output", "components")

async function main() {
  console.log("🔧 Fixing component imports...")
  console.log(`Directory: ${COMPONENTS_DIR}\n`)

  fixComponentsInDirectory(COMPONENTS_DIR)

  console.log("\n✅ Component imports fixed!")
}

main().catch(console.error)
