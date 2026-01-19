import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-9",
  type: "registry:block",
  description: "Travel CTA with split layout and parallax image",
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
