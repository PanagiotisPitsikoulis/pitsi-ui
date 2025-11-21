export default function OrderHistoryWithDateRangeAndSort() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-8 inline-flex w-full flex-col items-center justify-start gap-3 md:mb-12">
          <h2 className="font-manrope text-center text-3xl leading-normal font-semibold text-black">
            Order History
          </h2>
          <p className="text-center text-base leading-relaxed font-normal text-gray-500">
            Stay up-to-date on the status of your most recent orders,
            effortlessly handle returns, and uncover
          </p>
        </div>
        <div className="mb-10 grid w-full grid-cols-12 items-center justify-start gap-8 border-t border-b border-gray-100 py-6 xl:gap-12">
          <div className="col-span-12 flex w-full flex-col items-start justify-start gap-8 md:flex-row lg:col-span-7 xl:col-span-8">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 md:items-start">
              <h6 className="text-base leading-relaxed font-normal text-gray-500">
                Order ID
              </h6>
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                #1023498789
              </h3>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 md:items-start">
              <h6 className="text-base leading-relaxed font-normal text-gray-500">
                Delivery Date
              </h6>
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-black lg:whitespace-nowrap">
                May 02, 2024
              </h3>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 md:items-start">
              <h6 className="text-base leading-relaxed font-normal text-gray-500">
                Payment Method
              </h6>
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-black lg:whitespace-nowrap">
                Cash on Delivery
              </h3>
            </div>
          </div>
          <div className="col-span-12 flex w-full flex-col items-start gap-4 md:flex-row lg:col-span-5 lg:justify-end xl:col-span-4">
            <button className="flex w-full items-center justify-center rounded-full border border-gray-300 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 lg:w-fit">
              <span className="px-2 py-px text-lg leading-7 font-semibold whitespace-nowrap text-gray-900">
                View Order
              </span>
            </button>
            <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 lg:w-fit">
              <span className="px-2 text-lg leading-8 font-semibold whitespace-nowrap text-white">
                View Invoice
              </span>
            </button>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start gap-8">
          <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-500 pb-6 md:gap-6">
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1715408661.png"
                alt="Women's Satchel Bag image"
              />
              <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-10">
                <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Leather Women's Satchel Bag
                  </h3>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Half Moon Shoulder Bag
                  </h5>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Qty: 1
                  </h5>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Order ID:
                    <span className="text-gray-800">#1023498789</span>
                  </h5>
                </div>
                <h4 className="text-right text-xl leading-loose font-semibold text-black">
                  Price $80.00
                </h4>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex w-full items-center justify-center gap-3 md:justify-start">
                <h6 className="text-xs leading-5 font-normal text-gray-600">
                  Delivered On April 28, 2024
                </h6>
              </div>
              <div className="flex flex-col items-center justify-end gap-4 sm:flex-row sm:gap-5">
                <a className="text-right text-sm leading-snug font-medium whitespace-nowrap text-black transition-all duration-700 ease-in-out hover:text-indigo-600">
                  View product
                </a>
                <a className="text-right text-sm leading-snug font-medium whitespace-nowrap text-black transition-all duration-700 ease-in-out hover:text-indigo-600">
                  Buy again
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-500 pb-6 md:gap-6">
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1715408674.png"
                alt="Flower port image"
              />
              <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-10">
                <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Decoration Flower port
                  </h3>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Half Moon Shoulder Bag
                  </h5>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Qty: 1
                  </h5>
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Order ID:
                    <span className="text-gray-800">#1023498789</span>
                  </h5>
                </div>
                <h4 className="text-right text-xl leading-loose font-semibold text-black">
                  Price $80.00
                </h4>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center justify-start gap-3">
                <h6 className="text-xs leading-5 font-normal text-gray-600">
                  Not Delivered On April 28, 2024
                </h6>
              </div>
              <div className="flex flex-col items-center justify-end gap-4 sm:flex-row md:gap-5">
                <a className="text-right text-sm leading-snug font-medium whitespace-nowrap text-black transition-all duration-700 ease-in-out hover:text-indigo-600">
                  View product
                </a>
                <a className="text-right text-sm leading-snug font-medium whitespace-nowrap text-black transition-all duration-700 ease-in-out hover:text-indigo-600">
                  Buy again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
