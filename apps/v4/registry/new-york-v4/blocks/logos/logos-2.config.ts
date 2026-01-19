import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-2",
  type: "registry:block",
  description: "Marquee logo cloud with infinite scroll animation",
  categories: ["logos", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "logos",
    order: 3,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
