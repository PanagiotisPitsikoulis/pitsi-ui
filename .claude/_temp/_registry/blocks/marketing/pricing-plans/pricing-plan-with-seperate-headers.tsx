export default function PricingPlanWithSeperateHeaders() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
              We Have Got A Perfect Pricing Plan
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-800 opacity-[0.5] text-base font-normal leading-relaxed">
              Discover our range of pricing plans and select the option that
              aligns perfectly with your needs. Whether you prefer flexibility
              or comprehensive coverage.
            </p>
            <div className="flex items-center justify-center gap-4">
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
            <div className="justify-start items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex p-1">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Free Plan
                        </h4>
                        <p className="xl:w-80 w-full opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal break-all">
                          This service is available at no cost; sign up and
                          create an account on this platform.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $0
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Collaboration for 2 Accounts
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        2 Active Open Jobs
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        1 Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Startup
                        </h4>
                        <p className="opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal">
                          We highly recommend this package because it offers the
                          lowest price.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $24
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Collaboration for 6 Accounts
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        8 Active Open Jobs
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        8 Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Elite Plan
                        </h4>
                        <p className="opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal">
                          We strongly suggest this package as it provides all
                          the option &amp; features.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $110
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Collaboration
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Open Job Active
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="hourly" className="wrapper-full hide">
            <div className="justify-start items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Free Plan
                        </h4>
                        <p className="xl:w-80 w-full opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal">
                          This service is available at no cost; simply sign up
                          and create an account on this platform.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $60
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Collaboration for 2 Accounts
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        2 Active Open Jobs
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        1 Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Startup
                        </h4>
                        <p className="opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal">
                          We highly recommend this package because it offers the
                          lowest price.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $280
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Collaboration for 6 Accounts
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        8 Active Open Jobs
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        8 Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group flex-col justify-start items-start inline-flex">
                <div className="w-full xl:h-[274px] h-72 p-8 bg-white rounded-2xl border group-hover:border-4 border-black/20 group-hover:border-indigo-300 group-hover:bg-indigo-500 flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                      <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                        <h4 className="text-gray-800 group-hover:text-white text-xl font-medium leading-8">
                          Elite Plan
                        </h4>
                        <p className="opacity-50 text-gray-800 group-hover:text-white group-hover:opacity-[0.8] text-sm font-medium leading-normal">
                          We strongly suggest this package as it provides all
                          the option &amp; features.
                        </p>
                      </div>
                      <div className="w-full flex items-end gap-1.5">
                        <h2 className="text-right text-gray-800 group-hover:text-white text-4xl font-bold font-manrope leading-normal">
                          $1100
                        </h2>
                        <h6 className="text-gray-800 group-hover:text-white text-base font-medium leading-relaxed">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="w-full px-3.5 py-2 bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-white group-hover:to-blue-50 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white group-hover:text-gray-800 text-sm font-medium leading-6">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full pricingCard-frame relative px-8 pt-3 justify-start items-center inline-flex">
                  <ul className="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Collaboration
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Open Job Active
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Unlimited Recruitment Board
                      </h6>
                    </li>
                    <li className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="w-full pb-6 justify-start items-center gap-2 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-500 group-hover:text-black transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
