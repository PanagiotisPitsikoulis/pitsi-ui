export default function PricingTableForDarkVersion() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-9">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-white lg:max-w-2xl">
                Multi-Function Tool with Transparent and Easy
                <span className="text-indigo-700"> Pricing Plan</span>
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-200">
                No commitment. No hidden charges
              </p>
            </div>
            <div className="mx-auto flex max-w-sm items-center justify-center gap-0.5 rounded-full border border-gray-700 bg-gray-800 p-1.5">
              <a
                className="tab-active:tabActive tablink active relative flex inline-block items-center justify-center gap-2 px-5 py-2 text-center text-sm leading-6 font-medium whitespace-nowrap text-white transition-all duration-700"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Yearly
                {/* SVG removed */}
              </a>
              <a
                className="tab-active:tabActive tablink relative inline-block items-center justify-center px-5 py-2 text-center text-sm leading-6 font-medium whitespace-nowrap text-white transition-all duration-700"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Monthly
              </a>
            </div>
          </div>
          <div
            id="tabs-with-background-1"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-1"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-2xl border border-gray-200 p-6">
                <div className="flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="inline-flex w-full items-center justify-start gap-3.5">
                      <div className="iconBorder relative flex items-start justify-start rounded-full border border-gray-700 bg-gray-800 p-2.5">
                        {/* SVG removed */}
                      </div>
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                        Free
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed font-normal text-gray-400">
                      For basic business plan that have more than 10 active
                      users, Signup and get started.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="flex w-full flex-col items-start justify-start gap-0.5">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                        $0/ year
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-3">
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-transparent from-indigo-600 to-violet-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-gradient-to-tr">
                  <span className="px-2 text-base leading-relaxed font-semibold text-white">
                    Join for Free
                  </span>
                </button>
              </div>
              <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-2xl border border-gray-200 p-6">
                <div className="flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="inline-flex w-full items-center justify-start gap-3.5">
                      <div className="iconBorder relative flex items-start justify-start rounded-full border border-gray-700 bg-gray-800 p-2.5">
                        {/* SVG removed */}
                      </div>
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                        Professional
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed font-normal text-gray-400">
                      For large more dynamic business that have more than 100
                      active users, signup and get started.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="flex w-full flex-col items-start justify-start gap-0.5">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                        $64/ year
                        <span className="text-lg leading-relaxed font-medium text-indigo-600">
                          15% discount
                        </span>
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-3">
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-transparent from-indigo-600 to-violet-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-gradient-to-tr">
                  <span className="px-2 text-base leading-relaxed font-semibold text-white">
                    Join for Professional
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-2xl border border-gray-200 p-6">
                <div className="flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="inline-flex w-full items-center justify-start gap-3.5">
                      <div className="iconBorder relative flex items-start justify-start rounded-full border border-gray-700 bg-gray-800 p-2.5">
                        {/* SVG removed */}
                      </div>
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                        Free
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed font-normal text-gray-400">
                      For basic business plan that have more than 10 active
                      users, Signup and get started.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="flex w-full flex-col items-start justify-start gap-0.5">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                        $0/ Month
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-3">
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        {/* SVG removed */}
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-transparent from-indigo-600 to-violet-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-gradient-to-tr">
                  <span className="px-2 text-base leading-relaxed font-semibold text-white">
                    Join for Free
                  </span>
                </button>
              </div>
              <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-2xl border border-gray-200 p-6">
                <div className="flex w-full flex-col items-start justify-start gap-7">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="inline-flex w-full items-center justify-start gap-3.5">
                      <div className="iconBorder relative flex items-start justify-start rounded-full border border-gray-700 bg-gray-800 p-2.5">
                        {/* SVG removed */}
                      </div>
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                        Professional
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed font-normal text-gray-400">
                      For large more dynamic business that have more than 100
                      active users, signup and get started.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="flex w-full flex-col items-start justify-start gap-0.5">
                      <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                        $12/ Month
                        <span className="text-lg leading-relaxed font-medium text-indigo-600">
                          15% discount
                        </span>
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="flex w-full flex-col items-start justify-start gap-3">
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="inline-flex items-center justify-start gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-base leading-relaxed font-normal text-white">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-transparent from-indigo-600 to-violet-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-gradient-to-tr">
                  <span className="px-2 text-base leading-relaxed font-semibold text-white">
                    Join for Professional
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
