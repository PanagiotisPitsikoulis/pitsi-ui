import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "contact-8",
  type: "registry:block",
  description: "Travel consultation split layout with booking support",
  registryDependencies: ["button", "input", "textarea"],
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
