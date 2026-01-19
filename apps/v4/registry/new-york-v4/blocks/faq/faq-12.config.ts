import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-12",
  type: "registry:block",
  description:
    "Travel FAQ in a grid layout with icons for each question category",
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
