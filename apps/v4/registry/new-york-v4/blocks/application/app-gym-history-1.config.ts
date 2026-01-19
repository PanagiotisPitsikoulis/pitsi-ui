import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-history-1",
  type: "registry:block",
  description: "Calendar history view with workout indicators and details",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 3,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
