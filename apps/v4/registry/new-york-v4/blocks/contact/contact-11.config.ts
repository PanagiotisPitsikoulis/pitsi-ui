import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-11",
  type: "registry:block",
  description: "Travel inquiry form with trip type selection",
  registryDependencies: [
    "button",
    "input",
    "textarea",
    "block-header",
    "select",
  ],
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
