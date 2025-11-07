export default function PricingTableWithFourTiers() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Our pricing is simple with no hidden fees{" "}
          </h2>
          <p className="mb-9 text-center leading-6 text-gray-500">
            7 Days free trial. No credit card required.
          </p>
          {/*Switch*/}
          <div className="flex items-center justify-center">
            <label className="relative mr-4 min-w-[3.5rem] text-xl font-medium text-gray-900">
              Bill Monthly
            </label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-indigo-100 p-0.5 transition-colors duration-200 ease-in-out before:inline-block before:h-5 before:w-5 before:translate-x-0 before:transform before:rounded-full before:bg-indigo-600 before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-indigo-100 checked:bg-none checked:before:translate-x-full checked:before:bg-indigo-600 focus:border-blue-600"
            />
            <label className="relative ml-4 min-w-[3.5rem] text-xl font-medium text-gray-500 checked:text-gray-900">
              Bill Yearly
            </label>
          </div>
          {/*Switch End*/}
        </div>
        {/*Grid*/}
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-6 text-gray-900 shadow-2xl transition-all duration-500 hover:bg-indigo-600 lg:max-w-full xl:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-solid border-gray-200 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope mb-2 text-2xl font-bold group-hover:text-white">
                  Basic
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center rounded-lg bg-indigo-50 px-6 py-3">
                <span className="font-manrope bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-3xl font-semibold text-transparent">
                  $80
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800 group-hover:text-white">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI Advisor</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span className="group-hover:text-indigo-200">
                  Priority customer support
                </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span className="group-hover:text-indigo-200">
                  All Widget Access
                </span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="w-full rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-6 text-gray-900 shadow-2xl transition-all duration-500 hover:bg-indigo-600 lg:max-w-none xl:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-solid border-gray-200 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope mb-2 text-2xl font-bold group-hover:text-white">
                  Pro
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center rounded-lg bg-indigo-50 px-6 py-3">
                <span className="font-manrope bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-3xl font-semibold text-transparent">
                  $150
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800 group-hover:text-white">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI Advisor</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span className="group-hover:text-indigo-200">
                  All Widget Access
                </span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="w-full rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-6 text-gray-900 shadow-2xl transition-all duration-500 hover:bg-indigo-600 lg:max-w-none xl:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-solid border-gray-200 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope mb-2 text-2xl font-bold group-hover:text-white">
                  Advanced
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center rounded-lg bg-indigo-50 px-6 py-3">
                <span className="font-manrope bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-3xl font-semibold text-transparent">
                  $180
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800 group-hover:text-white">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI Advisor</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>All Widget Access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="w-full rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  )
}
