export default function FeatureTabsWithCtaButtonBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-gray-500">
            WHAT SETS US APART
          </span>
          <h2 className="mx-auto max-w-xl pb-5 text-center text-5xl leading-[4.25rem] font-bold text-gray-900">
            Feauture
          </h2>
          <p className="font-normal text-gray-500 lg:mx-auto lg:max-w-2xl">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements
          </p>
        </div>
        <div className="tabs">
          <div className="block">
            <ul className="-mb-px flex space-x-3 overflow-x-auto border-b border-gray-200 transition-all duration-300">
              <li>
                <button
                  className="group tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink active flex w-full items-center justify-center gap-4 border-b-2 border-solid border-transparent px-4 py-8 text-base font-normal whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-gray-900 lg:w-56 xl:w-64 xl:text-xl"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  {/* SVG removed */}
                  Auto Tracking
                </button>
              </li>
              <li>
                <button
                  className="group tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-4 border-b-2 border-solid border-transparent px-4 py-8 text-base font-normal whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-gray-900 lg:w-56 xl:w-64 xl:text-xl"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  {/* SVG removed */}
                  Powerful Analytic
                </button>
              </li>
              <li>
                <button
                  className="group tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-4 border-b-2 border-solid border-transparent px-4 py-8 text-base font-normal whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-gray-900 lg:w-56 xl:w-64 xl:text-xl"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  {/* SVG removed */}
                  Live Project Report
                </button>
              </li>
              <li>
                <button
                  className="group tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink flex w-full items-center justify-center gap-4 border-b-2 border-solid border-transparent px-4 py-8 text-base font-normal whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-gray-900 lg:w-56 xl:w-64 xl:text-xl"
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
              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:gap-14 xl:gap-28">
                <div className="w-full rounded-2xl bg-gray-50 p-8 text-center lg:w-1/3 lg:max-w-none lg:max-w-xs">
                  <h4 className="mb-4 text-lg font-medium text-gray-900">
                    Grow faster with pro’s help
                  </h4>
                  <p className="mb-11 text-sm leading-6 text-gray-500">
                    Experience top-notch features with our services
                  </p>
                  <button className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-8">
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            >
              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:gap-14 xl:gap-28">
                <div className="w-full rounded-2xl bg-gray-50 p-8 text-center lg:w-1/3 lg:max-w-none lg:max-w-xs">
                  <h4 className="mb-4 text-lg font-medium text-gray-900">
                    Grow faster with pro’s help
                  </h4>
                  <p className="mb-11 text-sm leading-6 text-gray-500">
                    Experience top-notch features with our services
                  </p>
                  <button className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-8">
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Schedule tracking capabilities lets you view, manage
                        &amp; track your all schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:gap-14 xl:gap-28">
                <div className="w-full rounded-2xl bg-gray-50 p-8 text-center lg:w-1/3 lg:max-w-none lg:max-w-xs">
                  <h4 className="mb-4 text-lg font-medium text-gray-900">
                    Grow faster with pro’s help
                  </h4>
                  <p className="mb-11 text-sm leading-6 text-gray-500">
                    Experience top-notch features with our services
                  </p>
                  <button className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-8">
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-4"
            >
              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:gap-14 xl:gap-28">
                <div className="w-full rounded-2xl bg-gray-50 p-8 text-center lg:w-1/3 lg:max-w-none lg:max-w-xs">
                  <h4 className="mb-4 text-lg font-medium text-gray-900">
                    Grow faster with pro’s help
                  </h4>
                  <p className="mb-11 text-sm leading-6 text-gray-500">
                    Experience top-notch features with our services
                  </p>
                  <button className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm">
                    Get Started
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3 lg:grid-cols-2 lg:gap-8">
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Auto Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform offers automatic tracking to simplify your
                        business processes
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Ai Advisor
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        AI Advisor that provides personalized recommendations
                        and insights
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Insights
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
                        Our platform provides valuable insights to help you
                        optimize your business strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-5 transition-all duration-500">
                    <div className="relative h-8 w-8"></div>
                    <div className="w-full">
                      <h4 className="mb-2 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
                        Schedule Tracking
                      </h4>
                      <p className="leading-[1.8rem] font-normal text-gray-500 transition-all duration-500">
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
  )
}
