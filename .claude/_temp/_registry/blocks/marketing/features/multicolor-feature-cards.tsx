export default function MulticolorFeatureCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Custom-built for financial exchanges
            </h2>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              Our platform offers secure and efficient transaction capabilities,
              tailored to meet diverse payment needs with robust features.
            </p>
          </div>
          <div className="w-full justify-center items-start gap-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="h-full group p-5 bg-orange-50 hover:bg-orange-100 transition-all duration-700 ease-in-out rounded-2xl flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
              <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Modern Cards
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Up-to-date payment methods for convenience and efficiency.
              </p>
            </div>
            <div className="h-full group p-5 bg-cyan-50 hover:bg-cyan-100 transition-all duration-700 ease-in-out rounded-2xl flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
              <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  No Extra Fees
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Transparent pricing with no hidden charges.
              </p>
            </div>
            <div className="h-full group p-5 bg-amber-50 hover:bg-amber-100 transition-all duration-700 ease-in-out rounded-2xl flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
              <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Super Secure
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Advanced security measures to protect your transactions.
              </p>
            </div>
            <div className="h-full group p-5 bg-emerald-50 hover:bg-emerald-100 transition-all duration-700 ease-in-out rounded-2xl flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
              <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed whitespace-nowrap">
                  Contactless Payments
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Convenient and hygienic transactions with tap-and-go technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
