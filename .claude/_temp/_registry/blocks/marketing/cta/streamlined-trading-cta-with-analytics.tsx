export default function StreamlinedTradingCtaWithAnalytics() {
  return (
    <section className="py-24 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:gap-4 lg:grid-cols-2">
          <img
            src="https://pagedone.io/asset/uploads/1759491451.png"
            alt="img"
            className="order-2 lg:order-1 mx-auto"
          />
          <div className="flex flex-col gap-1.5 order-1 lg:order-2 lg:my-auto">
            <h3 className="text-sm font-normal text-gray-500 leading-5 text-center lg:text-left">
              Get Started Today
            </h3>
            <h2 className="text-4xl font-bold sm:leading-[52px] text-gray-900 font-manrope text-center lg:text-left">
              Streamline Your Trading Process with Confidence.
            </h2>
            <p className="text-gray-500 text-base font-normal leading-6 text-center lg:text-left pt-3.5 mb-6">
              Streamline your trading process with confidence and take advantage
              of advanced tools designed for success. Simplify your operations
              and achieve better results—get started now!
            </p>
            <button className="mx-auto lg:mx-0 bg-emerald-600 shadow-sm w sm:w-fit px-5 py-2.5 text-white leading-7 text-base font-semibold rounded-xl transition-all duration-500 hover:bg-emerald-700">
              Start Trading
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
