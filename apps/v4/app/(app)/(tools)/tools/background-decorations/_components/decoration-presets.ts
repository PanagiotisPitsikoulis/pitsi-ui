import type {
  DecorationState,
  DecorationPreset,
} from "./decoration-types"

export const decorationPresets: DecorationPreset[] = [
  {
    id: "neon-guides",
    name: "Neon Guides",
    category: "guides",
    description: "Animated guides with cyan neon glow",
    preview:
      "linear-gradient(90deg, transparent 49%, hsl(185 95% 50% / 0.3) 49%, hsl(185 95% 50% / 0.3) 51%, transparent 51%)",
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    category: "gradients",
    description: "Warm radial gradient from center",
    preview: "radial-gradient(circle at 50% 30%, hsl(25 95% 55% / 0.25), hsl(340 85% 55% / 0.15), transparent 70%)",
  },
  {
    id: "aurora-borealis",
    name: "Aurora Borealis",
    category: "animated",
    description: "Multi-color aurora effect",
    preview:
      "linear-gradient(135deg, hsl(185 85% 50% / 0.2), hsl(280 75% 55% / 0.2), hsl(320 85% 55% / 0.2))",
  },
  {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    category: "patterns",
    description: "Subtle starfield dot pattern",
    preview:
      "radial-gradient(circle, hsl(260 70% 70% / 0.4) 1px, transparent 1px)",
  },
  {
    id: "blueprint-grid",
    name: "Blueprint Grid",
    category: "patterns",
    description: "Technical blueprint-style grid",
    preview:
      "linear-gradient(hsl(210 100% 50% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 50% / 0.15) 1px, transparent 1px)",
  },
  {
    id: "film-grain",
    name: "Film Grain",
    category: "effects",
    description: "Cinematic noise texture",
    preview: "linear-gradient(135deg, hsl(0 0% 15%), hsl(0 0% 12%))",
  },
  {
    id: "violet-orb",
    name: "Violet Orb",
    category: "effects",
    description: "Soft purple floating glow",
    preview: "radial-gradient(circle at 50% 50%, hsl(270 85% 60% / 0.4), transparent 60%)",
  },
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    category: "gradients",
    description: "Calming blue-teal gradient",
    preview:
      "linear-gradient(180deg, hsl(200 90% 50% / 0.2), hsl(175 80% 45% / 0.15), transparent)",
  },
  {
    id: "rose-mist",
    name: "Rose Mist",
    category: "gradients",
    description: "Soft pink corner glow",
    preview:
      "radial-gradient(ellipse at 0% 0%, hsl(340 85% 60% / 0.2), transparent 50%), radial-gradient(ellipse at 100% 100%, hsl(280 70% 55% / 0.15), transparent 50%)",
  },
  {
    id: "matrix-rain",
    name: "Matrix Rain",
    category: "patterns",
    description: "Digital rain dot pattern",
    preview:
      "radial-gradient(circle, hsl(120 100% 50% / 0.35) 1px, transparent 1px)",
  },
]

export const presetConfigs: Record<string, Partial<DecorationState>> = {
  "neon-guides": {
    type: "guides",
    guides: {
      columnCount: 6,
      animated: true,
      animationDuration: 45,
      animationDelay: 0.6,
      glowColor: "hsl(185 95% 50%)",
      glowSize: 12,
      glowOpacity: 0.5,
      direction: "both",
      easing: "spring",
      darkMode: false,
    },
  },
  "sunset-glow": {
    type: "gradient",
    gradient: {
      type: "radial",
      angle: 0,
      colors: [
        { color: "hsl(25 95% 55% / 0.25)", position: 0 },
        { color: "hsl(340 85% 55% / 0.15)", position: 40 },
        { color: "transparent", position: 70 },
      ],
      animated: false,
      animationDuration: 10,
    },
  },
  "aurora-borealis": {
    type: "gradient",
    gradient: {
      type: "linear",
      angle: 135,
      colors: [
        { color: "hsl(185 85% 50% / 0.2)", position: 0 },
        { color: "hsl(280 75% 55% / 0.2)", position: 50 },
        { color: "hsl(320 85% 55% / 0.2)", position: 100 },
      ],
      animated: true,
      animationDuration: 12,
    },
  },
  "cosmic-dust": {
    type: "dots",
    dots: {
      size: 1,
      spacing: 20,
      color: "hsl(260 70% 70%)",
      opacity: 0.35,
      fade: "radial",
    },
  },
  "blueprint-grid": {
    type: "grid",
    grid: {
      size: 32,
      strokeWidth: 1,
      color: "hsl(210 100% 50%)",
      opacity: 0.12,
      fade: "radial",
    },
  },
  "film-grain": {
    type: "noise",
    noise: {
      opacity: 0.04,
      blendMode: "overlay",
      scale: 1.2,
    },
  },
  "violet-orb": {
    type: "glow",
    glow: {
      color: "hsl(270 85% 60%)",
      size: 450,
      blur: 120,
      x: 50,
      y: 35,
      opacity: 0.35,
      animated: true,
    },
  },
  "ocean-wave": {
    type: "gradient",
    gradient: {
      type: "linear",
      angle: 180,
      colors: [
        { color: "hsl(200 90% 50% / 0.2)", position: 0 },
        { color: "hsl(175 80% 45% / 0.15)", position: 50 },
        { color: "transparent", position: 100 },
      ],
      animated: false,
      animationDuration: 10,
    },
  },
  "rose-mist": {
    type: "glow",
    glow: {
      color: "hsl(340 85% 60%)",
      size: 550,
      blur: 160,
      x: 15,
      y: 15,
      opacity: 0.25,
      animated: false,
    },
  },
  "matrix-rain": {
    type: "dots",
    dots: {
      size: 1,
      spacing: 18,
      color: "hsl(120 100% 50%)",
      opacity: 0.3,
      fade: "top",
    },
  },
}
