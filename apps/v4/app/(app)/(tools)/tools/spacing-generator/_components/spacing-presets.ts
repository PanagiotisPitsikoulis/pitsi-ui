import type { SpacingPreset, SpacingState, SpacingValue } from "./spacing-types"

export const defaultState: SpacingState = {
  baseSize: 4,
  scale: "linear",
  multiplier: 2,
  unit: "px",
  steps: 12,
  customValues: [],
  prefix: "spacing",
}

export const spacingPresets: Record<string, SpacingPreset> = {
  tailwind: {
    label: "Tailwind",
    description: "4px base, linear scale - the default Tailwind spacing",
    state: {
      baseSize: 4,
      scale: "linear",
      multiplier: 1,
      unit: "px",
      steps: 12,
      customValues: [],
      prefix: "spacing",
    },
  },
  "8pt-grid": {
    label: "8pt Grid",
    description: "8px base for Material Design style spacing",
    state: {
      baseSize: 8,
      scale: "linear",
      multiplier: 1,
      unit: "px",
      steps: 10,
      customValues: [],
      prefix: "spacing",
    },
  },
  geometric: {
    label: "Geometric",
    description: "4px base with 1.5x multiplier for exponential growth",
    state: {
      baseSize: 4,
      scale: "geometric",
      multiplier: 1.5,
      unit: "px",
      steps: 10,
      customValues: [],
      prefix: "spacing",
    },
  },
  "geometric-2x": {
    label: "Geometric 2x",
    description: "4px base doubling each step - powers of 2",
    state: {
      baseSize: 4,
      scale: "geometric",
      multiplier: 2,
      unit: "px",
      steps: 8,
      customValues: [],
      prefix: "spacing",
    },
  },
  fibonacci: {
    label: "Fibonacci",
    description: "Natural fibonacci sequence for organic spacing",
    state: {
      baseSize: 4,
      scale: "fibonacci",
      multiplier: 1,
      unit: "px",
      steps: 10,
      customValues: [],
      prefix: "spacing",
    },
  },
  compact: {
    label: "Compact",
    description: "2px base for dense, data-heavy interfaces",
    state: {
      baseSize: 2,
      scale: "linear",
      multiplier: 1,
      unit: "px",
      steps: 12,
      customValues: [],
      prefix: "spacing",
    },
  },
  spacious: {
    label: "Spacious",
    description: "8px base with 1.5x multiplier for airy layouts",
    state: {
      baseSize: 8,
      scale: "geometric",
      multiplier: 1.5,
      unit: "px",
      steps: 8,
      customValues: [],
      prefix: "spacing",
    },
  },
  "rem-based": {
    label: "REM Based",
    description: "0.25rem base for scalable, accessible spacing",
    state: {
      baseSize: 0.25,
      scale: "linear",
      multiplier: 1,
      unit: "rem",
      steps: 12,
      customValues: [],
      prefix: "spacing",
    },
  },
}

// Fibonacci sequence generator
function getFibonacci(n: number): number[] {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib
}

// Calculate spacing values based on state
export function calculateSpacingValues(state: SpacingState): SpacingValue[] {
  const values: SpacingValue[] = []
  const { baseSize, scale, multiplier, unit, steps, customValues } = state

  // Always include 0
  values.push({
    name: "0",
    value: 0,
    cssValue: "0",
  })

  if (scale === "custom" && customValues.length > 0) {
    customValues.forEach((val, index) => {
      values.push({
        name: String(index + 1),
        value: val,
        cssValue: `${val}${unit}`,
      })
    })
    return values
  }

  if (scale === "linear") {
    for (let i = 1; i <= steps; i++) {
      const value = baseSize * i
      values.push({
        name: String(i),
        value,
        cssValue: unit === "rem" ? `${value}rem` : `${value}px`,
      })
    }
  } else if (scale === "geometric") {
    for (let i = 1; i <= steps; i++) {
      const value =
        Math.round(baseSize * Math.pow(multiplier, i - 1) * 100) / 100
      values.push({
        name: String(i),
        value,
        cssValue: unit === "rem" ? `${value}rem` : `${value}px`,
      })
    }
  } else if (scale === "fibonacci") {
    const fib = getFibonacci(steps + 1)
    for (let i = 1; i <= steps; i++) {
      const value = fib[i] * baseSize
      values.push({
        name: String(i),
        value,
        cssValue: unit === "rem" ? `${value}rem` : `${value}px`,
      })
    }
  }

  return values
}
