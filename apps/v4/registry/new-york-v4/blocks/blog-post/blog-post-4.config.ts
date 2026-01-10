import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-post-4",
  type: "registry:block",
  description:
    "Full blog post page with featured image, author bio, table of contents, and related posts for fitness site",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "avatar"],
  categories: ["blog-post", "pages"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-fitness",
    blockType: "blog-post",
    order: 1,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
