export default function TailwindFeatureCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-center gap-x-0 gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-16 lg:flex-row lg:justify-between lg:gap-y-0">
          <div className="relative w-full text-center lg:w-2/4 lg:text-left">
            <h2 className="mx-auto max-w-max text-4xl leading-[3.25rem] font-bold text-gray-900 lg:mx-0 lg:mb-6 lg:max-w-md">
              Enjoy the finest features with our products
            </h2>
          </div>
          <div className="relative w-full text-center lg:w-2/4 lg:text-left">
            <p className="mb-5 text-lg font-normal text-gray-500">
              We provide all the advantages that can simplify all your financial
              transactions without any further requirements
            </p>
            <a
              href="#"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-700 lg:justify-start"
            >
              Button CTA {/* SVG removed */}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
              Easy Payment
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
              We Provide Various Methods For You To Carry Out All Transactions
              Related To Your Finances
            </p>
          </div>
          <div className="group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
              Safe Transaction
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
              We have the most up-to-date security to support the security of
              all our customers in carrying out all transactions.
            </p>
          </div>
          <div className="group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
              Fast Customer Service{" "}
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
              Provide Customer Service For Those Of You Who Have Problems 24
              Hours A Week
            </p>
          </div>
          <div className="group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
              Quick Transaction
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
              We provide faster transaction speeds than competitors, so money
              arrives and is received faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
