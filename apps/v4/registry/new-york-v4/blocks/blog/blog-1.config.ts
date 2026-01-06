import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-1",
  type: "registry:block",
  description: "Plant shop blog section with article cards",
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
