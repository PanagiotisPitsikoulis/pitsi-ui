import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-9",
  type: "registry:block",
  description:
    "Travel package pricing with monthly/yearly toggle and 3-tier comparison",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "switch", "utils"],
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
