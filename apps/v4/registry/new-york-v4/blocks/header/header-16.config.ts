import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-16",
  type: "registry:block",
  description: "Travel agency header with user account dropdown",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "avatar", "dropdown-menu"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "header",
    order: 1,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
    forceLight: true,
  },
}
