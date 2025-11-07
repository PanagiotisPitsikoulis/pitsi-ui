export default function ImageWithPricingCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4">
            Our affordable pricing plan
          </h2>
          <p className="text-gray-500 text-center leading-6 mb-9">
            7 Days free trial. No credit card required.
          </p>
          {/*Switch*/}
          <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] text-xl relative text-gray-900 mr-4 font-medium">
              Bill Monthly
            </label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:border-blue-600  appearance-none 

                      before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
            />
            <label className="relative min-w-[3.5rem] text-xl font-medium text-gray-500 ml-4 ">
              Bill Yearly
            </label>
          </div>
          {/*Switch End*/}
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-0 lg:space-y-0 ">
          {/*Pricing Card*/}
          <div className="group flex flex-col mx-auto max-w-sm w-full  transition-all duration-500 px-5 lg:border-r border-solid border-gray-200">
            <div className="mb-10">
              <div className="flex items-center mb-3 justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $0
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-2xl font-bold text-gray-900 text-center lg:text-left">
                Free
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-center lg:text-left text-lg text-gray-800">
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>2 auto tracking</span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>7 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Customer support</span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5 w-fit bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center mx-auto lg:mx-0 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col mx-auto max-w-sm w-full  transition-all duration-500 px-5 lg:border-r border-solid border-gray-200">
            <div className="mb-10">
              <div className="flex items-center mb-3 justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $150
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-2xl text-center font-bold text-gray-900 lg:text-left">
                Advance
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-left text-lg text-gray-800">
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>5 auto tracking</span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>3 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Customer support </span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5  bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto lg:mx-0 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Purchase Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group flex flex-col mx-auto max-w-sm w-full  transition-all duration-500 px-5">
            <div className="mb-10">
              <div className="flex items-center mb-3 justify-center lg:justify-start">
                <span className="font-manrope mr-2 text-6xl font-semibold text-gray-900">
                  $180
                </span>
                <span className="text-xl text-gray-500 capitalize">
                  / month
                </span>
              </div>
              <h3 className="font-manrope text-2xl font-bold text-gray-900 text-center lg:text-left">
                Pro
              </h3>
            </div>
            {/*List*/}
            <ul className="mb-14 space-y-6 text-left text-lg text-gray-800">
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>20 auto tracking</span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing</span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Priority support </span>
              </li>
              <li className="flex items-center space-x-4 justify-center lg:justify-start">
                {/* Icon */}
                {/* SVG removed */}
                <span>All widget access</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-2.5 px-5  bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto lg:mx-0 group-hover:bg-indigo-600 group-hover:text-white"
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
