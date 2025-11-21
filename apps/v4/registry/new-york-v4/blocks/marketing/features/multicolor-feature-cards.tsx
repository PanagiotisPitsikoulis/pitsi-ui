export default function MulticolorFeatureCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Custom-built for financial exchanges
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              Our platform offers secure and efficient transaction capabilities,
              tailored to meet diverse payment needs with robust features.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group inline-flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-orange-50 p-5 transition-all duration-700 ease-in-out hover:bg-orange-100 lg:gap-3">
              <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Modern Cards
                </h5>
              </div>
              <p className="text-sm leading-relaxed font-normal text-gray-500">
                Up-to-date payment methods for convenience and efficiency.
              </p>
            </div>
            <div className="group inline-flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-cyan-50 p-5 transition-all duration-700 ease-in-out hover:bg-cyan-100 lg:gap-3">
              <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  No Extra Fees
                </h5>
              </div>
              <p className="text-sm leading-relaxed font-normal text-gray-500">
                Transparent pricing with no hidden charges.
              </p>
            </div>
            <div className="group inline-flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-amber-50 p-5 transition-all duration-700 ease-in-out hover:bg-amber-100 lg:gap-3">
              <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Super Secure
                </h5>
              </div>
              <p className="text-sm leading-relaxed font-normal text-gray-500">
                Advanced security measures to protect your transactions.
              </p>
            </div>
            <div className="group inline-flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-emerald-50 p-5 transition-all duration-700 ease-in-out hover:bg-emerald-100 lg:gap-3">
              <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900">
                  Contactless Payments
                </h5>
              </div>
              <p className="text-sm leading-relaxed font-normal text-gray-500">
                Convenient and hygienic transactions with tap-and-go technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
