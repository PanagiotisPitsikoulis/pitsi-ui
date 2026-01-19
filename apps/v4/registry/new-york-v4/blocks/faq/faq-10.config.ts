import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-10",
  type: "registry:block",
  description:
    "Searchable travel FAQ with real-time filtering and highlighting",
  registryDependencies: ["input"],
  categories: ["faq", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "faq",
    order: 11,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
