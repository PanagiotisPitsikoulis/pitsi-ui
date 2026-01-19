import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-gym-profile-1",
  type: "registry:block",
  description: "Profile and settings with preferences and stats",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: [
    "avatar",
    "button",
    "input",
    "label",
    "select",
    "separator",
    "switch",
    "utils",
  ],
  categories: ["application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "app-gym-tracker",
    blockType: "view",
    order: 6,
    palette: "sage",
    typography: "modern",
    tint: "base",
  },
}
