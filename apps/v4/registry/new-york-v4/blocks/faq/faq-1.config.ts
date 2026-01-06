import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-1",
  type: "registry:block",
  description: "Plant shop FAQ section with accordion",
  registryDependencies: ["accordion"],
  categories: ["faq", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "faq",
    order: 11,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
