import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-browse-1",
  type: "registry:block",
  description: "Quiz browser with categories and difficulty filters",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["badge", "button", "card", "input", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-quiz",
    blockType: "view",
    order: 2,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
