export default function ImageAsPricingCardBackground() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="mb-12 flex items-center justify-between flex-col lg:flex-row">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Simple pricing for everyone.
          </h2>
          <div className="flex items-center gap-3 flex-col lg:flex-row">
            <span className="flex items-center gap-2 text-white">
              {/* SVG removed */}
              Save up to 30%
            </span>
            {/*Switch*/}
            <div className="flex justify-center items-center">
              <a
                className="inline-block text-center transition-all duration-500 rounded-full text-indigo-300 bg-transparent font-semibold py-3 px-7 hover:text-white hover:bg-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="inline-block text-center transition-all duration-500 rounded-full text-indigo-300 bg-transparent font-semibold py-3 px-7 hover:text-white hover:bg-indigo-600 tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink whitespace-nowrap"
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
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0"></div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Free
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $0
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / Month
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Individual Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor for a day</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>7 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>24/7 Customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-8 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0 rounded-tr-2xl overflow-hidden">
                {/* SVG removed */}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Popular
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $39
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / Month
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Business Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>1 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Priority customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-8 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0"></div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Advanced
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $49
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / Month
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Enterprise Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>1 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Priority customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-8 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent "
        >
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0"></div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Free
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $0
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / year
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Individual Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor for a day</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>7 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>24/7 Customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-5 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0 rounded-tr-2xl overflow-hidden">
                {/* SVG removed */}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Popular
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $150
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / year
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Business Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>1 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Priority customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-5 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl bg-white transition-all duration-300 p-8 xl:py-11 xl:px-8">
              <div className="absolute right-0 top-0"></div>
              <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 font-medium h-6 w-fit text-sm text-indigo-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Advanced
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $180
                </span>
                <span className="text-sm text-gray-400 font-medium ml-2 lg:text-x">
                  / year
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-9">Enterprise Plan</h3>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left font-medium text-gray-600">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>1 Day transaction clearing </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Priority customer support</span>
                </li>
              </ul>
              {/*List End*/}
              <a
                href="javascript:;"
                className="py-2.5 px-5 shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-indigo-600 block w-full mx-auto group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  );
}
