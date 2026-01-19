import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-11",
  type: "registry:block",
  description:
    "Travel FAQ with side-by-side layout showing questions and answers",
  registryDependencies: [],
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
