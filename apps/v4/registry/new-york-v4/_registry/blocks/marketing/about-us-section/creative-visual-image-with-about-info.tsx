export default function CreativeVisualImageWithAboutInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start gap-9 xl:flex-row">
          <div className="mx-auto grid w-full max-w-[620px] grid-cols-2 items-center justify-center gap-5 lg:justify-start">
            <img
              className="h-full w-full rounded-full object-cover"
              src="https://pagedone.io/asset/uploads/1724149012.png"
              alt="About Us image"
            />
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <img
                className="h-auto w-auto rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-3xl object-cover lg:w-full"
                src="https://pagedone.io/asset/uploads/1724149022.png"
                alt="About Us image"
              />
              <img
                className="h-auto w-auto rounded-tl-3xl rounded-tr-full rounded-br-full rounded-bl-full object-cover lg:w-full"
                src="https://pagedone.io/asset/uploads/1724149032.png"
                alt="About Us image"
              />
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-10">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <div className="flex flex-col items-center justify-start gap-1.5 lg:items-start">
                  <h5 className="text-center text-lg leading-relaxed font-normal text-indigo-600 lg:text-start">
                    WHO WE ARE
                  </h5>
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                    Bringing You Flavors That Delight
                  </h2>
                </div>
                <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-[560px] lg:text-start">
                  Experience a culinary journey like no other with our menu,
                  where every dish is crafted to delight your senses. We’re
                  dedicated to bringing you flavors that excite, with fresh
                  ingredients and authentic recipes that leave a lasting
                  impression.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 flex-col items-start justify-center gap-5 sm:grid-cols-2">
                <div className="flex w-full items-center justify-start gap-2.5 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-indigo-600">
                    90%
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Repeat Customer
                  </h6>
                </div>
                <div className="flex w-full items-center justify-start gap-2.5 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-indigo-600">
                    94%
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Freshness &amp; Quality
                  </h6>
                </div>
                <div className="flex w-full items-center justify-start gap-2.5 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                    20
                    <span className="font-inter text-xl leading-8 font-medium">
                      min
                    </span>
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Min. Delivery Time
                  </h6>
                </div>
                <div className="flex w-full items-center justify-start gap-2.5 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-indigo-600">
                    500+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Positive Review
                  </h6>
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-lg leading-relaxed font-semibold text-white">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
