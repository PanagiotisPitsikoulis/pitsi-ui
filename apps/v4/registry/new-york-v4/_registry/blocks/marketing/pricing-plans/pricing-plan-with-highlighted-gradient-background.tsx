export default function PricingPlanWithHighlightedGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-gray-900">
            Our pricing plans
          </h2>
          <p className="mb-12 text-center text-xl leading-6 text-gray-500">
            7 Days free trial. No credit card required.
          </p>
          <div className="mb-10 flex justify-center">
            <span className="flex items-center">
              {/* SVG removed */}
              <span className="inline-block rounded-full bg-indigo-50 px-4 py-2 text-xs leading-4 font-semibold tracking-wide whitespace-nowrap text-indigo-600">
                Save 20%
              </span>
            </span>
          </div>
          {/*Switch*/}
          <div className="tabs">
            <div className="mx-auto flex max-w-sm items-center justify-center rounded-full bg-gray-100 p-1.5">
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink active inline-block w-1/2 rounded-full px-3 py-3 text-center font-semibold whitespace-nowrap text-gray-400 transition-all duration-500 hover:text-indigo-600 lg:px-11"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink inline-block w-1/2 rounded-full px-3 py-3 text-center font-semibold whitespace-nowrap text-gray-400 transition-all duration-500 hover:text-indigo-600 lg:px-11"
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
              <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
                {/*Pricing Card*/}
                <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 p-6 text-center text-gray-900 transition-all duration-300 hover:border-indigo-600 xl:p-12">
                  <h3 className="font-manrope mb-6 text-2xl font-bold">Free</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold">
                      $0
                    </span>
                    <span className="text-xl text-gray-400">Lifetime</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group before:contents[' '] relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-center text-gray-900 transition-all duration-500 before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:rounded-2xl before:bg-indigo-800 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 xl:p-12">
                  <h3 className="font-manrope relative mb-6 flex items-center justify-center text-2xl font-bold text-white">
                    Advanced
                    <span className="relative ml-4 h-6 rounded-full border border-solid border-gray-100 px-3 text-sm">
                      Popular
                    </span>
                  </h3>
                  <div className="relative mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold text-white">
                      $150
                    </span>
                    <span className="text-xl text-gray-300">Per year</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="relative mx-auto w-fit rounded-full bg-white px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 p-8 text-center text-gray-900 transition-all duration-300 hover:border-indigo-600 xl:p-12">
                  <h3 className="font-manrope mb-6 text-2xl font-bold">Team</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold">
                      $180
                    </span>
                    <span className="text-xl text-gray-400">Per year</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
              <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
                {/*Pricing Card*/}
                <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 p-6 text-center text-gray-900 transition-all duration-300 hover:border-indigo-600 xl:p-12">
                  <h3 className="font-manrope mb-6 text-2xl font-bold">Free</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold">
                      $0
                    </span>
                    <span className="text-xl text-gray-400">Lifetime</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group before:contents[' '] relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-center text-gray-900 transition-all duration-500 before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:rounded-2xl before:bg-indigo-800 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 xl:p-12">
                  <h3 className="font-manrope relative mb-6 flex items-center justify-center text-2xl font-bold text-white">
                    Advanced
                    <span className="relative ml-4 h-6 rounded-full border border-solid border-gray-100 px-3 text-sm">
                      Popular
                    </span>
                  </h3>
                  <div className="relative mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold text-white">
                      $39
                    </span>
                    <span className="text-xl text-gray-300">Per Month</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="relative mx-auto w-fit rounded-full bg-white px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500"
                  >
                    Purchase Plan
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 p-8 text-center text-gray-900 transition-all duration-300 hover:border-indigo-600 xl:p-12">
                  <h3 className="font-manrope mb-6 text-2xl font-bold">Team</h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope mb-2 text-6xl font-semibold">
                      $49
                    </span>
                    <span className="text-xl text-gray-400">Per Month</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
  )
}
