export default function DarkPricingCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Transparent Pricing Plan
          </h2>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-3">
            <div className="group mx-auto inline-flex w-full flex-col items-center justify-start gap-10 rounded-2xl bg-gray-900 p-2.5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-center justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-0.5 rounded-xl bg-white px-5 pt-5 pb-10">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                    Basic Plan
                  </h3>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-900">
                    Basic Features
                  </h5>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
                    $32 / Month
                  </h2>
                  <h5 className="text-center text-lg leading-relaxed font-normal text-white">
                    14 GB Storage Space
                  </h5>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl border border-gray-300 bg-transparent px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-white">
                <span className="px-2 text-base leading-relaxed font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-gray-900">
                  Go to Basic
                </span>
              </button>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-center justify-start gap-10 rounded-2xl bg-gray-900 p-2.5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-center justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-0.5 rounded-xl bg-white px-5 pt-5 pb-10">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                    Pro Plan
                  </h3>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-900">
                    Limited Features
                  </h5>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
                    $49 / Month
                  </h2>
                  <h5 className="text-center text-lg leading-relaxed font-normal text-white">
                    90 GB Storage Space
                  </h5>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl border border-gray-300 bg-transparent px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-white">
                <span className="px-2 text-base leading-relaxed font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-gray-900">
                  Go to Pro
                </span>
              </button>
            </div>
            <div className="group mx-auto inline-flex w-full flex-col items-center justify-start gap-10 rounded-2xl bg-gray-900 p-2.5 sm:w-96 lg:w-full">
              <div className="flex w-full flex-col items-center justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-0.5 rounded-xl bg-white px-5 pt-5 pb-10">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                    Premium Plan
                  </h3>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-900">
                    Advanced Features
                  </h5>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
                    $89 / Month
                  </h2>
                  <h5 className="text-center text-lg leading-relaxed font-normal text-white">
                    Unlimited Storage Space
                  </h5>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl border border-gray-300 bg-transparent px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-white">
                <span className="px-2 text-base leading-relaxed font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-gray-900">
                  Go to Premium
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
