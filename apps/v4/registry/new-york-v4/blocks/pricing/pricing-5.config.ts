import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-5",
  type: "registry:block",
  description: "Enterprise focus pricing with standard and custom tiers",
  registryDependencies: ["button"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "pricing",
    order: 6,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
