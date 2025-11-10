export default function OrderConfirmationComponentWithScanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-5 sm:items-start">
            <div className="inline-flex w-full items-center justify-center gap-3 sm:justify-start">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Your Order is Confirmed!
              </h2>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1717415639.png"
                alt="Partying Face image"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 sm:items-start">
              <h4 className="text-xl leading-8 font-semibold text-black">
                Hello, Kevin Patel
              </h4>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600 sm:text-start">
                Your Order has been Confirmed and will be shipping within next
                two days.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-7 lg:gap-9">
            <div className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-gray-100 p-5 sm:flex-row">
              <div className="inline-flex w-full flex-col items-center justify-start gap-5 sm:items-start">
                <div className="flex w-full flex-col items-center justify-start gap-3 sm:items-start">
                  <div className="flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                    <span className="text-base leading-relaxed font-normal text-gray-500">
                      Estimate Delivery
                    </span>
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Monday, 20 Jan - Tuesday, 21 Jan
                    </h5>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                    <span className="text-base leading-relaxed font-normal text-gray-500">
                      Payment Method
                    </span>
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Credit Card
                    </h5>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium text-white">
                    Track your order
                  </span>
                </button>
              </div>
              <a className="flex items-start justify-start bg-white p-2.5"></a>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                    Order Details
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Order ID:
                    <span className="text-blue-600">#1358499</span>
                  </h6>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <div className="flex w-full flex-col items-center justify-start gap-3 rounded-xl border border-gray-200 p-5 sm:flex-row sm:gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1717479197.png"
                      alt="Sweet Fragrance image"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start gap-1 sm:gap-2.5">
                      <div className="flex w-full flex-col items-center justify-between gap-1 sm:flex-row">
                        <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                          Sweet Fragrance Woman COCO Perfume
                        </h5>
                        <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                          $52.00
                        </h5>
                      </div>
                      <div className="flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                        <span className="text-sm leading-relaxed font-normal text-gray-500">
                          QTY : 1
                        </span>
                        <span className="text-sm leading-relaxed font-normal text-gray-500">
                          Basic Price : $52.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-3 rounded-xl border border-gray-200 p-5 sm:flex-row sm:gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1717479207.png"
                      alt="Gabrielle Perfume image"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start gap-1 sm:gap-2.5">
                      <div className="flex w-full flex-col items-center justify-between gap-1 sm:flex-row">
                        <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                          Strong Fragrance Man Gabrielle Perfume
                        </h5>
                        <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                          $128.00
                        </h5>
                      </div>
                      <div className="flex w-full flex-col items-center justify-start gap-1 sm:items-start">
                        <span className="text-sm leading-relaxed font-normal text-gray-500">
                          QTY : 2
                        </span>
                        <span className="text-sm leading-relaxed font-normal text-gray-500">
                          Basic Price : $64.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-200 pb-4">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Subtotal
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $180.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Shipping Charge
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $15.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Tax Fee
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $05.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Discount
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $10.00
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-relaxed font-semibold text-indigo-600">
                    Total
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-indigo-600">
                    $190.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1">
              <h4 className="text-xl leading-8 font-semibold text-black">
                Thank you for Shopping!
              </h4>
              <a className="text-lg leading-relaxed font-medium text-blue-600 transition-all duration-700 ease-in-out hover:text-blue-800">
                Back to Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
