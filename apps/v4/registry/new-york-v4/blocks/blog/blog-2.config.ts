import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-2",
  type: "registry:block",
  description: "Featured post with 3-column grid and read time badges",
  registryDependencies: ["button"],
  categories: ["blog", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "blog",
    order: 12,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
