import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-4",
  type: "registry:block",
  description: "Simple centered contact form with subject dropdown",
  registryDependencies: ["button", "input", "textarea", "select"],
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
