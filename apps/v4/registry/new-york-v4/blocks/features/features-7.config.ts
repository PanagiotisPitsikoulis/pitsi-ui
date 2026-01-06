import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-7",
  type: "registry:block",
  description:
    "Weekly class schedule with day tabs, booking buttons, and spots indicator",
  registryDependencies: ["button", "utils"],
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
