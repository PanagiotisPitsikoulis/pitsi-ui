export default function TwoColumnPricingCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center lg:gap-9 gap-4 flex">
            <div className="w-full flex-col justify-start items-center lg:gap-4 gap-3 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Pick Your Pricing Plan
              </h2>
              <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual
                small business, or large enterprise, each plan offers
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <label className="min-w-[3.5rem] relative text-xl text-gray-900 font-medium leading-8">
                Bill Monthly
              </label>
              <input
                type="checkbox"
                id="checbox"
                className="relative shrink-0 w-11 h-6 p-0.5 bg-gray-300 checked:bg-none checked:bg-gray-300 rounded-full cursor-pointer transition-colors ease-in-out duration-700 appearance-none 

                    before:inline-block before:w-5 before:h-5 before:bg-black checked:before:bg-black before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
              />
              <label className="relative min-w-[3.5rem] font-normal leading-8 text-xl text-gray-500">
                Bill Yearly
              </label>
            </div>
          </div>
          <div className="w-full justify-start items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full sm:w-96 w-full mx-auto group px-8 py-9 bg-fuchsia-100 rounded-3xl justify-start items-center flex">
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <h2 className="text2 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $0
                    </h2>
                    <h2 className="text1 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $60
                    </h2>
                    <h4 className="text2 text-center text-gray-500 text-xl font-normal leading-8">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-gray-500 text-xl font-normal leading-8">
                      | Year
                    </h4>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      Free Plan
                    </h3>
                    <h6 className="text-gray-700 text-sm font-normal leading-normal">
                      For a Lifetime
                    </h6>
                  </div>
                </div>
                <ul className="w-full flex-col justify-start items-start gap-6 flex">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      AI advisor for a day
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      2 auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      7 Day transaction clearing
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                      24/7 Customer support
                    </h6>
                  </li>
                </ul>
                <button className="w-full px-5 py-2.5 bg-gray-900 group-hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group px-8 py-9 bg-green-100 rounded-3xl justify-start items-center flex">
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <h2 className="text2 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $100
                    </h2>
                    <h2 className="text1 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $950
                    </h2>
                    <h4 className="text2 text-center text-gray-500 text-xl font-normal leading-8">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-gray-500 text-xl font-normal leading-8">
                      | Year
                    </h4>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      Premium Plan
                    </h3>
                    <h6 className="text-gray-700 text-sm font-normal leading-normal">
                      For a Lifetime
                    </h6>
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
                <button className="w-full px-5 py-2.5 bg-gray-900 group-hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group px-8 py-9 bg-yellow-100 rounded-3xl justify-start items-center flex">
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <h2 className="text2 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $200
                    </h2>
                    <h2 className="text1 text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      $2100
                    </h2>
                    <h4 className="text2 text-center text-gray-500 text-xl font-normal leading-8">
                      | Month
                    </h4>
                    <h4 className="text1 text-center text-gray-500 text-xl font-normal leading-8">
                      | Year
                    </h4>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      Enterprise plan
                    </h3>
                    <h6 className="text-gray-700 text-sm font-normal leading-normal">
                      For a Lifetime
                    </h6>
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
                <button className="w-full px-5 py-2.5 bg-gray-900 group-hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
