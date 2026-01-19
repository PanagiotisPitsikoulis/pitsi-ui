import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-13",
  type: "registry:block",
  description: "Accordion features showcasing blocks and patterns",
  registryDependencies: ["accordion", "button"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "features",
    order: 6,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
