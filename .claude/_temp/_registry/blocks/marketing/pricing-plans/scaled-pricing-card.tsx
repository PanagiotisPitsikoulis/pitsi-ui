export default function ScaledPricingCard() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex tabs">
          <div className="w-full flex-col justify-start items-center gap-6 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Pricing Plan
            </h2>
            <div className="p-1 border border-gray-200 flex justify-center items-center gap-0.5 rounded-xl">
              <a
                className="text-gray-900 text-sm rounded-lg font-medium leading-6 tab-active:text-blue-700 tab-active:bg-blue-50 justify-center items-center inline-block text-center transition-all duration-700 py-2 px-5 tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Personal
              </a>
              <a
                className="text-gray-900 text-sm rounded-lg font-medium leading-6 tab-active:text-blue-700 tab-active:bg-blue-50 justify-center items-center inline-block text-center transition-all duration-700 py-2 px-5 tablink whitespace-nowrap"
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
            <div className="w-full lg:justify-start justify-center items-center lg:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-16 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <h4 className="w-full text-gray-900 text-xl font-medium leading-8 group-hover:text-white">
                    Basic Package
                  </h4>
                  <h2 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white">
                    $
                    <span className="text-5xl font-semibold font-manrope leading-[62px]">
                      45
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 text-lg font-normal leading-relaxed group-hover:text-gray-100">
                  Includes 100 Tasks/ Months
                </h5>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-24 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-between items-center gap-2.5 inline-flex">
                    <h5 className="text-gray-900 group-hover:text-white text-xl font-medium leading-8">
                      Pro Package
                    </h5>
                    <div className="px-2.5 py-0.5 bg-blue-50 rounded-full justify-start items-center gap-1.5 flex">
                      <span className="text-center text-blue-700 text-xs font-medium leading-normal">
                        Popular
                      </span>
                    </div>
                  </div>
                  <h2 className="text-gray-900 group-hover:text-white text-6xl font-bold font-manrope leading-[88px]">
                    $60
                    <span className="text-base font-normal leading-relaxed">
                      Per Month
                    </span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 group-hover:text-gray-100 text-lg font-normal leading-relaxed">
                  Includes 500 Tasks/ Months
                </h5>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-16 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-8 group-hover:text-white">
                    Premium Package
                  </h4>
                  <h2 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white">
                    $
                    <span className="text-5xl font-semibold font-manrope leading-[62px]">
                      90
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 text-lg font-normal leading-relaxed group-hover:text-gray-100">
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
            <div className="w-full lg:justify-start justify-center items-center lg:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-16 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <h4 className="w-full text-gray-900 text-xl font-medium leading-8 group-hover:text-white">
                    Basic Package
                  </h4>
                  <h2 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white">
                    $
                    <span className="text-5xl font-semibold font-manrope leading-[62px]">
                      70
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 text-lg font-normal leading-relaxed group-hover:text-gray-100">
                  Includes 100 Tasks/ Months
                </h5>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-24 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-between items-center gap-2.5 inline-flex">
                    <h5 className="text-gray-900 group-hover:text-white text-xl font-medium leading-8">
                      Pro Package
                    </h5>
                    <div className="px-2.5 py-0.5 bg-blue-50 rounded-full justify-start items-center gap-1.5 flex">
                      <span className="text-center text-blue-700 text-xs font-medium leading-normal">
                        Popular
                      </span>
                    </div>
                  </div>
                  <h2 className="text-gray-900 group-hover:text-white text-6xl font-bold font-manrope leading-[88px]">
                    $90
                    <span className="text-base font-normal leading-relaxed">
                      Per Month
                    </span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 group-hover:text-gray-100 text-lg font-normal leading-relaxed">
                  Includes 500 Tasks/ Months
                </h5>
              </div>
              <div className="lg:w-full sm:w-96 w-full mx-auto group p-5 bg-white hover:bg-gradient-to-tr from-indigo-600 to-indigo-400 ease-in-out rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-transparent flex-col justify-center items-start gap-16 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-8 group-hover:text-white">
                    Premium Package
                  </h4>
                  <h2 className="text-gray-900 text-base font-normal leading-relaxed group-hover:text-white">
                    $
                    <span className="text-5xl font-semibold font-manrope leading-[62px]">
                      120
                    </span>
                    <span className="text-base font-normal">Per Month</span>
                  </h2>
                </div>
                <h5 className="w-full text-gray-500 text-lg font-normal leading-relaxed group-hover:text-gray-100">
                  Includes 800 Tasks/ Months
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
