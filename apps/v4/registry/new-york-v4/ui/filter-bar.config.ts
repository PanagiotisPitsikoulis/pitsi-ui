import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "filter-bar",
  type: "registry:ui",
  description: "A filter bar with search input and icon-based filter dropdowns",
  registryDependencies: ["dropdown-menu", "input", "tooltip"],
  categories: ["application"],
  tier: "free",
  readiness: "production",
}
