export interface ThemeStyleProps {
  // Base colors
  background: string
  foreground: string

  // Card colors
  card: string
  "card-foreground": string

  // Popover colors
  popover: string
  "popover-foreground": string

  // Primary colors
  primary: string
  "primary-foreground": string

  // Secondary colors
  secondary: string
  "secondary-foreground": string

  // Muted colors
  muted: string
  "muted-foreground": string

  // Accent colors
  accent: string
  "accent-foreground": string

  // Destructive colors
  destructive: string
  "destructive-foreground": string

  // Success colors
  success: string
  "success-foreground": string

  // Warning colors
  warning: string
  "warning-foreground": string

  // Info colors
  info: string
  "info-foreground": string

  // Border & input colors
  border: string
  input: string
  ring: string

  // Chart colors
  "chart-1": string
  "chart-2": string
  "chart-3": string
  "chart-4": string
  "chart-5": string

  // Sidebar colors
  sidebar: string
  "sidebar-foreground": string
  "sidebar-primary": string
  "sidebar-primary-foreground": string
  "sidebar-accent": string
  "sidebar-accent-foreground": string
  "sidebar-border": string
  "sidebar-ring": string

  // Code colors
  code: string
  "code-foreground": string
  "code-highlight": string
  "code-number": string

  // Selection colors
  selection: string
  "selection-foreground": string

  // Page & brand
  page: string
  brand: string
  "brand-complementary": string

  // Other
  radius: string
}

export interface ThemeStyles {
  light: ThemeStyleProps
  dark: ThemeStyleProps
}

export type ThemeMode = "light" | "dark"

export interface ThemeEditorState {
  styles: ThemeStyles
  currentMode: ThemeMode
}

// Default light theme styles
export const defaultLightThemeStyles: ThemeStyleProps = {
  background: "oklch(0.995 0 0)",
  foreground: "oklch(0.13 0 0)",
  card: "oklch(0.99 0 0)",
  "card-foreground": "oklch(0.13 0 0)",
  popover: "oklch(1 0 0)",
  "popover-foreground": "oklch(0.13 0 0)",
  primary: "oklch(0.19 0 0)",
  "primary-foreground": "oklch(0.985 0 0)",
  secondary: "oklch(0.96 0 0)",
  "secondary-foreground": "oklch(0.19 0 0)",
  muted: "oklch(0.97 0 0)",
  "muted-foreground": "oklch(0.5 0 0)",
  accent: "oklch(0.96 0 0)",
  "accent-foreground": "oklch(0.19 0 0)",
  destructive: "oklch(0.6 0.3 25)",
  "destructive-foreground": "oklch(0.99 0 0)",
  success: "oklch(0.65 0.28 145)",
  "success-foreground": "oklch(0.99 0 0)",
  warning: "oklch(0.8 0.25 95)",
  "warning-foreground": "oklch(0.2 0 0)",
  info: "oklch(0.62 0.24 240)",
  "info-foreground": "oklch(0.99 0 0)",
  border: "oklch(0.94 0 0)",
  input: "oklch(0.9 0 0)",
  ring: "oklch(0.66 0 0)",
  "chart-1": "oklch(0.809 0.105 251.813)",
  "chart-2": "oklch(0.623 0.214 259.815)",
  "chart-3": "oklch(0.546 0.245 262.881)",
  "chart-4": "oklch(0.488 0.243 264.376)",
  "chart-5": "oklch(0.424 0.199 265.638)",
  sidebar: "oklch(1 0 0)",
  "sidebar-foreground": "oklch(0.13 0 0)",
  "sidebar-primary": "oklch(0.19 0 0)",
  "sidebar-primary-foreground": "oklch(0.985 0 0)",
  "sidebar-accent": "oklch(0.96 0 0)",
  "sidebar-accent-foreground": "oklch(0.19 0 0)",
  "sidebar-border": "oklch(0.9 0 0)",
  "sidebar-ring": "oklch(0.66 0 0)",
  code: "oklch(0.995 0 0)",
  "code-foreground": "oklch(0.13 0 0)",
  "code-highlight": "oklch(0.97 0.015 230)",
  "code-number": "oklch(0.5 0 0)",
  selection: "oklch(0.13 0 0)",
  "selection-foreground": "oklch(1 0 0)",
  page: "oklch(0.995 0 0)",
  brand: "oklch(0.65 0.15 230)",
  "brand-complementary": "oklch(0.65 0.15 50)",
  radius: "0.75rem",
}

// Default dark theme styles
export const defaultDarkThemeStyles: ThemeStyleProps = {
  background: "oklch(0.16 0 0)",
  foreground: "oklch(0.99 0 0)",
  card: "oklch(0.18 0 0)",
  "card-foreground": "oklch(0.99 0 0)",
  popover: "oklch(0.18 0 0)",
  "popover-foreground": "oklch(0.99 0 0)",
  primary: "oklch(0.92 0 0)",
  "primary-foreground": "oklch(0.19 0 0)",
  secondary: "oklch(0.22 0 0)",
  "secondary-foreground": "oklch(0.99 0 0)",
  muted: "oklch(0.2 0 0)",
  "muted-foreground": "oklch(0.65 0 0)",
  accent: "oklch(0.22 0 0)",
  "accent-foreground": "oklch(0.99 0 0)",
  destructive: "oklch(0.68 0.28 25)",
  "destructive-foreground": "oklch(0.13 0 0)",
  success: "oklch(0.7 0.27 145)",
  "success-foreground": "oklch(0.13 0 0)",
  warning: "oklch(0.78 0.24 95)",
  "warning-foreground": "oklch(0.13 0 0)",
  info: "oklch(0.68 0.22 240)",
  "info-foreground": "oklch(0.13 0 0)",
  border: "oklch(0.26 0 0)",
  input: "oklch(0.26 0 0)",
  ring: "oklch(0.5 0 0)",
  "chart-1": "oklch(0.809 0.105 251.813)",
  "chart-2": "oklch(0.623 0.214 259.815)",
  "chart-3": "oklch(0.546 0.245 262.881)",
  "chart-4": "oklch(0.488 0.243 264.376)",
  "chart-5": "oklch(0.424 0.199 265.638)",
  sidebar: "oklch(0.12 0 0)",
  "sidebar-foreground": "oklch(0.97 0 0)",
  "sidebar-primary": "oklch(0.92 0 0)",
  "sidebar-primary-foreground": "oklch(0.19 0 0)",
  "sidebar-accent": "oklch(0.18 0 0)",
  "sidebar-accent-foreground": "oklch(0.97 0 0)",
  "sidebar-border": "oklch(0.24 0 0)",
  "sidebar-ring": "oklch(0.5 0 0)",
  code: "oklch(0.16 0 0)",
  "code-foreground": "oklch(0.84 0 0)",
  "code-highlight": "oklch(0.2 0.015 220)",
  "code-number": "oklch(0.7 0 0)",
  selection: "oklch(0.92 0 0)",
  "selection-foreground": "oklch(0.19 0 0)",
  page: "oklch(0.08 0 0)",
  brand: "oklch(0.75 0.12 220)",
  "brand-complementary": "oklch(0.75 0.12 40)",
  radius: "0.75rem",
}

export const defaultThemeState: ThemeEditorState = {
  styles: {
    light: defaultLightThemeStyles,
    dark: defaultDarkThemeStyles,
  },
  currentMode: "light",
}
