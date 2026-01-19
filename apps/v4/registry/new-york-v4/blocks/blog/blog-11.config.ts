import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-11",
  type: "registry:block",
  description:
    "Travel stories blog section with masonry-style grid layout and immersive imagery",
  categories: ["blog", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "blog",
    order: 12,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
