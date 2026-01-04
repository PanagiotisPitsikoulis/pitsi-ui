import { HeroButtonNeobrutalist } from "@/registry/new-york-v4/ui/hero-button-neobrutalist"

export default function HeroButtonNeobrutalistDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <HeroButtonNeobrutalist>Get Started</HeroButtonNeobrutalist>
      <HeroButtonNeobrutalist variant="outline">
        Learn More
      </HeroButtonNeobrutalist>
    </div>
  )
}
