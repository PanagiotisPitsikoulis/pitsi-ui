export default function DescriptionWithFeatureIcons() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16  max-w-3xl mx-auto xl:max-w-full">
          <span className=" text-sm text-gray-500 font-normal mb-2 uppercase text-center block lg:text-left">
            OUR FEATURE
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 text-center lg:text-left leading-[3.2rem]">
            Receive money with-in{" "}
            <span className="text-indigo-600">Minutes</span> not days.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-x-5 gap-y-5 xl:gap-y-8 xl:gap-x-8 max-w-md sm:max-w-3xl mx-auto xl:max-w-full ">
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Fast Transaction
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              Provides faster transaction, so money arrives in realtime
            </p>
          </div>
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Safe Transaction
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              We have the most up-to-date security for transaction
            </p>
          </div>
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Time Saving
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              Optimize your workflow and maximize your output.
            </p>
          </div>
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Global Service
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              No barriers of sea will stop you doing business worldwide
            </p>
          </div>
          <div className="relative w-full rounded-2xl transition-all duration-500 lg:order-none order-last mt-8 xl:mt-0 sm:col-span-2">
            <p className="text-center text-base text-gray-700 font-medium leading-6 mb-9 xl:text-left">
              Get quoted and covered in under 10 minutes online. no paperwork or
              waiting any more{" "}
            </p>
            <div className="flex items-center justify-center gap-7 flex-col xl:flex-row xl:justify-start">
              <button className="py-3 px-6 bg-indigo-600 rounded-full shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Get Started
              </button>
              <span className="text-sm font-normal text-gray-500">
                *Terms &amp; Conditions apply
              </span>
            </div>
          </div>
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Add Payment Method
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              Add multiple payment methods to receive and send money easily
            </p>
          </div>
          <div className="relative w-full border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 xl:p-7  ">
            <div className=" mb-6 "></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
              Various Categories
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
              Provides you multiple options of business categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
