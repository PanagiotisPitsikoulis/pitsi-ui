export default function RoundedFeatureListTabsWithCoverImages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-5 gap-3 flex lg:pb-12 pb-10">
          <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
            Comprehensive
            <span className="text-indigo-600">Services and Benefits</span>
          </h2>
          <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
            We pride ourselves on delivering a range of tailored services
            designed to meet diverse needs and exceed expectations. From
            strategic consulting and creative solutions to robust marketing
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="w-full p-1 flex flex-nowrap items-center justify-between transition-all duration-700 ease-in-out lg:rounded-full lg:border border-gray-200 lg:mb-0 mb-3">
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center gap-2 py-2 px-7 rounded-lg text-base font-medium text-gray-600 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    <span className="transition-all duration-500 group-hover:text-indigo-600 group-active:text-indigo-600 text-current">
                      {/* SVG removed */}
                    </span>
                    Release Confidently
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center gap-2 py-2 px-7 rounded-lg text-base font-medium text-gray-600 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    <span className="text-current group-hover:text-indigo-600 group-active:text-indigo-600 transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </span>
                    Powerful Analytic
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center gap-2 py-2 px-7 rounded-lg text-base font-medium text-gray-600 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    <span className="text-current group-hover:text-indigo-600 group-active:text-indigo-600 transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </span>
                    Live Project Report
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center gap-2 py-2 px-7 rounded-lg text-base font-medium text-gray-600 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    <span className="text-current group-hover:text-indigo-600 group-active:text-indigo-600 transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </span>
                    Case Study
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:pt-12 pt-10">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="mx-auto lg:h-full h-auto w-full rounded-3xl"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="w-full flex-col justify-start items-start lg:gap-11 gap-7 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <h2 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="w-full flex-col justify-start items-start xl:gap-8 lg:gap-6 gap-4 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Easy login :
                          <span className="text-gray-500 font-normal">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Live market :
                          <span className="text-gray-500 font-normal">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          User friendly UI :
                          <span className="text-gray-500 font-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="mx-auto lg:h-full h-auto w-full rounded-3xl"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="w-full flex-col justify-start items-start lg:gap-11 gap-7 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <h2 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="w-full flex-col justify-start items-start xl:gap-8 lg:gap-6 gap-4 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Easy login :
                          <span className="text-gray-500 font-normal">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Live market :
                          <span className="text-gray-500 font-normal">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          User friendly UI :
                          <span className="text-gray-500 font-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="mx-auto lg:h-full h-auto w-full rounded-3xl"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="w-full flex-col justify-start items-start lg:gap-11 gap-7 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <h2 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="w-full flex-col justify-start items-start xl:gap-8 lg:gap-6 gap-4 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Easy login :
                          <span className="text-gray-500 font-normal">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Live market :
                          <span className="text-gray-500 font-normal">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          User friendly UI :
                          <span className="text-gray-500 font-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                  <img
                    className="mx-auto lg:h-full h-auto w-full rounded-3xl"
                    src="https://pagedone.io/asset/uploads/1720432557.png"
                    alt="Advanced Digital Solutions feature image"
                  />
                  <div className="w-full flex-col justify-start items-start lg:gap-11 gap-7 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <h2 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                        Visionary Ideas with Advanced Digital Solutions
                      </h2>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        It represents a vision-driven strategy where creative
                        and ambitious ideas are leveraged alongside
                        sophisticated digital tools and platforms.
                      </p>
                    </div>
                    <div className="w-full flex-col justify-start items-start xl:gap-8 lg:gap-6 gap-4 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Easy login :
                          <span className="text-gray-500 font-normal">
                            Get the most out of platform by leveraging our easy
                            login capabilities
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          Live market :
                          <span className="text-gray-500 font-normal">
                            Stay ahead of the game with our platform's real-time
                            market data and analysis
                          </span>
                        </h6>
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-gray-900 text-sm font-medium leading-normal">
                          User friendly UI :
                          <span className="text-gray-500 font-normal">
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
  );
}
