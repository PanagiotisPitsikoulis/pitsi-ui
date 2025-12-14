import type { DecorationState } from "./decoration-types"

export function generateGuidesCode(state: DecorationState): string {
  const { guides } = state
  return `<StripeBgGuides
  columnCount={${guides.columnCount}}
  animated={${guides.animated}}
  animationDuration={${guides.animationDuration}}
  animationDelay={${guides.animationDelay}}
  glowColor="${guides.glowColor}"
  glowSize="${guides.glowSize}vh"
  glowOpacity={${guides.glowOpacity}}
  direction="${guides.direction}"
  easing="${guides.easing}"
  darkMode={${guides.darkMode}}
/>`
}

export function generateGradientCSS(state: DecorationState): string {
  const { gradient } = state
  const colorStops = gradient.colors
    .map((c) => `${c.color} ${c.position}%`)
    .join(", ")

  if (gradient.type === "linear") {
    return `background: linear-gradient(${gradient.angle}deg, ${colorStops});`
  } else if (gradient.type === "radial") {
    return `background: radial-gradient(circle at 50% 30%, ${colorStops});`
  } else {
    return `background: conic-gradient(from ${gradient.angle}deg, ${colorStops});`
  }
}

export function generateDotsCSS(state: DecorationState): string {
  const { dots } = state
  let fadeGradient = ""

  if (dots.fade === "radial") {
    fadeGradient = `mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);`
  } else if (dots.fade === "top") {
    fadeGradient = `mask-image: linear-gradient(to bottom, transparent, black 30%);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%);`
  } else if (dots.fade === "bottom") {
    fadeGradient = `mask-image: linear-gradient(to top, transparent, black 30%);
  -webkit-mask-image: linear-gradient(to top, transparent, black 30%);`
  }

  return `background-image: radial-gradient(circle, ${dots.color.replace(")", ` / ${dots.opacity})`)} ${dots.size}px, transparent ${dots.size}px);
background-size: ${dots.spacing}px ${dots.spacing}px;
${fadeGradient}`
}

export function generateGridCSS(state: DecorationState): string {
  const { grid } = state
  const color = grid.color.replace(")", ` / ${grid.opacity})`)

  let fadeGradient = ""
  if (grid.fade === "radial") {
    fadeGradient = `mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);`
  } else if (grid.fade === "edges") {
    fadeGradient = `mask-image: radial-gradient(ellipse at center, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 100%);`
  }

  return `background-image:
  linear-gradient(${color} ${grid.strokeWidth}px, transparent ${grid.strokeWidth}px),
  linear-gradient(90deg, ${color} ${grid.strokeWidth}px, transparent ${grid.strokeWidth}px);
background-size: ${grid.size}px ${grid.size}px;
${fadeGradient}`
}

export function generateNoiseCSS(state: DecorationState): string {
  const { noise } = state
  return `&::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: ${noise.opacity};
  mix-blend-mode: ${noise.blendMode};
  pointer-events: none;
  transform: scale(${noise.scale});
}`
}

export function generateGlowCSS(state: DecorationState): string {
  const { glow } = state
  return `&::before {
  content: "";
  position: absolute;
  width: ${glow.size}px;
  height: ${glow.size}px;
  left: ${glow.x}%;
  top: ${glow.y}%;
  transform: translate(-50%, -50%);
  background: ${glow.color};
  border-radius: 50%;
  filter: blur(${glow.blur}px);
  opacity: ${glow.opacity};
  pointer-events: none;${glow.animated ? `
  animation: float 8s ease-in-out infinite;` : ""}
}${glow.animated ? `

@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
}` : ""}`
}

export function generateTailwindCode(state: DecorationState): string {
  switch (state.type) {
    case "guides":
      return generateGuidesCode(state)
    case "gradient":
      return `<div className="absolute inset-0 -z-10" style={{ ${generateGradientCSS(state).replace(/\n/g, " ")} }} />`
    case "dots":
      return `{/* Dot Pattern Background */}
<div
  className="absolute inset-0 -z-10"
  style={{
    backgroundImage: "radial-gradient(circle, ${state.dots.color.replace(")", ` / ${state.dots.opacity})`)} ${state.dots.size}px, transparent ${state.dots.size}px)",
    backgroundSize: "${state.dots.spacing}px ${state.dots.spacing}px",${state.dots.fade !== "none" ? `
    maskImage: "${state.dots.fade === "radial" ? "radial-gradient(ellipse at center, black 0%, transparent 70%)" : state.dots.fade === "top" ? "linear-gradient(to bottom, transparent, black 30%)" : "linear-gradient(to top, transparent, black 30%)"}",` : ""}
  }}
/>`
    case "grid":
      return `{/* Grid Pattern Background */}
<div
  className="absolute inset-0 -z-10"
  style={{
    backgroundImage: \`linear-gradient(${state.grid.color.replace(")", ` / ${state.grid.opacity})`)} ${state.grid.strokeWidth}px, transparent ${state.grid.strokeWidth}px), linear-gradient(90deg, ${state.grid.color.replace(")", ` / ${state.grid.opacity})`)} ${state.grid.strokeWidth}px, transparent ${state.grid.strokeWidth}px)\`,
    backgroundSize: "${state.grid.size}px ${state.grid.size}px",
  }}
/>`
    case "noise":
      return `{/* Noise Texture Overlay */}
<div
  className="pointer-events-none absolute inset-0 -z-10"
  style={{
    backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\\")",
    opacity: ${state.noise.opacity},
    mixBlendMode: "${state.noise.blendMode}",
  }}
/>`
    case "glow":
      return `{/* Glow Effect */}
<div
  className="pointer-events-none absolute -z-10${state.glow.animated ? " animate-pulse" : ""}"
  style={{
    width: "${state.glow.size}px",
    height: "${state.glow.size}px",
    left: "${state.glow.x}%",
    top: "${state.glow.y}%",
    transform: "translate(-50%, -50%)",
    background: "${state.glow.color}",
    borderRadius: "50%",
    filter: "blur(${state.glow.blur}px)",
    opacity: ${state.glow.opacity},
  }}
/>`
    default:
      return ""
  }
}

export function generateCSSCode(state: DecorationState): string {
  switch (state.type) {
    case "guides":
      return `/* Use the StripeBgGuides component from pitsi/ui */
/* npx pitsi add bg-guides */`
    case "gradient":
      return `.background-decoration {
  position: absolute;
  inset: 0;
  z-index: -1;
  ${generateGradientCSS(state)}
}`
    case "dots":
      return `.background-decoration {
  position: absolute;
  inset: 0;
  z-index: -1;
  ${generateDotsCSS(state)}
}`
    case "grid":
      return `.background-decoration {
  position: absolute;
  inset: 0;
  z-index: -1;
  ${generateGridCSS(state)}
}`
    case "noise":
      return `.background-decoration {
  position: relative;
  ${generateNoiseCSS(state)}
}`
    case "glow":
      return `.background-decoration {
  position: relative;
  ${generateGlowCSS(state)}
}`
    default:
      return ""
  }
}
