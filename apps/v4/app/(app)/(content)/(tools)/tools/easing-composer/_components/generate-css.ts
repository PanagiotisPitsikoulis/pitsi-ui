import type { CubicBezier } from "./easing-types"

export function bezierToCSS(bezier: CubicBezier): string {
  return `cubic-bezier(${bezier.x1}, ${bezier.y1}, ${bezier.x2}, ${bezier.y2})`
}

export function generateEasingCSS(
  bezier: CubicBezier,
  name: string = "custom"
): string {
  const cssValue = bezierToCSS(bezier)

  return `/* ${name} easing */
:root {
  --ease-${name}: ${cssValue};
}

/* Usage example */
.animated-element {
  transition: all 300ms var(--ease-${name});
}

/* Or directly */
.animated-element {
  transition: all 300ms ${cssValue};
}`
}

export function generateTailwindV4Easing(
  bezier: CubicBezier,
  name: string = "custom"
): string {
  const cssValue = bezierToCSS(bezier)

  return `/* ${name} easing for Tailwind CSS v4 */
@theme {
  --ease-${name}: ${cssValue};
}

/* Usage: ease-${name} */`
}

export function generateFramerMotionEasing(bezier: CubicBezier): string {
  return `// Framer Motion easing
const easing = [${bezier.x1}, ${bezier.y1}, ${bezier.x2}, ${bezier.y2}]

// Usage
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.3, ease: easing }}
/>`
}

export function generateEasingJSON(
  bezier: CubicBezier,
  name: string = "custom"
): string {
  return JSON.stringify(
    {
      name,
      cubicBezier: bezierToCSS(bezier),
      values: {
        x1: bezier.x1,
        y1: bezier.y1,
        x2: bezier.x2,
        y2: bezier.y2,
      },
    },
    null,
    2
  )
}

// Calculate the y position on the bezier curve for a given t
export function getBezierY(bezier: CubicBezier, t: number): number {
  const { x1, y1, x2, y2 } = bezier

  // Solve for t given x using Newton-Raphson
  let guessT = t
  for (let i = 0; i < 8; i++) {
    const x =
      3 * (1 - guessT) * (1 - guessT) * guessT * x1 +
      3 * (1 - guessT) * guessT * guessT * x2 +
      guessT * guessT * guessT
    const dx =
      3 * (1 - guessT) * (1 - guessT) * x1 +
      6 * (1 - guessT) * guessT * (x2 - x1) +
      3 * guessT * guessT * (1 - x2)

    if (Math.abs(x - t) < 0.001) break
    guessT -= (x - t) / dx
  }

  // Calculate y at guessT
  return (
    3 * (1 - guessT) * (1 - guessT) * guessT * y1 +
    3 * (1 - guessT) * guessT * guessT * y2 +
    guessT * guessT * guessT
  )
}
