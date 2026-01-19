import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "search-1",
  type: "registry:block",
  description:
    "Search page with category filters and results grid for plant shop",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "input"],
  categories: ["search", "pages"],
  tier: "free",
  readiness: "alpha",
}
