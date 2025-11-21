export default function PricingPlanWithSeperateHeaders() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3.5 sm:w-96 lg:w-full">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
              We Have Got A Perfect Pricing Plan
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-800 opacity-[0.5] lg:max-w-4xl">
              Discover our range of pricing plans and select the option that
              aligns perfectly with your needs. Whether you prefer flexibility
              or comprehensive coverage.
            </p>
            <div className="flex items-center justify-center gap-4">
              <label
                className="toggler text-xl leading-8 font-medium"
                id="filt-monthly"
              >
                Bill Yearly
              </label>
              <div className="toggle">
                <input type="checkbox" id="switcher" className="check" />
                <b className="b switch" />
              </div>
              <label
                className="toggler toggler--is-active text-xl leading-8 font-medium"
                id="filt-hourly"
              >
                Bill Monthly
              </label>
            </div>
          </div>
          <div id="monthly" className="wrapper-full">
            <div className="grid grid-cols-1 items-center justify-start gap-6 lg:grid-cols-3 xl:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6 p-1">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Free Plan
                        </h4>
                        <p className="w-full text-sm leading-normal font-medium break-all text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8] xl:w-80">
                          This service is available at no cost; sign up and
                          create an account on this platform.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $0
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Collaboration for 2 Accounts
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        2 Active Open Jobs
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        1 Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Startup
                        </h4>
                        <p className="text-sm leading-normal font-medium text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8]">
                          We highly recommend this package because it offers the
                          lowest price.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $24
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Collaboration for 6 Accounts
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        8 Active Open Jobs
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        8 Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Elite Plan
                        </h4>
                        <p className="text-sm leading-normal font-medium text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8]">
                          We strongly suggest this package as it provides all
                          the option &amp; features.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $110
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Month
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Collaboration
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Open Job Active
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="hourly" className="wrapper-full hide">
            <div className="grid grid-cols-1 items-center justify-start gap-6 lg:grid-cols-3 xl:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Free Plan
                        </h4>
                        <p className="w-full text-sm leading-normal font-medium text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8] xl:w-80">
                          This service is available at no cost; simply sign up
                          and create an account on this platform.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $60
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Collaboration for 2 Accounts
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        2 Active Open Jobs
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        1 Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Startup
                        </h4>
                        <p className="text-sm leading-normal font-medium text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8]">
                          We highly recommend this package because it offers the
                          lowest price.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $280
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Collaboration for 6 Accounts
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        8 Active Open Jobs
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        8 Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Our Platform features
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 lg:w-full">
                <div className="flex h-72 w-full flex-col items-start justify-start rounded-2xl border border-black/20 bg-white p-8 group-hover:border-4 group-hover:border-indigo-300 group-hover:bg-indigo-500 xl:h-[274px]">
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2.5">
                        <h4 className="text-xl leading-8 font-medium text-gray-800 group-hover:text-white">
                          Elite Plan
                        </h4>
                        <p className="text-sm leading-normal font-medium text-gray-800 opacity-50 group-hover:text-white group-hover:opacity-[0.8]">
                          We strongly suggest this package as it provides all
                          the option &amp; features.
                        </p>
                      </div>
                      <div className="flex w-full items-end gap-1.5">
                        <h2 className="font-manrope text-right text-4xl leading-normal font-bold text-gray-800 group-hover:text-white">
                          $1100
                        </h2>
                        <h6 className="text-base leading-relaxed font-medium text-gray-800 group-hover:text-white">
                          Per Year
                        </h6>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:from-white group-hover:to-blue-50">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white group-hover:text-gray-800">
                        Get Started for free
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pricingCard-frame relative inline-flex w-full items-center justify-start px-8 pt-3">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Security Lock Feature
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Collaboration
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Open Job Active
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Unlimited Recruitment Board
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-200 pb-5">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
                        Advance admin reporting tool
                      </h6>
                    </li>
                    <li className="inline-flex w-full items-center justify-start gap-2 pb-6">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-black">
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
  )
}
