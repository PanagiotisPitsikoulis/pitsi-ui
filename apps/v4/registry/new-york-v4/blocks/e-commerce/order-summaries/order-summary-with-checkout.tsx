export default function OrderSummaryWithCheckout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid grid-cols-1 gap-11 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <h2 className="font-manrope text-3xl leading-normal font-semibold text-black">
              Checkout
            </h2>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h4 className="text-xl leading-loose font-semibold text-black">
                Customer Details
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        First Name
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Sarah"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Last Name
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Davis"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Email
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="box relative flex w-full flex-col gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        Phone Number
                      </span>
                    </div>
                    <div className="flex">
                      <div
                        id="dropdown-button"
                        data-target="dropdown-1"
                        className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-3 pr-2 pl-4 text-center text-base font-medium text-gray-900"
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
                          className="block h-12 w-full rounded-lg bg-gray-100 py-2.5 pr-4 pl-[60px] text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="00000 00000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h4 className="text-xl leading-loose font-semibold text-black">
                Shipping Details
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <h6 className="text-sm leading-snug font-medium text-gray-600">
                      Street Address
                    </h6>
                  </div>
                  <input
                    type="text"
                    className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Alpha Plus A-1002, Raiya Telephone Exchange"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Postal Code
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        City
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Country
                      </h6>
                    </div>
                    <div className="relative w-full">
                      <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                      <input
                        type="text"
                        className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="India"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown"
                        className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-5 pl-2 text-center text-base font-medium text-gray-900"
                      ></button>
                      <div
                        id="dropdown"
                        className="absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              India
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Canada
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              France
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Germany
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h4 className="text-xl leading-loose font-semibold text-black">
                Payment Method
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="grid w-full grid-cols-1 items-start justify-start gap-6 sm:grid-cols-3 lg:gap-4 xl:gap-6">
                  <div className="flex w-full items-center rounded-lg bg-gray-100 px-4 py-2.5">
                    <input
                      id="radio_1"
                      type="radio"
                      name="radio"
                      className="peer sr-only hidden"
                    />
                    <label
                      htmlFor="radio_1"
                      className="flex w-full cursor-pointer items-center bg-transparent py-[1px] text-base leading-6 font-normal text-gray-400"
                    >
                      <span className="mr-2 h-4 w-4 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      Paypal
                    </label>
                  </div>
                  <div className="flex w-full items-center rounded-lg bg-gray-100 px-4 py-2.5">
                    <input
                      id="radio_2"
                      type="radio"
                      name="radio"
                      className="peer sr-only hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_2"
                      className="flex w-full cursor-pointer items-center bg-transparent py-[1px] text-base leading-6 font-normal whitespace-nowrap text-gray-400"
                    >
                      <span className="mr-2 h-4 w-4 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      Credit Card
                    </label>
                  </div>
                  <div className="flex w-full items-center rounded-lg bg-gray-100 px-4 py-2.5">
                    <input
                      id="radio_3"
                      type="radio"
                      name="radio"
                      className="peer sr-only hidden"
                    />
                    <label
                      htmlFor="radio_3"
                      className="flex w-full cursor-pointer items-center bg-transparent py-[1px] text-base leading-6 font-normal text-gray-400"
                    >
                      <span className="mr-2 h-4 w-4 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      COD
                    </label>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5 lg:w-72 xl:w-80">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Caed Number
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="xxxx xxxx xxxx 4568"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5 lg:w-32 xl:w-28">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        Expiry Date
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="08/2027"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5 lg:w-32 xl:w-28">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-snug font-medium text-gray-600">
                        CVV
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-11 border-l border-gray-200 px-6">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
              Order Summary
            </h3>
            <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:gap-6">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1715252065.png"
                alt="Perfume image"
              />
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 sm:items-start sm:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-3 sm:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                    <h5 className="text-lg leading-8 font-medium text-black">
                      Eau De Perfume for Men
                    </h5>
                    <button className="p-1 transition-all duration-700 ease-in-out hover:bg-red-50"></button>
                  </div>
                  <h4 className="text-xl leading-loose font-semibold text-black">
                    $10.68
                  </h4>
                </div>
                <div className="flex items-center justify-start gap-3.5">
                  <button className="flex items-center justify-center rounded-md bg-gray-100 p-[9px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200"></button>
                  <input
                    type="text"
                    className="h-[30px] w-[9px] text-lg leading-8 font-medium text-black"
                  />
                  <button className="flex items-center justify-center rounded-md bg-gray-100 p-[9px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200"></button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-11 sm:flex-row sm:gap-6">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1715252079.png"
                alt="Makeup Kit"
              />
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 sm:items-start sm:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-3 sm:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                    <h5 className="text-lg leading-8 font-medium text-black">
                      NARS Makeup Kit
                    </h5>
                    <button className="p-1 transition-all duration-700 ease-in-out hover:bg-red-50"></button>
                  </div>
                  <h4 className="text-xl leading-loose font-semibold text-black">
                    $80.00
                  </h4>
                </div>
                <div className="inline-flex items-center justify-start gap-3.5">
                  <button className="flex items-center justify-center rounded-md bg-gray-100 p-[9px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200"></button>
                  <input
                    type="text"
                    className="h-[30px] w-[9px] text-lg leading-8 font-medium text-black"
                  />
                  <button className="flex items-center justify-center rounded-md bg-gray-100 p-[9px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200"></button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-6 border-b border-gray-200 pb-11">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <h6 className="text-sm leading-snug font-medium text-gray-600">
                  Discount Code
                </h6>
                <input
                  type="text"
                  className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Davis"
                />
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-gray-800 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Apply
                </span>
              </button>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-2.5">
                <div className="flex w-full flex-col items-start justify-start gap-6 pb-6">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-8 font-normal text-gray-500">
                      Subtotal
                    </h5>
                    <h4 className="text-right text-xl leading-loose font-semibold text-gray-500">
                      $90.68
                    </h4>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="w-[181px] text-lg leading-8 font-normal text-gray-500">
                      Shipping Charge
                    </h5>
                    <h4 className="text-right text-xl leading-loose font-semibold text-gray-500">
                      $08.00
                    </h4>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-8 font-normal text-gray-500">
                      Taxes
                    </h5>
                    <h4 className="text-right text-xl leading-loose font-semibold text-gray-500">
                      $22.00
                    </h4>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-8 font-normal text-gray-500">
                      Discount
                    </h5>
                    <h4 className="text-right text-xl leading-loose font-semibold text-gray-500">
                      $12.00
                    </h4>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Total
                  </h4>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $108.68
                  </h4>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-gray-800">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Check Out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
