import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function CTASection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-32 text-center">
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Ready to build
        <br />
        <span className="text-muted-foreground">something beautiful?</span>
      </h2>
      <Spacer size="xl" sizeMobile="lg" />
      <p className="text-muted-foreground max-w-xl text-base md:text-lg">
        Join thousands of developers building faster with pitsi/ui. Start with
        our free components and scale when you need more.
      </p>
      <Spacer size="xl" sizeMobile="lg" />
      <div className="flex flex-col gap-4 sm:flex-row">
        <HeroButton>Explore Blocks</HeroButton>
        <Button size="lg" variant="outline" className="rounded-full">
          Browse Components
        </Button>
      </div>
    </div>
  )
}
