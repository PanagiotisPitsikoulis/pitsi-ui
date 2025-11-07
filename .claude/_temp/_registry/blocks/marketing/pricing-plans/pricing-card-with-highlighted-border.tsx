export default function PricingCardWithHighlightedBorder() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4">
            Simple transparent pricing{" "}
          </h2>
          <p className="text-lg text-gray-500 text-center leading-6">
            No contract. No surprise fees
          </p>
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {/*Pricing Card*/}
          <div className="group lg:max-w-full w-full max-w-sm mx-auto rounded-3xl bg-gray-50 p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className=" mb-8 pb-8 relative border-b border-solid border-gray-200 group-hover:border-indigo-400">
              <div className="flex items-center mb-2">
                <span className="font-manrope text-4xl font-bold text-gray-900 group-hover:text-white">
                  $0
                </span>
                <span className="text-xl text-gray-500 ml-3 group-hover:text-white">
                  |&nbsp; Month
                </span>
              </div>
              <div className="block">
                <h3 className="font-manrope text-2xl font-semibold text-indigo-600 group-hover:text-white">
                  Free plan
                </h3>
              </div>
            </div>
            {/*List*/}
            <ul className="space-y-6 text-left  text-gray-800 group-hover:text-white mb-9">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI advisor for a day</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>2 auto tracking </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>7 Day transaction clearing </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>24/7 Customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-3 px-7 text-base bg-transparent rounded-full transition-all duration-500 border border-gray-300 text-black font-semibold text-center w-full block group-hover:bg-white group-hover:text-indigo-600"
            >
              Select Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group lg:max-w-full w-full max-w-sm mx-auto rounded-3xl bg-gray-50 p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className=" mb-8 pb-8 relative border-b border-solid border-gray-200 group-hover:border-indigo-400">
              <div className="flex items-center mb-2">
                <span className="font-manrope text-4xl font-bold text-gray-900 group-hover:text-white">
                  $150
                </span>
                <span className="text-xl text-gray-500 ml-3 group-hover:text-white">
                  |&nbsp; Month
                </span>
              </div>
              <div className="block">
                <h3 className="font-manrope text-2xl font-semibold text-indigo-600 group-hover:text-white">
                  Business plan
                </h3>
              </div>
            </div>
            {/*List*/}
            <ul className="space-y-6 text-left  text-gray-800 group-hover:text-white mb-9">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Unlimited auto tracking </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-3 px-7 text-base bg-transparent rounded-full transition-all duration-500 border border-gray-300 text-black font-semibold text-center w-full block group-hover:bg-white group-hover:text-indigo-600"
            >
              Select Plan
            </a>
            {/*List End*/}
          </div>
          {/*Pricing Card*/}
          <div className="group lg:max-w-full w-full max-w-sm mx-auto rounded-3xl bg-gray-50 p-6 xl:p-8 transition-all duration-500 hover:bg-indigo-600">
            <div className=" mb-8 pb-8 relative border-b border-solid border-gray-200 group-hover:border-indigo-400">
              <div className="flex items-center mb-2">
                <span className="font-manrope text-4xl font-bold text-gray-900 group-hover:text-white">
                  $180
                </span>
                <span className="text-xl text-gray-500 ml-3 group-hover:text-white">
                  |&nbsp; Month
                </span>
              </div>
              <div className="block">
                <h3 className="font-manrope text-2xl font-semibold   text-indigo-600 group-hover:text-white">
                  Enterprise plan
                </h3>
              </div>
            </div>
            {/*List*/}
            <ul className="space-y-6 text-left  text-gray-800 group-hover:text-white mb-9">
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Unlimited auto tracking </span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>1 Day transaction clearing</span>
              </li>
              <li className="flex items-center space-x-4">
                {/* Icon */}
                {/* SVG removed */}
                <span>Priority customer support</span>
              </li>
            </ul>
            <a
              href="javascript:;"
              className="py-3 px-7 text-base bg-transparent rounded-full transition-all duration-500 border border-gray-300 text-black font-semibold text-center w-full block group-hover:bg-white group-hover:text-indigo-600"
            >
              Select Plan
            </a>
            {/*List End*/}
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
