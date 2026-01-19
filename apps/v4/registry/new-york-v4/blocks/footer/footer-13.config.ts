import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-13",
  type: "registry:block",
  description:
    "Mega travel footer with destination showcase, trust badges, and comprehensive navigation",
  dependencies: [
    "@hugeicons/react",
    "@hugeicons/core-free-icons",
    "lucide-react",
  ],
  registryDependencies: ["button", "input"],
  categories: ["footer", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "footer",
    order: 20,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
