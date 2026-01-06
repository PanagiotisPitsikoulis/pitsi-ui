import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-1",
  type: "registry:block",
  description: "Plant shop features section with icons and center image",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "features",
    order: 4,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
