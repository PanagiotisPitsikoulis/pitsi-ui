export default function PricingPlanWithToggleSwitch() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-9 gap-4 flex">
            <div className="w-full flex-col justify-start items-center lg:gap-4 gap-3 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Choose the Perfect Pricing Plan
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                7 Days free trial. No credit card required.
              </h6>
            </div>
            <div className="flex justify-center items-center gap-4">
              <label className="min-w-[3.5rem] relative text-xl text-gray-900 font-medium leading-8">
                Bill Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-700 appearance-none 

                    before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
              />
              <label className="relative min-w-[3.5rem] font-normal leading-8 text-xl text-gray-500">
                Bill Yearly
              </label>
            </div>
          </div>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full group xl:p-8 lg:p-5 sm:p-8 p-5 bg-gray-100 hover:bg-gradient-to-t from-indigo-600 to-violet-500 ease-in-out transition-all rounded-3xl flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-3xl font-semibold font-manrope leading-normal">
                        Business Plan
                      </h3>
                      <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        For small companies.
                      </h6>
                    </div>
                    <div className="justify-end items-end flex">
                      <h2 className="text2 text-right text-black group-hover:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                        $150
                      </h2>
                      <h2 className="text1 text-right text-black group-hover:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                        $1600
                      </h2>
                      <h6 className="text2 text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        /Mo
                      </h6>
                      <h6 className="text1 text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        /Ye
                      </h6>
                    </div>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 lg:gap-3 gap-5 grid sm:grid-cols-2 grid-cols-1">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 bg-black group-hover:bg-white transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                    Purchase
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full group xl:p-8 lg:p-5 sm:p-8 p-5 bg-gray-100 hover:bg-gradient-to-t from-indigo-600 to-violet-500 transition-all ease-in-out rounded-3xl flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-3xl font-semibold font-manrope leading-normal">
                        Enterprise Plan
                      </h3>
                      <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        For small companies.
                      </h6>
                    </div>
                    <div className="justify-end items-end flex">
                      <h2 className="text2 text-right text-black group-hover:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                        $200
                      </h2>
                      <h2 className="text1 text-right text-black group-hover:text-white transition-all duration-700 ease-in-out text-4xl font-semibold font-manrope leading-normal">
                        $2100
                      </h2>
                      <h6 className="text2 text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        /Mo
                      </h6>
                      <h6 className="text1 text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        /Ye
                      </h6>
                    </div>
                  </div>
                  <div className="w-full justify-start items-start xl:gap-9 lg:gap-3 gap-5 grid sm:grid-cols-2 grid-cols-1">
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          AI Advisor
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Unlimited auto tracking
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          1 Day transaction clearing
                        </h6>
                      </li>
                    </ul>
                    <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          All Widget Access
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                          Everything in team plan
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full px-5 py-2.5 bg-black group-hover:bg-white transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                    Purchase
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
