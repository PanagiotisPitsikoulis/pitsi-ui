export default function OrderDetailsWithPaymentMethod() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-4">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
            My Order Summaries
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-500 lg:max-w-4xl">
            Your Order Summaries are concise documents detailing the specifics
            of your purchases. They typically include information such as the
            items you've bought, their quantities, prices, any applicable.
          </p>
        </div>
        <div className="my-8 grid w-full grid-cols-1 items-start justify-between gap-8 border-t border-b border-gray-200 py-6 sm:grid-cols-2 lg:my-14 lg:grid-cols-4">
          <div className="inline-flex flex-col items-start justify-start gap-3">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Delivery Date
            </h6>
            <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
              Jan 01, 2024
            </h4>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-3">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Order ID
            </h6>
            <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
              #1023498789
            </h4>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-3">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Payment Method
            </h6>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-3">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Address
            </h6>
            <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
              718 Robbyn Meadow, S...
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:w-[488px]">
            <img
              src="https://pagedone.io/asset/uploads/1715152436.png"
              alt="card image"
              className="h-[296px] w-full rounded-2xl object-cover"
            />
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                Card Details
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Name on card
                  </label>
                  <input
                    type="text"
                    placeholder="Ronald Richards"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Card number
                  </label>
                  <input
                    type="text"
                    placeholder="1254 2154 5478 6215"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  />
                </div>
                <div className="inline-flex items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label className="text-base leading-relaxed font-medium text-gray-400">
                      Month
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label className="text-base leading-relaxed font-medium text-gray-400">
                      Year
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label className="text-base leading-relaxed font-medium text-gray-400">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                  Comfirm
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:w-[696px]">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                My Order
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-start gap-5 border-b border-gray-200 pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153599.png"
                    alt="Men T-Shirt image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="inline-flex w-full items-start justify-between gap-4">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Men T-Shirt
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-semibold text-indigo-600">
                        $60.00
                      </h6>
                    </div>
                    <div className="inline-flex items-start justify-start gap-3">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Color:
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Green
                      </h6>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex items-center justify-start gap-4">
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-5 border-b border-gray-200 pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153610.png"
                    alt="Men Shirt image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="inline-flex w-full items-start justify-between gap-[15px]">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Men Shirt
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-semibold text-indigo-600">
                        $50.00
                      </h6>
                    </div>
                    <div className="inline-flex items-start justify-start gap-3">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Color:
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        White
                      </h6>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex items-center justify-start gap-4">
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-5 border-b border-gray-200 pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153621.png"
                    alt="Men Pant image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="inline-flex w-full items-start justify-between gap-[15px]">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Men Pant
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-semibold text-indigo-600">
                        $100.00
                      </h6>
                    </div>
                    <div className="inline-flex items-start justify-start gap-3">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Color:
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Blue
                      </h6>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex items-center justify-start gap-4">
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                Order Summaries
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl">
                <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-xl leading-loose font-normal text-gray-500">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-xl leading-loose font-semibold text-gray-900">
                      $210.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-xl leading-loose font-normal text-gray-500">
                      Shipping Charge
                    </h5>
                    <h5 className="text-right text-xl leading-loose font-semibold text-gray-900">
                      $30.00
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6 border-b border-gray-100 pb-6">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                    Total
                  </h4>
                  <h4 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                    $180.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
