import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-4",
  type: "registry:block",
  description: "Magazine layout blog with hero, sidebar, grid",
  registryDependencies: ["button"],
  categories: ["blog", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "blog",
    order: 12,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
