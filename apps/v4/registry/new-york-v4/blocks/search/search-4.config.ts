import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "search-4",
  type: "registry:block",
  description:
    "Search page with category filters and results grid for fitness site",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "input"],
  categories: ["search", "pages"],
  tier: "free",
  readiness: "alpha",
}
