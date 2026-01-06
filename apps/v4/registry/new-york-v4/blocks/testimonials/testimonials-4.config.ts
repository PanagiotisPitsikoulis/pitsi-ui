import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-4",
  type: "registry:block",
  description: "Video testimonial cards with play overlay",
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
