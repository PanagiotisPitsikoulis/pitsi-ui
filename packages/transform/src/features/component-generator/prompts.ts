/**
 * Prompt templates for generating pixel-perfect React components with Gemini
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
  imageUrls: string[] // Actual image URLs extracted from HTML
}

export interface PromptOptions {
  htmlContent: string
  htmlFilePath?: string
  sectionName: string
  siteName: string
  availableComponents: string
  screenshotPaths?: string[]
  themePath?: string
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
 * Build the main prompt for pixel-perfect component generation
 */
export function buildPrompt(options: PromptOptions): string {
  const {
    htmlContent,
    htmlFilePath,
    sectionName,
    siteName,
    screenshotPaths,
    themePath,
    theme,
    parsedContext,
  } = options

  // Build file locations section
  let fileLocationsSection = `
## 📁 FILE LOCATIONS - USE YOUR read_file TOOL TO ACCESS THESE

**IMPORTANT:** You have access to all these files on the local filesystem. Use your \`read_file\` tool to read and analyze them.

`
  if (htmlFilePath) {
    fileLocationsSection += `### HTML Source File
\`${htmlFilePath}\`
Read this file to get the complete HTML structure, exact image URLs, CSS styles, and content.

`
  }
  if (screenshotPaths && screenshotPaths.length > 0) {
    fileLocationsSection += `### Screenshots (PRIMARY VISUAL REFERENCE)
${screenshotPaths.map((p) => `\`${p}\``).join('\n')}
**CRITICAL:** These screenshots are your PRIMARY reference. Your output MUST match these EXACTLY.

`
  }
  if (themePath) {
    fileLocationsSection += `### Theme File
\`${themePath}\`
Read this JSON file for extracted color values, typography, and design tokens.

`
  }

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

### ACTUAL IMAGE URLs (USE THESE EXACT URLs)
${parsedContext.imageUrls && parsedContext.imageUrls.length > 0
  ? parsedContext.imageUrls.map((url, i) => `${i + 1}. ${url}`).join('\n')
  : 'No images found in HTML'}

${parsedContext.contextSummary ? `### Full Context Summary\n${parsedContext.contextSummary}` : ""}
`
  }

  // Don't include full HTML - just note it exists
  const htmlNote = `The source HTML file exists and has been analyzed. Key information extracted:
- File size: ${(htmlContent.length / 1024).toFixed(0)}KB
- The parsed context above contains all relevant information from the HTML
- Use the screenshots as your PRIMARY reference for visual design
- Use the parsed context for content, structure, and text`

  return `You are an expert React developer specializing in creating PIXEL-PERFECT reproductions of website designs using TypeScript and Tailwind CSS.

## Task
Create a PIXEL-PERFECT STATIC recreation of the page "${sectionName}" from the website "${siteName}".

**IMPORTANT: This is a STATIC UI recreation. Do NOT add any animations, transitions, hover effects, or interactive behaviors beyond basic navigation links.**

${fileLocationsSection}

## Critical Goal: PIXEL-PERFECT STATIC ACCURACY
Your primary objective is to recreate the original design with EXACT visual accuracy as a STATIC page. This means:
1. Use the EXACT same images from the original (preserve all src URLs from the HTML file)
2. Match the EXACT typography (font families, sizes, weights, line heights)
3. Use the EXACT color values extracted from the theme
4. Match the EXACT spacing, padding, and margins
5. Preserve the EXACT layout structure and element positioning
6. **NO ANIMATIONS** - Do not add Framer Motion, CSS transitions, or any animated effects
7. **STATIC ONLY** - Focus purely on visual fidelity, not interactivity

**IMPORTANT:** Use your \`read_file\` tool to access the files listed above. The HTML file contains exact image URLs, and screenshots show the visual design.

${screenshotPaths && screenshotPaths.length > 0 ? `
## 📸 SCREENSHOT FILES - YOUR PRIMARY REFERENCE
**CRITICAL:** ${screenshotPaths.length} screenshot${screenshotPaths.length > 1 ? 's have' : ' has'} been captured showing the exact visual design.

