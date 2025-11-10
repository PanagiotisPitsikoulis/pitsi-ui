import * as fs from "fs"
import * as path from "path"

const ANIMATIONS_DIR = path.join(
  process.cwd(),
  "registry/new-york-v4/animations"
)
const EXAMPLES_DIR = path.join(process.cwd(), "registry/new-york-v4/examples")
const REGISTRY_FILE = path.join(
  process.cwd(),
  "registry/new-york-v4/examples/_registry.ts"
)

// Convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

function generateExampleFile(animationName: string): string {
  const ComponentName = toPascalCase(animationName)

  return `import ${ComponentName} from "@/registry/new-york-v4/animations/${animationName}/${animationName}"

export default function ${ComponentName}Demo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <${ComponentName}>
        <div className="rounded-lg border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold">Animation Demo</h3>
          <p className="text-muted-foreground mt-2">
            Scroll or interact to see the animation effect
          </p>
        </div>
      </${ComponentName}>
    </div>
  )
}
`
}

function generateRegistryEntry(animationName: string): string {
  return `  {
    name: "${animationName}-demo",
    type: "registry:example",
    registryDependencies: ["${animationName}"],
    files: [
      {
        path: "examples/${animationName}-demo.tsx",
        type: "registry:example",
      },
    ],
  },`
}

async function main() {
  const animationDirs = fs
    .readdirSync(ANIMATIONS_DIR)
    .filter(
      (item) =>
        fs.statSync(path.join(ANIMATIONS_DIR, item)).isDirectory() &&
        !item.startsWith(".") &&
        item !== "_registry"
    )

  console.log(`Found ${animationDirs.length} animations`)

  const registryEntries: string[] = []

  // Generate example files
  for (const animationName of animationDirs) {
    const exampleContent = generateExampleFile(animationName)
    const outputPath = path.join(EXAMPLES_DIR, `${animationName}-demo.tsx`)
    fs.writeFileSync(outputPath, exampleContent)
    console.log(`✅ Created ${animationName}-demo.tsx`)

    registryEntries.push(generateRegistryEntry(animationName))
  }

  // Read existing registry
  let registryContent = fs.readFileSync(REGISTRY_FILE, "utf-8")

  // Find the last entry before the closing bracket
  const lastBracketIndex = registryContent.lastIndexOf("]")

  // Insert new entries before the closing bracket
  const newEntries = "\n" + registryEntries.join("\n") + "\n"
  registryContent =
    registryContent.slice(0, lastBracketIndex) +
    newEntries +
    registryContent.slice(lastBracketIndex)

  fs.writeFileSync(REGISTRY_FILE, registryContent)
  console.log(`✅ Updated examples/_registry.ts`)

  console.log(`\n✨ Done! Created ${animationDirs.length} animation examples`)
}

main().catch(console.error)
