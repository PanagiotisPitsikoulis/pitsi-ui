import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-2",
  type: "registry:block",
  description:
    "Fitness membership pricing with tiers, features, and popular badge",
  registryDependencies: ["button", "utils"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "pricing",
    order: 6,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
