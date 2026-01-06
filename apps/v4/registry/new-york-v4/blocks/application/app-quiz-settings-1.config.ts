import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-settings-1",
  type: "registry:block",
  description: "Quiz settings with profile and preferences",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: [
    "avatar",
    "button",
    "card",
    "input",
    "label",
    "select",
    "separator",
    "switch",
    "utils",
  ],
  categories: ["application"],
  tier: "free",
  readiness: "beta",
  blockConfig: {
    template: "app-quiz",
    blockType: "view",
    order: 5,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
