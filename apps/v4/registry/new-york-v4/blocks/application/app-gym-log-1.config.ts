import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-log-1",
  type: "registry:block",
  description: "Active workout logging with set tracking and timer",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "input", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 2,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
