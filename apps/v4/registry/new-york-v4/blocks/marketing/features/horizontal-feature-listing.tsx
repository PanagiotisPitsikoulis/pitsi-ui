export default function HorizontalFeatureListing() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-3 lg:grid-cols-2 lg:gap-12 xl:gap-24">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Building Excellence is your reliable partner.
            </h2>
            <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-5">
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Building Excellence stands as your steadfast partner in the
                construction industry, dedicated to delivering exceptional
                outcomes.
              </p>
              <button className="group flex items-center justify-center rounded-full py-2.5">
                <span className="py-px pr-2 text-base leading-relaxed font-semibold text-orange-600">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 md:gap-7 lg:gap-10">
            <div className="grid grid-cols-1 items-center justify-start gap-4 border-b border-gray-300 pb-5 md:grid-cols-4 md:pb-7 lg:gap-9 lg:pb-10">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1725278564.png"
                alt="Renovation Building Feature image"
              />
              <h3 className="font-manrope text-center text-2xl leading-9 font-medium text-black md:text-start">
                Green Renovation Building
              </h3>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 md:text-start">
                Our skilled team delivers high-quality craftsmanship and
                personalized service. We bring your vision.
              </p>
              <div className="flex items-center justify-center md:justify-end">
                <button className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-orange-700 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="grid items-center justify-start gap-4 border-b border-gray-300 pb-5 md:grid-cols-4 md:pb-7 lg:gap-9 lg:pb-10">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1725278574.png"
                alt="Solar Panel Install Feature image"
              />
              <h2 className="font-manrope w-full text-center text-2xl leading-9 font-medium text-black md:text-start lg:w-[170px]">
                Solar Panel Install
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 md:text-start">
                Our skilled team delivers high-quality craftsmanship and
                personalized service. We bring your vision.
              </p>
              <div className="flex items-center justify-center md:justify-end">
                <button className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-orange-700 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="grid items-center justify-start gap-4 border-b border-gray-300 pb-5 md:grid-cols-4 md:pb-7 lg:gap-9 lg:pb-10">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1725278586.png"
                alt="Tiles Renovation Services Feature Image"
              />
              <h2 className="font-manrope text-center text-2xl leading-9 font-medium text-black md:text-start">
                Tiles Renovation Services
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 md:text-start">
                Whether for kitchens, bathrooms, or any other area, our skilled
                team ensures precision, quality craftsmanship.
              </p>
              <div className="flex items-center justify-center md:justify-end">
                <button className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-orange-700 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
