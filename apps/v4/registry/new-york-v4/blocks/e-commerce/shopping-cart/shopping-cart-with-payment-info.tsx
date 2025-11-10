export default function ShoppingCartWithPaymentInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="pb-8">
          <h2 className="font-manrope text-center text-3xl leading-normal font-semibold text-black">
            Shopping Cart
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-12 w-full lg:col-span-8">
            <div className="grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden">
              <div className="col-span-12 md:col-span-6">
                <h5 className="grow text-base leading-relaxed font-normal text-gray-500">
                  Service
                </h5>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-6">
                  <div className="col-span-4 flex items-center justify-center">
                    <h5 className="w-52 text-center text-base leading-relaxed font-normal text-gray-500">
                      Quantity
                    </h5>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <h5 className="w-28 text-center text-base leading-relaxed font-normal text-gray-500">
                      Price
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-5 min-[500px]:items-center md:flex-row">
              <div className="mx-auto flex w-fit items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-6"></div>
              <div className="grid w-full grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-1 max-[500px]:items-center">
                    <h6 className="text-center text-lg leading-8 font-medium text-black md:text-start">
                      Web Development
                    </h6>
                    <p className="w-full text-center text-xs leading-5 font-normal text-gray-500 md:w-64 md:text-start">
                      Web development encompasses the creation and maintenance
                      of websites{" "}
                    </p>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <div className="flex items-center justify-center gap-4 md:justify-start lg:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white px-3.5 text-base leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <h5 className="w-28 text-center text-lg leading-8 font-bold text-gray-600 md:text-right">
                    $220.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6 min-[500px]:items-center md:flex-row">
              <div className="mx-auto flex w-fit items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-6"></div>
              <div className="grid w-full grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-1 max-[500px]:items-center">
                    <h6 className="text-center text-lg leading-8 font-medium text-black md:text-start">
                      Social media
                    </h6>
                    <p className="w-full text-center text-xs leading-5 font-normal text-gray-500 md:w-64 md:text-start">
                      Our comprehensive content creation and posting service for
                      three social media{" "}
                    </p>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <div className="flex items-center justify-center gap-4 md:justify-start lg:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white px-3.5 text-base leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <h5 className="w-28 text-center text-lg leading-8 font-bold text-gray-600 md:text-right">
                    $150.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6 min-[500px]:items-center md:flex-row">
              <div className="mx-auto flex w-fit items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-6"></div>
              <div className="grid w-full grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-1 max-[500px]:items-center">
                    <h6 className="text-center text-lg leading-8 font-medium text-black md:text-start">
                      Web Hosting
                    </h6>
                    <p className="w-full text-center text-xs leading-5 font-normal text-gray-500 md:w-64 md:text-start">
                      Our complete web hosting package offers you a hassle-free
                      solution to ensure
                    </p>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <div className="flex items-center justify-center gap-4 md:justify-start lg:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white px-3.5 text-base leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex h-full items-center justify-center max-[500px]:justify-center max-md:mt-3">
                  <h5 className="w-28 text-center text-lg leading-8 font-bold text-gray-600 md:text-right">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col items-start justify-start gap-6">
              <div className="inline-flex w-full items-start justify-between gap-8">
                <h4 className="text-xl leading-relaxed font-normal text-gray-400">
                  Subtotal
                </h4>
                <h4 className="text-center text-xl leading-relaxed font-semibold text-gray-900">
                  $620.00
                </h4>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-8">
                <h4 className="text-xl leading-relaxed font-normal text-gray-400">
                  Delivery Charge
                </h4>
                <h4 className="text-center text-xl leading-relaxed font-semibold text-gray-900">
                  $30.00
                </h4>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-8">
                <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                  Total
                </h3>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-indigo-600">
                  $650.00
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-12 inline-flex w-full flex-col items-center justify-start rounded-xl bg-gray-900 p-6 lg:col-span-4">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-white">
                Payment Info
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <span className="w-full text-sm leading-snug font-medium text-gray-400">
                    Payment Method:
                  </span>
                  <div className="flex w-full gap-6 lg:gap-7 xl:gap-10">
                    <div className="flex w-full items-center">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:border-gray-200 checked:bg-transparent checked:bg-center checked:bg-no-repeat"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex grow cursor-pointer items-center text-base leading-relaxed font-medium whitespace-nowrap text-white"
                      >
                        <span className="mr-4 h-6 w-6 rounded-full border border-gray-200" />
                        Credit Card
                      </label>
                    </div>
                    <div className="flex w-full items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:border-gray-200 checked:bg-transparent checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex grow cursor-pointer items-center text-base leading-relaxed font-medium whitespace-nowrap text-white"
                      >
                        <span className="mr-4 h-6 w-6 rounded-full border border-gray-200" />
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <span className="text-sm leading-snug font-medium text-gray-400">
                    Name On Card:
                  </span>
                  <input
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white focus:outline-none"
                    placeholder="Ronald Richards"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <span className="text-sm leading-snug font-medium text-gray-400">
                    Card Number:
                  </span>
                  <input
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white focus:outline-none"
                    placeholder="2012   1203   2154   2000"
                  />
                </div>
                <div className="inline-flex w-full items-end justify-start gap-3.5">
                  <div className="flex w-full flex-wrap items-start justify-start gap-3.5 xl:flex-nowrap">
                    <div className="grid w-full gap-2">
                      <span className="text-sm leading-snug font-medium text-gray-400">
                        Expiry date
                      </span>
                      <div className="flex gap-3.5">
                        <div className="relative w-full xl:w-24">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                          <input
                            type="text"
                            className="inline-flex h-8 w-full items-center justify-start gap-2 border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown1"
                            className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pl-2 text-center text-base font-medium text-gray-500"
                          ></button>
                          <div
                            id="dropdown1"
                            className="open absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                  06
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  07
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  08
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="relative w-full xl:w-24">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                          <input
                            type="text"
                            className="inline-flex h-8 w-full items-center justify-start gap-2 border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown2"
                            className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pl-2 text-center text-base font-medium text-gray-500"
                          ></button>
                          <div
                            id="dropdown2"
                            className="open absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                  2024
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  2025
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  2023
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full xl:w-28">
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <span className="text-sm leading-snug font-medium text-gray-400">
                          CVV
                        </span>
                        <div className="relative w-full xl:w-28">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                          <input
                            type="text"
                            className="inline-flex h-8 w-full items-center justify-start gap-2 border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown3"
                            className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pl-2 text-center text-base font-medium text-gray-500"
                          ></button>
                          <div
                            id="dropdown3"
                            className="open absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                  214
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  215
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  216
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <input
                    id="radio-group"
                    type="radio"
                    name="radio1"
                    className="hidden checked:border-gray-200 checked:bg-transparent checked:bg-center checked:bg-no-repeat"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio-group"
                    className="flex grow cursor-pointer items-center text-sm leading-snug font-normal whitespace-nowrap text-white"
                  >
                    <span className="mr-4 h-[22px] w-[22px] rounded-full border border-gray-200" />
                    Save Payment On File
                  </label>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
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
