export default function PricingCardWithBorderedLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-gray-900">
            Choose your plan{" "}
          </h2>
          <p className="text-center text-xl leading-6 text-gray-500">
            7 Days free trial. No credit card required.
          </p>
        </div>
        {/*Grid*/}
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-3xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600 lg:max-w-full xl:p-8">
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800">
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
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span>All Widget Access</span>
              </li>
            </ul>
            {/*List End*/}
            <div className="mb-10">
              <div className="mb-2 flex items-center">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $0
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">Free Plan</h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="w-36 rounded-full bg-indigo-50 px-3.5 py-3 text-center font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-3xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600 lg:max-w-full xl:p-8">
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800">
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
                <span>Priority customer support</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500">
                {/* Icon */}
                {/* SVG removed */}
                <span>All Widget Access</span>
              </li>
            </ul>
            {/*List End*/}
            <div className="mb-10">
              <div className="mb-2 flex items-center">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $150
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">
                  Advanced Plan
                </h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="w-36 rounded-full bg-indigo-50 px-3.5 py-3 text-center font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-3xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600 lg:max-w-full xl:p-8">
            {/*List*/}
            <ul className="mb-8 space-y-5 text-left text-gray-800">
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
            {/*List End*/}
            <div className="mb-10">
              <div className="mb-2 flex items-center">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $180
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">Team Plan</h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="w-36 rounded-full bg-indigo-50 px-3.5 py-3 text-center font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  )
}
