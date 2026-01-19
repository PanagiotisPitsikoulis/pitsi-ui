import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-2",
  type: "registry:block",
  description: "Contact form with map placeholder and location info",
  registryDependencies: ["button", "input", "textarea"],
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
