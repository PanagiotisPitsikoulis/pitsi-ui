export default function SimpleTransparentPricingTable() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="mb-12 flex items-center justify-between flex-col lg:flex-row">
          <div className="block">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4 lg:text-left">
              Our suitable packages
            </h2>
            <p className="text-lg text-gray-500">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-col lg:flex-row">
            <span className="flex items-center gap-2 text-white">
              {/* SVG removed */}
              Save up to 30%
            </span>
            {/*Switch*/}
            <div className="flex justify-center items-center gap-2">
              <a
                className="inline-block text-center transition-all duration-500 rounded-full text-indigo-600 bg-indigo-100 font-semibold py-3 px-7 hover:text-white hover:bg-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="inline-block text-center transition-all duration-500 rounded-full text-indigo-600 bg-indigo-100 font-semibold py-3 px-7 hover:text-white hover:bg-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Yearly
              </a>
            </div>
            {/*Switch End*/}
          </div>
        </div>
        {/*Grid*/}
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent "
        >
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Free Plan
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $0
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>7 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>24/7 Customer support </span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>All widget access</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Advanced
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $39
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI Advisor</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
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
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Enterprise
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $49
                </span>
                <span className="text-xl text-gray-500">/ month</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI Advisor</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
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
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent "
        >
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Free Plan
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $0
                </span>
                <span className="text-xl text-gray-500">/ year</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>7 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>24/7 Customer support </span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>All widget access</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Advanced
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $150
                </span>
                <span className="text-xl text-gray-500">/ year</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI Advisor</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
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
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group flex flex-col mx-auto max-w-sm w-full shadow-xl rounded-2xl bg-white p-6 xl:p-8 transition-all duration-500 border-t-4 border-solid border-indigo-600 h-fit">
              <h3 className="font-manrope text-lg font-medium text-indigo-600 mb-2 group-hover:text-gray-900">
                Enterprise
              </h3>
              <div className="flex items-center mb-8 pb-6 border-b border-solid border-gray-200">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  $180
                </span>
                <span className="text-xl text-gray-500">/ year</span>
              </div>
              {/*List*/}
              <ul className="mb-10 space-y-4 text-left text-gray-800">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI Advisor</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
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
                className="py-2.5 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
