const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativewind/metro")
const path = require("path")

const projectRoot = __dirname
const monorepoRoot = path.resolve(projectRoot, "../..")

const config = getDefaultConfig(projectRoot)

// Watch all files in the monorepo
config.watchFolders = [monorepoRoot]

// Resolve packages from monorepo
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
]

// Resolve workspace packages
config.resolver.extraNodeModules = {
  "@pitsi/quiz-core": path.resolve(monorepoRoot, "packages/quiz-core"),
}

// Ensure source extensions include ts/tsx
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs"]

module.exports = withNativeWind(config, { input: "./global.css" })
