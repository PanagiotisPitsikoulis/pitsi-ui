import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-1",
  type: "registry:block",
  description: "Plant shop pricing section with animated cards",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "utils"],
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
