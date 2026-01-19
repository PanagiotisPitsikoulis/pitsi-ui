import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-14",
  type: "registry:block",
  description:
    "Destination-based travel packages with visual cards and seasonal pricing",
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
