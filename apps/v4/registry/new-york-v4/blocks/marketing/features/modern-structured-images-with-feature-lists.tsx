export default function ModernStructuredImagesWithFeatureLists() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-3.5 pb-10 lg:pb-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Medical Services for Your Health and Well-being
          </h2>
          <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-2xl">
            Our comprehensive range of services, delivered by skilled and
            compassionate professionals, ensures that you receive
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="mb-3 flex w-full flex-nowrap items-center justify-between gap-5 rounded-lg border-gray-200 p-2.5 transition-all duration-700 ease-in-out md:border lg:mb-0">
                <li className="w-full">
                  <a
                    className="group tablink active flex w-full items-center justify-center border-r border-gray-200 pr-5 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Operation Theater
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tablink flex w-full items-center justify-center border-r border-gray-200 pr-5 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Emergency Service
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tablink flex w-full items-center justify-center border-r border-gray-200 pr-5 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Diagnostic Services
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tablink flex w-full items-center justify-center text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    Inpatient Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-12">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Operation Theater
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          General Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          ICU Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Ambulance Service
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Operation Theater
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          General Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          ICU Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Ambulance Service
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Operation Theater
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          General Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          ICU Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Ambulance Service
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Operation Theater
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          General Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          ICU Vod
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex w-full flex-col items-center justify-end rounded-xl">
                    <img
                      className="h-auto w-full rounded-t-xl object-cover lg:h-[352px]"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="absolute -bottom-[1px] inline-flex w-full items-center justify-start rounded-b-xl bg-white px-4 py-2">
                      <div className="flex w-full items-center justify-between gap-4 xl:gap-11">
                        <h6 className="py-1.5 text-sm leading-relaxed font-medium text-black">
                          Ambulance Service
                        </h6>
                        <button className="group flex h-6 w-6 items-center justify-center rounded-full border border-black shadow-xs">
                          {/* SVG removed */}
                        </button>
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
