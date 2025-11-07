export default function FeatureTabCardsWithBanners() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3.5 flex lg:pb-12 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Advanced Functionality
          </h2>
          <p className="lg:max-w-xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
            Advanced Functionality integrates cutting-edge features for enhanced
            performance and flexibility.
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="w-full p-2.5 gap-5 flex flex-nowrap items-center justify-between transition-all duration-700 ease-in-out md:rounded-lg md:border border-gray-200 lg:mb-0 mb-3">
                <li className="w-full pr-5 border-r border-gray-200">
                  <a
                    className="group w-full flex gap-2 items-center justify-center text-base font-medium text-gray-500 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 whitespace-nowrap tab-active:text-gray-900 tablink active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Automated Tracking
                  </a>
                </li>
                <li className="w-full pr-5 border-r border-gray-200">
                  <a
                    className="group w-full flex gap-2 items-center justify-center text-base font-medium text-gray-500 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 whitespace-nowrap tab-active:text-gray-900 tablink"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Robust Status
                  </a>
                </li>
                <li className="w-full pr-5 border-r border-gray-200">
                  <a
                    className="group w-full flex gap-2 items-center justify-center text-base font-medium text-gray-500 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 whitespace-nowrap tab-active:text-gray-900 tablink"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Live Reports
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex gap-2 items-center justify-center text-base font-medium text-gray-500 leading-7 transition-all duration-700 ease-in-out w-full hover:text-gray-900 whitespace-nowrap tab-active:text-gray-900 tablink"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Custom Configurations
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="w-full flex-col justify-start items-center gap-5 flex">
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-between items-center lg:gap-10 gap-5 flex md:flex-row flex-col">
                    <div className="flex-col justify-start md:items-start items-center gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-gray-500 text-sm font-normal leading-normal lg:text-start text-center">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Real-time Monitoring
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Data Accuracy
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Integration Capabilities
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Seamlessly integrate with other systems or platforms
                          to streamline workflows and data exchange.
                        </p>
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
                <div className="w-full flex-col justify-start items-center gap-5 flex">
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-between items-center lg:gap-10 gap-5 flex md:flex-row flex-col">
                    <div className="flex-col justify-start md:items-start items-center gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-gray-500 text-sm font-normal leading-normal lg:text-start text-center">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Real-time Monitoring
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Data Accuracy
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Integration Capabilities
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Seamlessly integrate with other systems or platforms
                          to streamline workflows and data exchange.
                        </p>
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
                <div className="w-full flex-col justify-start items-center gap-5 flex">
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-between items-center lg:gap-10 gap-5 flex md:flex-row flex-col">
                    <div className="flex-col justify-start md:items-start items-center gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-gray-500 text-sm font-normal leading-normal lg:text-start text-center">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Real-time Monitoring
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Data Accuracy
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Integration Capabilities
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Seamlessly integrate with other systems or platforms
                          to streamline workflows and data exchange.
                        </p>
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
                <div className="w-full flex-col justify-start items-center gap-5 flex">
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-between items-center lg:gap-10 gap-5 flex md:flex-row flex-col">
                    <div className="flex-col justify-start md:items-start items-center gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-gray-500 text-sm font-normal leading-normal lg:text-start text-center">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Real-time Monitoring
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Data Accuracy
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full lg:p-5 md:p-3 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-3 flex">
                      <div className="pt-1 justify-start items-center gap-2.5 flex">
                        <div className="w-[22px] h-[22px] relative">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                          Integration Capabilities
                        </h5>
                        <p className="text-gray-500 text-sm font-normal leading-snug">
                          Seamlessly integrate with other systems or platforms
                          to streamline workflows and data exchange.
                        </p>
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
