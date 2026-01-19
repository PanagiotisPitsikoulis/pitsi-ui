import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-25",
  type: "registry:block",
  description: "Component library hero with code preview and minimal design",
  registryDependencies: ["button", "hero-button"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "hero",
    order: 1,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
