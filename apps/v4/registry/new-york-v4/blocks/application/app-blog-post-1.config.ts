import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-blog-post-1",
  type: "registry:block",
  description:
    "Blog post viewer with table of contents, author card, and share buttons",
  registryDependencies: ["avatar", "badge", "button", "separator"],
  categories: ["application", "blog"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 7,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
