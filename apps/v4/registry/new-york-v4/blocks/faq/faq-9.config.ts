import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-9",
  type: "registry:block",
  description:
    "Travel FAQ with category tabs for booking, visa, luggage, and payment",
  registryDependencies: ["tabs"],
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
