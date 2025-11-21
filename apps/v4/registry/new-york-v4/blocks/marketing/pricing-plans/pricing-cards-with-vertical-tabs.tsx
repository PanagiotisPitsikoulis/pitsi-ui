export default function PricingCardsWithVerticalTabs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full flex-col items-center justify-start gap-3 pb-10 sm:w-96 lg:w-full lg:gap-4 lg:pb-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
            Select from a variety of tailored pricing options designed to meet
            your specific needs and budget. Whether you're an individual, small
            business, or enterprise, our plans offer comprehensive features.
          </p>
        </div>
        <div className="tabs mx-auto grid w-full items-center justify-center gap-9 rounded-3xl border border-indigo-300 bg-white p-5 sm:w-fit sm:p-6 lg:w-full lg:grid-cols-2 lg:items-start lg:justify-start lg:p-8">
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:gap-11">
            <a
              className="tab-active:border-transparent tab-active:bg-indigo-500 tab-active:text-white tab-active:rounded-3xl tablink active flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 bg-transparent p-6 whitespace-nowrap transition-all duration-700 ease-in-out lg:p-8"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              <div className="pointer-events-none inline-flex w-full items-center justify-between gap-6">
                <div className="flex items-center justify-start gap-5">
                  <div className="iconBg tablink-active:bg-white flex h-[68px] w-[68px] items-center justify-center rounded-full bg-indigo-50 transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h4 className="tablink-active:text-white text-xl leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                      Free Plan
                    </h4>
                    <span className="tablink-active:text-gray-200 text-sm leading-normal font-normal text-gray-600 transition-all duration-700 ease-in-out">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-start">
                  <h2 className="tablink-active:text-white font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out">
                    $0
                  </h2>
                  <h6 className="tablink-active:text-white text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out">
                    /Mo
                  </h6>
                </div>
              </div>
            </a>
            <a
              className="group tab-active:border-transparent tab-active:bg-indigo-500 tab-active:rounded-3xl tablink flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 bg-transparent p-6 whitespace-nowrap transition-all duration-700 ease-in-out lg:p-8"
              data-tab="tabs-with-background-2"
              role="tab"
            >
              <div className="pointer-events-none inline-flex w-full items-center justify-between gap-6">
                <div className="flex items-center justify-start gap-5">
                  <div className="iconBg flex h-[68px] w-[68px] items-center justify-center rounded-full bg-indigo-50 transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h4 className="tablink-active:text-white text-xl leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                      Business Plan
                    </h4>
                    <span className="tablink-active:text-gray-200 text-sm leading-normal font-normal text-gray-600 transition-all duration-700 ease-in-out">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-start">
                  <h2 className="tablink-active:text-white font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out">
                    $150
                  </h2>
                  <h6 className="tablink-active:text-white text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out">
                    /Mo
                  </h6>
                </div>
              </div>
            </a>
            <a
              className="group tab-active:border-transparent tab-active:bg-indigo-500 tab-active:rounded-3xl tablink flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 bg-transparent p-6 whitespace-nowrap transition-all duration-700 ease-in-out lg:p-8"
              data-tab="tabs-with-background-3"
              role="tab"
            >
              <div className="pointer-events-none inline-flex w-full items-center justify-between gap-6">
                <div className="flex items-center justify-start gap-5">
                  <div className="iconBg flex h-[68px] w-[68px] items-center justify-center rounded-full bg-indigo-50 transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h4 className="tablink-active:text-white text-xl leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                      Enterprise Plan
                    </h4>
                    <span className="tablink-active:text-gray-200 text-sm leading-normal font-normal text-gray-600 transition-all duration-700 ease-in-out">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-start">
                  <h2 className="tablink-active:text-white font-manrope text-right text-4xl leading-normal font-semibold text-black transition-all duration-700 ease-in-out">
                    $200
                  </h2>
                  <h6 className="tablink-active:text-white text-base leading-relaxed font-normal text-black transition-all duration-700 ease-in-out">
                    /Mo
                  </h6>
                </div>
              </div>
            </a>
          </div>
          <div
            id="tabs-with-background-1"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-1"
            className="tabcontent w-full"
          >
            <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl bg-indigo-500 px-4 pt-8 pb-5">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start gap-2 px-4">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    Free Plan
                  </h3>
                  <span className="text-xs leading-normal font-normal text-gray-200">
                    For small companies.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start justify-start rounded-2xl bg-white p-3.5">
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="flex w-full flex-col items-start justify-start gap-5">
                      <div className="inline-flex w-full items-center justify-start gap-3">
                        <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                          $0
                        </h2>
                        <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                          | Month
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
                            7 Day transaction clearing{" "}
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
                    <button className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-600">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Purchase Plan
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
            <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl bg-indigo-500 px-4 pt-8 pb-5">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start gap-2 px-4">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    Business Plan
                  </h3>
                  <span className="text-xs leading-normal font-normal text-gray-200">
                    For small companies.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start justify-start rounded-2xl bg-white p-3.5">
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="flex w-full flex-col items-start justify-start gap-5">
                      <div className="inline-flex w-full items-center justify-start gap-3">
                        <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                          $150
                        </h2>
                        <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                          | Month
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
                            7 Day transaction clearing{" "}
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
                    <button className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-600">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Purchase Plan
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-background-3"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-3"
            className="tabcontent w-full"
          >
            <div className="inline-flex w-full flex-col items-start justify-start rounded-3xl bg-indigo-500 px-4 pt-8 pb-5">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start gap-2 px-4">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    Enterprise Plan
                  </h3>
                  <span className="text-xs leading-normal font-normal text-gray-200">
                    For small companies.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start justify-start rounded-2xl bg-white p-3.5">
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="flex w-full flex-col items-start justify-start gap-5">
                      <div className="inline-flex w-full items-center justify-start gap-3">
                        <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                          $200
                        </h2>
                        <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                          | Month
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
                            7 Day transaction clearing{" "}
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
                    <button className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-600">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Purchase Plan
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
