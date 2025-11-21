export default function PricingCardsWithColoredBorder() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3.5 sm:w-96 lg:w-full">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
              Premium Insights Pricing Plan
            </h2>
            <p className="text-center text-base leading-normal font-normal text-gray-800/50">
              This plan provides exclusive access to in-depth market analysis,
              advanced forecasting tools, and expert recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-3 lg:justify-start">
            <div className="mx-auto inline-flex w-full flex-col items-start justify-start gap-8 rounded-3xl border-t-4 border-indigo-600 bg-white p-8 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <h3 className="font-manrope text-2xl leading-9 font-medium whitespace-nowrap text-black">
                  3 Month membership
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                <div className="inline-flex items-end justify-start gap-1.5">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
                    $100
                  </h3>
                  <h5 className="text-center text-lg leading-normal font-normal text-gray-500">
                    / Month
                  </h5>
                </div>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Biled every 3 months
                </h6>
              </div>
              <button className="flex w-full items-center justify-center rounded-full bg-black px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                  Buy Now
                </span>
              </button>
            </div>
            <div className="mx-auto inline-flex w-full flex-col items-start justify-start gap-8 rounded-3xl border-t-4 border-emerald-600 bg-white p-8 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <h3 className="font-manrope text-2xl leading-9 font-medium whitespace-nowrap text-black">
                  6 Month membership
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                <div className="inline-flex items-end justify-start gap-1.5">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
                    $150
                  </h3>
                  <h5 className="text-center text-lg leading-normal font-normal text-gray-500">
                    / Month
                  </h5>
                </div>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Biled every 3 months
                </h6>
              </div>
              <button className="flex w-full items-center justify-center rounded-full bg-black px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                  Buy Now
                </span>
              </button>
            </div>
            <div className="mx-auto inline-flex w-full flex-col items-start justify-start gap-8 rounded-3xl border-t-4 border-yellow-600 bg-white p-8 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <h3 className="font-manrope text-2xl leading-9 font-medium whitespace-nowrap text-black">
                  12 Month membership
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Discover the power and simplicity of our platform by creating
                  your first five stories
                </h6>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                <div className="inline-flex items-end justify-start gap-1.5">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
                    $200
                  </h3>
                  <h5 className="text-center text-lg leading-normal font-normal text-gray-500">
                    / Month
                  </h5>
                </div>
                <h6 className="text-base leading-relaxed font-normal text-gray-600">
                  Biled every 3 months
                </h6>
              </div>
              <button className="flex w-full items-center justify-center rounded-full bg-black px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                  Buy Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
