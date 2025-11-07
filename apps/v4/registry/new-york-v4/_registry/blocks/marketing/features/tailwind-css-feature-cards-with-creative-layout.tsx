export default function TailwindCssFeatureCardsWithCreativeLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl xl:max-w-full">
          <span className="mb-2 block text-center text-sm font-normal text-gray-500 uppercase lg:text-left">
            OUR FEATURE
          </span>
          <h2 className="text-center text-4xl leading-[3.2rem] font-semibold text-gray-900 lg:text-left">
            Receive money with-in{" "}
            <span className="text-indigo-600">Minutes</span> not days.
          </h2>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-x-5 gap-y-5 sm:max-w-3xl sm:grid-cols-2 xl:max-w-full xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8">
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Fast Transaction
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Provides faster transaction, so money arrives in realtime
            </p>
          </div>
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Safe Transaction
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              We have the most up-to-date security for transaction
            </p>
          </div>
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Time Saving
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Optimize your workflow and maximize your output.
            </p>
          </div>
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Global Service
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              No barriers of sea will stop you doing business worldwide
            </p>
          </div>
          <div className="relative order-last mt-8 w-full rounded-2xl transition-all duration-500 sm:col-span-2 lg:order-none xl:mt-0">
            <p className="mb-9 text-center text-base leading-6 font-medium text-gray-700 xl:text-left">
              Get quoted and covered in under 10 minutes online. no paperwork or
              waiting any more{" "}
            </p>
            <div className="flex flex-col items-center justify-center gap-7 xl:flex-row xl:justify-start">
              <button className="shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Get Started
              </button>
              <span className="text-sm font-normal text-gray-500">
                *Terms &amp; Conditions apply
              </span>
            </div>
          </div>
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Add Payment Method
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Add multiple payment methods to receive and send money easily
            </p>
          </div>
          <div className="relative w-full rounded-2xl border border-solid border-gray-200 p-4 transition-all duration-500 xl:p-7">
            <div className="mb-6"></div>
            <h4 className="mb-2 text-base font-semibold text-gray-900 capitalize transition-all duration-500">
              Various Categories
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Provides you multiple options of business categories
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
