import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-8",
  type: "registry:block",
  description: "Component library pricing with free and pro tiers",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "pricing",
    order: 5,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
