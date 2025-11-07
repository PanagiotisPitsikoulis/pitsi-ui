export default function PricingWithImageCard() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center lg:gap-4 gap-3 flex">
            <h2 className="text-center text-white lg:text-4xl text-3xl font-bold font-manrope lg:leading-normal leading-normal">
              Our Pricing Plan provides a selection of tailored
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-200 text-base font-normal leading-relaxed">
              Our Pricing Plan provides a selection of tailored options to suit
              various needs and budgets. Whether you are an individual small
              business, or large enterprise, each plan offers
            </p>
          </div>
          <div className="w-full justify-start items-center xl:gap-8 gap-6 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full sm:w-96 w-full mx-auto h-full group pb-9 bg-gradient-to-b from-teal-950 to-emerald-950 rounded-3xl flex-col justify-center items-center gap-4 inline-flex">
              <img
                className="w-full lg:h-full h-auto rounded-tl-3xl rounded-tr-3xl shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] object-cover"
                src="https://pagedone.io/asset/uploads/1721973288.png"
              />
              <div className="w-full px-5 flex-col justify-start items-start gap-6 flex">
                <p className="text-white text-2xl font-semibold font-manrope leading-9">
                  Unlock the full potential of artificial intelligence tailored
                  to your organization.
                </p>
                <button className="w-full px-5 py-2.5 bg-white group-hover:bg-gray-300 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Contact Sale
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto h-full group px-8 py-9 rounded-3xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
              <div className="w-full flex-col justify-start items-start gap-9 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
                      $100
                    </h2>
                    <h4 className="text-center text-gray-200 text-xl font-normal leading-8">
                      | Month
                    </h4>
                  </div>
                  <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                    Premium Plan
                  </h3>
                </div>
                <ul className="w-full flex-col justify-start items-start gap-5 flex">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      AI advisor for a day
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      2 auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      7 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      24/7 Customer support
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      Exclusive Webinar and Training
                    </h6>
                  </li>
                </ul>
                <button className="w-full px-5 py-2.5 bg-white group-hover:bg-gray-300 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto h-full group px-8 py-9 rounded-3xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
              <div className="w-full flex-col justify-start items-start gap-9 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="w-full justify-start items-center gap-3 inline-flex">
                    <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
                      $200
                    </h2>
                    <h4 className="text-center text-gray-200 text-xl font-normal leading-8">
                      | Month
                    </h4>
                  </div>
                  <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                    Enterprise plan
                  </h3>
                </div>
                <ul className="w-full flex-col justify-start items-start gap-5 flex">
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      AI advisor for a day
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      2 auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      7 Day transaction clearing{" "}
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      24/7 Customer support
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">
                      Exclusive Webinar and Training
                    </h6>
                  </li>
                </ul>
                <button className="w-full px-5 py-2.5 bg-white group-hover:bg-gray-300 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
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
