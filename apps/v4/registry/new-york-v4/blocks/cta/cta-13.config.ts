import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-13",
  type: "registry:block",
  description: "Travel CTA with email subscription and aurora background",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "cta",
    order: 15,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
