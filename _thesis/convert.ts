import { $ } from "bun"
import { readdir } from "fs/promises"
import { join } from "path"

const dir = import.meta.dir

const files = await readdir(dir)
const mdFiles = files.filter((f) => f.endsWith(".md"))

for (const file of mdFiles) {
  const input = join(dir, file)
  const output = join(dir, file.replace(".md", ".docx"))
  await $`pandoc ${input} -o ${output}`
  console.log(`✓ ${file} → ${file.replace(".md", ".docx")}`)
}

console.log(`\nConverted ${mdFiles.length} file(s)`)
