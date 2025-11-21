export default function TailwindPricingTableWithGradientBackground() {
  return (
    <section className="relative py-24">
      <div className="absolute top-0 -z-10 h-[36.5rem] w-full bg-gradient-to-r from-indigo-600 to-violet-600" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-white">
            Suitable pricing plans
          </h2>
          <p className="text-center text-xl leading-6 text-gray-300">
            7 Days free trial. No credit card required.
          </p>
        </div>
        {/*Grid*/}
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          {/*Pricing Card*/}
          <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 xl:p-12">
            <div className="mb-9 border-b border-solid border-gray-200 pb-9">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope my-7 text-center text-2xl font-bold text-indigo-600">
                Free Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $0
                </span>
                <span className="ml-3 text-xl text-gray-500">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor for a day</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>2 auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>7 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>24/7 Customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 xl:p-12">
            <div className="mb-9 border-b border-solid border-gray-200 pb-9">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope my-7 text-center text-2xl font-bold text-indigo-600">
                Business Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $150
                </span>
                <span className="ml-3 text-xl text-gray-500">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 xl:p-12">
            <div className="mb-9 border-b border-solid border-gray-200 pb-9">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-600">
                {/* SVG removed */}
              </div>
              <h3 className="font-manrope my-7 text-center text-2xl font-bold text-indigo-600">
                Enterprise Plan
              </h3>
              <div className="flex items-center justify-center">
                <span className="font-manrope text-4xl font-medium text-gray-900">
                  $180
                </span>
                <span className="ml-3 text-xl text-gray-500">
                  |&nbsp; Month
                </span>
              </div>
            </div>
            {/*List*/}
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
