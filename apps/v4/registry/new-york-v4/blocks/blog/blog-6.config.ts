import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-6",
  type: "registry:block",
  description: "Blog with sidebar (newsletter, categories, recent, tags)",
  registryDependencies: ["button", "input"],
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
