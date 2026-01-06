import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-1",
  type: "registry:block",
  description: "Plant shop header with navigation and CTA button",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
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
