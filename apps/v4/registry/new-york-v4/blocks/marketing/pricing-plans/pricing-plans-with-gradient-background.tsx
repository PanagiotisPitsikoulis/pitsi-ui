export default function PricingPlansWithGradientBackground() {
  return (
    <section className="bg-black py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="block">
            <h2 className="font-manrope mb-4 text-center text-5xl leading-normal font-semibold text-white lg:text-left">
              Our Pricing Plans with Confidence
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-white lg:text-start">
              Pricing Options for Our Public Beta
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            {/*Switch*/}
            <div className="mx-auto flex max-w-sm items-center justify-center rounded-full bg-gray-900 p-1.5">
              <a
                className="tab-active:text-black tab-active:bg-white tab-active:rounded-full tablink active inline-block items-center justify-center rounded-full bg-transparent px-7 py-3 text-center text-base font-semibold whitespace-nowrap text-gray-400 shadow transition-all duration-500"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="tab-active:text-black tab-active:bg-white tab-active:rounded-full tablink inline-block rounded-full px-7 py-3 text-center text-base font-semibold whitespace-nowrap text-gray-400 transition-all duration-500"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Bill Monthly
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
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Free
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Inpidual Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $0
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor for a day</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Advanced
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Business Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $39
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Team
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Enterprise Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $49
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent"
        >
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Free
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Inpidual Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $0
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor for a day</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>2 auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Advanced
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Business Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $150
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex h-fit w-full max-w-sm flex-col rounded-2xl border border-solid border-gray-900 bg-black p-6 shadow-md transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out hover:border-gray-600 hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] xl:p-8">
              <h3 className="font-manrope mb-2 text-2xl leading-9 font-medium text-white">
                Team
              </h3>
              <p className="mb-8 text-base leading-relaxed font-normal text-white">
                Enterprise Plan
              </p>
              <div className="mb-8 border-b border-solid border-slate-900 pb-6 text-2xl leading-9 font-medium text-white">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $180
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-base leading-relaxed font-medium text-white">
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>AI advisor full time</span>
                </li>
                <li className="flex items-center space-x-4">
                  {/* Icon */}
                  {/* SVG removed */}
                  <span>Unlimited auto tracking</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="mx-auto w-full rounded-lg border border-white bg-transparent px-8 py-2.5 text-center text-base leading-relaxed font-semibold text-white shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
          </div>
        </div>
        {/*Grid End*/}
      </div>
    </section>
  )
}
