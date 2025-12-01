export function PricingExplained() {
  return (
    <section>
      <div className="container px-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="relative col-span-6 flex gap-2 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-3">
            <div>
              <h3 className="text-sm font-medium md:mb-1">
                30% free / 70% paid
                <span className="bg-brand absolute -left-px hidden h-4 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-xs">
                A generous free tier to get you started. Pro unlocks the full
                library.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-2 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-3">
            <div>
              <h3 className="text-sm font-medium md:mb-1">
                Pro unlocks quantity
                <span className="bg-brand absolute -left-px hidden h-4 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-xs">
                Quality is never gated. Free and paid components are built with
                the same care.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-2 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-3">
            <div>
              <h3 className="text-sm font-medium md:mb-1">
                Free updates forever
                <span className="bg-brand absolute -left-px hidden h-4 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-xs">
                Pay once, own it forever. Every update and new component
                included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
