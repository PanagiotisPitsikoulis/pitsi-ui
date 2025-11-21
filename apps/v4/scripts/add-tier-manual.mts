import * as fs from "fs"
import * as path from "path"

const REGISTRY_PATHS = {
  blocks: path.join(process.cwd(), "registry/new-york-v4/blocks/_registry.ts"),
  ui: path.join(process.cwd(), "registry/new-york-v4/ui/_registry.ts"),
  animations: path.join(
    process.cwd(),
    "registry/new-york-v4/animations/_registry.ts"
  ),
}

async function addTierDirectly(
  registryPath: string,
  tier: "free" | "pro" | "30/70"
) {
  const content = fs.readFileSync(registryPath, "utf-8")

  // Simple regex approach - add tier before every closing object brace at the item level
  // Match pattern: },\n  }\n or },\n  },
  let newContent = content

  if (tier === "30/70") {
    // For blocks with 30/70 split - we'll do this separately
    return
  }

  // Replace every registry item's closing with tier added
  // Pattern: look for "},\n  }," or "},\n  }" which indicates end of a registry item
  newContent = newContent.replace(
    /(\n\s*\},?\s*)(\n\s*\},)/g,
    (match, group1, group2) => {
      // Don't add if tier already exists before this closing
      const beforeMatch = newContent.substring(
        Math.max(0, newContent.indexOf(match) - 200),
        newContent.indexOf(match)
      )
      if (beforeMatch.includes('tier: "')) {
        return match
      }
      return `${group1}\n    tier: "${tier}",${group2}`
    }
  )

  fs.writeFileSync(registryPath, newContent)
}

async function main() {
  console.log("Adding tier to UI components...")
  await addTierDirectly(REGISTRY_PATHS.ui, "free")

  console.log("Adding tier to animations...")
  await addTierDirectly(REGISTRY_PATHS.animations, "free")

  console.log("Done!")
}

main().catch(console.error)
