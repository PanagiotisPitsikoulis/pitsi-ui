export default function PricingPlansAsTestimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full lg:justify-between justify-center items-center lg:gap-32 gap-8 lg:flex grid">
          <div className="grid gap-4">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Transparent Pricing Simplified
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-7 lg:text-start text-center">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="flex lg:justify-start justify-center items-center gap-3">
            <a
              className="inline-block tablink active py-3 hover:bg-blue-800 bg-blue-500 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center px-7 text-white text-base font-semibold tablink whitespace-nowrap active"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              Monthly
            </a>
            <a
              className="inline-block tablink whitespace-nowrap text-white text-base font-semibold px-7 py-3 hover:bg-blue-500 transition-all duration-700 ease-in-out bg-blue-300 rounded-full shadow justify-center items-center"
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
                  <div className="lg:p-12 p-6 rounded-3xl border border-blue-500  max-w-xl mx-auto flex justify-between lg:gap-12 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="w-full grid gap-8">
                      <div className="w-full p-4 group hover:cursor-pointer hover:bg-blue-500  border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Free
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $0
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:cursor-pointer hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="group justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Advanced
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $150
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:cursor-pointer hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Team
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $180
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-blue-50 rounded-3xl p-8">
                      <ul className="space-y-5 text-left text-cyan-900 text-base font-normal leading-relaxed">
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
                  <div className="lg:p-12 p-6 rounded-3xl border border-blue-500  max-w-xl mx-auto flex justify-between lg:gap-12 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="w-full grid gap-8">
                      <div className="w-full p-4 group hover:cursor-pointer hover:bg-blue-500  border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Free
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $0
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:cursor-pointer hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="group justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Advanced
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $170
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:cursor-pointer hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Team
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $210
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-blue-50 rounded-3xl p-8">
                      <ul className="space-y-5 text-left text-cyan-900 text-base font-normal leading-relaxed">
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
                className="swiper-button-prev group hidden  justify-center items-center border border-solid border-blue-500 w-16 h-16 transition-all duration-500 rounded-full hover:bg-blue-500 lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group hidden justify-center items-center w-16 h-16 transition-all duration-500 rounded-full border border-solid border-blue-500 hover:bg-blue-500 lg:flex lg:flex"
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
                  <div className="lg:p-12 p-6 rounded-3xl border border-blue-500  max-w-xl mx-auto flex justify-between lg:gap-12 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="w-full grid gap-8">
                      <div className="w-full p-4 group hover:cursor-pointer hover:bg-blue-500  border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Free
                            </h4>
                            <div className="px-2 py-1 rounded-2xl bg-blue-500 justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $0
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="group justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Advanced
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $280
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Team
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $340
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-blue-50 rounded-3xl p-8">
                      <ul className="space-y-5 text-left text-cyan-900 text-base font-normal leading-relaxed">
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
                  <div className="lg:p-12 p-6 rounded-3xl border border-blue-500  max-w-xl mx-auto flex justify-between lg:gap-12 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="w-full grid gap-8">
                      <div className="w-full p-4 group hover:cursor-pointer hover:bg-blue-500  border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Free
                            </h4>
                            <div className="px-2 py-1 rounded-2xl bg-blue-500 justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $0
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="group justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Advanced
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $310
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                      <div className="w-full group hover:bg-blue-500 ease-in-out transition-all duration-700 p-4 border border-blue-500 bg-white rounded-xl flex justify-between items-center">
                        <div className="justify-start items-center gap-6 flex">
                          {/* SVG removed */}
                          {/* SVG removed */}
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h4 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                              Team
                            </h4>
                            <div className="px-2 py-1 bg-blue-500 rounded-2xl justify-center items-center gap-2.5 inline-flex group-hover:bg-white ease-in-out transition-all duration-700">
                              <span className="text-white text-xs font-normal group-hover:text-blue-500 ease-in-out transition-all duration-700">
                                Save 12%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="justify-end items-end inline-flex">
                          <h3 className="grow shrink basis-0 text-right text-blue-500 xl:text-3xl lg:text-2xl text-3xl font-semibold font-manrope leading-tight group-hover:text-white ease-in-out transition-all duration-700">
                            $380
                          </h3>
                          <span className="text-blue-500 text-base font-normal leading-relaxed group-hover:text-white ease-in-out transition-all duration-700">
                            /Mo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-blue-50 rounded-3xl p-8">
                      <ul className="space-y-5 text-left text-cyan-900 text-base font-normal leading-relaxed">
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
                className="swiper-button-prev group hidden  justify-center items-center border border-solid border-blue-500 w-16 h-16 transition-all duration-500 rounded-full hover:bg-blue-500 lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group hidden justify-center items-center w-16 h-16 transition-all duration-500 rounded-full border border-solid border-blue-500 hover:bg-blue-500 lg:flex lg:flex"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
