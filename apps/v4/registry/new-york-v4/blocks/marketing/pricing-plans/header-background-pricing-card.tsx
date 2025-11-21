export default function HeaderBackgroundPricingCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3.5 sm:w-96 lg:w-full">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
              Perfect Plan for Your Investment Needs
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-800 opacity-50 lg:max-w-5xl">
              That’s why we offer a range of flexible and affordable plans
              tailored to suit your specific investment needs. Whether you’re
              just starting out or are a seasoned professional.
            </p>
            <div className="flex items-center justify-center gap-4 pt-3">
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
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:justify-start xl:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Basic Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $100
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Standard Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $150
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Premium Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $200
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Month
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="hourly" className="wrapper-full hide">
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:justify-start xl:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Basic Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $1100
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Standard Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $1600
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Purchase Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-indigo-600 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-b border-gray-200 bg-transparent from-indigo-600 to-indigo-400 px-8 py-6 transition-all ease-in-out group-hover:border-indigo-600 group-hover:bg-gradient-to-t lg:px-6 xl:px-8">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <h4 className="text-xl leading-8 font-medium text-black group-hover:text-white">
                          Premium Plan
                        </h4>
                        <span className="text-sm leading-normal font-medium text-gray-600 group-hover:text-gray-200">
                          This service is available at no cost.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-semibold text-black group-hover:text-white">
                        $2200
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-black group-hover:text-white">
                        / Year
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-14 rounded-b-3xl bg-white px-8 py-11 transition-all ease-in-out lg:px-6 xl:px-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        AI advisor full time
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Unlimited auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <h6 className="text-lg leading-relaxed font-normal text-gray-900">
                        Priority customer support
                      </h6>
                    </li>
                  </ul>
                  <button className="flex w-full items-center justify-center rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
  )
}
