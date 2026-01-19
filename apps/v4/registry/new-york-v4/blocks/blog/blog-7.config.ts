import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-7",
  type: "registry:block",
  description:
    "Travel blog section with featured destination hero and card grid",
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
