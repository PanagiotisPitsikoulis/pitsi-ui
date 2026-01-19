import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-8",
  type: "registry:block",
  description: "Developer testimonials grid for component library",
  categories: ["testimonials", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "testimonials",
    order: 4,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
