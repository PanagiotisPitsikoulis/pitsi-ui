export default function ShoppingCartWithRadioButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="font-manrope w-full pb-8 text-center text-4xl leading-normal font-bold text-black">
          Shopping Cart
        </h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h3 className="text-xl leading-loose font-semibold text-black">
                Payment Method
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full gap-3 sm:gap-6 xl:gap-10">
                  <div className="flex w-full items-center">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="flex cursor-pointer items-center text-base leading-normal font-medium whitespace-nowrap text-black"
                    >
                      <span className="mr-2 h-6 w-6 rounded-full border border-gray-400 sm:mr-4" />
                      Paypal
                    </label>
                  </div>
                  <div className="flex w-full items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="hidden w-full checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="flex cursor-pointer items-center text-base leading-normal font-medium whitespace-nowrap text-black"
                    >
                      <span className="mr-2 h-6 w-6 rounded-full border border-gray-400 sm:mr-4" />
                      Credit Card
                    </label>
                  </div>
                  <div className="flex w-full items-center">
                    <input
                      id="radio-group-3"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                    />
                    <label
                      htmlFor="radio-group-3"
                      className="flex cursor-pointer items-center text-base leading-normal font-medium whitespace-nowrap text-black"
                    >
                      <span className="mr-2 h-6 w-6 rounded-full border border-gray-400 sm:mr-4" />
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-0.5">
                      <span className="text-xs leading-5 font-medium text-gray-600">
                        Card Number
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start gap-0.5">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          Expairy Date
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start gap-0.5">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          CVV
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-0.5">
                      <span className="text-xs leading-5 font-medium text-gray-600">
                        Name on Card
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-emerald-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-emerald-800">
                  <span className="px-2 py-px text-base leading-snug font-medium text-white">
                    Continue
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h3 className="text-xl leading-loose font-semibold text-black">
                Order Summary
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-3.5 rounded-xl border border-gray-200 p-5">
                <div className="inline-flex w-full items-center justify-between">
                  <h6 className="text-lg leading-8 font-normal text-gray-600">
                    Subtotal:
                  </h6>
                  <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    $ 350.00
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-between">
                  <h6 className="text-lg leading-8 font-normal text-gray-600">
                    Delivery:
                  </h6>
                  <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    Free
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
                  <h6 className="text-lg leading-8 font-normal text-gray-600">
                    Tax:
                  </h6>
                  <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    $ 20.00
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-between">
                  <h6 className="text-lg leading-8 font-normal text-gray-600">
                    Total:
                  </h6>
                  <h6 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    ₹370.00
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <h3 className="text-xl leading-loose font-semibold text-black">
              Summary
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="inline-flex w-full items-center justify-between gap-3 md:gap-5">
                  <div className="flex items-center justify-start gap-3 md:gap-5">
                    <img
                      className="relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050380.png"
                      alt="Levis Jeans image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Levis Men Jeans
                      </h6>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[31px] text-xs leading-5 font-normal text-gray-500">
                          Size :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          38
                        </p>
                      </div>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[38px] text-xs leading-5 font-normal text-gray-500">
                          Color :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          Blue
                        </p>
                      </div>
                      <button className="inline-flex items-center justify-start gap-2.5">
                        <input
                          type="text"
                          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $120.00
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="inline-flex w-full items-center justify-between gap-3 md:gap-5">
                  <div className="flex items-center justify-start gap-3 md:gap-5">
                    <img
                      className="relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050399.png"
                      alt="Levis Shirt image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Levis Men Shirt
                      </h6>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[31px] text-xs leading-5 font-normal text-gray-500">
                          Size :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          XL
                        </p>
                      </div>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[38px] text-xs leading-5 font-normal text-gray-500">
                          Color :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          Blue
                        </p>
                      </div>
                      <button className="inline-flex items-center justify-start gap-2.5">
                        <input
                          type="text"
                          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $80.00
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="inline-flex w-full items-center justify-between gap-3 md:gap-5">
                  <div className="flex items-center justify-start gap-3 md:gap-5">
                    <img
                      className="relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050409.png"
                      alt="Puma Shoes image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Puma Men Shoes
                      </h6>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[31px] text-xs leading-5 font-normal text-gray-500">
                          Size :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          10
                        </p>
                      </div>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[38px] text-xs leading-5 font-normal text-gray-500">
                          Color :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          Red
                        </p>
                      </div>
                      <button className="inline-flex items-center justify-start gap-2.5">
                        <input
                          type="text"
                          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $50.00
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="inline-flex w-full items-center justify-between gap-3 md:gap-5">
                  <div className="flex items-center justify-start gap-3 md:gap-5">
                    <img
                      className="relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050418.png"
                      alt="Realme Watch image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Realme Watch
                      </h6>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[31px] text-xs leading-5 font-normal text-gray-500">
                          Size :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          08
                        </p>
                      </div>
                      <div className="inline-flex items-start justify-start gap-1.5">
                        <p className="w-[38px] text-xs leading-5 font-normal text-gray-500">
                          Color :
                        </p>
                        <p className="text-xs leading-5 font-normal text-black">
                          Black
                        </p>
                      </div>
                      <button className="inline-flex items-center justify-start gap-2.5">
                        <input
                          type="text"
                          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $100.00
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
