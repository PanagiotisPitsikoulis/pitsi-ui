import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-blog-1",
  type: "registry:block",
  description:
    "Blog listing page with sidebar, category filtering, and article cards",
  registryDependencies: ["badge", "spacer"],
  categories: ["pages", "landing", "blog"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 4,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
