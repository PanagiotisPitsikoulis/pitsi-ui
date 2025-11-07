export default function TailwindPricingTableWithGradientBackground() {
  return (
    <section className="py-24 relative">
      <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-indigo-600 to-violet-600 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Suitable pricing plans
          </h2>
          <p className="text-gray-300 text-xl text-center leading-6">
            7 Days free trial. No credit card required.
          </p>
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
            <div className="border-b border-solid border-gray-200 pb-9 mb-9">
              <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope text-2xl font-bold my-7 text-center text-indigo-600">
                Free Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $0
                </span>
                <span className="text-xl text-gray-500 ml-3">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor for a day</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>2 auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>7 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>24/7 Customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
            <div className="border-b border-solid border-gray-200 pb-9 mb-9">
              <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope text-2xl font-bold my-7 text-center text-indigo-600">
                Business Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $150
                </span>
                <span className="text-xl text-gray-500 ml-3">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
            <div className="border-b border-solid border-gray-200 pb-9 mb-9">
              <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope text-2xl font-bold my-7 text-center text-indigo-600">
                Enterprise Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $180
                </span>
                <span className="text-xl text-gray-500 ml-3">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
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
