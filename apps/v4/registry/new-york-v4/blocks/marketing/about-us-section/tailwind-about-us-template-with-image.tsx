export default function TailwindAboutUsTemplateWithImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-7 lg:flex-row">
            <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                About Us
              </h2>
              <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl lg:text-start">
                We are dedicated to crafting innovative solutions and delivering
                exceptional service to drive success and growth for our clients.
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-700">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-4 lg:grid-cols-2">
            <img
              className="h-auto w-full rounded-2xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1723872854.png"
              alt="About Us image"
            />
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-2xl bg-gray-100 p-8 max-[290px]:p-4 lg:gap-20">
              <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900 sm:text-start">
                How We’ve Transformed to Propel Business
                <span className="text-emerald-600">Success</span>
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <p className="text-center text-base leading-relaxed font-normal text-gray-500 sm:text-start">
                  Through continuous innovation and strategic adaptation, we've
                  transformed our approach to propel businesses toward greater
                  success and growth.
                </p>
                <div className="grid w-full grid-cols-1 items-start justify-start gap-4 sm:grid-cols-3 sm:gap-3">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      26
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Year of Experience
                    </h6>
                  </div>
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      125+
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Completed Project
                    </h6>
                  </div>
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      10+
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Award Won
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
