export default function OrderSummaryWithTabs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-4">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
            Order Summaries
          </h2>
          <p className="text-center text-lg leading-8 font-normal text-gray-500">
            Order summaries are essential for both customers and sellers,
            ensuring transparency and accuracy in transactions.
          </p>
        </div>
        <div className="mt-8 inline-flex w-full flex-col items-start justify-start gap-8 lg:mt-14">
          <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
            <div className="flex items-start justify-start gap-3.5">
              <h4 className="font-manrope text-2xl leading-9 font-medium whitespace-nowrap text-gray-500">
                Order ID:
              </h4>
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                #214525001
              </h4>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5 sm:flex-row md:justify-end">
              <button className="flex w-full items-center justify-center rounded-lg border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 md:w-fit">
                <span className="px-2 text-center text-base leading-relaxed font-semibold text-indigo-600">
                  Invoice
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                  Track Order
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 md:w-fit">
              <span className="px-1.5 py-px text-center text-base leading-relaxed font-semibold text-white">
                Summary
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-lg border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 md:w-fit">
              <span className="px-2 text-center text-base leading-relaxed font-semibold text-indigo-600">
                Payment
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-lg border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 md:w-fit">
              <span className="px-2.5 text-center text-base leading-relaxed font-semibold text-indigo-600">
                Delivery
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <div className="flex w-full flex-col items-center justify-start gap-6 border-b border-gray-200 pb-8 md:flex-row">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1715407957.png"
                alt="Titan Watch image"
              />
              <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row lg:gap-10">
                <div className="inline-flex flex-col items-center justify-start gap-4 md:items-start">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Titan Watch
                  </h4>
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Midnight Aluminum Case
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  <input
                    type="text"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-1 py-1.5 text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                  />
                  <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                </div>
                <h3 className="font-manrope text-center text-3xl leading-normal font-semibold text-black">
                  $120.00
                </h3>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-6 border-b border-gray-200 pb-8 md:flex-row">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1715407968.png"
                alt="Water Bottle image"
              />
              <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row lg:gap-10">
                <div className="inline-flex flex-col items-center justify-start gap-4 md:items-start">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Water Bottle
                  </h4>
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Midnight Aluminum Case
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  <input
                    type="text"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-1 py-1.5 text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                  />
                  <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                </div>
                <h3 className="font-manrope text-center text-3xl leading-normal font-semibold text-black">
                  $100.00
                </h3>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl">
            <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h4 className="text-xl leading-8 font-normal text-gray-500">
                  Subtotal
                </h4>
                <h4 className="text-right text-xl leading-8 font-semibold text-gray-900">
                  $220.00
                </h4>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h4 className="text-xl leading-8 font-normal text-gray-500">
                  Shipping Charge
                </h4>
                <h4 className="text-right text-xl leading-8 font-semibold text-gray-900">
                  $30.00
                </h4>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-6 border-b border-gray-200 pb-6">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Total
              </h4>
              <h4 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                $190.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
