export default function PricingWithAToggleSwitch() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex tabs">
          <div className="w-full flex-col justify-start items-center gap-9 flex">
            <div className="w-full flex-col justify-start items-center gap-4 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Choose the Perfect Pricing Plan
              </h2>
              <p className="lg:max-w-5xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual,
                small business, or large enterprise, each plan offers
                comprehensive
              </p>
            </div>
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto">
              <a
                className="text-gray-400 text-base rounded-full font-semibold leading-6 tab-active:text-white tab-active:bg-gray-900 justify-center items-center inline-block text-center transition-all duration-700 py-3 px-7 tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="text-gray-400 text-base rounded-full font-semibold leading-6 tab-active:text-white tab-active:bg-gray-900 justify-center items-center inline-block text-center transition-all duration-700 py-3 px-7 tablink whitespace-nowrap"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Bill Monthly
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
              <div className="w-full p-8 rounded-3xl border border-gray-200 flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h3 className="text-black text-3xl font-semibold font-manrope leading-normal">
                      Premium Business
                    </h3>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 gap-6 grid sm:grid-cols-2 grid-cols-1 pb-8 border-b border-gray-200">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full justify-center items-center flex sm:flex-row flex-col sm:gap-0 gap-4">
                    <div className="w-full sm:justify-start justify-center items-center gap-1.5 flex">
                      <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        $900
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        / Year
                      </h4>
                    </div>
                    <button className="sm:w-fit w-full px-7 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full p-8 rounded-3xl border border-gray-200 flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h3 className="text-black text-3xl font-semibold font-manrope leading-normal">
                      Team Business
                    </h3>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 gap-6 grid sm:grid-cols-2 grid-cols-1 pb-8 border-b border-gray-200">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full justify-center items-center flex sm:flex-row flex-col sm:gap-0 gap-4">
                    <div className="w-full sm:justify-start justify-center items-center gap-1.5 flex">
                      <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        $2100
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        / Year
                      </h4>
                    </div>
                    <button className="sm:w-fit w-full px-7 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                        Buy Now
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
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full p-8 rounded-3xl border border-gray-200 flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h3 className="text-black text-3xl font-semibold font-manrope leading-normal">
                      Premium Business
                    </h3>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 gap-6 grid sm:grid-cols-2 grid-cols-1 pb-8 border-b border-gray-200">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full justify-center items-center flex sm:flex-row flex-col sm:gap-0 gap-4">
                    <div className="w-full sm:justify-start justify-center items-center gap-1.5 flex">
                      <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        $100
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        / Month
                      </h4>
                    </div>
                    <button className="sm:w-fit w-full px-7 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full p-8 rounded-3xl border border-gray-200 flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h3 className="text-black text-3xl font-semibold font-manrope leading-normal">
                      Team Business
                    </h3>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 gap-6 grid sm:grid-cols-2 grid-cols-1 pb-8 border-b border-gray-200">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        <div className="justify-start items-start flex">
                          <div className="w-[22px] h-[22px] bg-gray-700 rounded-full justify-center items-center gap-1.5 flex">
                            {/* SVG removed */}
                          </div>
                        </div>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full justify-center items-center flex sm:flex-row flex-col sm:gap-0 gap-4">
                    <div className="w-full sm:justify-start justify-center items-center gap-1.5 flex">
                      <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        $200
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        / Month
                      </h4>
                    </div>
                    <button className="sm:w-fit w-full px-7 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                        Buy Now
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
