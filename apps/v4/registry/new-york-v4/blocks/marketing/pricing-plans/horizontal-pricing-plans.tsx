export default function HorizontalPricingPlans() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-5 sm:w-96 lg:w-full lg:grid-cols-2 lg:gap-0">
            <div className="inline-flex w-full flex-col items-center justify-center gap-4 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900 lg:text-start lg:text-4xl lg:leading-normal">
                Tailored Pricing Solutions
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Our Pricing Plan provides a selection of tailored options to
                suit various needs and budgets. Whether you are an individual
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 lg:justify-end">
              <a
                className="tab-active:bg-gray-900 tab-active:text-white tablink active inline-block rounded-full bg-gray-200 px-7 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="tab-active:bg-gray-900 tab-active:text-white tablink inline-block rounded-full bg-gray-200 px-7 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500"
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
            <div className="grid w-full grid-cols-1 items-center justify-center gap-y-8 lg:grid-cols-12 lg:justify-start lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-4 mx-auto flex w-full items-center justify-start rounded-3xl bg-gray-50 px-8 py-9 sm:w-96 lg:w-full">
                <div className="inline-flex w-full flex-col items-start justify-start gap-9">
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                        Free Plan
                      </h3>
                      <span className="text-sm leading-normal font-normal text-gray-700">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-bold text-gray-900">
                        $0
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        | Month
                      </h4>
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
                  <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-100">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-8 mx-auto inline-flex w-full flex-col items-start justify-start gap-9 rounded-3xl bg-gray-50 px-8 py-9 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      Enterprise plan
                    </h3>
                    <span className="text-sm leading-normal font-normal text-gray-700">
                      For a Lifetime
                    </span>
                  </div>
                  <div className="inline-flex w-full items-center justify-start gap-3">
                    <h2 className="font-manrope text-center text-5xl leading-[62px] font-bold text-gray-900">
                      $100
                    </h2>
                    <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                      | Month
                    </h4>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2 lg:gap-12">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
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
                  <ul className="inline-flex w-full flex-col items-start justify-end gap-6">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Unlimited User Account
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Community Access
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Exclusive Webinar and Training
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Data Integration Support
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-100">
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
            <div className="grid w-full grid-cols-1 items-center justify-center gap-y-8 lg:grid-cols-12 lg:justify-start lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-4 mx-auto flex w-full items-center justify-start rounded-3xl bg-gray-50 px-8 py-9 sm:w-96 lg:w-full">
                <div className="inline-flex w-full flex-col items-start justify-start gap-9">
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                        Free Plan
                      </h3>
                      <span className="text-sm leading-normal font-normal text-gray-700">
                        For a Lifetime
                      </span>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <h2 className="font-manrope text-center text-5xl leading-[62px] font-bold text-gray-900">
                        $60
                      </h2>
                      <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                        | Year
                      </h4>
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
                  <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-100">
                      Select Plan
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-8 mx-auto inline-flex w-full flex-col items-start justify-start gap-9 rounded-3xl bg-gray-50 px-8 py-9 sm:w-96 lg:w-full">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      Enterprise plan
                    </h3>
                    <span className="text-sm leading-normal font-normal text-gray-700">
                      For a Lifetime
                    </span>
                  </div>
                  <div className="inline-flex w-full items-center justify-start gap-3">
                    <h2 className="font-manrope text-center text-5xl leading-[62px] font-bold text-gray-900">
                      $800
                    </h2>
                    <h4 className="text-center text-xl leading-8 font-normal text-gray-500">
                      | Year
                    </h4>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2 lg:gap-12">
                  <ul className="inline-flex w-full flex-col items-start justify-start gap-6">
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
                  <ul className="inline-flex w-full flex-col items-start justify-end gap-6">
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Unlimited User Account
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Community Access
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Exclusive Webinar and Training
                      </h6>
                    </li>
                    <li className="inline-flex items-center justify-start gap-3">
                      {/* SVG removed */}
                      <h6 className="text-base leading-relaxed font-normal text-gray-800">
                        Data Integration Support
                      </h6>
                    </li>
                  </ul>
                </div>
                <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-100">
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
