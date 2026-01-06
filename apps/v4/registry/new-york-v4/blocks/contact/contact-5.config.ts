import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-5",
  type: "registry:block",
  description: "Split dark/light contact panel layout",
  registryDependencies: ["button", "input", "textarea"],
  categories: ["contact", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "contact",
    order: 13,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
