export default function PricingTableForDarkVersion() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex tabs">
          <div className="w-full flex-col justify-start items-center gap-9 flex">
            <div className="w-full flex-col justify-center items-center gap-4 flex">
              <h2 className="lg:max-w-2xl w-full text-center text-white text-4xl font-bold font-manrope leading-normal">
                Multi-Function Tool with Transparent and Easy
                <span className="text-indigo-700"> Pricing Plan</span>
              </h2>
              <p className="text-center text-gray-200 text-base font-normal leading-relaxed">
                No commitment. No hidden charges
              </p>
            </div>
            <div className="flex justify-center items-center bg-gray-800 border border-gray-700 rounded-full p-1.5 gap-0.5 max-w-sm mx-auto">
              <a
                className="tab-active:tabActive relative justify-center items-center text-white text-sm font-medium leading-6 flex gap-2 inline-block text-center transition-all duration-700 py-2 px-5 tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Yearly
                {/* SVG removed */}
              </a>
              <a
                className="tab-active:tabActive relative text-white text-sm font-medium leading-6 justify-center items-center inline-block text-center transition-all duration-700 py-2 px-5 tablink whitespace-nowrap"
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
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full p-6 group rounded-2xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-7 flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full justify-start items-center gap-3.5 inline-flex">
                      <div className="iconBorder p-2.5 bg-gray-800 rounded-full border border-gray-700 justify-start items-start flex relative">
                        {/* SVG removed */}
                      </div>
                      <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                        Free
                      </h3>
                    </div>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      For basic business plan that have more than 10 active
                      users, Signup and get started.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                        $0/ year
                      </h3>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-3 flex">
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 transition-all duration-700 ease-in-out group-hover:border-transparent bg-transparent group-hover:bg-gradient-to-tr from-indigo-600 to-violet-500 justify-center items-center flex">
                  <span className="px-2 text-white text-base font-semibold leading-relaxed">
                    Join for Free
                  </span>
                </button>
              </div>
              <div className="w-full group p-6 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-7 flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full justify-start items-center gap-3.5 inline-flex">
                      <div className="iconBorder p-2.5 bg-gray-800 rounded-full border border-gray-700 justify-start items-start flex relative">
                        {/* SVG removed */}
                      </div>
                      <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                        Professional
                      </h3>
                    </div>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      For large more dynamic business that have more than 100
                      active users, signup and get started.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                        $64/ year
                        <span className="text-indigo-600 text-lg font-medium leading-relaxed">
                          15% discount
                        </span>
                      </h3>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-3 flex">
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 transition-all duration-700 ease-in-out group-hover:border-transparent bg-transparent group-hover:bg-gradient-to-tr from-indigo-600 to-violet-500 justify-center items-center flex">
                  <span className="px-2 text-white text-base font-semibold leading-relaxed">
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
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full p-6 group rounded-2xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-7 flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full justify-start items-center gap-3.5 inline-flex">
                      <div className="iconBorder p-2.5 bg-gray-800 rounded-full border border-gray-700 justify-start items-start flex relative">
                        {/* SVG removed */}
                      </div>
                      <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                        Free
                      </h3>
                    </div>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      For basic business plan that have more than 10 active
                      users, Signup and get started.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                        $0/ Month
                      </h3>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-3 flex">
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 transition-all duration-700 ease-in-out group-hover:border-transparent bg-transparent group-hover:bg-gradient-to-tr from-indigo-600 to-violet-500 justify-center items-center flex">
                  <span className="px-2 text-white text-base font-semibold leading-relaxed">
                    Join for Free
                  </span>
                </button>
              </div>
              <div className="w-full group p-6 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-7 flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full justify-start items-center gap-3.5 inline-flex">
                      <div className="iconBorder p-2.5 bg-gray-800 rounded-full border border-gray-700 justify-start items-start flex relative">
                        {/* SVG removed */}
                      </div>
                      <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                        Professional
                      </h3>
                    </div>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      For large more dynamic business that have more than 100
                      active users, signup and get started.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                        $12/ Month
                        <span className="text-indigo-600 text-lg font-medium leading-relaxed">
                          15% discount
                        </span>
                      </h3>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Billed Annually
                      </h6>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-3 flex">
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                          {/* SVG removed */}
                        </div>
                        <h6 className="text-white text-base font-normal leading-relaxed">
                          1 Day transaction clearing{" "}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 transition-all duration-700 ease-in-out group-hover:border-transparent bg-transparent group-hover:bg-gradient-to-tr from-indigo-600 to-violet-500 justify-center items-center flex">
                  <span className="px-2 text-white text-base font-semibold leading-relaxed">
                    Join for Professional
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
