export default function PricingPlansWithGradientBackground() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="mb-12 flex items-center justify-between gap-6 flex-col lg:flex-row">
          <div className="block">
            <h2 className="font-manrope text-center mb-4 lg:text-left text-white text-5xl font-semibold leading-normal">
              Our Pricing Plans with Confidence
            </h2>
            <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
              Pricing Options for Our Public Beta
            </p>
          </div>
          <div className="flex items-center gap-3 flex-col lg:flex-row">
            {/*Switch*/}
            <div className="flex justify-center items-center bg-gray-900 rounded-full p-1.5 max-w-sm mx-auto">
              <a
                className=" text-gray-400 tab-active:text-black tab-active:bg-white tab-active:rounded-full text-base font-semibold bg-transparent rounded-full shadow justify-center items-center inline-block text-center transition-all duration-500 py-3 px-7 tablink whitespace-nowrap active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                Bill Yearly
              </a>
              <a
                className="  text-gray-400 tab-active:text-black tab-active:bg-white  inline-block text-center text-base transition-all duration-500 rounded-full font-semibold py-3 px-7  tab-active:rounded-full tablink whitespace-nowrap"
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
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
            {/*Pricing Card*/}
            <div
              className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md
     hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit"
            >
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Free
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Inpidual Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $0
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8  border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed  rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md  hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)]  group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit">
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Advanced
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Business Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $39
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8  border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md  hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit">
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Team
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Enterprise Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $49
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8  border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto"
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
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
            {/*Pricing Card*/}
            <div className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md  hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit">
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Free
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Inpidual Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $0
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8  border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto "
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md  hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit">
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Advanced
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Business Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $150
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8  border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto "
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="group relative group-hover:opacity-100 duration-700 ease-in-out transition-all flex flex-col mx-auto max-w-sm w-full border-gray-900 shadow-md  hover:bg-[linear-gradient(214deg,_rgba(245,_160,_33,_0.50)_2.21%,_rgba(245,_160,_33,_0.00)_38.36%)] group-hover:ease-in-out rounded-2xl border hover:border-gray-600 bg-black p-6 xl:p-8 group-hover:transition-all group-hover:duration-700 border-solid h-fit">
              <h3 className="text-white text-2xl font-medium leading-9 font-manrope mb-2">
                Team
              </h3>
              <p className="text-white text-base font-normal leading-relaxed mb-8">
                Enterprise Plan
              </p>
              <div className="mb-8 pb-6 border-b border-solid border-slate-900 text-2xl text-white leading-9 font-medium">
                <span className="font-manrope mr-2 text-6xl font-semibold text-white">
                  $180
                </span>
                /MO
              </div>
              {/*List*/}
              <ul className="mb-8 space-y-4 text-left text-white text-base font-medium leading-relaxed">
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
                className="py-2.5 px-8 border bg-transparent group-hover:bg-white border-white text-white group-hover:text-gray-900 text-base font-semibold leading-relaxed  rounded-lg shadow-sm transition-all duration-500 text-center w-full mx-auto "
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
  );
}
