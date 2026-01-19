import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-12",
  type: "registry:block",
  description:
    "Travel resources blog section with list layout, sidebar newsletter, and resource categories",
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
