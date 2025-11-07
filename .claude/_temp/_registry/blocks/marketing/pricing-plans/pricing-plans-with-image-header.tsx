export default function PricingPlansWithImageHeader() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center lg:gap-9 gap-3 flex">
            <div className="w-full flex-col justify-center items-center lg:gap-4 gap-3 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Flexible Pricing Plans to Suit You
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                No commitment. No hidden charges
              </h6>
            </div>
            <div className="flex justify-center items-center gap-4">
              <label className="min-w-[3.5rem] relative text-xl text-gray-900 font-medium leading-8">
                Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-700 appearance-none 

                    before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
              />
              <label className="relative min-w-[3.5rem] font-normal leading-8 text-xl text-gray-500">
                Yearly
              </label>
            </div>
          </div>
          <div className="w-full justify-start items-start xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full sm:w-96 w-full mx-auto group rounded-3xl flex-col justify-start items-start inline-flex">
              <img
                className="rounded-t-3xl w-full object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720139.png"
              />
              <div className="w-full px-8 pt-5 pb-10 bg-white rounded-bl-3xl rounded-br-3xl border-l-2 border-r-2 border-b-2 border-gray-200 group-hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-9 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-3 inline-flex">
                      <h2 className="text1 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $80
                      </h2>
                      <h2 className="text2 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $0
                      </h2>
                      <h4 className="text1 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Free Plan
                    </h5>
                  </div>
                  <ul className="w-full flex-col justify-start items-start gap-4 flex">
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        AI Advisor
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-7">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group rounded-3xl flex-col justify-start items-start inline-flex">
              <img
                className="rounded-t-3xl w-full object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720151.png"
              />
              <div className="w-full px-8 pt-5 pb-10 bg-white rounded-bl-3xl rounded-br-3xl border-l-2 border-r-2 border-b-2 border-gray-200 group-hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-9 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-3 inline-flex">
                      <h2 className="text1 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $1600
                      </h2>
                      <h2 className="text2 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $150
                      </h2>
                      <h4 className="text1 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Advanced Plan
                    </h5>
                  </div>
                  <ul className="w-full flex-col justify-start items-start gap-4 flex">
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        AI Advisor
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-7">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group rounded-3xl flex-col justify-start items-start inline-flex">
              <img
                className="rounded-t-3xl w-full object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720161.png"
              />
              <div className="w-full px-8 pt-5 pb-10 bg-white rounded-bl-3xl rounded-br-3xl border-l-2 border-r-2 border-b-2 border-gray-200 group-hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-9 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-3 inline-flex">
                      <h2 className="text1 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $2000
                      </h2>
                      <h2 className="text2 text-center text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-4xl font-bold font-manrope leading-normal">
                        $180
                      </h2>
                      <h4 className="text1 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-gray-500 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-normal leading-8">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Team Plan
                    </h5>
                  </div>
                  <ul className="w-full flex-col justify-start items-start gap-4 flex">
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        AI Advisor
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-full group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-7">
                    Select Plan
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
