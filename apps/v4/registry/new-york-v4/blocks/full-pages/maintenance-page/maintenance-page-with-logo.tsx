export default function MaintenancePageWithLogo() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
            <a href="#"></a>
            <div className="flex w-full flex-col items-center justify-start gap-4">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-black">
                We'll Be Back Soon
              </h2>
              <p className="max-w-3xl text-center text-base leading-relaxed font-normal text-gray-500">
                Apologies for the inconvenience! Sleek note is currently
                undergoing scheduled maintenance to enhance your experience. We
                anticipate being back online in just a few minutes.
              </p>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1718004331.png"
            alt="under maintenance image"
            className="object-cover"
          />
          <p className="max-w-2xl text-center text-base leading-relaxed font-normal text-gray-400">
            Meanwhile, take a moment to explore our blog, where you'll discover
            inspiring insights on crafting high-performing campaigns.
          </p>
        </div>
      </div>
    </section>
  )
}
