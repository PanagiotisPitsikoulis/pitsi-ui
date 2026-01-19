import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-7",
  type: "registry:block",
  description: "Social proof wall with tweet-style cards",
  categories: ["testimonials", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "testimonials",
    order: 7,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
