export default function DarkPricingCard() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Transparent Pricing Plan
          </h2>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full sm:w-96 w-full mx-auto group p-2.5 bg-gray-900 rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-6 flex">
                <div className="w-full px-5 pt-5 pb-10 bg-white rounded-xl flex-col justify-start items-start gap-0.5 flex">
                  <h3 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    Basic Plan
                  </h3>
                  <h5 className="text-gray-900 text-lg font-normal leading-relaxed">
                    Basic Features
                  </h5>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
                    $32 / Month
                  </h2>
                  <h5 className="text-center text-white text-lg font-normal leading-relaxed">
                    14 GB Storage Space
                  </h5>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-transparent transition-all duration-700 ease-in-out bg-transparent group-hover:bg-white justify-center items-center flex">
                <span className="px-2 text-white group-hover:text-gray-900 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                  Go to Basic
                </span>
              </button>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group p-2.5 bg-gray-900 rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-6 flex">
                <div className="w-full px-5 pt-5 pb-10 bg-white rounded-xl flex-col justify-start items-start gap-0.5 flex">
                  <h3 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    Pro Plan
                  </h3>
                  <h5 className="text-gray-900 text-lg font-normal leading-relaxed">
                    Limited Features
                  </h5>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
                    $49 / Month
                  </h2>
                  <h5 className="text-center text-white text-lg font-normal leading-relaxed">
                    90 GB Storage Space
                  </h5>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-transparent transition-all duration-700 ease-in-out bg-transparent group-hover:bg-white justify-center items-center flex">
                <span className="px-2 text-white group-hover:text-gray-900 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                  Go to Pro
                </span>
              </button>
            </div>
            <div className="lg:w-full sm:w-96 w-full mx-auto group p-2.5 bg-gray-900 rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-6 flex">
                <div className="w-full px-5 pt-5 pb-10 bg-white rounded-xl flex-col justify-start items-start gap-0.5 flex">
                  <h3 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                    Premium Plan
                  </h3>
                  <h5 className="text-gray-900 text-lg font-normal leading-relaxed">
                    Advanced Features
                  </h5>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
                    $89 / Month
                  </h2>
                  <h5 className="text-center text-white text-lg font-normal leading-relaxed">
                    Unlimited Storage Space
                  </h5>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-transparent transition-all duration-700 ease-in-out bg-transparent group-hover:bg-white justify-center items-center flex">
                <span className="px-2 text-white group-hover:text-gray-900 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                  Go to Premium
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
