import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-6",
  type: "registry:block",
  description: "Office cards contact with multiple global locations",
  registryDependencies: ["button"],
  categories: ["contact", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "contact",
    order: 13,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
