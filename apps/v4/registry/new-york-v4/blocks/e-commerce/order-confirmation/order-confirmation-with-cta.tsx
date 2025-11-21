export default function OrderConfirmationWithCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 lg:gap-12">
          <div className="flex flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
              John, Thank You for Your Order!
            </h2>
            <p className="max-w-xl text-center text-lg leading-8 font-normal text-gray-500">
              Your order is in good hands! We'll notify you once it's en route.
              For now, here's a snapshot of your purchase
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 lg:gap-10">
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="inline-flex w-full items-center justify-between border-y border-gray-200 px-2 py-4 md:px-6">
                  <h3 className="text-xl leading-8 font-medium text-gray-900">
                    Item
                  </h3>
                  <h3 className="text-right text-xl leading-8 font-medium text-gray-900">
                    Total
                  </h3>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-8 border-b border-gray-300 px-2 pb-5 md:px-6">
                  <div className="flex items-center justify-start gap-6 md:pb-5">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1717406948.png"
                      alt="Simple Black T-shirt image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                        Simple Black T-shirt
                      </h5>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        QTY: 1
                      </h6>
                    </div>
                  </div>
                  <h4 className="text-right text-lg leading-relaxed font-medium text-gray-900">
                    $52.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-8 border-b border-gray-300 px-2 pb-6 md:px-5">
                  <div className="flex items-center justify-start gap-6 md:pb-6">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1717406998.png"
                      alt="White Woolen Girl’s Top image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h4 className="text-xl leading-8 font-medium text-gray-900">
                        White Woolen Girl’s Top
                      </h4>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        QTY : 2
                      </h6>
                    </div>
                  </div>
                  <h4 className="text-right text-lg leading-relaxed font-medium text-gray-900">
                    $120.00
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 md:flex-row md:pt-6">
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 border-b border-gray-200 px-2 pb-5 md:border-r md:border-b-0 md:px-6 md:pb-0">
                  <div className="inline-flex w-full items-center justify-between gap-4">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Estimated Delivery:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-normal text-gray-500">
                      Friday, 3rd Jun 2023
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-4 border-y border-gray-200 py-5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Delivery Address:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-normal text-gray-500">
                      123 Main Street Anytown, USA
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-4">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Payment Method
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-normal text-gray-500">
                      COD
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 px-2 md:px-6">
                  <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                    <div className="inline-flex w-full items-start justify-between gap-6">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Subtotal
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                        $172.00
                      </h5>
                    </div>
                    <div className="inline-flex w-full items-start justify-between gap-6">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Shipping
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                        $20.00
                      </h5>
                    </div>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h4 className="text-xl leading-8 font-semibold text-indigo-600">
                      Total
                    </h4>
                    <h4 className="text-right text-xl leading-8 font-semibold text-indigo-600">
                      $192.00
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 md:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
                  Back to Shopping
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Track My Order
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
