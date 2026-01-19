import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-8",
  type: "registry:block",
  description: "Travel agency FAQ with clean accordion and azure theme",
  registryDependencies: ["accordion"],
  categories: ["faq", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "faq",
    order: 11,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
