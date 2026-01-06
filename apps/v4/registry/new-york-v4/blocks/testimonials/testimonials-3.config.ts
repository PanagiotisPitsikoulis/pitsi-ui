import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-3",
  type: "registry:block",
  description: "Sliding carousel testimonials with navigation",
  registryDependencies: ["button"],
  categories: ["testimonials", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "testimonials",
    order: 7,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
