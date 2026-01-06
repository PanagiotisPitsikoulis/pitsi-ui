import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-5",
  type: "registry:block",
  description: "Rating-focused testimonials with aggregate score",
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
