import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-6",
  type: "registry:block",
  description: "Exit intent modal overlay CTA",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "cta",
    order: 15,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
