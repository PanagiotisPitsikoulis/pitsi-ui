export function ContentExplained() {
  return (
    <section className="py-10 md:py-20">
      <div className="container px-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Components
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Shadcn/ui style components for building landing pages. Includes
                themed version of default shadcn/ui components.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Animations
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Custom-built practical animations that bring your landing to
                life, plus modified community animations.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Blocks
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Function like components with props and variants — designed for
                AI and devs alike. Integrated with Payload and Sanity CMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
