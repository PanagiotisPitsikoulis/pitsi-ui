import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-10",
  type: "registry:block",
  description: "Plants bento hero with split layout and pill navbar",
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
