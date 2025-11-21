export default function OrderHistoryWithCtaButton() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="pb-7 lg:pb-12">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-extrabold text-gray-900 lg:text-left">
            Order History
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          <div className="mb-4 flex w-full flex-col justify-center gap-8 md:mb-0 md:justify-between lg:flex-row lg:items-center lg:gap-14">
            <div className="grid-col-1 grid items-center justify-center gap-5 sm:grid-cols-4 md:items-start md:justify-start lg:gap-14">
              <a className="text-lg leading-8 font-medium whitespace-nowrap text-indigo-600">
                All Order(50)
              </a>
              <a className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:text-indigo-600">
                Pending(10)
              </a>
              <a className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:text-indigo-600">
                Completed(8)
              </a>
              <a className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:text-indigo-600">
                Cancelled(22)
              </a>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-3 sm:flex-row lg:w-fit">
              <button className="flex h-10 w-fit items-center justify-center rounded-full border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-100 sm:w-full lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-gray-900">
                  View Invoice
                </span>
              </button>
              <button className="flex h-10 w-fit items-center justify-center rounded-full bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-full lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-normal font-medium text-white">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-7">
            <ul className="hidden w-full grid-cols-12 items-center justify-start gap-0 rounded-xl border border-gray-200 px-6 py-4 md:grid md:gap-8">
              <li className="col-span-12 text-xl leading-8 font-medium text-gray-900 md:col-span-5 lg:col-span-4">
                Item
              </li>
              <div className="col-span-12 flex w-full items-center justify-start gap-8 md:col-span-7 lg:col-span-8">
                <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                  Status
                </li>
                <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                  Total
                </li>
                <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                  Details
                </li>
              </div>
            </ul>
            <div className="flex w-full flex-col gap-7">
              <div className="grid w-full grid-cols-12 items-center justify-start gap-3 border-b border-gray-300 px-6 pb-7 md:gap-8 md:pb-12">
                <div className="col-span-12 flex flex-col items-center justify-start gap-3 md:col-span-5 md:flex-row md:gap-6 lg:col-span-4">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681934.png"
                    alt="Story Book image"
                  />
                  <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                    <h4 className="text-xl leading-loose font-medium text-gray-900">
                      Adventure Story Book
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Qty : 1
                    </h6>
                  </div>
                </div>
                <div className="col-span-12 flex w-full flex-col items-center justify-start gap-3 md:col-span-7 md:flex-row md:gap-8 lg:col-span-8">
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-amber-500 md:col-span-2">
                    Pending
                    <span className="text-gray-400"> - 5d left</span>
                  </h5>
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-900 md:col-span-2">
                    $452.23
                  </h5>
                  <div className="col-span-12 flex w-full justify-center md:col-span-2">
                    <button className="flex items-center justify-center rounded-full bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-1.5 text-xs leading-5 font-medium text-white">
                        Order Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-center justify-start gap-3 border-b border-gray-300 px-6 pb-7 md:grid-cols-12 md:gap-8 md:pb-12">
                <div className="col-span-12 flex flex-col items-center justify-start gap-3 md:col-span-5 md:flex-row md:gap-6 lg:col-span-4">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681946.png"
                    alt="Travelling Backpack image"
                  />
                  <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                    <h4 className="text-xl leading-loose font-medium text-gray-900">
                      Travelling Backpack
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Qty : 2
                    </h6>
                  </div>
                </div>
                <div className="col-span-12 flex w-full flex-col items-center justify-start gap-3 md:col-span-7 md:flex-row md:gap-8 lg:col-span-8">
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-green-600 md:col-span-2">
                    Delivered
                  </h5>
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-900 md:col-span-2">
                    $452.23
                  </h5>
                  <div className="col-span-12 flex w-full justify-center md:col-span-2">
                    <button className="flex items-center justify-center rounded-full bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-1.5 text-xs leading-5 font-medium text-white">
                        Order Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-center justify-start gap-3 px-6 pb-6 md:grid-cols-12 md:gap-8">
                <div className="col-span-12 flex flex-col items-center justify-start gap-3 md:col-span-5 md:flex-row md:gap-6 lg:col-span-4">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681957.png"
                    alt="Mirrorless Cameras image"
                  />
                  <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                    <h4 className="text-xl leading-loose font-medium text-gray-900">
                      Mirrorless Cameras
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Qty : 2
                    </h6>
                  </div>
                </div>
                <div className="col-span-12 flex w-full flex-col items-center justify-start gap-3 md:col-span-7 md:flex-row md:gap-8 lg:col-span-8">
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-green-600 md:col-span-2">
                    Delivered
                  </h5>
                  <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-900 md:col-span-2">
                    $452.23
                  </h5>
                  <div className="col-span-12 flex w-full justify-center md:col-span-2">
                    <button className="flex items-center justify-center rounded-full bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      <span className="px-1.5 text-xs leading-5 font-medium text-white">
                        Order Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
