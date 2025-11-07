export default function PricingWithImageCard() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3 sm:w-96 lg:w-full lg:gap-4">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-white lg:text-4xl lg:leading-normal">
              Our Pricing Plan provides a selection of tailored
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-200 lg:max-w-4xl">
              Our Pricing Plan provides a selection of tailored options to suit
              various needs and budgets. Whether you are an individual small
              business, or large enterprise, each plan offers
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-3 xl:gap-8">
            <div className="group mx-auto inline-flex h-full w-full flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-b from-teal-950 to-emerald-950 pb-9 sm:w-96 lg:w-full">
              <img
                className="h-auto w-full rounded-tl-3xl rounded-tr-3xl object-cover shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] lg:h-full"
                src="https://pagedone.io/asset/uploads/1721973288.png"
              />
              <div className="flex w-full flex-col items-start justify-start gap-6 px-5">
                <p className="font-manrope text-2xl leading-9 font-semibold text-white">
                  Unlock the full potential of artificial intelligence tailored
                  to your organization.
                </p>
                <button className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-300">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Contact Sale
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto flex h-full w-full items-center justify-center rounded-3xl border border-gray-700 px-8 py-9 transition-all duration-700 ease-in-out hover:border-gray-500 sm:w-96 lg:w-full">
              <div className="inline-flex w-full flex-col items-start justify-start gap-9">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="inline-flex items-center justify-start gap-3">
                    <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
                      $100
                    </h2>
                    <h4 className="text-center text-xl leading-8 font-normal text-gray-200">
                      | Month
                    </h4>
                  </div>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    Premium Plan
                  </h3>
                </div>
                <ul className="flex w-full flex-col items-start justify-start gap-5">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      AI advisor for a day
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      2 auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      7 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      24/7 Customer support
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      Exclusive Webinar and Training
                    </h6>
                  </li>
                </ul>
                <button className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-300">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto flex h-full w-full items-center justify-center rounded-3xl border border-gray-700 px-8 py-9 transition-all duration-700 ease-in-out hover:border-gray-500 sm:w-96 lg:w-full">
              <div className="inline-flex w-full flex-col items-start justify-start gap-9">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="inline-flex w-full items-center justify-start gap-3">
                    <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
                      $200
                    </h2>
                    <h4 className="text-center text-xl leading-8 font-normal text-gray-200">
                      | Month
                    </h4>
                  </div>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    Enterprise plan
                  </h3>
                </div>
                <ul className="flex w-full flex-col items-start justify-start gap-5">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      AI advisor for a day
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      2 auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      7 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      24/7 Customer support
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-300">
                      Exclusive Webinar and Training
                    </h6>
                  </li>
                </ul>
                <button className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-300">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Select Plan
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
