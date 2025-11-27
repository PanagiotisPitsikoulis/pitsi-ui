/**
 * Block Transformer - Uses Claude to transform blocks
 */

import { spawn } from "child_process"
import * as fs from "fs"
import * as path from "path"

import type {
  ScannedBlock,
  TransformResult,
  TransformedFile,
  TransformOptions,
} from "./types.js"
import { buildBlockTransformPrompt } from "./prompts.js"

/**
 * Call Claude CLI with a prompt and get the response
 */
async function callClaude(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const claude = spawn("claude", ["-p", prompt], {
      stdio: ["pipe", "pipe", "pipe"],
    })

    let stdout = ""
    let stderr = ""

    claude.stdout.on("data", (data) => {
      stdout += data.toString()
    })

    claude.stderr.on("data", (data) => {
      stderr += data.toString()
    })

    claude.on("close", (code) => {
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(new Error(`Claude CLI exited with code ${code}: ${stderr}`))
      }
    })

    claude.on("error", (err) => {
      reject(new Error(`Failed to spawn Claude CLI: ${err.message}`))
    })
  })
}

/**
 * Parse Claude's response to extract transformed files
 */
function parseTransformedFiles(response: string): TransformedFile[] {
  const files: TransformedFile[] = []

  // Match ```file:path/to/file.tsx or ```tsx patterns
  const fileBlockRegex =
    /```(?:file:([^\n]+)|tsx)\n([\s\S]*?)```/g

  let match
  let lastPath = ""

  while ((match = fileBlockRegex.exec(response)) !== null) {
    const filePath = match[1] || lastPath
    const content = match[2].trim()

    if (filePath && content) {
      // Extract prop names that were added (simple heuristic)
      const propsAdded = extractAddedProps(content)

      files.push({
        path: filePath,
        content,
        propsAdded,
      })

      lastPath = filePath
    }
  }

  return files
}

/**
 * Extract prop names from transformed code
 */
function extractAddedProps(code: string): string[] {
  const props: string[] = []

  // Match interface properties
  const interfaceMatch = code.match(/interface\s+\w+Props\s*{([^}]+)}/s)
  if (interfaceMatch) {
    const propsBlock = interfaceMatch[1]
    const propMatches = propsBlock.matchAll(/(\w+)\??:/g)
    for (const match of propMatches) {
      props.push(match[1])
    }
  }

  return props
}

/**
 * Transform a single block using Claude
 */
export async function transformBlock(
  block: ScannedBlock,
  options: TransformOptions
): Promise<TransformResult> {
  console.log(`\n🔄 Transforming block: ${block.definition.name}`)
  console.log(`   Files: ${block.files.length}`)

  try {
    // Build the prompt
    const prompt = buildBlockTransformPrompt(block)

    if (options.dryRun) {
      console.log(`   [DRY RUN] Would send prompt (${prompt.length} chars)`)
      return {
        blockName: block.definition.name,
        originalFiles: block.files,
        transformedFiles: [],
        propsInterface: "",
        defaultProps: "",
        success: true,
      }
    }

    // Call Claude
    console.log(`   Calling Claude...`)
    const response = await callClaude(prompt)

    // Parse the response
    const transformedFiles = parseTransformedFiles(response)
    console.log(`   Received ${transformedFiles.length} transformed files`)

    // Extract props interface from the main file
    const mainFile = transformedFiles.find(
      (f) => f.path.includes("page.tsx") || f.propsAdded.length > 0
    )
    const propsInterface = extractPropsInterface(mainFile?.content || "")
    const defaultProps = extractDefaultProps(mainFile?.content || "")

    return {
      blockName: block.definition.name,
      originalFiles: block.files,
      transformedFiles,
      propsInterface,
      defaultProps,
      success: transformedFiles.length > 0,
    }
  } catch (error) {
    console.error(`   Error: ${error}`)
    return {
      blockName: block.definition.name,
      originalFiles: block.files,
      transformedFiles: [],
      propsInterface: "",
      defaultProps: "",
      success: false,
      error: String(error),
    }
  }
}

/**
 * Extract the props interface from code
 */
function extractPropsInterface(code: string): string {
  const match = code.match(
    /export\s+interface\s+\w+Props\s*{[\s\S]*?^}/m
  )
  return match ? match[0] : ""
}

/**
 * Extract the default props from code
 */
function extractDefaultProps(code: string): string {
  const match = code.match(
    /export\s+const\s+default\w+Props[\s\S]*?^}/m
  )
  return match ? match[0] : ""
}

/**
 * Save transformed block to output directory
 */
export async function saveTransformedBlock(
  result: TransformResult,
  outputPath: string
): Promise<void> {
  if (!result.success || result.transformedFiles.length === 0) {
    console.log(`   Skipping save for ${result.blockName} (no transformed files)`)
    return
  }

  const blockDir = path.join(outputPath, result.blockName)

  // Create output directory
  fs.mkdirSync(blockDir, { recursive: true })

  // Save each transformed file
  for (const file of result.transformedFiles) {
    const filePath = path.join(blockDir, path.basename(file.path))
    fs.writeFileSync(filePath, file.content)
    console.log(`   Saved: ${filePath}`)
  }

  // Save metadata
  const metadata = {
    blockName: result.blockName,
    originalFiles: result.originalFiles.map((f) => f.path),
    transformedFiles: result.transformedFiles.map((f) => ({
      path: f.path,
      propsAdded: f.propsAdded,
    })),
    propsInterface: result.propsInterface,
    transformedAt: new Date().toISOString(),
  }

  fs.writeFileSync(
    path.join(blockDir, "_metadata.json"),
    JSON.stringify(metadata, null, 2)
  )
}

/**
 * Apply transformed files back to the registry (in-place update)
 */
export async function applyTransformation(
  result: TransformResult,
  registryPath: string
): Promise<void> {
  if (!result.success || result.transformedFiles.length === 0) {
    console.log(`   Skipping apply for ${result.blockName}`)
    return
  }

  const basePath = path.join(registryPath, "registry/new-york-v4")

  for (const transformedFile of result.transformedFiles) {
    // Find the original file path
    const originalFile = result.originalFiles.find(
      (f) => path.basename(f.path) === path.basename(transformedFile.path)
    )

    if (originalFile) {
      const targetPath = path.join(basePath, originalFile.path)

      // Backup original
      const backupPath = targetPath + ".backup"
      if (fs.existsSync(targetPath) && !fs.existsSync(backupPath)) {
        fs.copyFileSync(targetPath, backupPath)
      }

      // Write transformed file
      fs.writeFileSync(targetPath, transformedFile.content)
      console.log(`   Applied: ${originalFile.path}`)
    }
  }
}
