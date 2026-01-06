import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-2",
  type: "registry:block",
  description: "Centered logo header with navigation split left/right",
  registryDependencies: ["button"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "production",
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
