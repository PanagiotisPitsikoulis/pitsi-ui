export default function OrderSummaryWithCustomerInformationAndStepper() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-11">
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-xl leading-loose font-medium text-black">
              Order ID : 356925420
            </h4>
            <h5 className="text-lg leading-8 font-normal text-gray-500">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
              <li className="relative flex w-full justify-center text-green-700 after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-green-700 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                <div className="z-10 block whitespace-nowrap">
                  <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent bg-green-700 text-sm text-white lg:h-8 lg:w-8">
                    1
                  </span>{" "}
                  Cart
                </div>
              </li>
              <li className="relative flex w-full justify-center text-green-700 after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                <div className="z-10 block w-full text-center whitespace-nowrap">
                  <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-sm text-white lg:h-8 lg:w-8">
                    2
                  </span>{" "}
                  Delivery &amp; Payment
                </div>
              </li>
              <li className="relative flex w-full justify-center text-black after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                <div className="z-10 block whitespace-nowrap">
                  <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-sm text-green-700 lg:h-8 lg:w-8">
                    3
                  </span>{" "}
                  Summary
                </div>
              </li>
              <li className="relative flex w-full justify-center text-gray-500 after:absolute after:top-4 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-['']">
                <div className="z-10 block whitespace-nowrap">
                  <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-700 bg-gray-50 text-sm text-green-700 lg:h-8 lg:w-8">
                    4
                  </span>{" "}
                  Done
                </div>
              </li>
            </ol>
          </div>
          <div className="flex w-full flex-col gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-4 rounded-2xl border border-gray-200 p-6 md:flex-row md:gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715160494.png"
                  alt="Laptop image"
                />
                <div className="inline-flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Laptop
                  </h4>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold whitespace-nowrap text-gray-900">
                    MacBook Air
                  </h3>
                  <div className="inline-flex items-center justify-start gap-1">
                    <h4 className="text-xl leading-loose font-normal whitespace-nowrap text-gray-500">
                      Color :<span className="text-gray-900">Black</span>
                    </h4>
                    <div className="h-5 w-5 rounded bg-black" />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-8">
                <h4 className="text-right text-xl leading-loose font-semibold text-black">
                  $1500.00
                </h4>
                <button className="p-0.5 transition-all duration-700 ease-in-out hover:bg-red-50"></button>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h2 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                  Order Summary
                </h2>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-700">
                    $1690.26
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-700">
                    $60.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Taxes
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-700">
                    $80.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Discount
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-700">
                    $10.00
                  </h4>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Total
                </h4>
                <h4 className="text-right text-xl leading-loose font-semibold text-black">
                  $1820.26
                </h4>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="inline-flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Customer
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="py-0.5"></div>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    John Smith
                  </h6>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="py-0.5"></div>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    1 Order
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Customer Information
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-indigo-50"></button>
              </div>
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="py-0.5"></div>
                  <h6 className="text-base leading-relaxed font-medium break-all text-gray-400">
                    john.smith1@gmail.com
                  </h6>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="py-0.5"></div>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    +91 94256 32056
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Shipping Address
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-indigo-50"></button>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <div className="py-0.5"></div>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    John Smith
                  </h6>
                </div>
                <h6 className="text-base leading-relaxed font-medium text-gray-400">
                  123 Elm Street
                  <br />
                  Anytown, USA 12345
                  <br />
                  United States
                </h6>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <button className="p-1 transition-all duration-700 ease-in-out hover:bg-indigo-50"></button>
                  <h6 className="cursor-pointer text-base leading-relaxed font-medium text-indigo-600">
                    select on map
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Billing Address
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
              </div>
              <h6 className="text-base leading-relaxed font-medium text-gray-400">
                Same as shipping address
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
