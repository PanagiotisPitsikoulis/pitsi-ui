import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-7",
  type: "registry:block",
  description: "Travel agency contact form with destinations map",
  registryDependencies: ["button", "input", "textarea", "block-header"],
  categories: ["contact", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "contact",
    order: 13,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
