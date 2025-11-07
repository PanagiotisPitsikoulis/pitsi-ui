export default function ScaledPricingCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-6">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Our Pricing Plan
            </h2>
            <div className="flex items-center justify-center gap-0.5 rounded-xl border border-gray-200 p-1">
              <a
                className="tab-active:text-blue-700 tab-active:bg-blue-50 tablink active inline-block items-center justify-center rounded-lg px-5 py-2 text-center text-sm leading-6 font-medium whitespace-nowrap text-gray-900 transition-all duration-700"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Personal
              </a>
              <a
                className="tab-active:text-blue-700 tab-active:bg-blue-50 tablink inline-block items-center justify-center rounded-lg px-5 py-2 text-center text-sm leading-6 font-medium whitespace-nowrap text-gray-900 transition-all duration-700"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Business
              </a>
            </div>
          </div>
          <div
            id="tabs-with-background-1"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-1"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:justify-start lg:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-16 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <h4 className="w-full text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                    Basic Package
                  </h4>
                  <h2 className="text-base leading-relaxed font-normal text-gray-900 group-hover:text-white">
                    $
                    <span className="font-manrope text-5xl leading-[62px] font-semibold">
                      45
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 100 Tasks/ Months
                </h5>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-24 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <div className="inline-flex w-full items-center justify-between gap-2.5">
                    <h5 className="text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                      Pro Package
                    </h5>
                    <div className="flex items-center justify-start gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-blue-700">
                        Popular
                      </span>
                    </div>
                  </div>
                  <h2 className="font-manrope text-6xl leading-[88px] font-bold text-gray-900 group-hover:text-white">
                    $60
                    <span className="text-base leading-relaxed font-normal">
                      Per Month
                    </span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 500 Tasks/ Months
                </h5>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-16 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                    Premium Package
                  </h4>
                  <h2 className="text-base leading-relaxed font-normal text-gray-900 group-hover:text-white">
                    $
                    <span className="font-manrope text-5xl leading-[62px] font-semibold">
                      90
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 800 Tasks/ Months
                </h5>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent w-full"
          >
            <div className="grid w-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:justify-start lg:gap-8">
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-16 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <h4 className="w-full text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                    Basic Package
                  </h4>
                  <h2 className="text-base leading-relaxed font-normal text-gray-900 group-hover:text-white">
                    $
                    <span className="font-manrope text-5xl leading-[62px] font-semibold">
                      70
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 100 Tasks/ Months
                </h5>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-24 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <div className="inline-flex w-full items-center justify-between gap-2.5">
                    <h5 className="text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                      Pro Package
                    </h5>
                    <div className="flex items-center justify-start gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-blue-700">
                        Popular
                      </span>
                    </div>
                  </div>
                  <h2 className="font-manrope text-6xl leading-[88px] font-bold text-gray-900 group-hover:text-white">
                    $90
                    <span className="text-base leading-relaxed font-normal">
                      Per Month
                    </span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 500 Tasks/ Months
                </h5>
              </div>
              <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-16 rounded-xl border border-gray-200 bg-white from-indigo-600 to-indigo-400 p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] ease-in-out hover:border-transparent hover:bg-gradient-to-tr sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-900 group-hover:text-white">
                    Premium Package
                  </h4>
                  <h2 className="text-base leading-relaxed font-normal text-gray-900 group-hover:text-white">
                    $
                    <span className="font-manrope text-5xl leading-[62px] font-semibold">
                      120
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-lg leading-relaxed font-normal text-gray-500 group-hover:text-gray-100">
                  Includes 800 Tasks/ Months
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
