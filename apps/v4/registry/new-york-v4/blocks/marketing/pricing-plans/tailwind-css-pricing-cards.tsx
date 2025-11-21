export default function TailwindCssPricingCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-center text-5xl font-bold text-gray-900">
            Our pricing
          </h2>
        </div>
        {/*Grid*/}
        <div className="mb-14 space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          {/*Pricing Card*/}
          <div className="group before:content[''] relative mx-auto flex w-full max-w-sm flex-col p-8 text-center text-gray-900 transition-all duration-300 before:absolute before:top-1/2 before:right-0 before:h-[10rem] before:-translate-y-1/2 before:bg-gray-300 lg:before:w-[1px] xl:px-8 xl:py-11">
            <div className="mx-auto mb-4 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Free
            </div>
            <div className="font-manrope my-5 flex items-center justify-center">
              <sup className="translate-y-0 text-4xl font-medium text-gray-900 xl:-translate-y-4">
                $
              </sup>
              <span className="text-4xl font-bold text-indigo-600 xl:text-8xl">
                0
              </span>
            </div>
            {/*List*/}
            <ul className="text-lbase mb-10 space-y-6 text-center text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor for a day</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Only two auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>7 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="mx-auto block w-fit rounded-full border border-solid border-gray-300 px-5 py-2.5 text-center text-base leading-normal font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group lg:before:contents[''] relative mx-auto flex w-full max-w-sm flex-col p-8 text-center text-gray-900 transition-all duration-300 before:absolute before:top-1/2 before:right-0 before:h-[10rem] before:-translate-y-1/2 before:bg-gray-300 lg:before:w-[1px] xl:px-8 xl:py-11">
            <div className="mx-auto mb-4 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Pro
            </div>
            <div className="font-manrope my-5 flex items-center justify-center">
              <sup className="translate-y-0 text-4xl font-medium text-gray-900 xl:-translate-y-4">
                $
              </sup>
              <span className="text-4xl font-bold text-indigo-600 xl:text-8xl">
                150
              </span>
            </div>
            {/*List*/}
            <ul className="text-lbase mb-10 space-y-6 text-center text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Twenty auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>3 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="mx-auto block w-fit rounded-full border border-solid border-gray-300 px-5 py-2.5 text-center text-base leading-normal font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
          {/*Pricing Card*/}
          <div className="group relative mx-auto flex w-full max-w-sm flex-col p-8 text-center text-gray-900 transition-all duration-300 xl:px-8 xl:py-11">
            <div className="mx-auto mb-4 flex h-6 w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />{" "}
              Advanced
            </div>
            <div className="font-manrope my-5 flex items-center justify-center">
              <sup className="translate-y-0 text-4xl font-medium text-gray-900 xl:-translate-y-4">
                $
              </sup>
              <span className="text-4xl font-bold text-indigo-600 xl:text-8xl">
                180
              </span>
            </div>
            {/*List*/}
            <ul className="text-lbase mb-10 space-y-6 text-center text-gray-900 group-hover:text-gray-900">
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>AI advisor full time</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>Unlimited auto tracking</span>
              </li>
              <li className="flex items-center justify-center space-x-3.5">
                {/* Icon */}
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <span>1 Day transaction clearing </span>
              </li>
            </ul>
            {/*List End*/}
            <a
              href="javascript:;"
              className="mx-auto block w-fit rounded-full border border-solid border-gray-300 px-5 py-2.5 text-center text-base leading-normal font-semibold text-gray-900 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
            >
              Choose Plan
            </a>
          </div>
        </div>
        {/*Grid End*/}
        <div className="mx-auto w-fit cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm lg:px-12">
          For Today Get Special Price 20% OFF
        </div>
      </div>
    </section>
  )
}
