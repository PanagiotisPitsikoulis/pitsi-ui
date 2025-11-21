export default function PricingWithAToggleSwitch() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Choose the Perfect Pricing Plan
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-5xl">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual,
                small business, or large enterprise, each plan offers
                comprehensive
              </p>
            </div>
            <div className="mx-auto flex max-w-sm items-center justify-center rounded-full bg-gray-100 p-1.5">
              <a
                className="tab-active:text-white tab-active:bg-gray-900 tablink active inline-block items-center justify-center rounded-full px-7 py-3 text-center text-base leading-6 font-semibold whitespace-nowrap text-gray-400 transition-all duration-700"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="tab-active:text-white tab-active:bg-gray-900 tablink inline-block items-center justify-center rounded-full px-7 py-3 text-center text-base leading-6 font-semibold whitespace-nowrap text-gray-400 transition-all duration-700"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Bill Monthly
              </a>
            </div>
          </div>
          <div
            id="tabs-with-background-1"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-1"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="font-manrope text-3xl leading-normal font-semibold text-black">
                      Premium Business
                    </h3>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-6 border-b border-gray-200 pb-8 sm:grid-cols-2 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                    <div className="flex w-full items-center justify-center gap-1.5 sm:justify-start">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $900
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Year
                      </h4>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-7 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="font-manrope text-3xl leading-normal font-semibold text-black">
                      Team Business
                    </h3>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-6 border-b border-gray-200 pb-8 sm:grid-cols-2 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                    <div className="flex w-full items-center justify-center gap-1.5 sm:justify-start">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $2100
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Year
                      </h4>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-7 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="font-manrope text-3xl leading-normal font-semibold text-black">
                      Premium Business
                    </h3>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-6 border-b border-gray-200 pb-8 sm:grid-cols-2 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                    <div className="flex w-full items-center justify-center gap-1.5 sm:justify-start">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $100
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Month
                      </h4>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-7 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="font-manrope text-3xl leading-normal font-semibold text-black">
                      Team Business
                    </h3>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-6 border-b border-gray-200 pb-8 sm:grid-cols-2 xl:gap-9">
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-3">
                        <div className="flex items-start justify-start">
                          <div className="flex h-[22px] w-[22px] items-center justify-center gap-1.5 rounded-full bg-gray-700">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                    <div className="flex w-full items-center justify-center gap-1.5 sm:justify-start">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                        $200
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Month
                      </h4>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-7 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                        Buy Now
                      </span>
                    </button>
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
