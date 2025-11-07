export default function SinglePricingPlan() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Ready to Get Started ?
            </h2>
            <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
              No commitment. No hidden charges
            </h6>
          </div>
          <div className="flex w-full flex-col items-end justify-center gap-10 rounded-2xl border border-gray-200 bg-white p-8 shadow">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex items-center justify-center gap-4">
                <input
                  type="checkbox"
                  id="checbox"
                  className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-emerald-100 p-0.5 transition-colors duration-700 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-emerald-700 before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-emerald-100 checked:bg-none checked:before:translate-x-full checked:before:bg-emerald-700"
                />
                <label className="relative min-w-[3.5rem] text-xl leading-8 font-medium text-gray-900">
                  Monthly
                </label>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <h3 className="text2 font-manrope text-3xl leading-normal font-semibold text-black">
                    $5,299 | Month
                  </h3>
                  <h3 className="text1 font-manrope text-3xl leading-normal font-semibold text-black">
                    $10,600 | Year
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    For large more dynamic business that have more than 100
                    active users, signup and get started.
                  </h6>
                </div>
                <ul className="flex w-full flex-col items-start justify-start gap-3">
                  <li className="inline-flex items-center justify-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-normal text-gray-900">
                      AI Advisor
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-normal text-gray-900">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="inline-flex items-center justify-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-normal text-gray-900">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-emerald-700 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-800">
              <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
