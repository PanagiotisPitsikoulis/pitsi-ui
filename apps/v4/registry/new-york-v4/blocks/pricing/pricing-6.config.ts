import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-6",
  type: "registry:block",
  description: "Usage-based pricing with calculator slider",
  registryDependencies: ["button", "slider"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "pricing",
    order: 6,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
