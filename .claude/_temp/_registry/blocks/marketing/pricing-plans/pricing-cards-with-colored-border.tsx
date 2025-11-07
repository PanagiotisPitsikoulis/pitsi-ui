export default function PricingCardsWithColoredBorder() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="lg:w-full sm:w-96 w-full mx-auto flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
              Premium Insights Pricing Plan
            </h2>
            <p className="text-center text-gray-800/50 text-base font-normal leading-normal">
              This plan provides exclusive access to in-depth market analysis,
              advanced forecasting tools, and expert recommendations.
            </p>
          </div>
          <div className="lg:justify-start justify-center items-center gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full sm:w-96 w-full mx-auto p-8 bg-white rounded-3xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-t-4 border-indigo-600 flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <h3 className="text-black text-2xl font-medium font-manrope leading-9 whitespace-nowrap">
                  3 Month membership
                </h3>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-end gap-1.5 inline-flex">
                  <h3 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    $100
                  </h3>
                  <h5 className="text-center text-gray-500 text-lg font-normal leading-normal">
                    / Month
                  </h5>
                </div>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Biled every 3 months
                </h6>
              </div>
              <button className="w-full px-3.5 py-2 bg-black hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                  Buy Now
                </span>
              </button>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto p-8 bg-white rounded-3xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-t-4 border-emerald-600 flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <h3 className="text-black text-2xl font-medium font-manrope leading-9 whitespace-nowrap">
                  6 Month membership
                </h3>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-end gap-1.5 inline-flex">
                  <h3 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    $150
                  </h3>
                  <h5 className="text-center text-gray-500 text-lg font-normal leading-normal">
                    / Month
                  </h5>
                </div>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Biled every 3 months
                </h6>
              </div>
              <button className="w-full px-3.5 py-2 bg-black hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                  Buy Now
                </span>
              </button>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto p-8 bg-white rounded-3xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-t-4 border-yellow-600 flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <h3 className="text-black text-2xl font-medium font-manrope leading-9 whitespace-nowrap">
                  12 Month membership
                </h3>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-end gap-1.5 inline-flex">
                  <h3 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    $200
                  </h3>
                  <h5 className="text-center text-gray-500 text-lg font-normal leading-normal">
                    / Month
                  </h5>
                </div>
                <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                  Biled every 3 months
                </h6>
              </div>
              <button className="w-full px-3.5 py-2 bg-black hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                  Buy Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
