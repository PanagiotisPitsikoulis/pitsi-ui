export default function OrderSummaryWithCustomerInformation() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-11 inline-flex w-full flex-col items-start justify-start gap-11">
          <h2 className="font-manrope text-4xl leading-normal font-bold text-black">
            Your Order{" "}
          </h2>
          <div className="flex flex-col items-start justify-start gap-3">
            <h4 className="text-xl leading-loose font-medium text-black">
              Order ID : 356925420
            </h4>
            <h5 className="text-lg leading-8 font-normal text-gray-500">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
        </div>
        <div className="flex flex-col gap-11 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:w-[812px]">
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
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                  Order Summary
                </h3>
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
          <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:w-[360px]">
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Customer
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    John Smith
                  </h6>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    1 Order
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Customer Information
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-indigo-50"></button>
              </div>
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    john.smith1@gmail.com
                  </h6>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    +91 94256 32056
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <div className="inline-flex w-full items-center justify-between">
                <h4 className="text-xl leading-loose font-semibold text-black">
                  Shipping Address
                </h4>
                <button className="p-1 transition-all duration-700 ease-in-out hover:bg-indigo-50"></button>
              </div>
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="inline-flex items-center justify-start gap-2.5">
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
                  <a href="#"></a>
                  <a className="text-base leading-relaxed font-medium text-indigo-600">
                    select on map
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
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
