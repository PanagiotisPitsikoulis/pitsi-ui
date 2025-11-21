export default function ImageAsPricingCardBackground() {
  return (
    <section className="bg-gray-800 py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between lg:flex-row">
          <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-white">
            Simple pricing for everyone.
          </h2>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <span className="flex items-center gap-2 text-white">
              {/* SVG removed */}
              Save up to 30%
            </span>
            {/*Switch*/}
            <div className="flex items-center justify-center">
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink active inline-block rounded-full bg-transparent px-7 py-3 text-center font-semibold whitespace-nowrap text-indigo-300 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Monthly
              </a>
              <a
                className="tab-active:bg-indigo-600 tab-active:rounded-full tab-active:text-white tablink inline-block rounded-full bg-transparent px-7 py-3 text-center font-semibold whitespace-nowrap text-indigo-300 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
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
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0"></div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Free
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $0
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / Month
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Individual Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-8 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0 overflow-hidden rounded-tr-2xl">
                {/* SVG removed */}
              </div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Popular
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $39
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / Month
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Business Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-8 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0"></div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Advanced
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $49
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / Month
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Enterprise Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-8 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
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
          className="tabcontent"
        >
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0"></div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Free
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $0
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / year
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Individual Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-5 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0 overflow-hidden rounded-tr-2xl">
                {/* SVG removed */}
              </div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Popular
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $150
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / year
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Business Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-5 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col rounded-2xl bg-white p-8 text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
              <div className="absolute top-0 right-0"></div>
              <div className="mb-6 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Advanced
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-manrope text-3xl font-bold xl:text-5xl">
                  $180
                </span>
                <span className="lg:text-x ml-2 text-sm font-medium text-gray-400">
                  / year
                </span>
              </div>
              <h3 className="mb-9 text-lg font-semibold">Enterprise Plan</h3>
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
                className="mx-auto block w-full rounded-full border border-solid border-indigo-600 px-5 py-2.5 text-center text-base font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  )
}
