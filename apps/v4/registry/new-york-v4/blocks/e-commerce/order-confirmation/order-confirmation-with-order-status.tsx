export default function OrderConfirmationWithOrderStatus() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-14">
          <div className="grid w-full grid-cols-1 items-start justify-start gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Your Order is Confirmed!
              </h2>
              <div className="flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                    Order ID : #0214582001
                  </h5>
                  <h4 className="text-xl leading-8 font-medium text-black">
                    Thank you for John smith
                  </h4>
                </div>
                <div className="flex w-full flex-col items-start justify-start rounded-xl border border-gray-200 p-5">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h4 className="text-xl leading-8 font-semibold text-black">
                      Order Updates
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-600">
                      You will receive order and shipping updates via email.
                    </h6>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
                  <div className="inline-flex items-center justify-start gap-6">
                    <h4 className="text-xl leading-8 font-semibold text-black">
                      Order Info
                    </h4>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-4">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-4">
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Order Date
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Mar 28, 2023
                        </h6>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Status
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Progress
                        </h6>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Payment Method
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Cash on Delivery
                        </h6>
                      </div>
                    </div>
                    <div className="inline-flex w-full flex-col items-start justify-start gap-4">
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Delivery Date
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          April 01, 2023
                        </h6>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Payment Status
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Paid
                        </h6>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                          Address
                        </h5>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          718 Robbyn Meadow, S...
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Your Order
              </h2>
              <div className="flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="inline-flex w-full items-center justify-start gap-6 border-b border-gray-100 pb-6">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715247090.png"
                      alt="White neck shirt image"
                    />
                    <div className="flex w-full items-center justify-between gap-6">
                      <div className="inline-flex flex-col items-start justify-start gap-2">
                        <h5 className="text-lg leading-relaxed font-semibold text-black">
                          White neck shirt
                        </h5>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Dust Studios
                        </h6>
                        <div className="inline-flex items-start justify-start gap-4">
                          <h6 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-black">
                            Size:
                            <span className="text-gray-500">M </span>
                          </h6>
                          <h6 className="text-base leading-relaxed font-medium text-black">
                            Qty:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-indigo-600">
                        $120.00
                      </h5>
                    </div>
                  </div>
                  <div className="inline-flex w-full items-center justify-start gap-6 border-b border-gray-100 pb-6">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715247100.png"
                      alt="Sunglasses for Men image"
                    />
                    <div className="flex w-full items-center justify-between gap-6">
                      <div className="inline-flex flex-col items-start justify-start gap-2">
                        <h5 className="text-lg leading-relaxed font-semibold text-black">
                          Sunglasses for Men
                        </h5>
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Black
                        </h6>
                        <div className="inline-flex items-start justify-start gap-4">
                          <h6 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-black">
                            Size:
                            <span className="text-gray-500">M</span>
                          </h6>
                          <h6 className="text-base leading-relaxed font-medium text-black">
                            Qty:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-indigo-600">
                        $100.00
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-4">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Order Summary
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-3.5 rounded-xl border border-gray-200 p-5">
                    <div className="inline-flex w-full items-center justify-between gap-6">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                        Subtotal:
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                        $ 240.00
                      </h5>
                    </div>
                    <div className="inline-flex w-full items-center justify-between border-b border-gray-200 pb-4">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                        Delivery:
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                        Free
                      </h5>
                    </div>
                    <div className="inline-flex w-full items-center justify-between pb-4">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                        Total:
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-indigo-600">
                        ₹240.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-6 sm:flex-row lg:gap-8">
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-100">
              <span className="px-2 text-lg leading-8 font-semibold text-indigo-500">
                Back to Shopping
              </span>
            </button>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 text-lg leading-8 font-semibold text-white">
                Continue Shipping
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
