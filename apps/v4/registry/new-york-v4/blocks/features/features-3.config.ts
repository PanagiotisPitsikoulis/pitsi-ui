import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-3",
  type: "registry:block",
  description: "Plant shop features section variant 3 with circle background",
  dependencies: ["motion/react"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "features",
    order: 4,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
