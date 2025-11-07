export default function PricingCardWithBorderedLayout() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
            Choose your plan{" "}
          </h2>
          <p className="text-gray-500 text-xl text-center leading-6">
            7 Days free trial. No credit card required.
          </p>
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-full w-full max-w-sm mx-auto  rounded-3xl border border-solid border-gray-300  p-6 xl:p-8 transition-all duration-500 hover:border-indigo-600">
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
              <div className="flex items-center mb-2">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $0
                </span>
                <span className="text-xl text-gray-500 ">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">Free Plan</h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="py-3 px-3.5 w-36 bg-indigo-50 text-indigo-600 shadow-sm rounded-full transition-all duration-500 font-semibold text-center  group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-full w-full max-w-sm mx-auto  rounded-3xl border border-solid border-gray-300  p-6 xl:p-8 transition-all duration-500 hover:border-indigo-600">
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
              <li className="flex items-center space-x-4 ">
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
              <div className="flex items-center mb-2">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $150
                </span>
                <span className="text-xl text-gray-500 ">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">
                  Advanced Plan
                </h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="py-3 px-3.5 w-36 bg-indigo-50 text-indigo-600 shadow-sm rounded-full transition-all duration-500 font-semibold text-center  group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-full w-full max-w-sm mx-auto  rounded-3xl border border-solid border-gray-300  p-6 xl:p-8 transition-all duration-500 hover:border-indigo-600">
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
              <li className="flex items-center space-x-4 ">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4 ">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support</span>
              </li>
              <li className="flex items-center space-x-4 ">
                {/* Icon */}
                {/* SVG removed */}
                <span>All Widget Access</span>
              </li>
            </ul>
            {/*List End*/}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $180
                </span>
                <span className="text-xl text-gray-500 ">/ month</span>
              </div>
              <div className="block">
                <h3 className="text-xl font-medium text-gray-900">Team Plan</h3>
              </div>
            </div>
            <a
              href="javascript:;"
              className="py-3 px-3.5 w-36 bg-indigo-50 text-indigo-600 shadow-sm rounded-full transition-all duration-500 font-semibold text-center  group-hover:bg-indigo-600 group-hover:text-white"
            >
              Select Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
