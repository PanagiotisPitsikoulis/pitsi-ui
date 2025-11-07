export default function PricingPlanWithToggleSwitch() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-4 lg:gap-9">
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
                className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-indigo-100 p-0.5 transition-colors duration-700 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-indigo-600 before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-indigo-100 checked:bg-none checked:before:translate-x-full checked:before:bg-indigo-600"
              />
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-normal text-gray-500">
                Bill Yearly
              </label>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
            <div className="group inline-flex w-full flex-col items-start justify-start rounded-3xl bg-gray-100 from-indigo-600 to-violet-500 p-5 transition-all ease-in-out hover:bg-gradient-to-t sm:p-8 lg:p-5 xl:p-8">
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        Business Plan
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        For small companies.
                      </h6>
                    </div>
                    <div className="flex items-end justify-end">
                      <h2 className="text2 font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        $150
                      </h2>
                      <h2 className="text1 font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        $1600
                      </h2>
                      <h6 className="text2 text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        /Mo
                      </h6>
                      <h6 className="text1 text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        /Ye
                      </h6>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-2 lg:gap-3 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-white">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Purchase
                  </span>
                </button>
              </div>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start rounded-3xl bg-gray-100 from-indigo-600 to-violet-500 p-5 transition-all ease-in-out hover:bg-gradient-to-t sm:p-8 lg:p-5 xl:p-8">
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        Enterprise Plan
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        For small companies.
                      </h6>
                    </div>
                    <div className="flex items-end justify-end">
                      <h2 className="text2 font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        $200
                      </h2>
                      <h2 className="text1 font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        $2100
                      </h2>
                      <h6 className="text2 text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        /Mo
                      </h6>
                      <h6 className="text1 text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                        /Ye
                      </h6>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-2 lg:gap-3 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out group-hover:text-white">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-white">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Purchase
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
