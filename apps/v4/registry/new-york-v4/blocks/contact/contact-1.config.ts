import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-1",
  type: "registry:block",
  description: "Plant shop contact form section",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "input", "textarea", "label"],
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
