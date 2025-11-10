export default function FeatureTabCardsWithBanners() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-3.5 pb-10 lg:pb-12">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Advanced Functionality
          </h2>
          <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-xl">
            Advanced Functionality integrates cutting-edge features for enhanced
            performance and flexibility.
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="mb-3 flex w-full flex-nowrap items-center justify-between gap-5 border-gray-200 p-2.5 transition-all duration-700 ease-in-out md:rounded-lg md:border lg:mb-0">
                <li className="w-full border-r border-gray-200 pr-5">
                  <a
                    className="group tab-active:text-gray-900 tablink active flex w-full items-center justify-center gap-2 text-base leading-7 font-medium whitespace-nowrap text-gray-500 transition-all duration-700 ease-in-out hover:text-gray-900"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Automated Tracking
                  </a>
                </li>
                <li className="w-full border-r border-gray-200 pr-5">
                  <a
                    className="group tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-2 text-base leading-7 font-medium whitespace-nowrap text-gray-500 transition-all duration-700 ease-in-out hover:text-gray-900"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Robust Status
                  </a>
                </li>
                <li className="w-full border-r border-gray-200 pr-5">
                  <a
                    className="group tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-2 text-base leading-7 font-medium whitespace-nowrap text-gray-500 transition-all duration-700 ease-in-out hover:text-gray-900"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    {/* SVG removed */}
                    Live Reports
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-2 text-base leading-7 font-medium whitespace-nowrap text-gray-500 transition-all duration-700 ease-in-out hover:text-gray-900"
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
                <div className="flex w-full flex-col items-center justify-start gap-5">
                  <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-gray-200 p-5 md:flex-row lg:gap-10">
                    <div className="inline-flex flex-col items-center justify-start gap-2.5 md:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-center text-sm leading-normal font-normal text-gray-500 lg:text-start">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Real-time Monitoring
                        </h5>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Data Accuracy
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Integration Capabilities
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <div className="flex w-full flex-col items-center justify-start gap-5">
                  <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-gray-200 p-5 md:flex-row lg:gap-10">
                    <div className="inline-flex flex-col items-center justify-start gap-2.5 md:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-center text-sm leading-normal font-normal text-gray-500 lg:text-start">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Real-time Monitoring
                        </h5>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Data Accuracy
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Integration Capabilities
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <div className="flex w-full flex-col items-center justify-start gap-5">
                  <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-gray-200 p-5 md:flex-row lg:gap-10">
                    <div className="inline-flex flex-col items-center justify-start gap-2.5 md:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-center text-sm leading-normal font-normal text-gray-500 lg:text-start">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Real-time Monitoring
                        </h5>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Data Accuracy
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Integration Capabilities
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <div className="flex w-full flex-col items-center justify-start gap-5">
                  <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-gray-200 p-5 md:flex-row lg:gap-10">
                    <div className="inline-flex flex-col items-center justify-start gap-2.5 md:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                        Accelerate your growth with expert guidance.
                      </h4>
                      <p className="text-center text-sm leading-normal font-normal text-gray-500 lg:text-start">
                        Advance your journey with skilled guidance.
                      </p>
                    </div>
                    <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Get Started
                      </span>
                    </button>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Real-time Monitoring
                        </h5>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously track activities and performance metrics
                          automatically, providing instant updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Data Accuracy
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
                          Ensure precise and reliable data collection without
                          manual intervention, significantly minimizing errors.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-3 lg:p-5">
                      <div className="flex items-center justify-start gap-2.5 pt-1">
                        <div className="relative h-[22px] w-[22px]">
                          {/* SVG removed */}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-1.5">
                        <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                          Integration Capabilities
                        </h5>
                        <p className="text-sm leading-snug font-normal text-gray-500">
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
  )
}
