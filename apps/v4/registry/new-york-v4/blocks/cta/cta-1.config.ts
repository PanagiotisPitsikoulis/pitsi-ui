import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-1",
  type: "registry:block",
  description: "Plant shop call-to-action section",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "cta",
    order: 15,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
