import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-8",
  type: "registry:block",
  description: "Studio location with hours, contact info, amenities, and map",
  registryDependencies: ["button"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "features",
    order: 4,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
