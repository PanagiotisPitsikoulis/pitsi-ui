import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-5",
  type: "registry:block",
  description: "Mobile-first hamburger header with full-screen overlay",
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
