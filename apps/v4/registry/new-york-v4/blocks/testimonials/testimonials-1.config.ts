import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-1",
  type: "registry:block",
  description: "Plant shop testimonials with stacked cards effect",
  registryDependencies: ["utils"],
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
