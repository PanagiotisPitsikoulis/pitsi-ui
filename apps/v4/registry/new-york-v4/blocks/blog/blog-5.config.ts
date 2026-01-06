import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-5",
  type: "registry:block",
  description: "Minimal clean blog cards, text-focused",
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
