import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-6",
  type: "registry:block",
  description:
    "Fitness class types grid with intensity indicators and hover effects",
  registryDependencies: ["utils"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-fitness",
    blockType: "features",
    order: 4,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
