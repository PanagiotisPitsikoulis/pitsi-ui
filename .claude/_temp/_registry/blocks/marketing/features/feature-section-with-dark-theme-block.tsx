export default function FeatureSectionWithDarkThemeBlock() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl text-center font-bold text-white">
            Simple and effective process for any business
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-sm mx-auto sm:max-w-md md:max-w-xl lg:max-w-full ">
          <div className="group relative w-full border border-solid border-gray-700 flex justify-between flex-col rounded-xl transition-all duration-500 overflow-hidden hover:bg-indigo-600 hover:border-transparent">
            <div className="p-4 sm:p-7">
              <div className="flex items-center gap-4 mb-6">
                {/* SVG removed */}
                <h4 className="text-xl font-medium text-white">
                  Integrate Qiwi
                </h4>
              </div>
              <p className="text-sm font-normal text-gray-400 leading-6 transition-all duration-500 group-hover:text-white">
                Our platform's integration with Qiwi, you can take advantage of
                one of the most trusted payment solutions on the market today
              </p>
            </div>
            <div className="p-4 sm:p-7 transition-all duration-500 bg-transparent group-hover:bg-indigo-700  border-t border-gray-700 transition-all duration-500 group-hover:border-transparent">
              <a
                href="#"
                className="flex items-center justify-between text-xs font-semibold text-white"
              >
                Integrate Now
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full border border-solid border-gray-700 flex flex-col justify-end rounded-xl transition-all duration-500 overflow-hidden hover:bg-indigo-600 hover:border-transparent">
            <div className="p-4 sm:p-7 ">
              <div className="flex items-center gap-4 mb-6">
                {/* SVG removed */}
                <h4 className="text-xl font-medium text-white">
                  Integrate Mastercard
                </h4>
              </div>
              <p className="text-sm font-normal text-gray-400 leading-6 transition-all duration-500 group-hover:text-white">
                Our Our platform's integration with Mastercard ensures that you
                have access to one of the most widely recognized &amp; trusted
                payment solutions
              </p>
            </div>
            <div className="p-4 sm:p-7 transition-all duration-500 bg-transparent group-hover:bg-indigo-700 border-t border-gray-700 transition-all duration-500 group-hover:border-transparent">
              <a
                href="#"
                className="flex items-center justify-between text-xs font-semibold text-white"
              >
                Integrate Now
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full border border-solid border-gray-700 flex flex-col justify-end rounded-xl transition-all duration-500 overflow-hidden hover:bg-indigo-600 hover:border-transparent">
            <div className="p-4 sm:p-7">
              <div className="flex items-center gap-4 mb-6">
                {/* SVG removed */}
                <h4 className="text-xl font-medium text-white">
                  Integrate PayPal
                </h4>
              </div>
              <p className="text-sm font-normal text-gray-400 leading-6 transition-all duration-500 group-hover:text-white">
                Our Invest with confidence, knowing that our platform's
                integration with PayPal provides you with a secure and reliable
                payment system
              </p>
            </div>
            <div className="p-4 sm:p-7 transition-all duration-500 bg-transparent group-hover:bg-indigo-700 border-t border-gray-700 transition-all duration-500 group-hover:border-transparent">
              <a
                href="#"
                className="flex items-center justify-between text-xs font-semibold text-white"
              >
                Integrate Now
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
