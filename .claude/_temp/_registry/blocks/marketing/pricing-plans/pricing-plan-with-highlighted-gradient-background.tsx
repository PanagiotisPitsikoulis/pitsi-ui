export default function PricingPlanWithHighlightedGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
            Our pricing plans
          </h2>
          <p className="text-gray-500 text-xl text-center leading-6 mb-12">
            7 Days free trial. No credit card required.
          </p>
          <div className="mb-10 flex justify-center">
            <span className="flex items-center">
              {/* SVG removed */}
              <span className="inline-block whitespace-nowrap text-xs leading-4 font-semibold tracking-wide bg-indigo-50 text-indigo-600 rounded-full py-2 px-4">
                Save 20%
              </span>
            </span>
          </div>
          {/*Switch*/}
          <div className="tabs">
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto">
              <a
                className="inline-block w-1/2 text-center transition-all duration-500 rounded-full text-gray-400 font-semibold py-3 px-3 lg:px-11 hover:text-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="inline-block w-1/2 text-center transition-all duration-500 rounded-full text-gray-400 font-semibold py-3 px-3 lg:px-11 hover:text-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Bill Monthly
              </a>
            </div>
            <div
              id="tabs-with-background-1"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-1"
              className="tabcontent mt-12"
            >
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-6 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6">Free</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-6xl font-semibold mb-2">
                      $0
                    </span>
                    <span className="text-xl text-gray-400">Lifetime</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-6 xl:p-12 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:contents[' '] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
                  <h3 className="relative flex items-center justify-center font-manrope text-2xl font-bold mb-6 text-white">
                    Advanced
                    <span className="h-6 px-3 relative rounded-full border border-solid border-gray-100 text-sm ml-4">
                      Popular
                    </span>
                  </h3>
                  <div className="mb-20 flex flex-col relative">
                    <span className="font-manrope text-6xl font-semibold mb-2 text-white">
                      $150
                    </span>
                    <span className="text-xl text-gray-300">Per year</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-8 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6">Team</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-6xl font-semibold mb-2">
                      $180
                    </span>
                    <span className="text-xl text-gray-400">Per year</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
              </div>
            </div>
            <div
              id="tabs-with-background-2"
              className="tabcontent mt-12"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-2"
            >
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-6 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6">Free</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-6xl font-semibold mb-2">
                      $0
                    </span>
                    <span className="text-xl text-gray-400">Lifetime</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-6 xl:p-12 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:contents[' '] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
                  <h3 className="relative flex items-center justify-center font-manrope text-2xl font-bold mb-6 text-white">
                    Advanced
                    <span className="h-6 px-3 relative rounded-full border border-solid border-gray-100 text-sm ml-4">
                      Popular
                    </span>
                  </h3>
                  <div className="mb-20 flex flex-col relative">
                    <span className="font-manrope text-6xl font-semibold mb-2 text-white">
                      $39
                    </span>
                    <span className="text-xl text-gray-300">Per Month</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-8 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6">Team</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-6xl font-semibold mb-2">
                      $49
                    </span>
                    <span className="text-xl text-gray-400">Per Month</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
              </div>
            </div>
          </div>
          {/*Switch End*/}
        </div>
      </div>
    </section>
  );
}
