import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-today-1",
  type: "registry:block",
  description:
    "Today view with personalized greeting, week progress, and upcoming sets",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "beta",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 1,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
