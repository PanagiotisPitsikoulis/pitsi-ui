import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-7",
  type: "registry:block",
  description: "Horizontal pricing cards with icons",
  registryDependencies: ["button"],
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
