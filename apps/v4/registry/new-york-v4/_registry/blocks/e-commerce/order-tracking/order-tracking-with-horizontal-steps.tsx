export default function OrderTrackingWithHorizontalSteps() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-10">
          <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-black">
            Order Tracking
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-3">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
              Order Details:
              <span className="font-medium">#1025400025</span>
            </h3>
            <h4 className="text-xl leading-loose font-medium text-gray-600">
              Date: 10-04-2024
            </h4>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-8 sm:items-center">
            <ol className="flex w-full items-start gap-3 sm:items-center sm:gap-0">
              <li className="relative flex w-full justify-center text-base font-semibold text-indigo-600 after:absolute after:top-3 after:left-20 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-indigo-600 after:content-[''] sm:after:left-28 md:after:left-36 lg:after:top-5 lg:after:left-48 xl:after:left-52">
                <div className="z-10 block flex flex-col items-center sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent bg-indigo-600 text-center text-base font-bold text-white lg:h-10 lg:w-10">
                    1
                  </span>
                  Order Confirmed <br />
                  <span className="text-center text-base font-normal text-indigo-600">
                    8:00 AM, Feb 8,2024
                  </span>
                </div>
              </li>
              <li className="relative flex w-full justify-center text-base font-semibold text-black after:absolute after:top-3 after:left-20 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-indigo-200 after:content-[''] sm:after:left-28 md:after:left-36 lg:after:top-5 lg:after:left-48 xl:after:left-52">
                <div className="z-10 block flex flex-col items-center sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-base font-bold text-white lg:h-10 lg:w-10">
                    2
                  </span>
                  Shipping
                  <span className="text-center text-base font-normal text-gray-500">
                    Shipped with FedEX
                  </span>
                </div>
              </li>
              <li className="relative flex w-full justify-center text-base font-semibold text-gray-500">
                <div className="z-10 block flex flex-col items-center sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-transparent text-sm text-indigo-600 lg:h-10 lg:w-10">
                    3
                  </span>
                  To Deliver
                  <span className="text-center text-base font-normal text-gray-500">
                    Estimated date: Feb 15,
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row lg:gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label className="text-base leading-relaxed font-medium text-gray-600">
                  Courier Name
                </label>
                <input
                  type="text"
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Engle Express"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label className="text-base leading-relaxed font-medium text-gray-600">
                  Tracking Number
                </label>
                <input
                  type="text"
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="#125410215452"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label className="text-base leading-relaxed font-medium text-gray-600">
                Shipment tracking URL
              </label>
              <input
                type="text"
                className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="https://www.shipmentlink.com/TDB1_CargoTracking.do"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-7">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-indigo-600">
              Item Ordered
            </h3>
            <div className="flex w-full flex-col items-start justify-start">
              <div className="hidden w-full grid-cols-2 bg-gray-50 p-4 lg:grid">
                <span className="text-base leading-relaxed font-normal text-gray-500">
                  Product
                </span>
                <p className="flex items-center justify-between text-base leading-relaxed font-normal text-gray-500">
                  <span className="w-full max-w-[300px] pl-5 text-center">
                    Quantity
                  </span>
                  <span className="w-full max-w-[300px] pl-10 text-center">
                    Price
                  </span>
                  <span className="w-full max-w-[105px] text-center" />
                </p>
              </div>
              <div className="grid w-full grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-lg:max-w-xl min-[550px]:gap-6 lg:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <img
                    src="https://pagedone.io/asset/uploads/1712126548.png"
                    alt="Homiboss Chair image"
                    className="w-[120px] rounded-xl object-cover"
                  />
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg leading-relaxed font-medium text-black max-[550px]:text-center">
                      Homiboss Chair
                    </h4>
                    <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 4553458120
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
                  <button className="mx-0 flex w-full max-w-[300px] items-center justify-center gap-5">
                    <input
                      type="text"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                  </button>
                  <h4 className="w-full max-w-[300px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                    $50.00
                  </h4>
                  <button className="w-full max-w-[105px] text-center"></button>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-lg:max-w-xl min-[550px]:gap-6 lg:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <img
                    src="https://pagedone.io/asset/uploads/1712126556.png"
                    alt="Maharaja Chair image"
                    className="w-[120px] rounded-xl object-cover"
                  />
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg leading-relaxed font-medium text-black max-[550px]:text-center">
                      Maharaja Chair
                    </h4>
                    <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 8953458747
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
                  <button className="mx-0 flex w-full max-w-[300px] items-center justify-center gap-5">
                    <input
                      type="text"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                  </button>
                  <h4 className="w-full max-w-[300px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                    $100.00
                  </h4>
                  <button className="w-full max-w-[105px] text-center"></button>
                </div>
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
                  $250.00
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
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Total
              </h3>
              <h3 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                $280.00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