**SCREENSHOT FILE${screenshotPaths.length > 1 ? 'S' : ''} (use read_file tool to access):**
${screenshotPaths.map((p, i) => `${i + 1}. ${p}`).join('\n')}

Your component MUST match these screenshots EXACTLY. Every pixel, every color, every spacing must be identical.
` : ""}

## 🖼️ CRITICAL: Image Handling Requirements

**ABSOLUTELY MANDATORY - NEVER IGNORE THIS:**

1. **PRESERVE EXACT IMAGE URLs**: Copy image src attributes EXACTLY as they appear in the HTML
   - ✅ DO: \`src="https://framerusercontent.com/images/abc123.png"\`
   - ❌ NEVER: \`src="https://placehold.co/..."\` or \`src="/placeholder.svg"\`
   - ❌ NEVER: Make up URLs or use placeholder services

2. **Use Next.js Image Component** for all images:
\`\`\`tsx
import Image from "next/image"

// For images with known URLs from the HTML:
<Image
  src="https://exact-url-from-html.com/image.png"
  alt="Descriptive alt text"
  width={400}
  height={300}
  className="..."
/>

// For background images, use CSS:
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: 'url(https://exact-url-from-html.com/bg.jpg)' }}
/>
\`\`\`

3. **Extract ALL image URLs** from the HTML and use them:
   - Look for \`<img src="...">\` tags
   - Look for \`background-image: url(...)\` in styles
   - Look for \`srcset\` attributes
   - Look for SVG graphics inline or as sources

4. **If you cannot find an image URL**, use a solid color placeholder div with a comment:
\`\`\`tsx
{/* TODO: Image URL not found in source */}
<div className="bg-gray-200 w-full h-64" />
\`\`\`

**REMEMBER**: The goal is PIXEL-PERFECT recreation. Without the exact images, the result will not match the original.

${parsedContextSection}
${themeContext}

## Technical Requirements

### Stack - USE ONLY THESE
- React 18+ with TypeScript
- **Tailwind CSS ONLY** for all styling (absolutely NO component libraries, NO shadcn, NO other UI frameworks)
- Lucide React for icons ONLY: \`import { IconName } from "lucide-react"\`
- Standard HTML elements styled with Tailwind
- Next.js Image for images: \`import Image from "next/image"\`
- Next.js Link for navigation: \`import Link from "next/link"\`

### What NOT to Include
- ❌ NO Framer Motion or any animation library
- ❌ NO CSS animations or transitions
- ❌ NO hover effects beyond basic cursor changes
- ❌ NO scroll effects or parallax
- ❌ NO loading states or skeleton screens
- ❌ NO interactive carousels or sliders (use static grid instead)

### Component Architecture
1. Create a main page component that composes multiple section components
2. Each major section (Hero, Features, CTA, etc.) should be its own component
3. Build ALL UI elements from scratch using Tailwind CSS classes
4. NO external component libraries - build everything with native HTML + Tailwind
5. Use proper TypeScript interfaces for all props

### Styling Guidelines - PIXEL-PERFECT REQUIREMENTS
- **Images**: Use the EXACT image URLs from the original HTML - DO NOT use placeholders
- **Colors**: Use the EXACT color values from the extracted theme (see theme section above)
- **Typography**: Apply the EXACT fonts specified in the theme with correct weights and sizes
- **Spacing**: Match the EXACT spacing from the original design
- Use Tailwind's responsive prefixes: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`
- Apply \`dark:\` variants if the original has dark mode
- Use arbitrary values when needed for exact matching: \`text-[#1a1a1a]\`, \`w-[342px]\`, etc.
- Use Tailwind's full utility class set for shadows, borders, transforms, etc.

### Code Quality
- Fully typed with TypeScript (no \`any\` types)
- Semantic HTML elements (\`<section>\`, \`<article>\`, \`<nav>\`, \`<header>\`, \`<footer>\`, etc.)
- Accessible: aria-labels, roles, proper heading hierarchy
- Responsive: Mobile-first approach matching original breakpoints
- Clean imports: Group and organize imports logically

## Source HTML Information

${htmlNote}

**Note:** All text content, image information, and structural details have been extracted and provided in the "Page Analysis" section above. Use that parsed information instead of raw HTML.

## Output Requirements

Generate a COMPLETE React component file that achieves PIXEL-PERFECT accuracy:

### CRITICAL REQUIREMENTS (In Order of Priority)
1. **EXACT Visual Recreation**: The output must look IDENTICAL to the original
   - Use EXACT image URLs from the HTML (no placeholders like placehold.co)
   - Apply EXACT colors from the theme (use arbitrary values if needed)
   - Match EXACT typography (font families, sizes, weights from theme)
   - Preserve EXACT spacing, padding, margins

2. **STATIC ONLY**: No animations, no transitions, no hover effects
   - Do NOT import framer-motion or any animation library
   - Do NOT add whileHover, whileInView, or any motion props
   - Keep it simple and static

3. **Preserve ALL Content**: Every piece of text, every image, every link from the original

4. **Tailwind CSS ONLY**: Build everything from scratch
   - NO shadcn components
   - NO component libraries
   - Only native HTML elements + Tailwind classes
   - Use arbitrary values for exact matching: \`bg-[#f5f5f5]\`, \`text-[18px]\`, \`leading-[1.6]\`

5. **Fully Responsive**: Match the original's responsive behavior exactly
   - Use same breakpoints as original
   - Preserve layout changes at each breakpoint

6. **TypeScript Types**: Full type safety throughout

7. **Clean, Production Code**: Organized, semantic, accessible

### File Structure
\`\`\`tsx
"use client"  // Add this if using React hooks (useState, useEffect)

// Imports (React, Next.js, lucide-react ONLY - NO framer-motion)
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconName } from 'lucide-react'

// Type definitions
interface Props { }

// Sub-components (each section as a component)
const HeroSection = () => { }
const FeaturesSection = () => { }

// Main page component (default export)
export default function PageName() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* ... */}
    </div>
  )
}
\`\`\`

**CRITICAL**: Respond with ONLY the TypeScript React code wrapped in a \`\`\`tsx code block.
Do NOT include ANY explanation, commentary, or markdown outside the code block.
The code must be immediately usable and render pixel-perfect to the original.`
}

