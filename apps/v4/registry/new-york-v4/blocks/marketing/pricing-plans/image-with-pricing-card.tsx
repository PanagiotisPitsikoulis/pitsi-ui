export default function ImageWithPricingCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Our affordable pricing plan
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
            <label className="relative ml-4 min-w-[3.5rem] text-xl font-medium text-gray-500">
              Bill Yearly
            </label>
          </div>
          {/*Switch End*/}
        </div>
        {/*Grid*/}
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-0">
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col border-solid border-gray-200 px-5 transition-all duration-500 lg:border-r">
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $0
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-center text-2xl font-bold text-gray-900 lg:text-left">
                Free
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-center text-lg text-gray-800 lg:text-left">
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>2 auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>7 Day transaction clearing </span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Customer support</span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white lg:mx-0"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col border-solid border-gray-200 px-5 transition-all duration-500 lg:border-r">
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $150
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-center text-2xl font-bold text-gray-900 lg:text-left">
                Advance
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-left text-lg text-gray-800">
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>5 auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>3 Day transaction clearing </span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Customer support </span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white lg:mx-0"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group mx-auto flex w-full max-w-sm flex-col px-5 transition-all duration-500">
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $180
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-center text-2xl font-bold text-gray-900 lg:text-left">
                Pro
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-left text-lg text-gray-800">
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>20 auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing</span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Priority support </span>
              </li>
              <li className="flex items-center justify-center space-x-4 lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="mx-auto w-fit rounded-full bg-indigo-50 px-5 py-2.5 text-center text-base font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white lg:mx-0"
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
