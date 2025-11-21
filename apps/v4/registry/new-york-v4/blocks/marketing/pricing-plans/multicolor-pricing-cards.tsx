export default function MulticolorPricingCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-5 lg:gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Choose the Perfect Pricing Plan
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                7 Days free trial. No credit card required.
              </h6>
            </div>
            <div className="flex items-center justify-center gap-4">
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-medium text-gray-900">
                Bill Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-violet-100 p-0.5 transition-colors duration-700 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-violet-600 before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-violet-100 checked:bg-none checked:before:translate-x-full checked:before:bg-violet-600"
              />
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-normal text-gray-500">
                Bill Yearly
              </label>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-3">
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-purple-100 px-4 pt-8 pb-5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-2 px-4">
                <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  Free Plan
                </h4>
                <span className="text-xs leading-normal font-normal text-gray-500">
                  For small companies.
                </span>
              </div>
              <div className="inline-flex w-full items-center justify-start rounded-xl bg-white p-3.5">
                <div className="inline-flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="inline-flex w-full items-end justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $60
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $0
                      </h2>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                        | Month
                      </h4>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                        | Year
                      </h4>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          AI advisor for a day
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          2 auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          24/7 Customer support
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-full bg-purple-100 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-purple-200">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-rose-100 px-4 pt-8 pb-5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-1.5 px-4">
                <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  Advance Plan
                </h4>
                <span className="text-xs leading-normal font-normal text-gray-500">
                  For small companies.
                </span>
              </div>
              <div className="inline-flex w-full items-center justify-start rounded-xl bg-white p-3.5">
                <div className="inline-flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="inline-flex w-full items-end justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $1600
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $150
                      </h2>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                        | Month
                      </h4>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                        | Year
                      </h4>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          AI advisor for a day
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          Unlimited tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          7 Day transaction clearing{" "}
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          Priority customer support
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-full bg-rose-100 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-rose-200">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-blue-100 px-4 pt-8 pb-5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-1.5 px-4">
                <h4 className="font-manrope text-2xl leading-9 font-bold text-black">
                  Pro Plan
                </h4>
                <span className="text-xs leading-normal font-normal text-gray-500">
                  For small companies.
                </span>
              </div>
              <div className="inline-flex w-full items-center justify-start rounded-xl bg-white p-3.5">
                <div className="inline-flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="inline-flex w-full items-end justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $2000
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $180
                      </h2>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                        | Month
                      </h4>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                        | Year
                      </h4>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          AI advisor for a day
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          Unlimited tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          7 Day transaction clearing{" "}
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-800">
                          Priority customer support
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-full bg-blue-100 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
