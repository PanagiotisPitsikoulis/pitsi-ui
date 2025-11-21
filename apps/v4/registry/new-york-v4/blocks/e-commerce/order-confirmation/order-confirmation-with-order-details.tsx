export default function OrderConfirmationWithOrderDetails() {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-12">
          <div className="flex w-full flex-col items-start justify-center gap-3">
            <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
              Thank You for Your Order!
            </h2>
            <h4 className="text-lg leading-8 font-normal text-gray-600">
              Order #231005
            </h4>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
            <div className="inline-flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex w-full flex-col items-start justify-start gap-5 rounded-tl-2xl rounded-tr-2xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Order Received
                    </h3>
                    <span className="text-sm leading-relaxed font-normal text-gray-500">
                      From John Smith
                    </span>
                  </div>
                  <div className="inline-flex items-start justify-start gap-1.5">
                    <div
                      role="progressbar"
                      className="h-1 w-[100px] rounded-full bg-emerald-600"
                    />
                    <div
                      role="progressbar"
                      className="h-1 w-[100px] rounded-full bg-zinc-300"
                    />
                    <div
                      role="progressbar"
                      className="h-1 w-[100px] rounded-full bg-zinc-300"
                    />
                    <div
                      role="progressbar"
                      className="h-1 w-[100px] rounded-full bg-zinc-300"
                    />
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-between rounded-br-2xl rounded-bl-2xl border-x border-b border-gray-200 bg-white p-5">
                  <div className="inline-flex flex-col items-start justify-start gap-1">
                    <h5 className="text-lg leading-8 font-semibold text-gray-900">
                      Estimate arrival time
                    </h5>
                    <span className="text-sm leading-relaxed font-normal text-gray-500">
                      30-45 minutes
                    </span>
                  </div>
                  <button className="flex items-center justify-center rounded-md bg-emerald-600 p-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-800">
                    <span className="px-1.5 text-xs leading-5 font-medium text-white">
                      Track order
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1 rounded-2xl border border-gray-200 bg-white p-5">
                <h5 className="text-lg leading-8 font-semibold text-gray-900">
                  Picking up your order
                </h5>
                <span className="text-sm leading-relaxed font-normal text-gray-500">
                  Order Address: 123 Main Street Anytown, USA
                </span>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                  Order Details
                </h3>
                <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-200 pb-4">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <div className="flex items-center justify-start gap-3">
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1717412703.png"
                        alt="Burger image"
                      />
                      <h5 className="text-lg leading-8 font-normal text-gray-500">
                        1 Burger
                      </h5>
                    </div>
                    <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $20.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <div className="flex items-center justify-start gap-3">
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1717412738.png"
                        alt="Pizza image"
                      />
                      <h5 className="text-lg leading-8 font-normal text-gray-500">
                        2 Pizza
                      </h5>
                    </div>
                    <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $80.00
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-3.5 border-b border-gray-200 pb-4">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      Subtotal
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $100.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      Tax
                    </h6>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $24.00
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                    Total
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                    $124.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
