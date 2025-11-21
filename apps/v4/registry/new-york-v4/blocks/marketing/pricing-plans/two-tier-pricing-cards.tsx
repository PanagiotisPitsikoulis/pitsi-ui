export default function TwoTierPricingCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-center gap-3 md:items-start lg:gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 md:text-start">
                Our pricing plan is perfectly suited for you
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                No commitment. No hidden charges
              </h6>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-center gap-5 rounded-xl border-b-2 border-gray-200 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-between gap-3.5">
                <div className="inline-flex flex-col items-start justify-start">
                  <h3 className="font-manrope text-2xl leading-9 font-medium text-indigo-600 group-hover:text-gray-900">
                    Free
                  </h3>
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900 group-hover:text-indigo-600">
                    $0
                    <span className="text-base leading-relaxed font-normal text-gray-500 group-hover:text-indigo-600">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-white">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="flex w-full flex-col items-start justify-start gap-3">
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    20GB Data Storage
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    2 Workspace
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    Not Customer support
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:gap-8">
            <div className="group inline-flex w-full flex-col items-start justify-center gap-5 rounded-xl border-b-2 border-gray-200 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-between gap-3.5">
                <div className="inline-flex flex-col items-start justify-start">
                  <h3 className="font-manrope text-2xl leading-9 font-medium text-indigo-600 group-hover:text-gray-900">
                    Regular
                  </h3>
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900 group-hover:text-indigo-600">
                    $40
                    <span className="text-base leading-relaxed font-normal text-gray-500 group-hover:text-indigo-600">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-white">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="flex w-full flex-col items-start justify-start gap-3">
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    60 Data Storage
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    8 Workspace
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    24/7 Customer support
                  </h5>
                </li>
              </ul>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-center gap-5 rounded-xl border-b-2 border-gray-200 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-between gap-3.5">
                <div className="inline-flex flex-col items-start justify-start">
                  <h3 className="font-manrope text-2xl leading-9 font-medium text-indigo-600 group-hover:text-gray-900">
                    Pro
                  </h3>
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900 group-hover:text-indigo-600">
                    $85
                    <span className="text-base leading-relaxed font-normal text-gray-500 group-hover:text-indigo-600">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-white">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="flex w-full flex-col items-start justify-start gap-3">
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    Unlimited Data Storage
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    50 Workspace
                  </h5>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h5 className="text-lg leading-relaxed font-normal text-gray-800">
                    24/7 Customer support
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
