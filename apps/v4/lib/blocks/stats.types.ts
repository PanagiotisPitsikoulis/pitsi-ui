import type {
  BlockBaseClassNames,
  BlockHeaderClassNames,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Stats Content Types
// ============================================================================

export interface StatItem {
  value: string
  label: string
  /** Lucide icon name */
  icon?: string
  description?: string
}

export interface StatsContent extends BlockSectionHeader {
  /** Array of stat items */
  stats: StatItem[]
}

// ============================================================================
// Stats ClassNames Types
// ============================================================================

export interface StatItemClassNames {
  root?: string
  value?: string
  label?: string
  icon?: string
  description?: string
}

export interface StatsClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  stat?: StatItemClassNames
}

// ============================================================================
// Stats Props
// ============================================================================

export interface StatsBlockProps {
  content?: Partial<StatsContent>
  classNames?: StatsClassNames
}

// ============================================================================
// Stats Defaults
// ============================================================================

export const statsDefaults: StatsContent = {
  badge: "By the Numbers",
  title: "Trusted by Plant Lovers",
  stats: [
    { value: "50K+", label: "Happy Customers", icon: "Users" },
    { value: "200+", label: "Plant Varieties", icon: "Leaf" },
    { value: "99%", label: "Survival Rate", icon: "Heart" },
    { value: "4.9", label: "Customer Rating", icon: "Star" },
  ],
}
