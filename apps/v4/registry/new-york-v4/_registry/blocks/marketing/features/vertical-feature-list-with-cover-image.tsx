export default function VerticalFeatureListWithCoverImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center justify-start gap-3 pb-10 lg:grid-cols-2 lg:gap-5 lg:pb-12">
          <div className="inline-flex flex-col items-center justify-center gap-1.5 lg:items-start">
            <div className="inline-flex items-center justify-center lg:items-start">
              <div className="flex items-center justify-start gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5">
                <span className="text-center text-xs leading-normal font-medium text-indigo-600">
                  Features
                </span>
              </div>
            </div>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Primary Attributes
            </h2>
          </div>
          <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
            Primary Attributes include essential features that define the core
            performance of our services, ensuring quality and reliability.
          </p>
        </div>
        <div className="relative">
          <div className="tabs">
            <div className="absolute top-0 right-0 z-10 flex items-center justify-end overflow-auto">
              <ul className="mb-3 flex w-52 flex-col items-center justify-between rounded-lg border-b-8 border-l-8 border-white bg-white transition-all duration-700 ease-in-out sm:w-72 lg:mb-0">
                <li className="w-full rounded-t-lg border-b border-gray-300">
                  <a
                    className="group tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink active flex w-full items-center justify-center rounded-t-lg bg-gray-900 py-5 text-base leading-7 font-medium whitespace-nowrap text-white transition-all duration-700 ease-in-out hover:bg-amber-400 hover:text-lg hover:font-semibold hover:text-gray-900 lg:py-7"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Electrical Services
                  </a>
                </li>
                <li className="w-full border-b border-gray-300">
                  <a
                    className="group tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink flex w-full items-center justify-center bg-gray-900 py-5 text-base leading-7 font-medium whitespace-nowrap text-white transition-all duration-700 ease-in-out hover:bg-amber-400 hover:text-lg hover:font-semibold hover:text-gray-900 lg:py-7"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Carpenter Services
                  </a>
                </li>
                <li className="w-full border-b border-gray-300">
                  <a
                    className="group tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink flex w-full items-center justify-center bg-gray-900 py-5 text-base leading-7 font-medium whitespace-nowrap text-white transition-all duration-700 ease-in-out hover:bg-amber-400 hover:text-lg hover:font-semibold hover:text-gray-900 lg:py-7"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Plumbing Services
                  </a>
                </li>
                <li className="w-full rounded-b-lg">
                  <a
                    className="group tab-active:text-gray-900 tab-active:bg-amber-400 tab-active:text-lg tab-active:font-semibold tablink flex w-full items-center justify-center rounded-b-lg bg-gray-900 py-5 text-base leading-7 font-medium whitespace-nowrap text-white transition-all duration-700 ease-in-out hover:bg-amber-400 hover:text-lg hover:font-semibold hover:text-gray-900 lg:py-7"
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
                <div className="relative inline-flex items-start justify-start">
                  <img
                    className="h-[536px] rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="absolute bottom-0 inline-flex flex-col items-start justify-end gap-14 rounded-2xl p-5">
                    <div className="flex flex-col items-start justify-end gap-8 lg:pb-5 lg:pl-5">
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-400">
                          Electrical Services
                        </h3>
                        <p className="w-full text-sm leading-snug font-normal text-gray-50 sm:max-w-sm lg:max-w-lg">
                          Our electrical services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-500">
                        <span className="px-2 py-px text-base leading-relaxed font-normal whitespace-nowrap text-black">
                          Read More
                        </span>
                      </button>
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
                <div className="relative inline-flex items-start justify-start">
                  <img
                    className="h-[536px] rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="absolute bottom-0 inline-flex flex-col items-start justify-end gap-14 rounded-2xl p-5">
                    <div className="flex flex-col items-start justify-end gap-8 lg:pb-5 lg:pl-5">
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-400">
                          Carpenter Services
                        </h3>
                        <p className="w-full text-sm leading-snug font-normal text-gray-50 sm:max-w-sm lg:max-w-lg">
                          Our Carpenter Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-500">
                        <span className="px-2 py-px text-base leading-relaxed font-normal whitespace-nowrap text-black">
                          Read More
                        </span>
                      </button>
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
                <div className="relative inline-flex items-start justify-start">
                  <img
                    className="h-[536px] rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="absolute bottom-0 inline-flex flex-col items-start justify-end gap-14 rounded-2xl p-5">
                    <div className="flex flex-col items-start justify-end gap-8 lg:pb-5 lg:pl-5">
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-400">
                          Plumbing Services
                        </h3>
                        <p className="w-full text-sm leading-snug font-normal text-gray-50 sm:max-w-sm lg:max-w-lg">
                          Our Plumbing Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-500">
                        <span className="px-2 py-px text-base leading-relaxed font-normal whitespace-nowrap text-black">
                          Read More
                        </span>
                      </button>
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
                <div className="relative inline-flex items-start justify-start">
                  <img
                    className="h-[536px] rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720090042.png"
                    alt="feature Electrical Services image"
                  />
                  <div className="absolute bottom-0 inline-flex flex-col items-start justify-end gap-14 rounded-2xl p-5">
                    <div className="flex flex-col items-start justify-end gap-8 lg:pb-5 lg:pl-5">
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-400">
                          Cleaning Services
                        </h3>
                        <p className="w-full text-sm leading-snug font-normal text-gray-50 sm:max-w-sm lg:max-w-lg">
                          Our Cleaning Services provide reliable and safe
                          solutions for residential, commercial, and industrial
                          needs, ensuring optimal performance and compliance
                          with safety standards.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-500">
                        <span className="px-2 py-px text-base leading-relaxed font-normal whitespace-nowrap text-black">
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
  )
}
