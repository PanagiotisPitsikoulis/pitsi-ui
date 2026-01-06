import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-1",
  type: "registry:block",
  description: "Plant shop newsletter subscription section",
  registryDependencies: ["button", "input"],
  categories: ["newsletter", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "newsletter",
    order: 14,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
