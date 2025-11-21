export default function PricingPlansAsTestimonials() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center justify-center gap-8 lg:flex lg:justify-between lg:gap-32">
          <div className="grid gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Transparent Pricing Simplified
            </h2>
            <p className="text-center text-lg leading-7 font-normal text-gray-500 lg:text-start">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <a
              className="tablink active tablink active bg-primary inline-block items-center justify-center rounded-full px-7 py-3 text-base font-semibold whitespace-nowrap text-white shadow transition-all duration-700 ease-in-out hover:bg-blue-800"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              Monthly
            </a>
            <a
              className="tablink hover:bg-primary inline-block items-center justify-center rounded-full bg-blue-300 px-7 py-3 text-base font-semibold whitespace-nowrap text-white shadow transition-all duration-700 ease-in-out"
              data-tab="tabs-with-background-2"
              role="tab"
            >
              Yearly
            </a>
          </div>
        </div>
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent"
        >
          <div className="relative flex items-center">
            {/*Slider Indicator*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="mx-auto flex w-full max-w-xl flex-col justify-between gap-10 rounded-3xl border border-blue-500 p-6 lg:max-w-3xl lg:flex-row lg:gap-12 lg:p-12 lg:px-12 lg:py-12 xl:max-w-4xl">
                    <div className="grid w-full gap-8">
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Free
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $0
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out hover:cursor-pointer">
                        <div className="group flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Advanced
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $150
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Team
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $180
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-3xl bg-blue-50 p-8">
                      <ul className="space-y-5 text-left text-base leading-relaxed font-normal text-cyan-900">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mx-auto flex w-full max-w-xl flex-col justify-between gap-10 rounded-3xl border border-blue-500 p-6 lg:max-w-3xl lg:flex-row lg:gap-12 lg:p-12 lg:px-12 lg:py-12 xl:max-w-4xl">
                    <div className="grid w-full gap-8">
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Free
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $0
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out hover:cursor-pointer">
                        <div className="group flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Advanced
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $170
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Team
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $210
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-3xl bg-blue-50 p-8">
                      <ul className="space-y-5 text-left text-base leading-relaxed font-normal text-cyan-900">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="slider-button-left"
                className="swiper-button-prev group hover:bg-primary hidden h-16 w-16 items-center justify-center rounded-full border border-solid border-blue-500 transition-all duration-500 lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group hover:bg-primary hidden h-16 w-16 items-center justify-center rounded-full border border-solid border-blue-500 transition-all duration-500 lg:flex"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent"
        >
          <div className="relative flex items-center">
            {/*Slider Indicator*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="mx-auto flex w-full max-w-xl flex-col justify-between gap-10 rounded-3xl border border-blue-500 p-6 lg:max-w-3xl lg:flex-row lg:gap-12 lg:p-12 lg:px-12 lg:py-12 xl:max-w-4xl">
                    <div className="grid w-full gap-8">
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Free
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $0
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out">
                        <div className="group flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Advanced
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $280
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Team
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $340
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-3xl bg-blue-50 p-8">
                      <ul className="space-y-5 text-left text-base leading-relaxed font-normal text-cyan-900">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mx-auto flex w-full max-w-xl flex-col justify-between gap-10 rounded-3xl border border-blue-500 p-6 lg:max-w-3xl lg:flex-row lg:gap-12 lg:p-12 lg:px-12 lg:py-12 xl:max-w-4xl">
                    <div className="grid w-full gap-8">
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 hover:cursor-pointer">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Free
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $0
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out">
                        <div className="group flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Advanced
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $310
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="group hover:bg-primary flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white p-4 transition-all duration-700 ease-in-out">
                        <div className="flex items-center justify-start gap-6">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h4 className="text-base leading-relaxed font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                              Team
                            </h4>
                            <div className="bg-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-2 py-1 transition-all duration-700 ease-in-out group-hover:bg-white">
                              <span className="text-xs font-normal text-white transition-all duration-700 ease-in-out group-hover:text-blue-500">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-end justify-end">
                          <h3 className="font-manrope shrink grow basis-0 text-right text-3xl leading-tight font-semibold text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white lg:text-2xl xl:text-3xl">
                            $380
                          </h3>
                          <span className="text-base leading-relaxed font-normal text-blue-500 transition-all duration-700 ease-in-out group-hover:text-white">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-3xl bg-blue-50 p-8">
                      <ul className="space-y-5 text-left text-base leading-relaxed font-normal text-cyan-900">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="slider-button-left"
                className="swiper-button-prev group hover:bg-primary hidden h-16 w-16 items-center justify-center rounded-full border border-solid border-blue-500 transition-all duration-500 lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group hover:bg-primary hidden h-16 w-16 items-center justify-center rounded-full border border-solid border-blue-500 transition-all duration-500 lg:flex"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
