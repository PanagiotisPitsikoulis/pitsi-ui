import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-library-1",
  type: "registry:block",
  description: "Exercise library with search, categories, and history",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["input", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "beta",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 5,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
