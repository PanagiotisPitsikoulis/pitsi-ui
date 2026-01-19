import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "blog-post-5",
  type: "registry:block",
  description:
    "Full blog post page with featured image, author bio, table of contents, and related posts for library site",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "avatar"],
  categories: ["blog-post", "pages"],
  tier: "free",
  readiness: "alpha",
}
