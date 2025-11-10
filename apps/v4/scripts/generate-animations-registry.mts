import * as fs from "fs"
import * as path from "path"

const ANIMATIONS_DIR = path.join(
  process.cwd(),
  "registry/new-york-v4/animations"
)

function generateAnimationEntry(animationName: string): string {
  return `  {
    name: "${animationName}",
    type: "registry:ui",
    description: "Animation component: ${animationName.replace(/-/g, " ")}",
    files: [
      {
        path: "animations/${animationName}/${animationName}.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
  }`
}

async function main() {
  const animationDirs = fs
    .readdirSync(ANIMATIONS_DIR)
    .filter(
      (item) =>
        fs.statSync(path.join(ANIMATIONS_DIR, item)).isDirectory() &&
        !item.startsWith(".")
    )

  console.log(`Found ${animationDirs.length} animations`)

  const animationsRegistry = `import { type Registry } from "pitsi/schema"

export const animations: Registry["items"] = [
${animationDirs.map((name) => generateAnimationEntry(name)).join(",\n")}
]
`

  const outputPath = path.join(ANIMATIONS_DIR, "_registry.ts")
  fs.writeFileSync(outputPath, animationsRegistry)
  console.log(`✅ Created animations registry at ${outputPath}`)
  console.log("\nAnimations:")
  animationDirs.forEach((name, i) => console.log(`  ${i + 1}. ${name}`))
}

main().catch(console.error)
