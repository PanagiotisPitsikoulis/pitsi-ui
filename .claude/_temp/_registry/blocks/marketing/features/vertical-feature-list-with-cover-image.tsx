export default function VerticalFeatureListWithCoverImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="justify-start items-center lg:gap-5 gap-3 grid lg:grid-cols-2 grid-cols-1 lg:pb-12 pb-10">
          <div className="flex-col justify-center lg:items-start items-center gap-1.5 inline-flex">
            <div className="justify-center lg:items-start items-center inline-flex">
              <div className="px-2.5 py-0.5 bg-indigo-50 rounded-full justify-start items-center gap-1.5 flex">
                <span className="text-center text-indigo-600 text-xs font-medium leading-normal">
                  Features
                </span>
              </div>
            </div>
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Primary Attributes
            </h2>
          </div>
          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
            Primary Attributes include essential features that define the core
            performance of our services, ensuring quality and reliability.
          </p>
        </div>
        <div className="relative">
          <div className="tabs">
            <div className="flex items-center justify-end overflow-auto absolute right-0 top-0 z-10">
              <ul className="sm:w-72 w-52 flex flex-col items-center justify-between transition-all duration-700 ease-in-out border-l-8 border-b-8 border-white rounded-lg bg-white lg:mb-0 mb-3">
                <li className="w-full border-b border-gray-300 rounded-t-lg">
                  <a
                    className="group w-full lg:py-7 py-5 flex items-center justify-center text-base rounded-t-lg font-medium text-white bg-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 hover:text-lg hover:font-semibold hover:bg-amber-400 whitespace-nowrap tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Electrical Services
                  </a>
                </li>
                <li className="w-full border-b border-gray-300">
                  <a
                    className="group w-full lg:py-7 py-5 flex items-center justify-center text-base font-medium text-white bg-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 hover:text-lg hover:font-semibold hover:bg-amber-400 whitespace-nowrap tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Carpenter Services
                  </a>
                </li>
                <li className="w-full border-b border-gray-300">
                  <a
                    className="group w-full lg:py-7 py-5 flex items-center justify-center text-base font-medium text-white bg-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 hover:text-lg hover:font-semibold hover:bg-amber-400 whitespace-nowrap tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Plumbing Services
                  </a>
                </li>
                <li className="w-full rounded-b-lg">
                  <a
                    className="group w-full lg:py-7 py-5 flex items-center justify-center text-base rounded-b-lg font-medium text-white bg-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 hover:text-lg hover:font-semibold hover:bg-amber-400 whitespace-nowrap tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    Cleaning Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="justify-start items-start inline-flex relative">
                  <img
                    className="h-[536px] object-cover rounded-2xl"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="p-5 rounded-2xl flex-col justify-end items-start gap-14 inline-flex absolute bottom-0">
                    <div className="lg:pl-5 lg:pb-5 flex-col justify-end items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-3.5 flex">
                        <h3 className="text-amber-400 text-3xl font-bold font-manrope leading-normal">
                          Electrical Services
                        </h3>
                        <p className="lg:max-w-lg sm:max-w-sm w-full text-gray-50 text-sm font-normal leading-snug">
                          Our electrical services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-black text-base font-normal leading-relaxed whitespace-nowrap">
                          Read More
                        </span>
                      </button>
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
                <div className="justify-start items-start inline-flex relative">
                  <img
                    className="h-[536px] object-cover rounded-2xl"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="p-5 rounded-2xl flex-col justify-end items-start gap-14 inline-flex absolute bottom-0">
                    <div className="lg:pl-5 lg:pb-5 flex-col justify-end items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-3.5 flex">
                        <h3 className="text-amber-400 text-3xl font-bold font-manrope leading-normal">
                          Carpenter Services
                        </h3>
                        <p className="lg:max-w-lg sm:max-w-sm w-full text-gray-50 text-sm font-normal leading-snug">
                          Our Carpenter Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-black text-base font-normal leading-relaxed whitespace-nowrap">
                          Read More
                        </span>
                      </button>
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
                <div className="justify-start items-start inline-flex relative">
                  <img
                    className="h-[536px] object-cover rounded-2xl"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="p-5 rounded-2xl flex-col justify-end items-start gap-14 inline-flex absolute bottom-0">
                    <div className="lg:pl-5 lg:pb-5 flex-col justify-end items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-3.5 flex">
                        <h3 className="text-amber-400 text-3xl font-bold font-manrope leading-normal">
                          Plumbing Services
                        </h3>
                        <p className="lg:max-w-lg sm:max-w-sm w-full text-gray-50 text-sm font-normal leading-snug">
                          Our Plumbing Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-black text-base font-normal leading-relaxed whitespace-nowrap">
                          Read More
                        </span>
                      </button>
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
                <div className="justify-start items-start inline-flex relative">
                  <img
                    className="h-[536px] object-cover rounded-2xl"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="p-5 rounded-2xl flex-col justify-end items-start gap-14 inline-flex absolute bottom-0">
                    <div className="lg:pl-5 lg:pb-5 flex-col justify-end items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-3.5 flex">
                        <h3 className="text-amber-400 text-3xl font-bold font-manrope leading-normal">
                          Cleaning Services
                        </h3>
                        <p className="lg:max-w-lg sm:max-w-sm w-full text-gray-50 text-sm font-normal leading-snug">
                          Our Cleaning Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-black text-base font-normal leading-relaxed whitespace-nowrap">
                          Read More
                        </span>
                      </button>
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
