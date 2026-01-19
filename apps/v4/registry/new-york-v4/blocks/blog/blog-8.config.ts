import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-8",
  type: "registry:block",
  description:
    "Travel blog section with horizontal scrolling carousel for packing tips and travel guides",
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
