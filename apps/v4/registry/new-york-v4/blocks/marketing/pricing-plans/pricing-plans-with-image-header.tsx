export default function PricingPlansWithImageHeader() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3 sm:w-96 lg:w-full lg:gap-9">
            <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Flexible Pricing Plans to Suit You
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                No commitment. No hidden charges
              </h6>
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
          <div className="grid w-full grid-cols-1 items-start justify-start gap-6 lg:grid-cols-3 xl:gap-8">
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl sm:w-96 lg:w-full">
              <img
                className="w-full rounded-t-3xl object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720139.png"
              />
              <div className="flex w-full flex-col items-start justify-start gap-10 rounded-br-3xl rounded-bl-3xl border-r-2 border-b-2 border-l-2 border-gray-200 bg-white px-8 pt-5 pb-10 transition-all duration-700 ease-in-out group-hover:border-indigo-600">
                <div className="flex w-full flex-col items-start justify-start gap-9">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <div className="inline-flex items-center justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $80
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $0
                      </h2>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Free Plan
                    </h5>
                  </div>
                  <ul className="flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        AI Advisor
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
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-center rounded-full bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl sm:w-96 lg:w-full">
              <img
                className="w-full rounded-t-3xl object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720151.png"
              />
              <div className="flex w-full flex-col items-start justify-start gap-10 rounded-br-3xl rounded-bl-3xl border-r-2 border-b-2 border-l-2 border-gray-200 bg-white px-8 pt-5 pb-10 transition-all duration-700 ease-in-out group-hover:border-indigo-600">
                <div className="flex w-full flex-col items-start justify-start gap-9">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <div className="inline-flex items-center justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $1600
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $150
                      </h2>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Advanced Plan
                    </h5>
                  </div>
                  <ul className="flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        AI Advisor
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
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-center rounded-full bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start rounded-3xl sm:w-96 lg:w-full">
              <img
                className="w-full rounded-t-3xl object-cover"
                alt="Pricing Plan image"
                src="https://pagedone.io/asset/uploads/1721720161.png"
              />
              <div className="flex w-full flex-col items-start justify-start gap-10 rounded-br-3xl rounded-bl-3xl border-r-2 border-b-2 border-l-2 border-gray-200 bg-white px-8 pt-5 pb-10 transition-all duration-700 ease-in-out group-hover:border-indigo-600">
                <div className="flex w-full flex-col items-start justify-start gap-9">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <div className="inline-flex items-center justify-start gap-3">
                      <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $2000
                      </h2>
                      <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        $180
                      </h2>
                      <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Year
                      </h4>
                      <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                        / Month
                      </h4>
                    </div>
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Team Plan
                    </h5>
                  </div>
                  <ul className="flex w-full flex-col items-start justify-start gap-4">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        AI Advisor
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
                        1 Day transaction clearing{" "}
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Priority customer support
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        All Widget Access
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-center rounded-full bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-600 group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
