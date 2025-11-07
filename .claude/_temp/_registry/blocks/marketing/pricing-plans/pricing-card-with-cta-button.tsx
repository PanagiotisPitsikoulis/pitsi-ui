export default function PricingCardWithCtaButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="lg:flex grid lg:gap-14 gap-8 items-center">
          <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
            <h2 className="text-gray-900 text-5xl font-semibold font-manrope leading-normal lg:text-start text-center">
              Event Registration Software Packages &amp; Pricing
            </h2>
            <div className="justify-start items-start gap-3 inline-flex lg:mx-0 mx-auto">
              <a
                className="inline-block transition-all duration-500 px-7 py-3 text-indigo-600 text-base font-semibold leading-normal bg-indigo-200 hover:bg-indigo-400 ease-in-out rounded-full shadow justify-center items-center tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="inline-block transition-all duration-500 rounded-full px-7 py-3 text-white text-base font-semibold bg-indigo-600 hover:bg-indigo-800 ease-in-out shadow justify-center items-center tablink whitespace-nowrap"
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
            className="tabcontent w-full p-8 bg-indigo-600 rounded-3xl flex-col justify-start items-start inline-flex"
          >
            <div className="w-full flex-col justify-start md:items-center items-start gap-8 flex pb-8">
              <div className="justify-center items-center gap-3 flex">
                <h3 className="text-center text-white text-4xl font-bold font-manrope leading-snug">
                  $ 5,000
                </h3>
                <span className="text-center text-indigo-200 text-xl font-normal leading-loose">
                  | Month
                </span>
              </div>
            </div>
            <div className="md:flex justify-between lg:gap-9 gap-16 pb-8">
              <ul>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  AI Advisor
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Unlimited auto tracking
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}1 Day transaction clearing
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Priority customer support
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  All Widget Access
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Everything in team plan
                </li>
              </ul>
            </div>
            <button className="w-full px-7 py-3 bg-white hover:bg-slate-100 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
              <span className="px-2 text-indigo-600 text-base font-semibold">
                Purchase
              </span>
            </button>
          </div>
          <div
            id="tabs-with-background-2"
            role="tabpanel"
            aria-labelledby="tabs-with-background-item-2"
            className="tabcontent w-full p-8 bg-indigo-600 rounded-3xl flex-col justify-start items-start inline-flex"
          >
            <div className="w-full flex-col justify-start md:items-center items-start gap-8 flex pb-8">
              <div className="justify-center items-center gap-3 flex">
                <h3 className="text-center text-white text-4xl font-bold font-manrope leading-snug">
                  $ 9,000
                </h3>
                <span className="text-center text-indigo-200 text-xl font-normal leading-loose">
                  | Month
                </span>
              </div>
            </div>
            <div className="md:flex justify-between lg:gap-9 gap-16 pb-8">
              <ul>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  AI Advisor
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Unlimited auto tracking
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}1 Day transaction clearing
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Priority customer support
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  All Widget Access
                </li>
                <li className="flex items-center gap-4 text-white text-base font-medium leading-relaxed pb-5">
                  {/* SVG removed */}
                  Everything in team plan
                </li>
              </ul>
            </div>
            <button className="w-full px-7 py-3 bg-white hover:bg-slate-100 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
              <span className="px-2 text-indigo-600 text-base font-semibold">
                Purchase
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
