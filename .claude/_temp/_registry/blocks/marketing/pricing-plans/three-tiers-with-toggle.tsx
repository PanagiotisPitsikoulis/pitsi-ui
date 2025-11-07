export default function ThreeTiersWithToggle() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 ">
            Our affordable pricing plan{" "}
          </h2>
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-full w-full max-w-sm mx-auto  text-gray-900 transition-all duration-500 ">
            {/*List*/}
            <ul className="space-y-7 text-left text-gray-800 ">
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
          <div className="group flex flex-col lg:max-w-none w-full max-w-sm mx-auto text-center text-gray-900 rounded-2xl border border-solid border-gray-300  py-9 px-10 xl:px-12  transition-all duration-500 hover:border-indigo-600">
            <div className="block">
              <h5 className="text-lg font-medium text-indigo-600">Basic</h5>
            </div>
            <div className="my-5 flex items-center justify-center">
              <span className="font-manrope text-4xl font-bold">$80.00</span>
              <span className="text-gray-500 ml-2 ">/ Month</span>
            </div>
            <div className=" flex items-center justify-center text-gray-500 text-sm text-center gap-4 mb-10">
              1 month free{" "}
              <span className="bg-indigo-100 rounded-full py-1 px-3.5 text-indigo-600 font-medium">
                Save 75%
              </span>
            </div>
            <a
              href="javascript:;"
              className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full text-base transition-all duration-500 text-white font-semibold text-center w-full "
            >
              Purchase Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-none w-full max-w-sm mx-auto text-center text-gray-900 rounded-2xl border border-solid border-gray-300  py-9 px-10 xl:px-12 transition-all duration-500 hover:border-indigo-600">
            <div className="block">
              <h5 className="text-lg font-medium text-indigo-600">Advanced</h5>
            </div>
            <div className="my-5 flex items-center justify-center">
              <span className="font-manrope text-4xl font-bold">$180.00</span>
              <span className="text-gray-500 ml-2 ">/ Month</span>
            </div>
            <div className=" flex items-center justify-center text-gray-500 text-sm text-center gap-4 mb-10">
              1 month free{" "}
              <span className="bg-indigo-100 rounded-full py-1 px-3.5 text-indigo-600 font-medium">
                Save 75%
              </span>
            </div>
            <a
              href="javascript:;"
              className="py-3 px-7 bg-indigo-600 text-base shadow-sm rounded-full transition-all duration-500 text-white font-semibold text-center w-full "
            >
              Purchase Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
