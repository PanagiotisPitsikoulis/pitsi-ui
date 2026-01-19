import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-gains-1",
  type: "registry:block",
  description: "Progress tracking with sparkline charts and PR history",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 4,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
