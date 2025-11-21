export default function FeatureCardsWithOverlayImages() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-10 xl:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-4 xl:gap-5">
            <div className="flex items-center justify-start gap-1.5 rounded-full bg-white px-2.5 py-0.5">
              <span className="text-center text-xs leading-normal font-medium text-orange-600">
                Features
              </span>
            </div>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              Comprehensive Service Solutions
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Our Comprehensive Service Solutions, designed to meet a wide array
              of your business needs with precision and expertise.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1720518485.png"
                alt="Feature For Service Solutions image"
              />
              <div className="absolute bottom-0 flex w-full flex-col items-start justify-start gap-2.5 p-7">
                <h4 className="text-xl leading-8 font-semibold text-white">
                  Renovation Services
                </h4>
                <p className="text-sm leading-normal font-normal text-white">
                  Whether you're looking to update a single room or undertake a
                  complete.
                </p>
              </div>
            </div>
            <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1720518497.png"
                alt="Feature For Service Solutions image"
              />
              <div className="absolute bottom-0 flex w-full flex-col items-start justify-start gap-2.5 p-7">
                <h4 className="text-xl leading-8 font-semibold text-white">
                  Plumbing Services
                </h4>
                <p className="text-sm leading-normal font-normal text-white">
                  Our team of licensed and experienced plumbers is equipped to
                  handle everything
                </p>
              </div>
            </div>
            <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1720518507.png"
                alt="Feature For Service Solutions image"
              />
              <div className="absolute bottom-0 flex w-full flex-col items-start justify-start gap-2.5 p-7">
                <h4 className="text-xl leading-8 font-semibold text-white">
                  Electical Services
                </h4>
                <p className="text-sm leading-normal font-normal text-white">
                  We prioritize safety and compliance with all electrical codes,
                  using high-quality materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
