import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-8",
  type: "registry:block",
  description: "Full-width travel newsletter banner with dark background",
  registryDependencies: ["button", "input"],
  categories: ["newsletter", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "newsletter",
    order: 14,
    palette: "azure",
    typography: "modern",
    tint: "deep",
  },
}
