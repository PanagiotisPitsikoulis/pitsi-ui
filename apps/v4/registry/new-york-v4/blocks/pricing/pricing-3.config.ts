import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-3",
  type: "registry:block",
  description: "Feature comparison table pricing",
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
