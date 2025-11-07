export default function HorizontalFeatureTabsWithImages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3.5 flex lg:pb-12 pb-10">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Medical Services for Your Health and Well-being
          </h2>
          <p className="lg:max-w-2xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
            Our comprehensive range of services, delivered by skilled and
            compassionate professionals, ensures that you receive
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="w-full p-2.5 flex gap-5 flex-nowrap items-center justify-between transition-all duration-700 ease-in-out rounded-lg md:border border-gray-200 lg:mb-0 mb-3">
                <li className="w-full">
                  <a
                    className="group flex items-center justify-center text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full whitespace-nowrap tablink pr-5 border-r border-gray-200 active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Operation Theater
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group flex items-center justify-center text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full whitespace-nowrap tablink pr-5 border-r border-gray-200"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Emergency Service
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group flex items-center justify-center text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full whitespace-nowrap tablink pr-5 border-r border-gray-200"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Diagnostic Services
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group flex items-center justify-center text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full whitespace-nowrap tablink"
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
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Operation Theater
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          General Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          ICU Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Ambulance Service
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Operation Theater
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          General Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          ICU Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Ambulance Service
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Operation Theater
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          General Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          ICU Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Ambulance Service
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
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
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522214.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Operation Theater
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522225.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          General Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522235.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          ICU Vod
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-xl flex-col justify-end items-center inline-flex relative">
                    <img
                      className="rounded-t-xl w-full lg:h-[352px] h-auto object-cover"
                      src="https://pagedone.io/asset/uploads/1720522246.png"
                      alt="Feature For Medical Services image"
                    />
                    <div className="w-full px-4 py-2 bg-white rounded-b-xl justify-start items-center inline-flex absolute -bottom-[1px]">
                      <div className="w-full justify-between items-center xl:gap-11 gap-4 flex">
                        <h6 className="py-1.5 text-black text-sm font-medium leading-relaxed">
                          Ambulance Service
                        </h6>
                        <button className="group w-6 h-6 shadow-xs border border-black rounded-full justify-center items-center flex">
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
  );
}
