export default function TailwindMaintenancePageWithIllustration() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-16">
          <img
            src="https://pagedone.io/asset/uploads/1718004816.png"
            alt="under maintenance image"
            className="object-cover"
          />
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope max-w-2xl text-center text-4xl leading-normal font-bold text-black">
              Coming Soon: Prepare for Something Spectacular
            </h2>
            <p className="max-w-3xl text-center text-base leading-relaxed font-medium text-gray-500">
              Apologies for the inconvenience! Sleeknote is currently undergoing
              scheduled maintenance to enhance your experience. We anticipate
              being back online in just a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
