import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-7",
  type: "registry:block",
  description: "Component library FAQ with accordion",
  registryDependencies: ["accordion"],
  categories: ["faq", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "faq",
    order: 6,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
