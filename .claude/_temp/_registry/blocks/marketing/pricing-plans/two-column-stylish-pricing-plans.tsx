export default function TwoColumnStylishPricingPlans() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-center lg:gap-4 gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Select a Pricing Plan
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="w-full lg:justify-start justify-center items-center gap-8 grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-4 lg:w-full sm:w-96 w-full mx-auto group px-8 py-9 bg-gray-50 rounded-3xl border-l-[1.6px] border-r-[3px] border-t-[1.6px] border-b-[3px] border-gray-900 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-9 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="w-full justify-between items-center gap-4 inline-flex">
                  <h3 className="text-indigo-600 group-hover:text-gray-900 text-2xl font-semibold font-manrope leading-9 whitespace-nowrap">
                    Business plan
                  </h3>
                  <div className="px-2 py-px rounded-full border border-gray-200 justify-start items-center gap-1.5 flex">
                    <span className="text-center text-gray-900 text-xs font-medium leading-normal">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-3 inline-flex">
                  <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    $120
                  </h2>
                  <h4 className="text-center text-gray-500 group-hover:text-indigo-600 text-xl font-normal leading-8">
                    | Month
                  </h4>
                </div>
              </div>
              <ul className="w-full flex-col justify-start items-start gap-6 flex">
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                    AI advisor full time
                  </h6>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                    Unlimited auto tracking
                  </h6>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                    1 Day transaction clearing{" "}
                  </h6>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                    Priority customer support
                  </h6>
                </li>
              </ul>
              <button className="w-full px-5 py-2.5 bg-tranparent group-hover:bg-gray-900 border border-gray-300 group-hover:border-tranparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 group-hover:text-white text-gray-900 text-base font-semibold leading-relaxed">
                  Get Started
                </span>
              </button>
            </div>
            <div className="lg:col-span-8 lg:w-full sm:w-96 w-full mx-auto group px-8 py-9 bg-gray-50 rounded-3xl border-l-[1.6px] border-r-[3px] border-t-[1.6px] border-b-[3px] border-gray-900 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-9 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-indigo-600 text-2xl font-semibold font-manrope leading-9">
                  Enterprise plan
                </h3>
                <div className="w-full justify-start items-center gap-3 inline-flex">
                  <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    $150
                  </h2>
                  <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                    | Month
                  </h4>
                </div>
              </div>
              <div className="w-full justify-start items-start lg:gap-9 gap-6 grid lg:grid-cols-2 grid-cols-1">
                <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      10 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
                <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      Unlimited User Account
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      Enhanced Security
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      Multi - Language Support
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      24 / 7 Technical Support
                    </h6>
                  </li>
                </ul>
              </div>
              <button className="w-full px-5 py-2.5 bg-tranparent group-hover:bg-gray-900 border border-gray-300 group-hover:border-tranparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 group-hover:text-white text-gray-900 text-base font-semibold leading-relaxed">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
