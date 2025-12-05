"use client"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  FullStackBlocksIllustration,
  CMSIntegrationIllustration,
  FullyFunctionalIllustration,
  BattleTestedIllustration,
  SmartMCPServerIllustration,
  SmartCustomizationIllustration,
} from "../_bento_animations"

// Decorative icons for empty spaces
function SelectCheckboxIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 93 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M66.08 79.49V122.98L2.03003 86V12.5L22.03 24.05L29.14 28.15L62.07 47.17L54.96 51.23L38.41 41.68L36.07 40.33L36 40.28L29.14 36.33L22.03 32.22L9.14003 24.78V81.94L58.96 110.7V83.55L66.08 79.49Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M82.0701 37.1699L74.9601 41.2299L54.9601 51.2299L62.0701 47.1699L74.4901 40.9599L82.0701 37.1699Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M17.24 49.66L12.26 52.5L22.03 69.36L24.79 74.12L22.03 75.5L9.14001 81.94V24.78L22.03 32.22L29.14 36.33V43.71L22.03 47.27L17.24 49.66Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M86.0801 69.49V112.98L66.0801 122.98V79.49L86.0801 69.49Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M90.08 55.6799L52.36 77.1799L44.78 80.9699L37.2 84.7599L32.36 87.1799L36.91 84.5899L44.02 80.5299L51.75 76.1299L70.08 65.6799L90.08 55.6799Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M90.08 55.6799L70.08 65.6799L65.63 58.1799L65.01 57.1299L85.01 47.1299L90.08 55.6799Z" stroke="currentColor" strokeLinejoin="round"/>
      {/* Checkmark path - brand accent */}
      <path d="M70.08 65.6799L51.75 76.1299L44.02 80.5299L36.91 84.5899L32.36 87.1799L27.82 79.3399L24.79 74.1199L22.03 69.3599L12.26 52.4999L17.24 49.6599L22.03 57.9299L29.14 70.1899L30.66 72.8199L32.36 75.7499L34.06 74.7799L46.77 67.5299L51.75 64.6899L65.01 57.1299L65.63 58.1799L70.08 65.6799Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M82.07 37.17L74.49 40.96L62.07 47.17L29.14 28.15L22.03 24.05L2.03003 12.5L22.03 2.5L82.07 37.17Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M51.75 64.69L46.77 67.53L34.06 74.78L32.36 75.75L30.66 72.82L29.14 70.19L22.03 57.93L17.24 49.66L22.03 47.27L29.14 43.71L36 40.28L36.07 40.33L38.41 41.68L51.75 64.69Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M58.96 89.1501V110.7L9.14001 81.9401L22.03 75.5001L24.79 74.1201L27.82 79.3401L32.36 87.1801L37.2 84.7601L44.78 80.9701L58.96 89.1501Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

function PinchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 99 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M69.6098 91.05V94.65L66.2598 92.72L69.6098 91.05Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M96.2894 84.68L76.2894 94.68L69.8194 90.94L69.6094 90.82L86.2594 82.5L89.6094 80.82L96.2894 84.68Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M96.29 84.68V119.2L76.29 129.2V94.68L96.29 84.68Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M59.5795 85.26V88.86L56.8495 87.29L56.2295 86.93L56.5495 86.77L59.5795 85.26Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M86.2598 71.22V82.5L69.6098 90.82V91.05L66.2598 92.72V81.22L76.2298 76.24L79.5798 74.56L86.2598 71.22Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M86.2601 71.22L79.5801 74.56L76.2301 76.24L66.2601 81.22L59.5801 77.36L68.9001 72.7L69.5501 72.38L76.2301 69.04L79.5801 67.36L86.2601 71.22Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M76.2295 61.59V69.04L69.5495 72.38L68.8995 72.7L59.5795 77.36V85.26L56.5495 86.77L56.2295 86.93V71.59L58.1995 70.6L59.5195 69.95L66.1995 66.61L69.5495 64.93L76.2295 61.59Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M76.2298 61.59L69.5498 64.93L66.1998 66.61L59.5198 69.95L58.1998 70.6L56.2298 71.59L49.5498 67.73L53.0698 65.97L59.5198 62.75L66.1998 59.41L69.5498 57.73L76.2298 61.59Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M66.2002 40.45V59.41L59.5202 62.75L53.0702 65.97L49.5502 67.73V79.47L46.2002 81.14V50.45L59.5202 43.79L66.2002 40.45Z" stroke="currentColor" strokeLinejoin="round"/>
      {/* Hand part - brand accent */}
      <path d="M39.46 39.19V40.36L19.46 50.36V44.6L31.92 38.37L36.17 40.83L38.37 39.73L39.46 39.19Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M31.9195 38.37L19.4595 44.6L11.2695 39.87L25.0195 32.03L31.1595 28.53V37.93L31.9195 38.37Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M27.6498 22.48L22.7398 25.28L7.75977 33.82V24.42L20.2198 18.19L22.7398 19.64L27.6498 22.48Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M56.1699 11.65V30.83L39.4599 39.19L38.3699 39.73L36.1699 40.83V21.65L56.1699 11.65Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M56.17 11.65L36.17 21.65L33.88 20.33L27.76 16.79L25.56 15.52L22.74 13.89L20.55 12.63L19.46 12L39.46 2L56.17 11.65Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M20.2202 18.19L7.76023 24.42L2.74023 21.53L19.4602 13.17V17.75L20.2202 18.19Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M36.1702 21.65V40.83L31.9202 38.37L31.1602 37.93V28.53L25.0202 32.03L11.2702 39.87L19.4602 44.6V50.36L2.74023 40.71V21.53L7.76023 24.42V33.82L22.7402 25.28L27.6502 22.48L22.7402 19.64L20.2202 18.19L19.4602 17.75V12L20.5502 12.63L22.7402 13.89L25.5602 15.52L27.7602 16.79L33.8802 20.33L36.1702 21.65Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M66.2005 40.45L59.5205 43.79L46.2005 50.45L39.5205 46.59L59.5205 36.59L66.2005 40.45Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M39.5203 68.55V81.79L30.0703 73.27L39.5203 68.55Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M49.5502 79.47V83.07L46.2002 81.14L49.5502 79.47Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M76.2906 94.68V129.2L44.7805 111.01L24.8105 76.46L30.0705 73.27L39.5205 81.79V46.59L46.2005 50.45V81.14L49.5505 83.07V67.73L56.2305 71.59V86.93L56.8505 87.29L59.5806 88.86V77.36L66.2606 81.22V92.72L69.6105 94.65V90.82L69.8205 90.94L76.2906 94.68Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

function NumbersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 122 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Number 1 - brand accent */}
      <path d="M21.4251 23.49V66.36L12.0851 60.97V28.82L2.74512 23.43V12.71L21.4251 23.49Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M41.4251 13.49L31.4751 18.47L21.4251 23.49L2.74512 12.71L22.7451 2.70996L41.4251 13.49Z" className="stroke-brand" strokeLinejoin="round"/>
      <path d="M33.8753 30.68V41.4L40.5053 45.23L33.8753 48.54V60.14L21.4253 66.36V23.49L31.4753 18.47L41.4253 13.49V26.91L33.8753 30.68Z" className="stroke-brand" strokeLinejoin="round"/>
      {/* Number 2 */}
      <path d="M43.215 61.0799V68.2199L61.895 79.0099V89.7299L33.875 73.5499V48.5399L41.425 52.8999L52.555 59.3299V52.1799L41.425 45.7599L40.505 45.2299L33.875 41.3999V30.6799L41.425 35.0399L50.455 40.2499L53.875 42.2299L61.895 46.8599V71.8599L49.845 64.9099L43.215 61.0799Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M81.895 36.8599L71.955 41.8299L65.315 45.1499L61.895 46.8599L53.875 42.2299L50.455 40.2499L41.425 35.0399L33.875 30.6799L41.425 26.9099L53.875 20.6799L81.895 36.8599Z" stroke="currentColor" strokeLinejoin="round"/>
      {/* Number 3 */}
      <path d="M119.255 58.43L109.315 63.4L102.675 66.72L99.2554 68.43L97.4654 67.4L94.0454 65.42L81.8954 58.41L71.2354 52.25L81.8954 46.92L91.2354 42.25L119.255 58.43Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M99.2554 68.43V111.29L71.2354 95.12V84.4L71.8454 84.75L89.9154 95.18V88.04L78.4854 81.44L77.8654 81.08L77.4654 80.85V73.71L81.8954 76.27L84.4954 77.77L89.9154 80.9V73.75L84.0954 70.39L81.8954 69.12L81.7954 69.06L75.1554 65.23L71.2354 62.97V52.25L81.8954 58.41L94.0454 65.42L97.4654 67.4L99.2554 68.43Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M77.465 73.7101V80.8501L77.865 81.0801L71.235 84.4001V85.0601L61.895 89.7301V79.0101L71.945 73.9801L81.795 69.0601L81.895 69.1201V71.5001L77.465 73.7101Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M52.555 52.18V59.33L41.425 52.9L33.875 48.54L40.505 45.23L41.425 45.76L52.555 52.18Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M49.8453 64.9101L43.2153 68.2201V61.0801L49.8453 64.9101Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M81.7953 69.0599L71.9453 73.9799L61.8953 79.0099L43.2153 68.2199L49.8453 64.9099L61.8953 71.8599L65.3053 70.1499L75.1553 65.2299L81.7953 69.0599Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M71.235 52.2499V62.9699L75.155 65.2299L65.305 70.1499L61.895 71.8599V46.8599L65.315 45.1499L71.955 41.8299L81.895 36.8599V46.9199L71.235 52.2499Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M119.255 58.4299V101.29L99.2549 111.29V68.4299L102.675 66.7199L109.315 63.3999L119.255 58.4299Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M89.9154 88.0401V95.1801L71.8454 84.7501L71.2354 84.4001L77.8654 81.0801L78.4854 81.4401L89.9154 88.0401Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M89.9153 73.7499V80.8999L84.4953 77.7699L81.8953 76.2699L77.4653 73.7099L81.8953 71.4999L84.0953 70.3899L89.9153 73.7499Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

