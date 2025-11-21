export default function ShoppingCartWithReceiveOrderDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="font-manrope w-full pb-8 text-center text-4xl leading-normal font-bold text-black">
          My Shopping Cart
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h3 className="text-xl leading-loose font-semibold text-black">
                Summary
              </h3>
              <div className="flex w-full flex-col items-start justify-start">
                <div className="group flex w-full flex-col items-start justify-start gap-2.5 border-b border-gray-200 pb-5">
                  <div className="inline-flex w-full items-center justify-start gap-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712126548.png"
                      alt="Homiboss Chair"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                      <div className="inline-flex w-full items-start justify-between gap-4">
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Homiboss Chair
                        </h6>
                        <h6 className="text-right text-base leading-relaxed font-semibold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
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
                      <div className="flex items-center gap-4">
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                        <input
                          type="text"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group flex w-full flex-col items-start justify-start gap-2.5 border-b border-gray-200 pt-4 pb-5">
                  <div className="inline-flex w-full items-center justify-start gap-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712126556.png"
                      alt="Maharaja Chair image"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                      <div className="inline-flex w-full items-start justify-between gap-4">
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Maharaja Chair
                        </h6>
                        <h6 className="text-right text-base leading-relaxed font-semibold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                          $50.00
                        </h6>
                      </div>
                      <div className="inline-flex w-full items-start justify-start gap-3">
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Color:
                        </h6>
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Black
                        </h6>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                        <input
                          type="text"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h3 className="text-xl leading-loose font-semibold text-black">
                Order Summary
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-5">
                <div className="inline-flex w-full items-center justify-between">
                  <h5 className="text-lg leading-8 font-normal text-gray-600">
                    Subtotal:
                  </h5>
                  <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    $ 110.00
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-600">
                    Delivery:
                  </h5>
                  <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    Free
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
                  <h5 className="text-lg leading-8 font-normal text-gray-600">
                    Tax:
                  </h5>
                  <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                    $ 40.00
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-600">
                    Total:
                  </h5>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    ₹150.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h3 className="text-xl leading-loose font-semibold text-black">
                How Would You Like to Receive Your Order
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Delivery
                  </span>
                </button>
                <button className="group flex w-full items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-gray-50 md:w-fit">
                  <span className="px-2 text-base leading-relaxed font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                    Cash On Delivery
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h3 className="text-xl leading-loose font-semibold text-black">
                Enter Your Name and Address
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex w-full items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        First Name
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        Last Name
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-400">
                      Address
                    </span>
                  </div>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Alpha Plus, Near Raiya Telephone exchange."
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        Post Code
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        State
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Gujrat"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        Country
                      </span>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="India"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
