export default function RoundedFeatureListTabsWithCoverImages() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-3 pb-10 lg:gap-5 lg:pb-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
            Comprehensive
            <span className="text-indigo-600">Services and Benefits</span>
          </h2>
          <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
            We pride ourselves on delivering a range of tailored services
            designed to meet diverse needs and exceed expectations. From
            strategic consulting and creative solutions to robust marketing
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="mb-3 flex w-full flex-nowrap items-center justify-between border-gray-200 p-1 transition-all duration-700 ease-in-out lg:mb-0 lg:rounded-full lg:border">
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink active flex w-full items-center justify-center gap-2 rounded-lg px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-600 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    <span className="text-current transition-all duration-500 group-hover:text-indigo-600 group-active:text-indigo-600">
                      {/* SVG removed */}
                    </span>
                    Release Confidently
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center gap-2 rounded-lg px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-600 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    <span className="text-current transition-all duration-700 ease-in-out group-hover:text-indigo-600 group-active:text-indigo-600">
                      {/* SVG removed */}
                    </span>
                    Powerful Analytic
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center gap-2 rounded-lg px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-600 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    <span className="text-current transition-all duration-700 ease-in-out group-hover:text-indigo-600 group-active:text-indigo-600">
                      {/* SVG removed */}
                    </span>
                    Live Project Report
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center gap-2 rounded-lg px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-600 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    <span className="text-current transition-all duration-700 ease-in-out group-hover:text-indigo-600 group-active:text-indigo-600">
                      {/* SVG removed */}
                    </span>
                    Case Study
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-10 lg:pt-12">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="grid w-full grid-cols-1 items-start justify-start gap-10 lg:grid-cols-2 xl:gap-12">
                  <img
                    className="mx-auto h-auto w-full rounded-3xl lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-11">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <h2 className="font-manrope text-3xl leading-normal font-semibold text-gray-900">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 lg:gap-6 xl:gap-8">
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Easy login :
                          <span className="font-normal text-gray-500">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Live market :
                          <span className="font-normal text-gray-500">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          User friendly UI :
                          <span className="font-normal text-gray-500">
                            Experience the convenience and ease of our
                            platform's user-friendly design
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-2"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <div className="grid w-full grid-cols-1 items-start justify-start gap-10 lg:grid-cols-2 xl:gap-12">
                  <img
                    className="mx-auto h-auto w-full rounded-3xl lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-11">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <h2 className="font-manrope text-3xl leading-normal font-semibold text-gray-900">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 lg:gap-6 xl:gap-8">
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Easy login :
                          <span className="font-normal text-gray-500">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Live market :
                          <span className="font-normal text-gray-500">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          User friendly UI :
                          <span className="font-normal text-gray-500">
                            Experience the convenience and ease of our
                            platform's user-friendly design
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-3"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <div className="grid w-full grid-cols-1 items-start justify-start gap-10 lg:grid-cols-2 xl:gap-12">
                  <img
                    className="mx-auto h-auto w-full rounded-3xl lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-11">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <h2 className="font-manrope text-3xl leading-normal font-semibold text-gray-900">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 lg:gap-6 xl:gap-8">
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Easy login :
                          <span className="font-normal text-gray-500">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Live market :
                          <span className="font-normal text-gray-500">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          User friendly UI :
                          <span className="font-normal text-gray-500">
                            Experience the convenience and ease of our
                            platform's user-friendly design
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-4"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <div className="grid w-full grid-cols-1 items-start justify-start gap-10 lg:grid-cols-2 xl:gap-12">
                  <img
                    className="mx-auto h-auto w-full rounded-3xl lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-11">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <h2 className="font-manrope text-3xl leading-normal font-semibold text-gray-900">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 lg:gap-6 xl:gap-8">
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Easy login :
                          <span className="font-normal text-gray-500">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          Live market :
                          <span className="font-normal text-gray-500">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="inline-flex items-center justify-start gap-4">
                        <div className="relative h-[30px] w-[30px]">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-sm leading-normal font-medium text-gray-900">
                          User friendly UI :
                          <span className="font-normal text-gray-500">
                            Experience the convenience and ease of our
                            platform's user-friendly design
                          </span>
                        </h6>
                      </div>
                    </div>
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
