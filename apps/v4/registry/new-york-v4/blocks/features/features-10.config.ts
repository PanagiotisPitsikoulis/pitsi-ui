import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-10",
  type: "registry:block",
  description: "Accordion features with image preview (image left)",
  registryDependencies: ["accordion", "button"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "features",
    order: 3,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
