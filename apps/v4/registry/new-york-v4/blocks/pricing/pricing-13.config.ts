import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-13",
  type: "registry:block",
  description: "Luxury travel tiers with standard vs enterprise comparison",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "utils"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "pricing",
    order: 6,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
