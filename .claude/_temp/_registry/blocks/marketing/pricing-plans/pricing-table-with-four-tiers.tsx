export default function PricingTableWithFourTiers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4">
            Our pricing is simple with no hidden fees{" "}
          </h2>
          <p className="text-gray-500 text-center leading-6 mb-9">
            7 Days free trial. No credit card required.
          </p>
          {/*Switch*/}
          <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] relative text-xl text-gray-900 mr-4 font-medium">
              Bill Monthly
            </label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:border-blue-600  appearance-none 

                      before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
            />
            <label className="relative min-w-[3.5rem] text-xl font-medium checked:text-gray-900 text-gray-500 ml-4 ">
              Bill Yearly
            </label>
          </div>
          {/*Switch End*/}
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-full w-full max-w-sm mx-auto  text-gray-900 rounded-2xl shadow-2xl bg-white p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className="flex items-center justify-between border-b border-solid border-gray-200 mb-8 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope text-2xl font-bold mb-2 group-hover:text-white">
                  Basic
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center bg-indigo-50 rounded-lg py-3 px-6">
                <span className="font-manrope text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
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
              className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-white text-base font-semibold text-center w-full group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-none w-full max-w-sm mx-auto  text-gray-900 rounded-2xl shadow-2xl bg-white p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className="flex items-center justify-between border-b border-solid border-gray-200 mb-8 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope text-2xl font-bold mb-2 group-hover:text-white">
                  Pro
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center bg-indigo-50 rounded-lg py-3 px-6">
                <span className="font-manrope text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
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
              className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-white text-base font-semibold text-center w-full group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col lg:max-w-none w-full max-w-sm mx-auto text-gray-900 rounded-2xl shadow-2xl bg-white p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className="flex items-center justify-between border-b border-solid border-gray-200 mb-8 pb-8 group-hover:border-indigo-500">
              <div className="block">
                <h3 className="font-manrope text-2xl font-bold mb-2 group-hover:text-white">
                  Advanced
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-200">
                  Per Month
                </p>
              </div>
              <div className="flex items-center bg-indigo-50 rounded-lg py-3 px-6">
                <span className="font-manrope text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
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
              className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-white text-base font-semibold text-center w-full group-hover:bg-white group-hover:text-indigo-600"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
