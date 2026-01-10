import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "search-3",
  type: "registry:block",
  description:
    "Search page with category filters and results grid for yacht/boat site",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "badge", "input"],
  categories: ["search", "pages"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-boat",
    blockType: "search",
    order: 1,
    palette: "azure",
    typography: "classic",
    tint: "tinted",
  },
}
