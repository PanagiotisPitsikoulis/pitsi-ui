export default function PricingComponentsWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 xl:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-4 sm:w-96 xl:w-full">
            <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
              Choose Your
              <span className="text-indigo-500">Plan</span>
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Whether you're an individual, small business, or large enterprise,
              our plans offer the flexibility and features you need to succeed.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 xl:grid-cols-3 xl:gap-8">
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 xl:w-full">
              <div className="flex w-full flex-col items-start justify-start rounded-tl-3xl rounded-tr-3xl border-2 border-indigo-200 bg-white p-7 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="inline-flex w-full items-center justify-start gap-6">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-black">
                        Free Plan
                      </h5>
                      <span className="text-xs leading-normal font-normal text-gray-700">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="inline-flex w-full items-end justify-start gap-1.5">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-500">
                        $0
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Month
                      </h4>
                    </div>
                  </div>
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1721626245.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start rounded-br-3xl rounded-bl-3xl border-x-2 border-b-2 border-indigo-200 bg-white p-8 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        AI advisor for a day
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        2 auto tracking
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        7 Day transaction clearing
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        24/7 Customer support
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        All widget access
                      </h6>
                    </li>
                  </ul>
                  <button className="group-hover:border-trasparent flex w-full items-center justify-center rounded-full border border-indigo-200 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-indigo-500">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-500 transition-all duration-700 ease-in-out group-hover:text-white">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 xl:w-full">
              <div className="flex w-full flex-col items-start justify-start rounded-tl-3xl rounded-tr-3xl border-2 border-indigo-200 bg-white p-7 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="inline-flex w-full items-center justify-start gap-6">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-black">
                        Premium Plan
                      </h5>
                      <span className="text-xs leading-normal font-normal text-gray-700">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="inline-flex w-full items-end justify-start gap-1.5">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-500">
                        $100
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        / Month
                      </h4>
                    </div>
                  </div>
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1721626257.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start rounded-br-3xl rounded-bl-3xl border-x-2 border-b-2 border-indigo-200 bg-white p-8 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
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
                        1 Day transaction clearing
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
                        All widget access
                      </h6>
                    </li>
                  </ul>
                  <button className="group-hover:border-trasparent flex w-full items-center justify-center rounded-full border border-indigo-200 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-indigo-500">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-500 transition-all duration-700 ease-in-out group-hover:text-white">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-start justify-start sm:w-96 xl:w-full">
              <div className="flex w-full flex-col items-start justify-start rounded-tl-3xl rounded-tr-3xl border-2 border-indigo-200 bg-white p-7 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="inline-flex w-full items-center justify-start gap-6">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-black">
                        Enterprise plan
                      </h5>
                      <span className="text-xs leading-normal font-normal text-gray-700">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="inline-flex w-full items-end justify-start gap-1.5">
                      <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-500">
                        $200
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal whitespace-nowrap text-gray-500">
                        / Month
                      </h4>
                    </div>
                  </div>
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1721626269.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start rounded-br-3xl rounded-bl-3xl border-x-2 border-b-2 border-indigo-200 bg-white p-8 transition-all duration-700 ease-in-out group-hover:border-indigo-500">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <ul className="flex w-full flex-col items-start justify-start gap-6">
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
                        1 Day transaction clearing
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
                        All widget access
                      </h6>
                    </li>
                  </ul>
                  <button className="group-hover:border-trasparent flex w-full items-center justify-center rounded-full border border-indigo-200 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-indigo-500">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-500 transition-all duration-700 ease-in-out group-hover:text-white">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
