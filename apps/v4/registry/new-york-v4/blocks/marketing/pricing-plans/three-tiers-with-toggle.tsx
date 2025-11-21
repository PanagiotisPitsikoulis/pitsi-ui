export default function ThreeTiersWithToggle() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
            Our affordable pricing plan{" "}
          </h2>
        </div>
        {/*Grid*/}
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col text-gray-900 transition-all duration-500 lg:max-w-full">
            {/*List*/}
            <ul className="space-y-7 text-left text-gray-800">
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>AI Advisor</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>All future updates</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>Unlimited project &amp; analytic</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>Custom infrastructure and data</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>24*7 customer support</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* SVG removed */}
                <span>Free weekly backup</span>
              </li>
            </ul>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 px-10 py-9 text-center text-gray-900 transition-all duration-500 hover:border-indigo-600 lg:max-w-none xl:px-12">
            <div className="block">
              <h5 className="text-lg font-medium text-indigo-600">Basic</h5>
            </div>
            <div className="my-5 flex items-center justify-center">
              <span className="font-manrope text-4xl font-bold">$80.00</span>
              <span className="ml-2 text-gray-500">/ Month</span>
            </div>
            <div className="mb-10 flex items-center justify-center gap-4 text-center text-sm text-gray-500">
              1 month free{" "}
              <span className="rounded-full bg-indigo-100 px-3.5 py-1 font-medium text-indigo-600">
                Save 75%
              </span>
            </div>
            <a
              href="javascript:;"
              className="w-full rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500"
            >
              Purchase Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-300 px-10 py-9 text-center text-gray-900 transition-all duration-500 hover:border-indigo-600 lg:max-w-none xl:px-12">
            <div className="block">
              <h5 className="text-lg font-medium text-indigo-600">Advanced</h5>
            </div>
            <div className="my-5 flex items-center justify-center">
              <span className="font-manrope text-4xl font-bold">$180.00</span>
              <span className="ml-2 text-gray-500">/ Month</span>
            </div>
            <div className="mb-10 flex items-center justify-center gap-4 text-center text-sm text-gray-500">
              1 month free{" "}
              <span className="rounded-full bg-indigo-100 px-3.5 py-1 font-medium text-indigo-600">
                Save 75%
              </span>
            </div>
            <a
              href="javascript:;"
              className="w-full rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500"
            >
              Purchase Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  )
}
