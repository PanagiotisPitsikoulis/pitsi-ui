export default function VerticalAccordionPricingPlans() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="inline-flex w-full flex-col items-center justify-start gap-4 lg:items-start lg:gap-9">
            <div className="flex w-full flex-col items-center justify-center gap-3 lg:items-start lg:gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Discover Your Perfect Plan
              </h2>
              <h5 className="text-base leading-relaxed font-normal text-gray-500">
                No commitment. No hidden charges
              </h5>
            </div>
            <div className="flex items-center justify-center gap-4">
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-medium text-gray-900">
                Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-indigo-100 p-0.5 transition-colors duration-700 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-indigo-600 before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-indigo-100 checked:bg-none checked:before:translate-x-full checked:before:bg-indigo-600"
              />
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-normal text-gray-500">
                Yearly
              </label>
            </div>
          </div>
          <div
            className="accordion-group flex flex-col gap-5"
            data-accordion="default-accordion"
          >
            <div
              className="accordion accordion-active:bg-gradient-to-bl rounded-xl bg-indigo-50 from-violet-600 to-indigo-600 p-5 transition-all duration-500"
              id="basic-heading-two-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-white flex inline-flex w-full flex-col items-center items-start justify-between justify-center gap-5 text-left text-black transition duration-500"
                aria-controls="basic-collapse-two-with-arrow"
              >
                <div className="inline-flex w-full items-center justify-between gap-5 border-b border-gray-200 pb-5">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="accordion-active:text-white font-manrope text-2xl leading-9 font-semibold text-black">
                      Basic Plan
                    </h3>
                    <h5 className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      1 website
                    </h5>
                  </div>
                  <h3 className="text1 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $1200
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $80
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="flex w-full items-center justify-between rounded-full py-2">
                  <h6 className="accordion-active:text-indigo-50 py-px pr-1.5 text-sm leading-snug font-medium text-indigo-600">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow"
              >
                <ul className="mt-3.5 flex w-full flex-col items-start justify-start gap-5">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-gradient-to-bl active rounded-xl bg-indigo-50 from-violet-600 to-indigo-600 p-5 transition-all duration-500"
              id="basic-heading-one-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-white flex inline-flex w-full flex-col items-center items-start justify-between justify-center gap-5 text-left text-black transition duration-500"
                aria-controls="basic-collapse-one-with-arrow"
              >
                <div className="inline-flex w-full items-center justify-between gap-5 border-b border-gray-200 pb-5">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="accordion-active:text-white font-manrope text-2xl leading-9 font-semibold text-black">
                      Pro Plan
                    </h3>
                    <h5 className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      20 website
                    </h5>
                  </div>
                  <h3 className="text1 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $1800
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $125
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="flex w-full items-center justify-between rounded-full py-2">
                  <h6 className="accordion-active:text-indigo-50 py-px pr-1.5 text-sm leading-snug font-medium text-indigo-600">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow"
              >
                <ul className="mt-3.5 flex w-full flex-col items-start justify-start gap-5">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-gradient-to-bl rounded-xl bg-indigo-50 from-violet-600 to-indigo-600 p-5 transition-all duration-500"
              id="basic-heading-three-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-white flex inline-flex w-full flex-col items-center items-start justify-between justify-center gap-5 text-left text-black transition duration-500"
                aria-controls="basic-collapse-three-with-arrow"
              >
                <div className="inline-flex w-full items-center justify-between gap-5 border-b border-gray-200 pb-5">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="accordion-active:text-white font-manrope text-2xl leading-9 font-semibold text-black">
                      Business Plan
                    </h3>
                    <h5 className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      Unlimited website
                    </h5>
                  </div>
                  <h3 className="text1 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $2600
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 accordion-active:text-white font-manrope text-4xl leading-normal font-semibold whitespace-nowrap text-black">
                    $190
                    <span className="accordion-active:text-gray-300 text-lg leading-relaxed font-normal text-gray-500">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="flex w-full items-center justify-between rounded-full py-2">
                  <h6 className="accordion-active:text-indigo-50 py-px pr-1.5 text-sm leading-snug font-medium text-indigo-600">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-three-with-arrow"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow"
              >
                <ul className="mt-3.5 flex w-full flex-col items-start justify-start gap-5">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-white">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
