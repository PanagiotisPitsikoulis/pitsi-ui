export default function TailwindCssPricingTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-4 sm:w-96 lg:w-full lg:gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-4">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Pick Your Pricing Plan
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual
                small business, or large enterprise, each plan offers
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-medium text-gray-900">
                Bill Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-gray-300 p-0.5 transition-colors duration-700 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-black before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-gray-300 checked:bg-none checked:before:translate-x-full checked:before:bg-black"
              />
              <label className="relative min-w-[3.5rem] text-xl leading-8 font-normal text-gray-500">
                Bill Yearly
              </label>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-3 xl:gap-8">
            <div className="group mx-auto flex w-full items-center justify-start rounded-3xl bg-fuchsia-100 px-8 py-9 sm:w-96 lg:w-full">
              <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="inline-flex items-center justify-start gap-3">
                    <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $0
                    </h2>
                    <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $60
                    </h2>
                    <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                      | Year
                    </h4>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      Free Plan
                    </h3>
                    <h6 className="text-sm leading-normal font-normal text-gray-700">
                      For a Lifetime
                    </h6>
                  </div>
                </div>
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
                </ul>
                <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto flex w-full items-center justify-start rounded-3xl bg-green-100 px-8 py-9 sm:w-96 lg:w-full">
              <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="inline-flex items-center justify-start gap-3">
                    <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $100
                    </h2>
                    <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $950
                    </h2>
                    <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                      | Year
                    </h4>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      Premium Plan
                    </h3>
                    <h6 className="text-sm leading-normal font-normal text-gray-700">
                      For a Lifetime
                    </h6>
                  </div>
                </div>
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
                </ul>
                <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="group mx-auto flex w-full items-center justify-start rounded-3xl bg-yellow-100 px-8 py-9 sm:w-96 lg:w-full">
              <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="inline-flex items-center justify-start gap-3">
                    <h2 className="text2 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $200
                    </h2>
                    <h2 className="text1 font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                      $2100
                    </h2>
                    <h4 className="text2 text-center text-xl leading-8 font-normal text-gray-500">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-xl leading-8 font-normal text-gray-500">
                      | Year
                    </h4>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      Enterprise plan
                    </h3>
                    <h6 className="text-sm leading-normal font-normal text-gray-700">
                      For a Lifetime
                    </h6>
                  </div>
                </div>
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
                </ul>
                <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
