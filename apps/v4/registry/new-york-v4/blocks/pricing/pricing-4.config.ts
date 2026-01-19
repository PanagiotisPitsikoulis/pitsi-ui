import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-4",
  type: "registry:block",
  description: "Monthly/yearly toggle pricing with savings badge",
  registryDependencies: ["button", "switch"],
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
