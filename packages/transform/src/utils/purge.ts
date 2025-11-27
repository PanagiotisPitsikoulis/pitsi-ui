/**
 * Utility functions for purging/clearing old output
 */

import * as fs from "fs"
import * as path from "path"

/**
 * Recursively delete a directory and all its contents
 */
export function deleteDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) return

  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      deleteDirectory(fullPath)
    } else {
      fs.unlinkSync(fullPath)
    }
  }

  fs.rmdirSync(dirPath)
}

/**
 * Clear all output for a specific site
 */
export function purgeSiteOutput(
  baseOutputDir: string,
  category: string,
  siteName: string
): void {
  const siteDir = path.join(baseOutputDir, category, siteName)

  if (fs.existsSync(siteDir)) {
    console.log(`  🗑️  Purging old content: ${category}/${siteName}`)
    deleteDirectory(siteDir)
  }
}

/**
 * Clear all output for a site across multiple output directories
 */
export function purgeSiteOutputAcrossDirectories(
  outputDirs: string[],
  category: string,
  siteName: string
): void {
  for (const outputDir of outputDirs) {
    purgeSiteOutput(outputDir, category, siteName)
  }
}

/**
 * Clear entire category output
 */
export function purgeCategoryOutput(
  baseOutputDir: string,
  category: string
): void {
  const categoryDir = path.join(baseOutputDir, category)

  if (fs.existsSync(categoryDir)) {
    console.log(`  🗑️  Purging category: ${category}`)
    deleteDirectory(categoryDir)
  }
}
