export default function PricingCardWithCtaButton() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:flex lg:gap-14">
          <div className="inline-flex w-full flex-col items-start justify-start gap-12">
            <h2 className="font-manrope text-center text-5xl leading-normal font-semibold text-gray-900 lg:text-start">
              Event Registration Software Packages &amp; Pricing
            </h2>
            <div className="mx-auto inline-flex items-start justify-start gap-3 lg:mx-0">
              <a
                className="tablink active inline-block items-center justify-center rounded-full bg-indigo-200 px-7 py-3 text-base leading-normal font-semibold whitespace-nowrap text-indigo-600 shadow transition-all duration-500 ease-in-out hover:bg-indigo-400"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="tablink inline-block items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold whitespace-nowrap text-white shadow transition-all duration-500 ease-in-out hover:bg-indigo-800"
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
            className="tabcontent inline-flex w-full flex-col items-start justify-start rounded-3xl bg-indigo-600 p-8"
          >
            <div className="flex w-full flex-col items-start justify-start gap-8 pb-8 md:items-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-manrope text-center text-4xl leading-snug font-bold text-white">
                  $ 5,000
                </h3>
                <span className="text-center text-xl leading-loose font-normal text-indigo-200">
                  | Month
                </span>
              </div>
            </div>
            <div className="justify-between gap-16 pb-8 md:flex lg:gap-9">
              <ul>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  AI Advisor
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Unlimited auto tracking
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}1 Day transaction clearing
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Priority customer support
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  All Widget Access
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Everything in team plan
                </li>
              </ul>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-white px-7 py-3 shadow transition-all duration-700 ease-in-out hover:bg-slate-100">
              <span className="px-2 text-base font-semibold text-indigo-600">
                Purchase
              </span>
            </button>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent inline-flex w-full flex-col items-start justify-start rounded-3xl bg-indigo-600 p-8"
          >
            <div className="flex w-full flex-col items-start justify-start gap-8 pb-8 md:items-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-manrope text-center text-4xl leading-snug font-bold text-white">
                  $ 9,000
                </h3>
                <span className="text-center text-xl leading-loose font-normal text-indigo-200">
                  | Month
                </span>
              </div>
            </div>
            <div className="justify-between gap-16 pb-8 md:flex lg:gap-9">
              <ul>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  AI Advisor
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Unlimited auto tracking
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}1 Day transaction clearing
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Priority customer support
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  All Widget Access
                </li>
                <li className="flex items-center gap-4 pb-5 text-base leading-relaxed font-medium text-white">
                  {/* SVG removed */}
                  Everything in team plan
                </li>
              </ul>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-white px-7 py-3 shadow transition-all duration-700 ease-in-out hover:bg-slate-100">
              <span className="px-2 text-base font-semibold text-indigo-600">
                Purchase
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
