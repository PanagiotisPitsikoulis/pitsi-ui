import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-post-1",
  type: "registry:block",
  description:
    "Full blog post page with featured image, author bio, table of contents, and related posts for plant shop",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "avatar"],
  categories: ["blog-post", "pages"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "blog-post",
    order: 1,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
