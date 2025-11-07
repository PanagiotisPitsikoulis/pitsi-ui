export default function VerticalAccordionPricingPlans() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-9 gap-4 inline-flex">
            <div className="w-full flex-col justify-center lg:items-start items-center lg:gap-4 gap-3 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Discover Your Perfect Plan
              </h2>
              <h5 className="text-gray-500 text-base font-normal leading-relaxed">
                No commitment. No hidden charges
              </h5>
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
          <div
            className="accordion-group gap-5 flex flex-col"
            data-accordion="default-accordion"
          >
            <div
              className="accordion p-5 transition-all duration-500 rounded-xl bg-indigo-50 accordion-active:bg-gradient-to-bl from-violet-600 to-indigo-600 "
              id="basic-heading-two-with-arrow"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-black accordion-active:text-white w-full flex-col justify-center items-start gap-5 flex w-full transition duration-500 text-left"
                aria-controls="basic-collapse-two-with-arrow"
              >
                <div className="w-full justify-between items-center gap-5 inline-flex pb-5 border-b border-gray-200">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <h3 className="text-black accordion-active:text-white text-2xl font-semibold font-manrope leading-9">
                      Basic Plan
                    </h3>
                    <h5 className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      1 website
                    </h5>
                  </div>
                  <h3 className="text1 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $1200
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $80
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="w-full py-2 rounded-full justify-between items-center flex">
                  <h6 className="pr-1.5 py-px text-indigo-600 accordion-active:text-indigo-50 text-sm font-medium leading-snug">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow"
              >
                <ul className="w-full flex-col justify-start items-start gap-5 flex mt-3.5">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="accordion p-5 transition-all duration-500 rounded-xl bg-indigo-50 accordion-active:bg-gradient-to-bl from-violet-600 to-indigo-600 active"
              id="basic-heading-one-with-arrow"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-black accordion-active:text-white w-full flex-col justify-center items-start gap-5 flex w-full transition duration-500 text-left"
                aria-controls="basic-collapse-one-with-arrow"
              >
                <div className="w-full justify-between items-center gap-5 inline-flex pb-5 border-b border-gray-200">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <h3 className="text-black accordion-active:text-white text-2xl font-semibold font-manrope leading-9">
                      Pro Plan
                    </h3>
                    <h5 className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      20 website
                    </h5>
                  </div>
                  <h3 className="text1 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $1800
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $125
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="w-full py-2 rounded-full justify-between items-center flex">
                  <h6 className="pr-1.5 py-px text-indigo-600 accordion-active:text-indigo-50 text-sm font-medium leading-snug">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-one-with-arrow"
              >
                <ul className="w-full flex-col justify-start items-start gap-5 flex mt-3.5">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="accordion p-5 transition-all duration-500 rounded-xl bg-indigo-50 accordion-active:bg-gradient-to-bl from-violet-600 to-indigo-600"
              id="basic-heading-three-with-arrow"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-black accordion-active:text-white w-full flex-col justify-center items-start gap-5 flex w-full transition duration-500 text-left"
                aria-controls="basic-collapse-three-with-arrow"
              >
                <div className="w-full justify-between items-center gap-5 inline-flex pb-5 border-b border-gray-200">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <h3 className="text-black accordion-active:text-white text-2xl font-semibold font-manrope leading-9">
                      Business Plan
                    </h3>
                    <h5 className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      Unlimited website
                    </h5>
                  </div>
                  <h3 className="text1 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $2600
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Year
                    </span>
                  </h3>
                  <h3 className="text2 text-black text-4xl accordion-active:text-white font-semibold font-manrope leading-normal whitespace-nowrap">
                    $190
                    <span className="text-gray-500 accordion-active:text-gray-300 text-lg font-normal leading-relaxed">
                      | Months
                    </span>
                  </h3>
                </div>
                <div className="w-full py-2 rounded-full justify-between items-center flex">
                  <h6 className="pr-1.5 py-px text-indigo-600 accordion-active:text-indigo-50 text-sm font-medium leading-snug">
                    View Plan Details
                  </h6>
                  {/* SVG removed */}
                </div>
              </button>
              <div
                id="basic-collapse-three-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow"
              >
                <ul className="w-full flex-col justify-start items-start gap-5 flex mt-3.5">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-white text-base font-normal leading-relaxed">
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
  );
}
