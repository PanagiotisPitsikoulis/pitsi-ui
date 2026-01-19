import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-15",
  type: "registry:block",
  description: "Travel agency header with featured destination badge",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "badge"],
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