// Grid layout configuration for artistic arrangement
// Using a 3-column grid with strategic empty spaces and decorative icons
const gridItems = [
  // Row 1: Full-Stack, CMS, icon
  {
    type: "card",
    title: "Full-Stack Blocks",
    description: "Complete page sections with frontend code and CMS schemas. Heroes, pricing tables, auth flows—ready for production.",
    illustration: FullStackBlocksIllustration,
  },
  {
    type: "card",
    title: "CMS Integration",
    description: "Payload and Sanity schemas included for seamless content management.",
    illustration: CMSIntegrationIllustration,
  },
  { type: "icon", icon: SelectCheckboxIcon },
  // Row 2: icon, Smart Customization, Logic
  { type: "icon", icon: PinchIcon },
  {
    type: "card",
    title: "Smart Customization",
    description: "Blocks take props for their components and a classNames prop to theme all elements—no code changes needed.",
    illustration: SmartCustomizationIllustration,
  },
  {
    type: "card",
    title: "Logic Included",
    description: "Code included in every block. You don't just download the looks—everything works out of the box.",
    illustration: FullyFunctionalIllustration,
  },
  // Row 3: Battle Tested, MCP Server, icon
  {
    type: "card",
    title: "Battle Tested",
    description: "Resilient components that are bug-proof. Tested in production, built to last.",
    illustration: BattleTestedIllustration,
  },
  {
    type: "card",
    title: "Smart MCP Server",
    description: "AI integrations built-in. Everything is AI-friendly and ready for your workflows.",
    illustration: SmartMCPServerIllustration,
  },
  { type: "icon", icon: NumbersIcon },
]

export function PowerBentoSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      <p className="text-brand text-sm font-medium uppercase tracking-widest">
        Power Under the Hood
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        Production-Ready.
        <br />
        <span className="text-muted-foreground">Battle-Tested.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="2xl" />

      {/* Artistic Bento Grid - 3 columns with strategic gaps */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {gridItems.map((item, index) => {
          if (item.type === "icon") {
            const IconComponent = item.icon
            return (
              <div
                key={`icon-${index}`}
                className="hidden md:flex items-center justify-center"
              >
                <IconComponent className="size-48 text-brand" />
              </div>
            )
          }

          return (
            <div key={item.title} className="flex flex-col gap-4">
              {/* Illustration Card */}
              <div className="border-border bg-background group relative h-72 overflow-hidden rounded-3xl border shadow-sm">
                <div className="relative h-full w-full p-4">
                  <item.illustration />
                </div>
              </div>
              {/* Description Card */}
              <div className="border-border bg-background flex flex-col gap-2 rounded-3xl border p-6 text-left shadow-sm">
                <h3 className="capitalize text-lg font-medium">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
