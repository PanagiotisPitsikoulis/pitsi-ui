import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "testimonials-2",
  type: "registry:block",
  description: "Member testimonials with transformation stats and star ratings",
  registryDependencies: ["utils"],
  categories: ["testimonials", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-fitness",
    blockType: "testimonials",
    order: 7,
    palette: "neon",
    typography: "futuristic",
    tint: "deep",
  },
}
