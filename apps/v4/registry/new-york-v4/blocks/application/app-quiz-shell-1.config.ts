import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-quiz-shell-1",
  type: "registry:block",
  description: "Application shell with sidebar navigation for quiz app",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["sidebar", "avatar", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-quiz",
    blockType: "shell",
    order: 0,
    palette: "violet",
    typography: "playful",
    tint: "base",
  },
}
