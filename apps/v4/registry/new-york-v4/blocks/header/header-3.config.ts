import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-3",
  type: "registry:block",
  description: "Transparent overlay header that becomes solid on scroll",
  registryDependencies: ["button"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "header",
    order: 1,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
    forceLight: true,
  },
}
