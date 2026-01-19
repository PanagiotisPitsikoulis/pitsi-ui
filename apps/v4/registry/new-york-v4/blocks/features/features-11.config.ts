import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-11",
  type: "registry:block",
  description: "Accordion features with image preview (image right)",
  registryDependencies: ["accordion", "button"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "features",
    order: 4,
    palette: "slate",
    typography: "modern",
    tint: "tinted",
  },
}
