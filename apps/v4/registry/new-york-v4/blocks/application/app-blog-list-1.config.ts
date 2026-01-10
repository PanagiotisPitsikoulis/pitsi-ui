import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-blog-list-1",
  type: "registry:block",
  description:
    "Blog listing page with category sidebar, search, and pagination",
  registryDependencies: ["badge", "button", "card", "input"],
  categories: ["application", "blog"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 6,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
