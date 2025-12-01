import { Spacer } from "@/registry/new-york-v4/ui/spacer"

function FeatureCard({
  children,
  label,
  className,
}: {
  children?: React.ReactNode
  label: string
  className?: string
}) {
  return (
    <div className={`group border-border bg-background relative flex h-[20rem] flex-col overflow-hidden rounded-4xl border shadow-sm md:h-[24rem] ${className ?? ""}`}>
      <div className="flex flex-1 items-center justify-center p-6 overflow-hidden">
        {children}
      </div>
      <div className="bg-background/50 border-t px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{label}</p>
      </div>
    </div>
  )
}

export function DeveloperExperienceSection() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Developer Experience
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Built for developers
        <br />
        <span className="text-muted-foreground">who ship fast.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full grid-cols-6 gap-6">
        <FeatureCard className="col-span-6 md:col-span-2" label="One platform" />
        <FeatureCard className="col-span-6 md:col-span-2" label="Same APIs — nothing to unlearn" />
        <FeatureCard className="col-span-6 md:col-span-2" label="Docs that don't suck" />
      </div>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Your code, your rules. Full IDE autocomplete, type safety, and complete
        control over every line.
      </p>
    </div>
  )
}
