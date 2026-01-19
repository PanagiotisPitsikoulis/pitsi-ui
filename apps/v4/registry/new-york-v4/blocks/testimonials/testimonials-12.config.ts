import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-12",
  type: "registry:block",
  description:
    "Travel video testimonials with play buttons and traveler stories",
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
