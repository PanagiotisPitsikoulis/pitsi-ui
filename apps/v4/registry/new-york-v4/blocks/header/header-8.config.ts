import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-8",
  type: "registry:block",
  description: "Double row header with top bar and main nav",
  registryDependencies: ["button"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "header",
    order: 1,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
    forceLight: true,
  },
}
