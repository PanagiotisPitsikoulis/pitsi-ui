import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-13",
  type: "registry:block",
  description: "Featured single traveler spotlight with journey timeline",
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
