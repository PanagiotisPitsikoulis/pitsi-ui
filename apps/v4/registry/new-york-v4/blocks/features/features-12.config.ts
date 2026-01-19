import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-12",
  type: "registry:block",
  description: "Accordion features with header and extended list",
  registryDependencies: ["accordion", "button"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "features",
    order: 5,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
