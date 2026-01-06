import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-shell-1",
  type: "registry:block",
  description: "Two-sidebar gym tracker shell with navigation and stats",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["sidebar", "avatar", "button", "separator", "utils"],
  categories: ["application"],
  tier: "free",
  readiness: "beta",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "shell",
    order: 0,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
