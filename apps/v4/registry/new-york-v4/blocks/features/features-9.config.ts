import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-9",
  type: "registry:block",
  description: "Component library features grid with icons",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "features",
    order: 2,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
