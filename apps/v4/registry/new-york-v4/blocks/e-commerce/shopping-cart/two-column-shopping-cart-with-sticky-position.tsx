export default function TwoColumnShoppingCartWithStickyPosition() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="font-manrope pb-8 text-center text-4xl leading-none font-bold text-gray-900 lg:text-start">
          Checkout
        </h2>
        <div className="grid gap-10 lg:flex xl:gap-16">
          <div className="w-full lg:w-[696px]">
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Customer Information
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                <div className="inline-flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="inline-flex items-center justify-start gap-1">
                        <span className="text-sm leading-snug font-medium text-gray-600">
                          Email
                        </span>
                      </div>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="default-search"
                          className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="mail@pagedone.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="box relative w-full">
                      <div className="mb-1.5 inline-flex items-center justify-start gap-1">
                        <span className="text-sm font-medium text-gray-600 capitalize">
                          Phone Number
                        </span>
                      </div>
                      <div className="flex">
                        <div
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 text-center text-base font-medium text-gray-900"
                        >
                          IN
                        </div>
                        <div
                          id="dropdown-1"
                          className="absolute top-16 z-10 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button"
                          >
                            <li>
                              <a
                                href="javascript:;"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                us
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                in
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                spain
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:;"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                France
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-16 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus-within:outline-none"
                            placeholder="+91 000 000 0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Shipping Address
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Full Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Metlinda Parker"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Street Address
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="3782 Pine Street, Draper"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        Country
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="North Macedonia"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        State
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Alabama"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Alabama"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        Zipcode
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Payment Method
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="group flex w-full cursor-pointer items-center justify-between rounded-xl border-transparent bg-transparent bg-yellow-50 p-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] transition-all duration-700 ease-in-out">
                    <div className="flex items-center justify-start gap-3">
                      <div className="flex h-10 w-[58px] items-center justify-center rounded-md bg-gray-900 pt-[8.38px] pr-[10.74px] pb-[9.28px] pl-2.5"></div>
                      <div className="inline-flex flex-col items-start justify-start gap-0.5">
                        <h5 className="text-sm leading-snug font-medium text-gray-600">
                          Master Card
                        </h5>
                        <h6 className="text-xs leading-5 font-normal text-gray-600">
                          xxx - xxx - 6897
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-gray-300 bg-transparent px-2.5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] transition-all duration-700 ease-in-out">
                    <div className="flex items-center justify-start gap-3">
                      <div className="inline-flex h-10 w-[58px] items-center justify-center rounded-md bg-blue-100 pt-[13.50px] pr-[10.33px] pb-[13.47px] pl-2"></div>
                      <div className="inline-flex flex-col items-start justify-start gap-0.5">
                        <h5 className="text-sm leading-snug font-medium text-gray-600">
                          Visa{" "}
                        </h5>
                        <h6 className="text-xs leading-5 font-normal text-gray-600">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-gray-300 bg-transparent px-2.5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] transition-all duration-700 ease-in-out">
                    <div className="flex items-center justify-start gap-3">
                      <div className="flex h-10 w-[58px] items-center justify-center rounded-md bg-blue-100 pt-[9.55px] pr-[20.76px] pb-[8.51px] pl-[19.25px]"></div>
                      <div className="inline-flex flex-col items-start justify-start gap-0.5">
                        <h5 className="text-sm leading-snug font-medium text-gray-600">
                          Paypal
                        </h5>
                        <h6 className="text-xs leading-5 font-normal text-gray-600">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-gray-300 bg-transparent px-2.5 py-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] transition-all duration-700 ease-in-out">
                    <div className="flex items-center justify-start gap-3">
                      <div className="inline-flex h-10 w-[58px] items-center justify-center rounded-lg bg-gray-100 pt-[11.67px] pr-[7.67px] pb-[10.97px] pl-[8.33px]"></div>
                      <div className="inline-flex flex-col items-start justify-start gap-0.5">
                        <h5 className="text-sm leading-snug font-medium text-gray-600">
                          Apple Pay
                        </h5>
                        <h6 className="text-xs leading-5 font-normal text-gray-600">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Payment Info
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <h5 className="text-sm leading-snug font-medium text-gray-600">
                      Card Number
                    </h5>
                  </div>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="xxx - xxx - 6897"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h5 className="text-sm leading-snug font-medium text-gray-600">
                        Expiry Date
                      </h5>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Month / Year"
                    />
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h5 className="text-sm leading-snug font-medium text-gray-600">
                        CVV
                      </h5>
                    </div>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Order Item
              </h3>
              <div className="flex w-full flex-col items-center justify-start gap-12 sm:flex-row">
                <img src="https://pagedone.io/asset/uploads/1712575276.png" />
                <div className="inline-flex w-full flex-col items-start justify-start">
                  <div className="inline-flex w-full items-center justify-between pb-2">
                    <h4 className="text-xl leading-loose font-bold text-gray-900">
                      Man T-shirt
                    </h4>
                    <h5 className="text-right text-lg leading-8 font-semibold text-emerald-900">
                      ₹2,000
                    </h5>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-2 pb-4">
                    <h6 className="text-sm leading-snug font-normal text-gray-600">
                      Color :{" "}
                      <span className="font-semibold text-gray-900">Black</span>
                    </h6>
                    <h6 className="text-sm leading-snug font-normal text-gray-600">
                      Size :{" "}
                      <span className="font-semibold text-gray-900">L</span>
                    </h6>
                    <h6 className="text-sm leading-snug font-normal text-gray-600">
                      Material :{" "}
                      <span className="font-semibold text-gray-900">
                        Cotton
                      </span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-end justify-between border-t border-gray-200 pt-4">
                    <div className="mx-auto flex w-full items-center justify-start">
                      <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                      <input
                        type="text"
                        className="h-12 w-14 border-y border-gray-300 bg-transparent px-6 text-center text-lg leading-snug font-semibold text-gray-900 outline-none placeholder:text-gray-900"
                      />
                      <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                    </div>
                    <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-3 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block h-full w-full translate-y-0 lg:sticky lg:top-[1.5rem] lg:w-[464px] lg:overflow-y-visible">
            <div className="mb-6 inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="text-xl leading-loose font-medium text-gray-900">
                Checkout Receipt
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Subtotal:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      ₹600.00
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-6">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Delivery:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      ₹0.00
                    </h6>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-3.5 border-t border-gray-200 pt-3.5">
                  <div className="inline-flex w-full items-center justify-between gap-6">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Total:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      ₹600.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
              <h3 className="text-xl leading-loose font-medium text-gray-900">
                Discount Code
              </h3>
              <div className="flex w-full items-start justify-start gap-5">
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Enter Code here"
                />
                <button className="mx-auto flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:mx-0">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Apply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
