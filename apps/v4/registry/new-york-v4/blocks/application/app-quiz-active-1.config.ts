import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-active-1",
  type: "registry:block",
  description: "Active quiz interface with timer and question display",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "card", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-quiz",
    blockType: "view",
    order: 3,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
