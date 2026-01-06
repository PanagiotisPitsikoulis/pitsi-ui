import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-13",
  type: "registry:block",
  description:
    "Plants bento hero with 3-column asymmetric grid and pill navbar",
  registryDependencies: ["button", "hero-button"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "hero",
    order: 2,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
