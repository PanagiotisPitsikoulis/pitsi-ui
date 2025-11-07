export default function HorizontalPricingPlans() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex tabs">
          <div className="lg:w-full sm:w-96 w-full mx-auto justify-center items-center grid lg:gap-0 gap-5 lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-4 inline-flex">
              <h2 className="text-gray-900 lg:text-4xl text-4xl font-bold font-manrope lg:leading-normal leading-snug lg:text-start text-center">
                Tailored Pricing Solutions
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual
              </p>
            </div>
            <div className="flex lg:justify-end justify-center items-center gap-3">
              <a
                className="inline-block text-center transition-all duration-500 px-7 py-2.5 bg-gray-200 rounded-full text-gray-900 text-base font-semibold leading-7 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] tab-active:bg-gray-900 tab-active:text-white tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="inline-block text-center transition-all duration-500 px-7 py-2.5 bg-gray-200 rounded-full text-gray-900 text-base font-semibold leading-7 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] tab-active:bg-gray-900 tab-active:text-white tablink whitespace-nowrap"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Yearly
              </a>
            </div>
          </div>
          <div
            id="tabs-with-background-1"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-1"
            className="tabcontent w-full"
          >
            <div className="w-full lg:justify-start justify-center items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="col-span-4 lg:w-full sm:w-96 w-full mx-auto px-8 py-9 bg-gray-50 rounded-3xl justify-start items-center flex">
                <div className="w-full flex-col justify-start items-start gap-9 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                        Free Plan
                      </h3>
                      <span className="text-gray-700 text-sm font-normal leading-normal">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-[62px]">
                        $0
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        | Month
                      </h4>
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
                  <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-gray-100 text-base font-semibold leading-relaxed">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-8 lg:w-full sm:w-96 w-full mx-auto px-8 py-9 bg-gray-50 rounded-3xl flex-col justify-start items-start gap-9 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      Enterprise plan
                    </h3>
                    <span className="text-gray-700 text-sm font-normal leading-normal">
                      For a Lifetime
                    </span>
                  </div>
                  <div className="w-full justify-start items-center gap-3 inline-flex">
                    <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-[62px]">
                      $100
                    </h2>
                    <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                      | Month
                    </h4>
                  </div>
                </div>
                <div className="w-full w-full justify-start items-center lg:gap-12 gap-6 grid lg:grid-cols-2 grid-cols-1">
                  <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
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
                  <ul className="w-full flex-col justify-end items-start gap-6 inline-flex">
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Unlimited User Account
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Community Access
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Exclusive Webinar and Training
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Data Integration Support
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-gray-100 text-base font-semibold leading-relaxed">
                    Select Plan
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent w-full"
          >
            <div className="w-full lg:justify-start justify-center items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="col-span-4 lg:w-full sm:w-96 w-full mx-auto px-8 py-9 bg-gray-50 rounded-3xl justify-start items-center flex">
                <div className="w-full flex-col justify-start items-start gap-9 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                        Free Plan
                      </h3>
                      <span className="text-gray-700 text-sm font-normal leading-normal">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-[62px]">
                        $60
                      </h2>
                      <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                        | Year
                      </h4>
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
                  <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-gray-100 text-base font-semibold leading-relaxed">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-8 lg:w-full sm:w-96 w-full mx-auto px-8 py-9 bg-gray-50 rounded-3xl flex-col justify-start items-start gap-9 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      Enterprise plan
                    </h3>
                    <span className="text-gray-700 text-sm font-normal leading-normal">
                      For a Lifetime
                    </span>
                  </div>
                  <div className="w-full justify-start items-center gap-3 inline-flex">
                    <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-[62px]">
                      $800
                    </h2>
                    <h4 className="text-center text-gray-500 text-xl font-normal leading-8">
                      | Year
                    </h4>
                  </div>
                </div>
                <div className="w-full justify-start items-center lg:gap-12 gap-6 grid lg:grid-cols-2 grid-cols-1">
                  <ul className="w-full flex-col justify-start items-start gap-6 inline-flex">
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
                  <ul className="w-full flex-col justify-end items-start gap-6 inline-flex">
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Unlimited User Account
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Community Access
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Exclusive Webinar and Training
                      </h6>
                    </li>
                    <li className="justify-start items-center gap-3 inline-flex">
                      {/* SVG removed */}
                      <h6 className="text-gray-800 text-base font-normal leading-relaxed">
                        Data Integration Support
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-gray-100 text-base font-semibold leading-relaxed">
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
