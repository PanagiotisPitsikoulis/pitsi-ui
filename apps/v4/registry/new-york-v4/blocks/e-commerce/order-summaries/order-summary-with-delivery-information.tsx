export default function OrderSummaryWithDeliveryInformation() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-4">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
            Order Summaries
          </h2>
          <p className="text-center text-lg leading-8 font-normal text-gray-500">
            Your Order Summaries are concise documents detailing the specifics
            of your purchases.
          </p>
        </div>
        <div className="my-11 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
              Delivery Information
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="inline-flex w-full items-start justify-start gap-4">
                <div className="flex w-32 items-center">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_1"
                    className="flex w-full cursor-pointer items-center bg-transparent py-[1px] text-base leading-relaxed font-medium text-black"
                  >
                    <span className="mr-[18px] h-[26px] w-[26px] rounded-full border border-gray-400 bg-white checked:border-indigo-600" />
                    Home
                  </label>
                </div>
                <div className="flex w-40 items-center">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_2"
                    className="flex w-full cursor-pointer items-center bg-transparent py-[1px] text-base leading-relaxed font-medium text-black"
                  >
                    <span className="mr-[18px] h-[26px] w-[26px] rounded-full border border-gray-400 bg-white checked:border-indigo-600" />
                    Office
                  </label>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      First Name
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Shawna"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      Last Name
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Hermiston"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      Email Address
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Shawna87@yahoo.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      Phone Number
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="(283) 785-5815 x2293"
                    />
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-start gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      Address
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="74890 The Willows, Weissnatmouth 49366-9564"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      Company
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Grimes, Stokes and Willms"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-6 font-medium text-gray-400">
                      City
                    </h6>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Brazil"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
              My Order
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="inline-flex w-full items-center justify-start gap-6 border-b border-gray-200 pb-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318481.png"
                />
                <div className="flex w-full items-start justify-between gap-6">
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Alarm Clock
                    </h5>
                    <div className="inline-flex items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    $150.00
                  </h5>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-6 border-b border-gray-200 pb-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318493.png"
                />
                <div className="flex w-full items-start justify-between gap-6">
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Nen Polish
                    </h5>
                    <div className="inline-flex items-start justify-start gap-4">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Qty:
                        <span className="text-gray-500">2</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    $80.00
                  </h5>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-6 border-b border-gray-200 pb-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318505.png"
                />
                <div className="flex w-full items-start justify-between gap-6">
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Eau de Parfum
                    </h5>
                    <div className="inline-flex items-start justify-start gap-4">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    $180.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start gap-6 rounded-xl">
          <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-100 pb-6">
            <div className="inline-flex w-full items-start justify-between gap-6">
              <h4 className="text-xl leading-loose font-normal text-gray-500">
                Subtotal
              </h4>
              <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                $490.00
              </h4>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-6">
              <h4 className="text-xl leading-loose font-normal text-gray-500">
                Shipping Charge
              </h4>
              <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                $20.00
              </h4>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-6">
              <h4 className="text-xl leading-loose font-normal text-gray-500">
                Taxes
              </h4>
              <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                $10.00
              </h4>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-6">
              <h4 className="text-xl leading-loose font-normal text-gray-500">
                Discount
              </h4>
              <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                $50.00
              </h4>
            </div>
          </div>
          <div className="inline-flex w-full items-start justify-between gap-6 border-b border-gray-100 pb-6">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
              Total
            </h3>
            <h3 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
              $470.00
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
