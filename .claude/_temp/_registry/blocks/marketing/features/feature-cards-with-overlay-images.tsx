export default function FeatureCardsWithOverlayImages() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start xl:gap-12 lg:gap-10 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center xl:gap-5 lg:gap-4 gap-3 flex">
            <div className="px-2.5 py-0.5 bg-white rounded-full justify-start items-center gap-1.5 flex">
              <span className="text-center text-orange-600 text-xs font-medium leading-normal">
                Features
              </span>
            </div>
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              Comprehensive Service Solutions
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Our Comprehensive Service Solutions, designed to meet a wide array
              of your business needs with precision and expertise.
            </p>
          </div>
          <div className="w-full justify-start items-center xl:gap-8 lg:gap-6 gap-5 grid lg:grid-cols-3 grid-cols-1">
            <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
              <img
                className="lg:h-full h-auto w-full object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1720518485.png"
                alt="Feature For Service Solutions image"
              />
              <div className="w-full p-7 flex-col justify-start items-start gap-2.5 flex absolute bottom-0">
                <h4 className="text-white text-xl font-semibold leading-8">
                  Renovation Services
                </h4>
                <p className="text-white text-sm font-normal leading-normal">
                  Whether you're looking to update a single room or undertake a
                  complete.
                </p>
              </div>
            </div>
            <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
              <img
                className="lg:h-full h-auto w-full object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1720518497.png"
                alt="Feature For Service Solutions image"
              />
              <div className="w-full p-7 flex-col justify-start items-start gap-2.5 flex absolute bottom-0">
                <h4 className="text-white text-xl font-semibold leading-8">
                  Plumbing Services
                </h4>
                <p className="text-white text-sm font-normal leading-normal">
                  Our team of licensed and experienced plumbers is equipped to
                  handle everything
                </p>
              </div>
            </div>
            <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
              <img
                className="lg:h-full h-auto w-full object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1720518507.png"
                alt="Feature For Service Solutions image"
              />
              <div className="w-full p-7 flex-col justify-start items-start gap-2.5 flex absolute bottom-0">
                <h4 className="text-white text-xl font-semibold leading-8">
                  Electical Services
                </h4>
                <p className="text-white text-sm font-normal leading-normal">
                  We prioritize safety and compliance with all electrical codes,
                  using high-quality materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
