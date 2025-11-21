export default function TwoColumnStylishPricingPlans() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Select a Pricing Plan
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-8 lg:grid-cols-12 lg:justify-start">
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start gap-9 rounded-3xl border-t-[1.6px] border-r-[3px] border-b-[3px] border-l-[1.6px] border-gray-900 bg-gray-50 px-8 py-9 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:w-96 lg:col-span-4 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <div className="inline-flex w-full items-center justify-between gap-4">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold whitespace-nowrap text-indigo-600 group-hover:text-gray-900">
                    Business plan
                  </h3>
                  <div className="flex items-center justify-start gap-1.5 rounded-full border border-gray-200 px-2 py-px">
                    <span className="text-center text-xs leading-normal font-medium text-gray-900">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-3">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                    $120
                  </h2>
                  <h4 className="text-center text-xl leading-8 font-normal text-gray-500 group-hover:text-indigo-600">
                    | Month
                  </h4>
                </div>
              </div>
              <ul className="flex w-full flex-col items-start justify-start gap-6">
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h6 className="text-base leading-relaxed font-normal text-gray-900">
                    AI advisor full time
                  </h6>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h6 className="text-base leading-relaxed font-normal text-gray-900">
                    Unlimited auto tracking
                  </h6>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h6 className="text-base leading-relaxed font-normal text-gray-900">
                    1 Day transaction clearing{" "}
                  </h6>
                </li>
                <li className="inline-flex items-center justify-start gap-3">
                  {/* SVG removed */}
                  <h6 className="text-base leading-relaxed font-normal text-gray-900">
                    Priority customer support
                  </h6>
                </li>
              </ul>
              <button className="bg-tranparent group-hover:border-tranparent flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] group-hover:bg-gray-900">
                <span className="px-2 text-base leading-relaxed font-semibold text-gray-900 group-hover:text-white">
                  Get Started
                </span>
              </button>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-center gap-9 rounded-3xl border-t-[1.6px] border-r-[3px] border-b-[3px] border-l-[1.6px] border-gray-900 bg-gray-50 px-8 py-9 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:w-96 lg:col-span-8 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-indigo-600">
                  Enterprise plan
                </h3>
                <div className="inline-flex w-full items-center justify-start gap-3">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                    $150
                  </h2>
                  <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                    | Month
                  </h4>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-start justify-start gap-6 lg:grid-cols-2 lg:gap-9">
                <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      AI advisor full time
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      10 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      Priority customer support
                    </h6>
                  </li>
                </ul>
                <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      Unlimited User Account
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      Enhanced Security
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      Multi - Language Support
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h6 className="text-base leading-relaxed font-normal text-gray-800">
                      24 / 7 Technical Support
                    </h6>
                  </li>
                </ul>
              </div>
              <button className="bg-tranparent group-hover:border-tranparent flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] group-hover:bg-gray-900">
                <span className="px-2 text-base leading-relaxed font-semibold text-gray-900 group-hover:text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
