import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-dashboard-1",
  type: "registry:block",
  description:
    "Quiz dashboard with stats, weekly accuracy chart, and recent quizzes",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "card", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-quiz",
    blockType: "view",
    order: 1,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
