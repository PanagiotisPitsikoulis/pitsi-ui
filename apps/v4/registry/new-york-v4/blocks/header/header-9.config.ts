import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-9",
  type: "registry:block",
  description:
    "Pill navbar header with rounded background and centered navigation",
  registryDependencies: ["hero-button"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-fitness",
    blockType: "header",
    order: 1,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
