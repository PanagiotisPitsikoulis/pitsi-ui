import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-10",
  type: "registry:block",
  description:
    "Minimalist travel tips blog section with text-focused list layout and category filters",
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
