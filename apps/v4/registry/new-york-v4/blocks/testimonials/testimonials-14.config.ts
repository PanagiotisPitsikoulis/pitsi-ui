import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-14",
  type: "registry:block",
  description: "Travel testimonials marquee wall with infinite scrolling cards",
  categories: ["testimonials", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "testimonials",
    order: 7,
    palette: "azure",
    typography: "modern",
    tint: "deep",
  },
}
