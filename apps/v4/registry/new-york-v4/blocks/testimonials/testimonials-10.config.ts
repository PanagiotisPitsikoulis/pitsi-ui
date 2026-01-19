import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-10",
  type: "registry:block",
  description:
    "Travel testimonials carousel with featured destination spotlight",
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
