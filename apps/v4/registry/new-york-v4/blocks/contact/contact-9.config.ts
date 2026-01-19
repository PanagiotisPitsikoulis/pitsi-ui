import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-9",
  type: "registry:block",
  description: "Minimal travel inquiry form with channel options",
  registryDependencies: ["button", "block-header"],
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
