export default function SimpleTransparentPricingTable() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between lg:flex-row">
          <div className="block">
            <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900 lg:text-left">
              Our suitable packages
            </h2>
            <p className="text-lg text-gray-500">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <span className="flex items-center gap-2 text-white">
              {/* SVG removed */}
              Save up to 30%
            </span>
            {/*Switch*/}
            <div className="flex items-center justify-center gap-2">
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink active inline-block rounded-full bg-indigo-100 px-7 py-3 text-center font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink inline-block rounded-full bg-indigo-100 px-7 py-3 text-center font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
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
          className="tabcontent"
        >
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Free Plan
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Advanced
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Enterprise
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
          className="tabcontent"
        >
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Free Plan
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Advanced
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Select Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border-t-4 border-solid border-indigo-600 bg-white p-6 shadow-xl transition-all duration-500 xl:p-8">
              <h3 className="font-manrope mb-2 text-lg font-medium text-indigo-600 group-hover:text-gray-900">
                Enterprise
              </h3>
              <div className="mb-8 flex items-center border-b border-solid border-gray-200 pb-6">
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
                className="mx-auto w-full rounded-full bg-indigo-50 px-8 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
  )
}
