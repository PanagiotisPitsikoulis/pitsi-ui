export default function PricingCardsWithGraphImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center lg:gap-4 gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Choose Your Plan
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Our Pricing Plan provides a selection of tailored options to suit
              various needs and budgets. Whether you are an individual small
              business, or large enterprise, each plan offers
            </p>
          </div>
          <div className="w-full lg:justify-start justify-center items-center xl:gap-8 gap-6 grid lg:grid-cols-12">
            <div className="lg:col-span-4 lg:w-full sm:w-96 w-full mx-auto h-full bg-[url('https://pagedone.io/asset/uploads/1721455908.png')] bg-center bg-norepeat bg-cover xl:px-7 lg:px-5 px-7 xl:py-9 lg:py-7 py-9 rounded-3xl justify-start items-center flex">
              <div className="flex-col justify-start items-start xl:gap-24 lg:gap-20 gap-14 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <h3 className="text-black text-3xl font-semibold font-manrope leading-[46px]">
                    Save with our special offers andexclusive discounts.
                  </h3>
                  <h6 className="text-gray-700 text-base font-normal leading-relaxed">
                    Explore our range of special offers to access premium
                    features at significantly reduced prices.
                  </h6>
                </div>
                <img
                  className="rounded-md w-full object-cover"
                  src="https://pagedone.io/asset/uploads/1721456017.png"
                />
              </div>
            </div>
            <div className="lg:col-span-8 lg:w-full sm:w-96 w-full mx-auto h-full xl:p-7 lg:p-5 p-7 bg-slate-50 rounded-3xl flex-col justify-center items-center inline-flex">
              <div className="lg:w-full sm:w-96 w-full mx-auto justify-center items-center gap-4 grid lg:grid-cols-2 grid-cols-1">
                <div className="lg:w-full sm:w-96 w-full mx-auto px-8 py-7 bg-white rounded-3xl justify-start items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <div className="justify-start items-end gap-1.5 inline-flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          $100
                        </h2>
                        <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                          / Month
                        </h4>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <h4 className="text-black text-xl font-semibold leading-8">
                          Premium Plan
                        </h4>
                        <span className="text-gray-700 text-sm font-normal leading-normal">
                          For a Lifetime
                        </span>
                      </div>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-6 flex">
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
                          1 Day transaction clearing
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                    </ul>
                    <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Select Plan
                      </span>
                    </button>
                  </div>
                </div>
                <div className="lg:w-full sm:w-96 w-full mx-auto px-8 py-7 bg-white rounded-3xl justify-start items-center flex">
                  <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-3 flex">
                      <div className="justify-start items-end gap-1.5 inline-flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          $200
                        </h2>
                        <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                          / Month
                        </h4>
                      </div>
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <h4 className="text-black text-xl font-semibold leading-8">
                          Enterprise plan
                        </h4>
                        <span className="text-gray-700 text-sm font-normal leading-normal">
                          For a Lifetime
                        </span>
                      </div>
                    </div>
                    <ul className="w-full flex-col justify-start items-start gap-6 flex">
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
                          1 Day transaction clearing
                        </h6>
                      </li>
                      <li className="justify-start items-center gap-3 inline-flex">
                        {/* SVG removed */}
                        <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                          Priority customer support
                        </h6>
                      </li>
                    </ul>
                    <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
  );
}
