import type { BlockBaseClassNames, BlockImage } from "./types"

// ============================================================================
// Application Shell Content Types
// ============================================================================

export interface AppNavigationItem {
  name: string
  label: string
  /** Lucide icon name */
  icon: string
  /** Keyboard shortcut */
  shortcut?: string
}

export interface AppUser {
  name: string
  email: string
  avatar?: string
}

export interface AppShellContent {
  appName: string
  /** Logo configuration */
  logo?: {
    icon?: string
    image?: BlockImage
  }
  navigation: AppNavigationItem[]
  user?: AppUser
}

// ============================================================================
// Application Shell ClassNames Types
// ============================================================================

export interface AppSidebarClassNames {
  root?: string
  header?: string
  logo?: string
  content?: string
  footer?: string
  menu?: string
  menuItem?: string
  menuButton?: string
  menuButtonActive?: string
}

export interface AppInsetClassNames {
  root?: string
  header?: string
  main?: string
}

export interface AppShellClassNames extends BlockBaseClassNames {
  sidebar?: AppSidebarClassNames
  inset?: AppInsetClassNames
}

// ============================================================================
// Application Shell Props
// ============================================================================

export interface AppShellBlockProps {
  content?: Partial<AppShellContent>
  classNames?: AppShellClassNames
  /** Active view name */
  activeView?: string
  /** Navigation callback */
  onNavigate?: (viewName: string) => void
  /** Theme CSS properties */
  theme?: React.CSSProperties
  /** Child content */
  children?: React.ReactNode
}

// ============================================================================
// Application Shell Defaults
// ============================================================================

export const appShellDefaults: AppShellContent = {
  appName: "My App",
  navigation: [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: "LayoutDashboard",
      shortcut: "1",
    },
    { name: "settings", label: "Settings", icon: "Settings", shortcut: "2" },
  ],
  user: {
    name: "John Doe",
    email: "john@example.com",
  },
}
