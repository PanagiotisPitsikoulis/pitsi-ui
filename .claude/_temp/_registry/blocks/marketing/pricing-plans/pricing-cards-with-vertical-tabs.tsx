export default function PricingCardsWithVerticalTabs() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:w-full sm:w-96 w-full mx-auto justify-start items-center lg:gap-4 gap-3 flex flex-col lg:pb-12 pb-10">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Choose Your Plan
          </h2>
          <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
            Select from a variety of tailored pricing options designed to meet
            your specific needs and budget. Whether you're an individual, small
            business, or enterprise, our plans offer comprehensive features.
          </p>
        </div>
        <div className="lg:w-full sm:w-fit w-full mx-auto lg:justify-start justify-center lg:items-start items-center lg:p-8 sm:p-6 p-5 bg-white rounded-3xl border border-indigo-300 gap-9 grid lg:grid-cols-2 tabs">
          <div className="w-full flex flex-col lg:gap-11 gap-6 justify-center items-center">
            <a
              className="w-full lg:p-8 p-6 rounded-2xl border border-gray-200 tab-active:border-transparent bg-transparent tab-active:bg-indigo-500 tab-active:text-white tab-active:rounded-3xl transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex tablink whitespace-nowrap active"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              <div className="pointer-events-none	w-full justify-between items-center inline-flex gap-6">
                <div className="justify-start items-center gap-5 flex">
                  <div className="iconBg w-[68px] h-[68px] bg-indigo-50 tablink-active:bg-white rounded-full flex items-center justify-center transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h4 className="text-gray-900 tablink-active:text-white transition-all duration-700 ease-in-out text-xl font-semibold leading-8">
                      Free Plan
                    </h4>
                    <span className="text-gray-600 tablink-active:text-gray-200 transition-all duration-700 ease-in-out text-sm font-normal leading-normal">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="justify-start items-end flex">
                  <h2 className="text-right text-black tablink-active:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                    $0
                  </h2>
                  <h6 className="text-black tablink-active:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                    /Mo
                  </h6>
                </div>
              </div>
            </a>
            <a
              className="w-full group lg:p-8 p-6 rounded-2xl border border-gray-200 tab-active:border-transparent bg-transparent tab-active:bg-indigo-500 tab-active:rounded-3xl transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex tablink whitespace-nowrap"
              data-tab="tabs-with-background-2"
              role="tab"
            >
              <div className="pointer-events-none	w-full justify-between items-center inline-flex gap-6">
                <div className="justify-start items-center gap-5 flex">
                  <div className="iconBg w-[68px] h-[68px] bg-indigo-50 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h4 className="text-gray-900 tablink-active:text-white transition-all duration-700 ease-in-out text-xl font-semibold leading-8">
                      Business Plan
                    </h4>
                    <span className="text-gray-600 tablink-active:text-gray-200 transition-all duration-700 ease-in-out text-sm font-normal leading-normal">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="justify-start items-end flex">
                  <h2 className="text-right tablink-active:text-white text-black transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                    $150
                  </h2>
                  <h6 className="text-black tablink-active:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                    /Mo
                  </h6>
                </div>
              </div>
            </a>
            <a
              className="w-full group lg:p-8 p-6 rounded-2xl border border-gray-200 tab-active:border-transparent bg-transparent tab-active:bg-indigo-500 tab-active:rounded-3xl transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex tablink whitespace-nowrap"
              data-tab="tabs-with-background-3"
              role="tab"
            >
              <div className="pointer-events-none	w-full justify-between items-center inline-flex gap-6">
                <div className="justify-start items-center gap-5 flex">
                  <div className="iconBg w-[68px] h-[68px] bg-indigo-50 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </div>
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h4 className="text-gray-900 tablink-active:text-white transition-all duration-700 ease-in-out text-xl font-semibold leading-8">
                      Enterprise Plan
                    </h4>
                    <span className="text-gray-600 tablink-active:text-gray-200 transition-all duration-700 ease-in-out text-sm font-normal leading-normal">
                      For small companies.
                    </span>
                  </div>
                </div>
                <div className="justify-start items-end flex">
                  <h2 className="text-right text-black tablink-active:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                    $200
                  </h2>
                  <h6 className="text-black tablink-active:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
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
            <div className="w-full px-4 pt-8 pb-5 bg-indigo-500 rounded-3xl flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="px-4 flex-col justify-start items-start gap-2 flex">
                  <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                    Free Plan
                  </h3>
                  <span className="text-gray-200 text-xs font-normal leading-normal">
                    For small companies.
                  </span>
                </div>
                <div className="w-full p-3.5 bg-white rounded-2xl flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-start items-start gap-5 flex">
                      <div className="w-full justify-start items-center gap-3 inline-flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          $0
                        </h2>
                        <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                          | Month
                        </h4>
                      </div>
                      <ul className="w-full flex-col justify-start items-start gap-6 flex">
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            AI advisor for a day
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            2 auto tracking
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            7 Day transaction clearing{" "}
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            24/7 Customer support
                          </h6>
                        </li>
                      </ul>
                    </div>
                    <button className="w-full px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
            <div className="w-full px-4 pt-8 pb-5 bg-indigo-500 rounded-3xl flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="px-4 flex-col justify-start items-start gap-2 flex">
                  <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                    Business Plan
                  </h3>
                  <span className="text-gray-200 text-xs font-normal leading-normal">
                    For small companies.
                  </span>
                </div>
                <div className="w-full p-3.5 bg-white rounded-2xl flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-start items-start gap-5 flex">
                      <div className="w-full justify-start items-center gap-3 inline-flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          $150
                        </h2>
                        <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                          | Month
                        </h4>
                      </div>
                      <ul className="w-full flex-col justify-start items-start gap-6 flex">
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            AI advisor for a day
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            2 auto tracking
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            7 Day transaction clearing{" "}
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            24/7 Customer support
                          </h6>
                        </li>
                      </ul>
                    </div>
                    <button className="w-full px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
            <div className="w-full px-4 pt-8 pb-5 bg-indigo-500 rounded-3xl flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="px-4 flex-col justify-start items-start gap-2 flex">
                  <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                    Enterprise Plan
                  </h3>
                  <span className="text-gray-200 text-xs font-normal leading-normal">
                    For small companies.
                  </span>
                </div>
                <div className="w-full p-3.5 bg-white rounded-2xl flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-start items-start gap-5 flex">
                      <div className="w-full justify-start items-center gap-3 inline-flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          $200
                        </h2>
                        <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                          | Month
                        </h4>
                      </div>
                      <ul className="w-full flex-col justify-start items-start gap-6 flex">
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            AI advisor for a day
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            2 auto tracking
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            7 Day transaction clearing{" "}
                          </h6>
                        </li>
                        <li className="justify-start items-center gap-3 inline-flex">
                          {/* SVG removed */}
                          <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                            24/7 Customer support
                          </h6>
                        </li>
                      </ul>
                    </div>
                    <button className="w-full px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
  );
}
