import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-results-1",
  type: "registry:block",
  description: "Quiz results with score and question breakdown",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["badge", "button", "card", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "beta",
  blockConfig: {
    template: "app-quiz",
    blockType: "view",
    order: 4,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
