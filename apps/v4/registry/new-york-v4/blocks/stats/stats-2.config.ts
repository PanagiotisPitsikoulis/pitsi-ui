import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-2",
  type: "registry:block",
  description:
    "Animated gym statistics with number counters and highlight section",
  registryDependencies: ["utils"],
  categories: ["stats", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "stats",
    order: 10,
    palette: "neon",
    typography: "futuristic",
    tint: "deep",
  },
}
