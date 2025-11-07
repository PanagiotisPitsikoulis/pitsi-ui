export default function HeaderBackgroundPricingCard() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
              Perfect Plan for Your Investment Needs
            </h2>
            <p className="lg:max-w-5xl w-full opacity-50 text-center text-gray-800 text-base font-normal leading-relaxed">
              That’s why we offer a range of flexible and affordable plans
              tailored to suit your specific investment needs. Whether you’re
              just starting out or are a seasoned professional.
            </p>
            <div className="flex items-center justify-center gap-4 pt-3">
              <label
                className="toggler text-xl font-medium leading-8"
                id="filt-monthly"
              >
                Bill Yearly
              </label>
              <div className="toggle">
                <input type="checkbox" id="switcher" className="check" />
                <b className="b switch" />
              </div>
              <label
                className="toggler toggler--is-active text-xl font-medium leading-8"
                id="filt-hourly"
              >
                Bill Monthly
              </label>
            </div>
          </div>
          <div id="monthly" className="wrapper-full">
            <div className="w-full lg:justify-start justify-center items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Basic Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $100
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Standard Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $150
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Premium Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $200
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="hourly" className="wrapper-full hide">
            <div className="w-full lg:justify-start justify-center items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Basic Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $1100
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Standard Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $1600
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex border border-gray-200 hover:border-indigo-600 rounded-3xl transition-all duration-500 ease-in-out">
                <div className="w-full xl:px-8 lg:px-6 px-8 py-6 transition-all border-b border-gray-200 group-hover:border-indigo-600 rounded-t-3xl ease-in-out bg-transparent group-hover:bg-gradient-to-t from-indigo-600 to-indigo-400 flex-col justify-center items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <h4 className="text-black text-xl font-medium leading-8 group-hover:text-white">
                          Premium Plan
                        </h4>
                        <span className="text-gray-600 text-sm font-medium leading-normal group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-black text-5xl font-semibold font-manrope leading-[62px] group-hover:text-white">
                        $2200
                      </h2>
                      <h4 className="text-center text-black text-xl font-normal leading-8 group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:px-8 lg:px-6 px-8 py-11 bg-white transition-all rounded-b-3xl ease-in-out flex-col justify-start items-start gap-14 flex">
                  <ul className="w-full flex-col justify-start items-start gap-6 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-900 text-lg font-normal leading-relaxed">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
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
    </section>
  );
}
