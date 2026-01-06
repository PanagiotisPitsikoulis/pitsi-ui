export function PricingExplained() {
  return (
    <section
      id="pricing-explained"
      className="-mt-8 hidden pb-16 md:-mt-12 md:pb-24 lg:block"
    >
      <div className="container px-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium capitalize md:mb-2 md:text-xl">
                30% free / 70% paid
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                A generous free tier to get you started. Pro unlocks the full
                library.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium capitalize md:mb-2 md:text-xl">
                Pro unlocks quantity
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Quality is never gated. Free and paid components are built with
                the same care.
              </p>
            </div>
          </div>
          <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
            <div>
              <h3 className="font-medium capitalize md:mb-2 md:text-xl">
                Free updates forever
                <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
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
