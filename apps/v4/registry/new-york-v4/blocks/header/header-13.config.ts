import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-13",
  type: "registry:block",
  description: "Travel agency header with mega menu dropdowns for destinations",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "navigation-menu"],
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
