/**
 * Prompts for Claude to transform blocks by extracting hardcoded content into props
 */

import type { ScannedBlock, ScannedBlockFile } from "./types.js"

/**
 * Build the main transformation prompt for a block
 */
export function buildBlockTransformPrompt(block: ScannedBlock): string {
  const fileContents = block.files
    .map(
      (f) => `
### File: ${f.path}
\`\`\`tsx
${f.content}
\`\`\`
`
    )
    .join("\n")

  return `You are an expert React/TypeScript developer. Your task is to transform a UI block component to make ALL hardcoded content configurable via props.

## Block: ${block.definition.name}
${block.definition.description ? `Description: ${block.definition.description}` : ""}

## Current Files
${fileContents}

## Your Task

Transform this block so that ALL hardcoded content becomes configurable via props. This includes:

### Content to Extract as Props:
1. **Text Content**: All strings - headings, paragraphs, labels, button text, placeholder text
2. **Images**: All image URLs, alt text, and dimensions
3. **Icons**: Icon names/components used
4. **Links**: href values and link text
5. **Lists/Arrays**: Any hardcoded arrays of items (features, testimonials, team members, products, etc.)
6. **Numbers**: Prices, counts, statistics, ratings
7. **Metadata**: Dates, author names, categories, tags

### Transformation Rules:

1. **Create a Props Interface** at the top of the main component file:
\`\`\`tsx
export interface ${toPascalCase(block.definition.name)}Props {
  // Group related props logically
  hero?: {
    title: string
    subtitle?: string
    ctaText: string
    ctaLink: string
    backgroundImage?: string
  }
  features?: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
  // ... etc
}
\`\`\`

2. **Provide Default Props** that match the current hardcoded values:
\`\`\`tsx
export const default${toPascalCase(block.definition.name)}Props: ${toPascalCase(block.definition.name)}Props = {
  hero: {
    title: "Original hardcoded title",
    // ... all original values
  }
}
\`\`\`

3. **Update the Component** to accept and use props:
\`\`\`tsx
export default function ${toPascalCase(block.definition.name)}({
  ...props
}: ${toPascalCase(block.definition.name)}Props = default${toPascalCase(block.definition.name)}Props) {
  const mergedProps = { ...default${toPascalCase(block.definition.name)}Props, ...props }
  // Use mergedProps.hero.title instead of hardcoded "Title"
}
\`\`\`

4. **Handle Sub-components**: If the block has multiple files/components:
   - Create separate prop interfaces for each component
   - Pass relevant props down from parent
   - Or export individual component prop interfaces

5. **Preserve Functionality**:
   - Keep all existing functionality intact
   - Keep all styling and animations
   - Keep all imports and dependencies
   - Only change how content is sourced (from props instead of hardcoded)

6. **Type Safety**:
   - Use proper TypeScript types
   - Make optional props have \`?\`
   - Use \`React.ReactNode\` for slots that accept any content
   - Use specific types where appropriate (e.g., \`string\` for text, \`number\` for counts)

## Output Format

Return ONLY the transformed code files. For each file, use this format:

\`\`\`file:path/to/file.tsx
// transformed code here
\`\`\`

Include ALL files from the original block, even if they don't need changes (but most will need prop threading).

## Important Notes

- DO NOT add any explanations outside code blocks
- DO NOT skip any files
- DO NOT remove any functionality
- DO NOT change the visual appearance
- PRESERVE all original hardcoded values as defaults
- Make the component work identically when no props are passed
`
}

/**
 * Build a prompt for analyzing what content should be extracted
 */
export function buildAnalysisPrompt(block: ScannedBlock): string {
  const mainFile = block.files.find(
    (f) => f.type === "registry:page" || f.path.includes("page.tsx")
  )

  return `Analyze this React component and list ALL hardcoded content that should be extracted as props.

## Component: ${block.definition.name}

\`\`\`tsx
${mainFile?.content || block.files[0]?.content}
\`\`\`

## Required Output

List every piece of hardcoded content in JSON format:

\`\`\`json
{
  "texts": [
    { "value": "The actual text", "location": "line number or component", "suggestedProp": "heroTitle" }
  ],
  "images": [
    { "value": "https://...", "location": "...", "suggestedProp": "heroImage" }
  ],
  "icons": [
    { "value": "IconName", "location": "...", "suggestedProp": "featureIcons" }
  ],
  "links": [
    { "value": "/path", "location": "...", "suggestedProp": "ctaLink" }
  ],
  "arrays": [
    { "description": "List of features", "itemCount": 3, "suggestedProp": "features" }
  ],
  "numbers": [
    { "value": 99, "location": "...", "suggestedProp": "price" }
  ]
}
\`\`\`

Be thorough - find EVERY hardcoded value that a user might want to customize.
`
}

/**
 * Build a prompt for a single file transformation
 */
export function buildFileTransformPrompt(
  file: ScannedBlockFile,
  blockName: string,
  propsInterface?: string
): string {
  return `Transform this React component file to accept all content via props.

## File: ${file.path}
## Block: ${blockName}

${propsInterface ? `## Props Interface to Use:\n\`\`\`tsx\n${propsInterface}\n\`\`\`\n` : ""}

## Current Code:
\`\`\`tsx
${file.content}
\`\`\`

## Instructions:
1. Extract ALL hardcoded text, images, icons, links, and data into props
2. Create appropriate TypeScript interfaces
3. Provide default values matching current hardcoded content
4. The component should work identically when no props are passed

## Output:
Return ONLY the transformed code in a single tsx code block.
`
}

/**
 * Convert string to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
}

/**
 * Build a batch transformation prompt for multiple blocks
 */
export function buildBatchPrompt(blocks: ScannedBlock[]): string {
  const blockSummaries = blocks
    .map(
      (b) => `
### ${b.definition.name}
- Files: ${b.files.length}
- Categories: ${b.definition.categories?.join(", ") || "none"}
- Tier: ${b.definition.tier || "free"}
`
    )
    .join("\n")

  return `You will transform ${blocks.length} UI blocks to make all hardcoded content configurable via props.

## Blocks to Transform:
${blockSummaries}

For each block, I will provide the file contents and you will return the transformed versions.

## General Rules:
1. Create TypeScript prop interfaces for all content
2. Provide default values matching original hardcoded content
3. Components should work identically with no props passed
4. Extract: text, images, icons, links, arrays, numbers, metadata
5. Preserve all functionality and styling

Ready to begin. I'll send each block's files one at a time.
`
}
