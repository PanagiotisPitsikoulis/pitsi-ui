export default function PricingCardsWithGraphImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3 sm:w-96 lg:w-full lg:gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Choose Your Plan
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              Our Pricing Plan provides a selection of tailored options to suit
              various needs and budgets. Whether you are an individual small
              business, or large enterprise, each plan offers
            </p>
          </div>
          <div className="grid w-full items-center justify-center gap-6 lg:grid-cols-12 lg:justify-start xl:gap-8">
            <div className="bg-norepeat mx-auto flex h-full w-full items-center justify-start rounded-3xl bg-[url('https://pagedone.io/asset/uploads/1721455908.png')] bg-cover bg-center px-7 py-9 sm:w-96 lg:col-span-4 lg:w-full lg:px-5 lg:py-7 xl:px-7 xl:py-9">
              <div className="inline-flex flex-col items-start justify-start gap-14 lg:gap-20 xl:gap-24">
                <div className="flex flex-col items-start justify-start gap-4">
                  <h3 className="font-manrope text-3xl leading-[46px] font-semibold text-black">
                    Save with our special offers andexclusive discounts.
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-700">
                    Explore our range of special offers to access premium
                    features at significantly reduced prices.
                  </h6>
                </div>
                <img
                  className="w-full rounded-md object-cover"
                  src="https://pagedone.io/asset/uploads/1721456017.png"
                />
              </div>
            </div>
            <div className="mx-auto inline-flex h-full w-full flex-col items-center justify-center rounded-3xl bg-slate-50 p-7 sm:w-96 lg:col-span-8 lg:w-full lg:p-5 xl:p-7">
              <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 sm:w-96 lg:w-full lg:grid-cols-2">
                <div className="mx-auto flex w-full items-center justify-start rounded-3xl bg-white px-8 py-7 sm:w-96 lg:w-full">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <div className="inline-flex items-end justify-start gap-1.5">
                        <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                          $100
                        </h2>
                        <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                          / Month
                        </h4>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1.5">
                        <h4 className="text-xl leading-8 font-semibold text-black">
                          Premium Plan
                        </h4>
                        <span className="text-sm leading-normal font-normal text-gray-700">
                          For a Lifetime
                        </span>
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
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Select Plan
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-start rounded-3xl bg-white px-8 py-7 sm:w-96 lg:w-full">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <div className="inline-flex items-end justify-start gap-1.5">
                        <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                          $200
                        </h2>
                        <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                          / Month
                        </h4>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1.5">
                        <h4 className="text-xl leading-8 font-semibold text-black">
                          Enterprise plan
                        </h4>
                        <span className="text-sm leading-normal font-normal text-gray-700">
                          For a Lifetime
                        </span>
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
                    <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                      <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                        Select Plan
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
