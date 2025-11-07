export default function FeatureTabsWithCtaButtonBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-gray-500">
            WHAT SETS US APART
          </span>
          <h2 className="text-5xl text-center font-bold text-gray-900 pb-5 max-w-xl leading-[4.25rem] mx-auto">
            Feauture
          </h2>
          <p className="font-normal text-gray-500 lg:max-w-2xl lg:mx-auto">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements
          </p>
        </div>
        <div className="tabs">
          <div className="block">
            <ul className="flex border-b border-gray-200 space-x-3 transition-all duration-300 -mb-px overflow-x-auto">
              <li>
                <button
                  className="group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink active"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  {/* SVG removed */}
                  Auto Tracking
                </button>
              </li>
              <li>
                <button
                  className="group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  {/* SVG removed */}
                  Powerful Analytic
                </button>
              </li>
              <li>
                <button
                  className="group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  {/* SVG removed */}
                  Live Project Report
                </button>
              </li>
              <li>
                <button
                  className="group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink"
                  data-tab="tabs-with-underline-4"
                  role="tab"
                >
                  {/* SVG removed */}
                  Customization
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
              className="tabcontent"
            >
              <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                <div className="text-center w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3">
                  <h4 className="text-lg text-gray-900 font-medium mb-4">
                    Grow faster with pro’s help
                  </h4>
                  <p className="text-sm text-gray-500 leading-6 mb-11">
                    Experience top-notch features with our services
                  </p>
                  <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3">
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Schedule tracking capabilities lets you view, manage
                        &amp; track your all schedule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-2"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            >
              <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                <div className="text-center w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3">
                  <h4 className="text-lg text-gray-900 font-medium mb-4">
                    Grow faster with pro’s help
                  </h4>
                  <p className="text-sm text-gray-500 leading-6 mb-11">
                    Experience top-notch features with our services
                  </p>
                  <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3">
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Schedule tracking capabilities lets you view, manage
                        &amp; track your all schedule
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-3"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                <div className="text-center w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3">
                  <h4 className="text-lg text-gray-900 font-medium mb-4">
                    Grow faster with pro’s help
                  </h4>
                  <p className="text-sm text-gray-500 leading-6 mb-11">
                    Experience top-notch features with our services
                  </p>
                  <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3">
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Schedule tracking capabilities lets you view, manage
                        &amp; track your all schedule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-4"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-4"
            >
              <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                <div className="text-center w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3">
                  <h4 className="text-lg text-gray-900 font-medium mb-4">
                    Grow faster with pro’s help
                  </h4>
                  <p className="text-sm text-gray-500 leading-6 mb-11">
                    Experience top-notch features with our services
                  </p>
                  <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3">
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between transition-all duration-500 gap-5">
                    <div className="relative w-8 h-8"></div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="font-normal text-gray-500 transition-all duration-500 leading-[1.8rem]">
                        Schedule tracking capabilities lets you view, manage
                        &amp; track your all schedule
                      </p>
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
