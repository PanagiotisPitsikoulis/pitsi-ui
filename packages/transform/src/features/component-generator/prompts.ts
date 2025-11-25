/**
 * Prompt templates for generating React components with Gemini
 */

export interface ParsedContext {
  title: string
  description: string
  fonts: string
  colors: string
  sections: string
  breakpoints: string
  imageCount: number
  contextSummary: string
}

export interface PromptOptions {
  htmlContent: string
  sectionName: string
  siteName: string
  availableComponents: string
  theme?: {
    typography?: {
      display?: { family: string } | null
      heading?: { family: string } | null
      body?: { family: string } | null
    }
    shadcnTheme?: {
      colors?: {
        light?: Record<string, string>
      }
    }
  } | null
  parsedContext?: ParsedContext
}

/**
 * Build the main prompt for component generation
 */
export function buildPrompt(options: PromptOptions): string {
  const {
    htmlContent,
    sectionName,
    siteName,
    availableComponents,
    theme,
    parsedContext,
  } = options

  // Build theme context if available
  let themeContext = ""
  if (theme) {
    const parts: string[] = []

    if (theme.typography) {
      const { display, heading, body } = theme.typography
      if (display?.family || heading?.family || body?.family) {
        parts.push(`Typography (from theme extraction):
- Display font: ${display?.family || "default"}
- Heading font: ${heading?.family || "default"}
- Body font: ${body?.family || "default"}`)
      }
    }

    if (theme.shadcnTheme?.colors?.light) {
      const colors = Object.entries(theme.shadcnTheme.colors.light)
        .slice(0, 10)
        .map(([k, v]) => `  --${k}: ${v}`)
        .join("\n")
      parts.push(`CSS Variables:\n${colors}`)
    }

    if (parts.length > 0) {
      themeContext = `\n## Extracted Theme\n${parts.join("\n\n")}\n`
    }
  }

  // Build parsed context section
  let parsedContextSection = ""
  if (parsedContext) {
    parsedContextSection = `
## Page Analysis (Extracted from HTML)

**Page Title:** ${parsedContext.title}
**Description:** ${parsedContext.description}

### Fonts Used
${parsedContext.fonts || "No custom fonts detected"}

### Color Palette
${parsedContext.colors || "No design tokens found"}

### Responsive Breakpoints
${parsedContext.breakpoints || "Standard breakpoints"}

### Page Sections Structure
${parsedContext.sections || "No sections detected"}

### Assets
- Total images: ${parsedContext.imageCount}

${parsedContext.contextSummary ? `### Full Context Summary\n${parsedContext.contextSummary}` : ""}
`
  }

  // Don't include full HTML - just note it exists
  const htmlNote = `The source HTML file exists and has been analyzed. Key information extracted:
- File size: ${(htmlContent.length / 1024).toFixed(0)}KB
- The parsed context above contains all relevant information from the HTML
- Use the screenshots as your PRIMARY reference for visual design
- Use the parsed context for content, structure, and text`

  return `You are an expert React developer specializing in converting Framer website designs to modern React components using TypeScript, Tailwind CSS, and shadcn/ui components.

## Task
Convert the page "${sectionName}" from the website "${siteName}" into clean, production-ready React components.

**Important:** Screenshots have been captured for this page but cannot be sent via CLI. Use the parsed page analysis below as your reference for layout and structure. The extracted theme, colors, fonts, and section information provide all the design context you need.

## Design Approach

Based on the parsed page analysis:
1. Follow the overall style indicated by the fonts and colors below
2. Use the provided color palette for theming
3. Apply consistent spacing using Tailwind's scale
4. Implement proper typography hierarchy with the specified fonts
5. Create clean, modern layouts based on the section structure
6. Add appropriate interactive elements (buttons, links, cards)

${parsedContextSection}
${themeContext}

## Technical Requirements

### Stack
- React 18+ with TypeScript
- Tailwind CSS for ALL styling (no inline styles, no CSS files)
- shadcn/ui components from the registry (listed below)
- Lucide React for icons: \`import { IconName } from "lucide-react"\`
- Next.js Image: \`import Image from "next/image"\`
- Next.js Link: \`import Link from "next/link"\`

### Component Architecture
1. Create a main page component that composes multiple section components
2. Each major section (Hero, Features, CTA, etc.) should be its own component
3. Extract repeated patterns into reusable components
4. Use proper TypeScript interfaces for all props

### Styling Guidelines
- Use Tailwind's responsive prefixes: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`
- Apply \`dark:\` variants for dark mode support
- Use semantic color classes: \`bg-background\`, \`text-foreground\`, \`bg-primary\`, etc.
- Maintain consistent spacing using Tailwind's scale (4, 6, 8, 12, 16, 20, 24)
- Use \`container\` and \`max-w-*\` for content width constraints

### Code Quality
- Fully typed with TypeScript (no \`any\` types)
- Semantic HTML elements (\`<section>\`, \`<article>\`, \`<nav>\`, etc.)
- Accessible: aria-labels, roles, proper heading hierarchy
- Responsive: Mobile-first approach
- Clean imports: Group and organize imports logically

## Available shadcn/ui Components

Import from "@/components/ui/[name]":

${availableComponents}

## Source HTML Information

${htmlNote}

**Note:** All text content, image information, and structural details have been extracted and provided in the "Page Analysis" section above. Use that parsed information instead of raw HTML.

## Output Requirements

Generate a COMPLETE React component file that:

1. **Accurately recreates the visual design** from the screenshots
2. **Preserves all text content** from the HTML
3. **Uses shadcn/ui components** appropriately (Button, Card, etc.)
4. **Is fully responsive** with proper breakpoint handling
5. **Includes TypeScript types** for all props and data
6. **Has clean, readable code** with proper formatting

### File Structure
\`\`\`tsx
// Imports (React, Next.js, shadcn/ui, lucide-react)

// Type definitions

// Sub-components (Hero, Features, etc.)

// Main page component (default export)
\`\`\`

Respond with ONLY the TypeScript React code wrapped in a \`\`\`tsx code block.
Do NOT include any explanation, commentary, or markdown outside the code block.`
}

/**
 * Build a prompt for generating a specific section type
 */
export function buildSectionPrompt(
  sectionType: SectionType,
  options: Omit<PromptOptions, "sectionName">
): string {
  const sectionPrompts: Record<SectionType, string> = {
    hero: "This is a hero section - typically the first thing visitors see. Focus on impact, clear CTAs, and compelling imagery.",
    features: "This is a features section showcasing product/service capabilities. Use cards or grid layouts.",
    pricing: "This is a pricing section with plan comparisons. Use cards with clear hierarchy.",
    testimonials: "This is a testimonials section with customer reviews. Consider carousel or grid layout.",
    cta: "This is a call-to-action section. Focus on conversion with clear buttons and minimal distractions.",
    faq: "This is an FAQ section. Use accordion components for expandable questions.",
    contact: "This is a contact section with form or contact info. Include proper form validation.",
    footer: "This is a footer section with links, social icons, and legal info.",
    header: "This is a header/navigation section. Include mobile menu handling.",
    about: "This is an about section describing the company/product.",
    team: "This is a team section showing team members. Use avatar and card components.",
    blog: "This is a blog section showing articles. Use card layouts with images.",
    gallery: "This is a gallery section with images. Consider masonry or carousel layouts.",
    stats: "This is a stats/metrics section. Use large numbers with labels.",
  }

  const additionalContext = sectionPrompts[sectionType] || ""

  return buildPrompt({
    ...options,
    sectionName: sectionType,
  }).replace(
    "## Output Requirements",
    `## Section Context\n${additionalContext}\n\n## Output Requirements`
  )
}

export type SectionType =
  | "hero"
  | "features"
  | "pricing"
  | "testimonials"
  | "cta"
  | "faq"
  | "contact"
  | "footer"
  | "header"
  | "about"
  | "team"
  | "blog"
  | "gallery"
  | "stats"

/**
 * Build prompt for refining/improving a generated component
 */
export function buildRefinePrompt(
  originalCode: string,
  feedback: string
): string {
  return `You are an expert React developer. Improve the following React component based on the feedback provided.

## Original Component

\`\`\`tsx
${originalCode}
\`\`\`

## Feedback
${feedback}

## Requirements
- Keep using TypeScript, Tailwind CSS, and shadcn/ui components
- Maintain the same general structure unless the feedback requires changes
- Ensure the component remains accessible and responsive

Respond with ONLY the improved TypeScript React component code wrapped in a \`\`\`tsx code block.`
}

/**
 * Build prompt for generating component variations
 */
export function buildVariationPrompt(
  originalCode: string,
  variationType: "minimal" | "detailed" | "dark" | "colorful"
): string {
  const variationDescriptions = {
    minimal: "Create a more minimal version with reduced visual elements, more whitespace, and simpler styling.",
    detailed: "Create a more detailed version with additional visual elements, more content sections, and richer styling.",
    dark: "Create a dark mode optimized version with appropriate color choices for dark backgrounds.",
    colorful: "Create a more colorful version with vibrant accents and gradient elements.",
  }

  return `You are an expert React developer. Create a ${variationType} variation of the following React component.

## Original Component

\`\`\`tsx
${originalCode}
\`\`\`

## Variation Type: ${variationType}
${variationDescriptions[variationType]}

## Requirements
- Keep using TypeScript, Tailwind CSS, and shadcn/ui components
- Maintain the same functionality and content structure
- Apply the variation style throughout the component

Respond with ONLY the TypeScript React component code wrapped in a \`\`\`tsx code block.`
}