/**
 * Build a prompt for generating a specific section type
 */
export function buildSectionPrompt(
  sectionType: SectionType,
  options: Omit<PromptOptions, "sectionName">
): string {
  const sectionPrompts: Record<SectionType, string> = {
    hero: "This is a hero section - typically the first thing visitors see. Focus on visual impact and clear CTAs.",
    features: "This is a features section showcasing product/service capabilities. Use cards or grid layouts.",
    pricing: "This is a pricing section with plan comparisons. Use cards with clear hierarchy.",
    testimonials: "This is a testimonials section with customer reviews. Use static cards or grid layout.",
    cta: "This is a call-to-action section. Focus on conversion with clear buttons.",
    faq: "This is an FAQ section. Display all questions and answers expanded (no accordion).",
    contact: "This is a contact section with form or contact info.",
    footer: "This is a footer section with links, social icons, and legal info.",
    header: "This is a header/navigation section.",
    about: "This is an about section describing the company/product.",
    team: "This is a team section showing team members. Use avatar and card components.",
    blog: "This is a blog section showing articles. Use card layouts with images.",
    gallery: "This is a gallery section with images. Use a static grid layout.",
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
- Keep using TypeScript and Tailwind CSS ONLY
- NO component libraries - use only native HTML elements with Tailwind classes
- NO animations or Framer Motion - keep it static
- Maintain pixel-perfect accuracy to the original design
- Maintain the same general structure unless the feedback requires changes
- Ensure the component remains accessible and responsive
- Use exact color values, fonts, and spacing from the original

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
- Keep using TypeScript and Tailwind CSS ONLY
- NO component libraries - use only native HTML elements with Tailwind classes
- NO animations - keep it static
- Maintain the same functionality and content structure
- Apply the variation style throughout the component
- Preserve pixel-perfect spacing and typography hierarchy

Respond with ONLY the TypeScript React component code wrapped in a \`\`\`tsx code block.`
}
