import type {
  DecorationState,
  DecorationPreset,
  defaultDecorationState,
} from "./decoration-types"

export const decorationPresets: DecorationPreset[] = [
  {
    id: "stripe-guides",
    name: "Stripe Guides",
    category: "guides",
    description: "Animated vertical guide lines with glow effect",
    preview:
      "linear-gradient(90deg, transparent 49%, hsl(var(--border)) 49%, hsl(var(--border)) 51%, transparent 51%)",
  },
  {
    id: "radial-glow",
    name: "Radial Glow",
    category: "gradients",
    description: "Soft radial gradient from center",
    preview: "radial-gradient(circle at 50% 30%, hsl(142 76% 36% / 0.2), transparent 70%)",
  },
  {
    id: "corner-glow",
    name: "Corner Glow",
    category: "gradients",
    description: "Gradient emanating from top corners",
    preview:
      "radial-gradient(ellipse at 0% 0%, hsl(142 76% 36% / 0.15), transparent 50%), radial-gradient(ellipse at 100% 0%, hsl(262 83% 58% / 0.15), transparent 50%)",
  },
  {
    id: "dot-matrix",
    name: "Dot Matrix",
    category: "patterns",
    description: "Grid of small dots with radial fade",
    preview:
      "radial-gradient(circle, hsl(var(--foreground) / 0.3) 1px, transparent 1px)",
  },
  {
    id: "grid-lines",
    name: "Grid Lines",
    category: "patterns",
    description: "Subtle grid pattern background",
    preview:
      "linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)",
  },
  {
    id: "noise-texture",
    name: "Noise Texture",
    category: "effects",
    description: "Subtle grain texture overlay",
    preview: "hsl(var(--muted))",
  },
  {
    id: "floating-orb",
    name: "Floating Orb",
    category: "effects",
    description: "Blurred glowing orb effect",
    preview: "radial-gradient(circle at 50% 50%, hsl(142 76% 36% / 0.4), transparent 60%)",
  },
  {
    id: "aurora",
    name: "Aurora",
    category: "animated",
    description: "Animated aurora-like gradient",
    preview:
      "linear-gradient(45deg, hsl(142 76% 36% / 0.2), hsl(262 83% 58% / 0.2), hsl(199 89% 48% / 0.2))",
  },
]

export const presetConfigs: Record<string, Partial<DecorationState>> = {
  "stripe-guides": {
    type: "guides",
    guides: {
      columnCount: 6,
      animated: true,
      animationDuration: 62,
      animationDelay: 0.8,
      glowColor: "hsl(142 76% 36%)",
      glowSize: 10,
      glowOpacity: 0.4,
      direction: "both",
      easing: "spring",
      darkMode: false,
    },
  },
  "radial-glow": {
    type: "gradient",
    gradient: {
      type: "radial",
      angle: 0,
      colors: [
        { color: "hsl(142 76% 36% / 0.2)", position: 0 },
        { color: "transparent", position: 70 },
      ],
      animated: false,
      animationDuration: 10,
    },
  },
  "corner-glow": {
    type: "glow",
    glow: {
      color: "hsl(142 76% 36%)",
      size: 500,
      blur: 150,
      x: 10,
      y: 10,
      opacity: 0.2,
      animated: false,
    },
  },
  "dot-matrix": {
    type: "dots",
    dots: {
      size: 1,
      spacing: 24,
      color: "hsl(var(--foreground))",
      opacity: 0.3,
      fade: "radial",
    },
  },
  "grid-lines": {
    type: "grid",
    grid: {
      size: 40,
      strokeWidth: 1,
      color: "hsl(var(--foreground))",
      opacity: 0.1,
      fade: "none",
    },
  },
  "noise-texture": {
    type: "noise",
    noise: {
      opacity: 0.03,
      blendMode: "overlay",
      scale: 1,
    },
  },
  "floating-orb": {
    type: "glow",
    glow: {
      color: "hsl(142 76% 36%)",
      size: 400,
      blur: 100,
      x: 50,
      y: 30,
      opacity: 0.3,
      animated: true,
    },
  },
  aurora: {
    type: "gradient",
    gradient: {
      type: "linear",
      angle: 45,
      colors: [
        { color: "hsl(142 76% 36% / 0.15)", position: 0 },
        { color: "hsl(262 83% 58% / 0.15)", position: 50 },
        { color: "hsl(199 89% 48% / 0.15)", position: 100 },
      ],
      animated: true,
      animationDuration: 8,
    },
  },
}
