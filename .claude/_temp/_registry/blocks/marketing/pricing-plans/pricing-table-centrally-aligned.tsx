export default function PricingTableCentrallyAligned() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 ">
            Our pricing
          </h2>
        </div>
        {/*Grid*/}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center mb-14">
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 text-center transition-all duration-300  p-8 xl:py-11 xl:px-8 before:content[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[10rem] lg:before:w-[1px] before:bg-gray-300">
            <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 mx-auto font-medium h-6 w-fit text-sm text-indigo-600 mb-4 ">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 " /> Free
            </div>
            <div className="my-5 flex items-center justify-center font-manrope">
              <sup className="text-4xl text-gray-900 font-medium translate-y-0 xl:-translate-y-4">
                $
              </sup>
              <span className=" text-4xl font-bold xl:text-8xl text-indigo-600">
                0
              </span>
            </div>
            {/*List*/}
            <ul className="mb-10 space-y-6 text-center text-lbase text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor for a day</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Only two auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>7 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="py-2.5 px-5 leading-normal  shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-gray-300 block w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 text-center transition-all duration-300  p-8 xl:py-11 xl:px-8 lg:before:contents[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[10rem] lg:before:w-[1px] before:bg-gray-300">
            <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 mx-auto font-medium h-6 w-fit text-sm text-indigo-600 mb-4 ">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 " /> Pro
            </div>
            <div className="my-5 flex items-center justify-center font-manrope">
              <sup className="text-4xl text-gray-900 font-medium translate-y-0 xl:-translate-y-4">
                $
              </sup>
              <span className=" text-4xl font-bold xl:text-8xl text-indigo-600">
                150
              </span>
            </div>
            {/*List*/}
            <ul className="mb-10 space-y-6 text-center text-lbase text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Twenty auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>3 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="py-2.5 px-5 leading-normal  shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-gray-300 block w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 text-center transition-all duration-300  p-8 xl:py-11 xl:px-8 ">
            <div className="flex items-center gap-2 rounded-full bg-indigo-100 py-2 px-3 mx-auto font-medium h-6 w-fit text-sm text-indigo-600 mb-4 ">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 " />{" "}
              Advanced
            </div>
            <div className="my-5 flex items-center justify-center font-manrope">
              <sup className="text-4xl text-gray-900 font-medium translate-y-0 xl:-translate-y-4">
                $
              </sup>
              <span className=" text-4xl font-bold xl:text-8xl text-indigo-600">
                180
              </span>
            </div>
            {/*List*/}
            <ul className="mb-10 space-y-6 text-center text-lbase text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="py-2.5 px-5 leading-normal   shadow-sm rounded-full transition-all duration-500 text-base text-gray-900 font-semibold text-center border border-solid border-gray-300 block w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
        <div className="bg-indigo-50 rounded-full shadow-sm cursor-pointer text-base py-3 px-6 lg:px-12 w-fit mx-auto text-indigo-600 font-semibold">
          For Today Get Special Price 20% OFF
        </div>
      </div>
    </section>
  );
}
