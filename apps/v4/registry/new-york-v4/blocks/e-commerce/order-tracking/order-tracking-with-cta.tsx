export default function OrderTrackingWithCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-black">
              Order Tracking
            </h2>
            <p className="max-w-4xl text-center text-base leading-relaxed font-normal text-gray-500">
              Order tracking is a service provided by companies to allow
              customers to monitor the progress and location of their purchases
              from the time they are placed until they are delivered.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Order Details
              </h3>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                  Download Invoice
                </span>
              </button>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-10 border-t border-b border-gray-100 py-6 md:items-start md:justify-between md:gap-8">
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Order Number
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-black">
                  #2315482546
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Order Placed
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Feb 20, 2024
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Order Delivared
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Feb 20, 2024
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  No of Items
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-black">
                  2 items
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Status
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Delivered
                </h4>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Order Tracking
              </h3>
              <h3 className="font-manrope text-right text-2xl leading-9 font-semibold text-gray-600">
                Order ID: #1025400025
              </h3>
            </div>
            <div className="flex w-full flex-col items-start justify-start rounded-xl border border-gray-200 py-9">
              <div className="flex w-full flex-col items-start justify-center gap-8 sm:items-center">
                <ol className="flex w-full items-start gap-5 sm:items-center sm:gap-0">
                  <li className="relative flex w-full justify-center text-base font-semibold text-indigo-600 after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:top-4 lg:after:left-36 xl:after:left-40">
                    <div className="z-10 block flex flex-col items-center text-center sm:whitespace-nowrap">
                      <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent bg-indigo-600 text-center text-base font-bold text-white lg:h-8 lg:w-8">
                        1
                      </span>{" "}
                      Order Placed
                      <span className="text-center text-base font-normal text-indigo-600">
                        Feb 20th, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-center text-base font-semibold text-indigo-600 after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:top-4 lg:after:left-36 xl:after:left-40">
                    <div className="z-10 block flex flex-col items-center text-center sm:whitespace-nowrap">
                      <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-base font-bold text-white lg:h-8 lg:w-8">
                        2
                      </span>{" "}
                      Order Packed
                      <span className="text-center text-base font-normal text-indigo-600">
                        Feb 20th, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-center text-base font-semibold text-indigo-600 after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:top-4 lg:after:left-36 xl:after:left-40">
                    <div className="z-10 block flex flex-col items-center text-center sm:whitespace-nowrap">
                      <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-base font-bold text-white lg:h-8 lg:w-8">
                        3
                      </span>{" "}
                      In Translt
                      <span className="text-center text-base font-normal text-indigo-600">
                        Feb 20th, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-center text-base font-semibold text-gray-500">
                    <div className="z-10 block flex flex-col items-center text-center sm:whitespace-nowrap">
                      <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-transparent text-sm text-indigo-600 lg:h-8 lg:w-8">
                        4
                      </span>{" "}
                      Out for Delivery
                      <span className="text-center text-base font-normal text-gray-500">
                        Feb 20th, 2024{" "}
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
              Items from the order
            </h3>
            <div className="w-full items-start justify-center">
              <div className="hidden w-full grid-cols-2 bg-gray-50 p-4 md:grid">
                <span className="text-base leading-relaxed font-normal text-gray-500">
                  Product
                </span>
                <p className="flex items-center justify-between">
                  <span className="w-full max-w-[200px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                    Size
                  </span>
                  <span className="w-full max-w-[260px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                    Quantity
                  </span>
                  <span className="w-full max-w-[200px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                    Price
                  </span>
                  <span className="w-full max-w-[200px] text-center" />
                </p>
              </div>
              <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                    <img
                      src="https://pagedone.io/asset/uploads/1713334568.png"
                      alt="Denim Shirt image"
                      className="object-cover xl:w-[75px]"
                    />
                  </div>
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                      Top for Women
                    </h4>
                    <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 4553458120
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h5 className="w-full max-w-[142px] text-center text-lg leading-relaxed font-medium text-black">
                    L
                  </h5>
                  <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                    <input
                      type="text"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                  </button>
                  <h5 className="w-full max-w-[142px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                    $50.00
                  </h5>
                  <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out"></button>
                </div>
              </div>
              <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                    <img
                      src="https://pagedone.io/asset/uploads/1713334581.png"
                      alt="Blue T-shirt for Men image"
                      className="object-cover xl:w-[75px]"
                    />
                  </div>
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                      Blue T-shirt for Men
                    </h4>
                    <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 8953458747
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h5 className="w-full max-w-[142px] text-center text-lg leading-relaxed font-medium text-black">
                    M
                  </h5>
                  <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                    <input
                      type="text"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                  </button>
                  <h5 className="w-full max-w-[142px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                    $50.00
                  </h5>
                  <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 sm:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-start justify-between gap-2.5">
                <h4 className="text-xl leading-8 font-medium text-gray-600">
                  Discount
                </h4>
                <h4 className="text-right text-xl leading-8 font-medium text-black">
                  $0.00
                </h4>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-2.5">
                <h4 className="text-xl leading-8 font-medium text-gray-600">
                  Delivery
                </h4>
                <h4 className="text-right text-xl leading-8 font-medium text-black">
                  $20.00
                </h4>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-start justify-between gap-2.5">
                <h4 className="text-xl leading-8 font-medium text-gray-600">
                  Subtotal
                </h4>
                <h4 className="text-right text-xl leading-8 font-medium text-black">
                  $200.00
                </h4>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-2.5">
                <h4 className="text-xl leading-8 font-medium text-gray-600">
                  Total
                </h4>
                <h4 className="text-right text-xl leading-8 font-medium text-black">
                  $220.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
