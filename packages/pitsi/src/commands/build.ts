import * as fs from "fs/promises"
import * as path from "path"
import { preFlightBuild } from "@/src/preflights/preflight-build"
import { registryItemSchema, registrySchema } from "@/src/schema"
import { handleError } from "@/src/utils/handle-error"
import { highlighter } from "@/src/utils/highlighter"
import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { Command } from "commander"
import { z } from "zod"

export const buildOptionsSchema = z.object({
  cwd: z.string(),
  registryFile: z.string(),
  outputDir: z.string(),
})

// Transform placeholder paths to full URLs so they work in user projects
const PLACEHOLDER_BASE_URL =
  process.env.REGISTRY_PLACEHOLDER_URL || "https://pitsiui.com"

function transformPlaceholderUrls(content: string): string {
  // Match paths like "/placeholders/blocks/..." in strings (quotes, backticks)
  return content.replace(
    /(["'`])(\/placeholders\/[^"'`]+)(["'`])/g,
    `$1${PLACEHOLDER_BASE_URL}$2$3`
  )
}

export const build = new Command()
  .name("build")
  .description("build components for a pitsi registry")
  .argument("[registry]", "path to registry.json file", "./registry.json")
  .option(
    "-o, --output <path>",
    "destination directory for json files",
    "./public/r"
  )
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (registry: string, opts) => {
    try {
      const options = buildOptionsSchema.parse({
        cwd: path.resolve(opts.cwd),
        registryFile: registry,
        outputDir: opts.output,
      })

      const { resolvePaths } = await preFlightBuild(options)
      const content = await fs.readFile(resolvePaths.registryFile, "utf-8")

      const result = registrySchema.safeParse(JSON.parse(content))

      if (!result.success) {
        logger.error(
          `Invalid registry file found at ${highlighter.info(
            resolvePaths.registryFile
          )}.`
        )
        process.exit(1)
      }

      const buildSpinner = spinner("Building registry...")
      for (const registryItem of result.data.items) {
        buildSpinner.start(`Building ${registryItem.name}...`)

        // Add the schema to the registry item.
        registryItem["$schema"] =
          "https://pitsiui.com/schema/registry-item.json"

        // Loop through each file in the files array.
        for (const file of registryItem.files ?? []) {
          const rawContent = await fs.readFile(
            path.resolve(resolvePaths.cwd, file.path),
            "utf-8"
          )
          // Transform placeholder URLs to full URLs for user projects
          file["content"] = transformPlaceholderUrls(rawContent)
        }

        // Validate the registry item.
        const result = registryItemSchema.safeParse(registryItem)
        if (!result.success) {
          logger.error(
            `Invalid registry item found for ${highlighter.info(
              registryItem.name
            )}.`
          )
          continue
        }

        // Write the registry item to the output directory.
        await fs.writeFile(
          path.resolve(resolvePaths.outputDir, `${result.data.name}.json`),
          JSON.stringify(result.data, null, 2)
        )
      }

      // Copy registry.json to the output directory.
      await fs.copyFile(
        resolvePaths.registryFile,
        path.resolve(resolvePaths.outputDir, "registry.json")
      )

      buildSpinner.succeed("Building registry.")
    } catch (error) {
      logger.break()
      handleError(error)
    }
  })
