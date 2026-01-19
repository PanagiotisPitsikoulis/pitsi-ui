import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-12",
  type: "registry:block",
  description: "Travel emergency support and FAQ contact section",
  registryDependencies: ["button", "input", "block-header", "accordion"],
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
