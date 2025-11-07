export default function TwoColumnsShoppingCartWithBackgroundColor() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 lg:col-span-5">
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl bg-gray-50 p-8">
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Billing Address
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="inline-flex items-center justify-start gap-0.5">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          Full Name
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="pagedone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="inline-flex items-center justify-start gap-1">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          Phone Number
                        </span>
                      </div>
                      <div className="relative flex w-full">
                        <button
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 text-center text-base font-medium text-gray-900"
                        >
                          IN
                        </button>
                        <div
                          id="dropdown-1"
                          className="absolute top-10 z-10 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                          </ul>
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="block w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 pl-16 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                            placeholder="+91 000 000 0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="inline-flex items-center justify-start gap-0.5">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          Address
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="pagedone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            Country
                          </span>
                        </div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            State
                          </span>
                        </div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            City
                          </span>
                        </div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            Zip / Postal Code
                          </span>
                        </div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="000 000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full items-end justify-start gap-5">
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex w-full items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            Select the Delivery Address
                          </span>
                        </div>
                        <div className="flex w-full flex-col gap-5 sm:flex-row lg:flex-col xl:flex-row">
                          <div className="flex w-full items-center">
                            <input
                              id="radio_1"
                              type="radio"
                              name="radio"
                              className="peer sr-only hidden"
                              defaultChecked
                            />
                            <label
                              htmlFor="radio_1"
                              className="flex w-full cursor-pointer items-center rounded-full border border-gray-300 bg-transparent px-4 py-2.5 text-sm leading-snug font-normal text-gray-400"
                            >
                              <span className="mr-2 h-4 w-4 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                              Home
                            </label>
                          </div>
                          <div className="flex w-full items-center">
                            <input
                              id="radio_2"
                              type="radio"
                              name="radio"
                              className="peer sr-only hidden"
                            />
                            <label
                              htmlFor="radio_2"
                              className="flex w-full cursor-pointer items-center rounded-full border border-gray-300 bg-transparent px-4 py-2.5 text-sm leading-snug font-normal text-gray-400"
                            >
                              <span className="mr-2 h-4 w-4 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                              Office (10AM to 5PM)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl bg-gray-50 p-8">
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Payment Method
              </h3>
              <div className="flex w-full items-center justify-start gap-5">
                <div className="flex w-full items-center">
                  <input
                    id="radio_3"
                    type="radio"
                    name="radio1"
                    className="peer sr-only hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_3"
                    className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-400"
                  >
                    <span className="mr-1.5 h-5 w-5 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                  </label>
                </div>
                <div className="flex w-full items-center">
                  <input
                    id="radio_4"
                    type="radio"
                    name="radio1"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_4"
                    className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-400"
                  >
                    <span className="mr-1.5 h-5 w-5 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                  </label>
                </div>
                <div className="flex w-full items-center">
                  <input
                    id="radio_5"
                    type="radio"
                    name="radio1"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_5"
                    className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-400"
                  >
                    <span className="mr-1.5 h-5 w-5 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                  </label>
                </div>
                <div className="flex w-full items-center">
                  <input
                    id="radio_6"
                    type="radio"
                    name="radio1"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_6"
                    className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-400"
                  >
                    <span className="mr-1.5 h-5 w-5 rounded-full border border-green-700 bg-green-50 checked:border-green-900" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 rounded-xl bg-gray-50 p-8 lg:col-span-7">
            <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
              Your Order
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-5 rounded-3xl border border-gray-300 p-5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex-row">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712056799.png"
                  />
                  <div className="flex w-full items-start justify-between">
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="flex flex-col items-start justify-start gap-1">
                        <h4 className="text-xl leading-loose font-medium text-gray-900">
                          Men’s Nike Sport Shoes
                        </h4>
                        <h5 className="text-lg leading-8 font-semibold text-green-900">
                          $120
                        </h5>
                      </div>
                      <div className="inline-flex items-center justify-start gap-5">
                        <div className="inline-flex w-28 flex-col items-start justify-start">
                          <div className="flex w-28 flex-col items-start justify-start gap-1">
                            <div className="flex flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Size
                                </span>
                              </div>
                              <div className="flex w-full">
                                <div className="relative w-full">
                                  <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                                  <input
                                    type="text"
                                    className="inline-flex h-8 w-28 items-center justify-start gap-2 rounded-full border border-gray-300 bg-transparent px-2.5 py-1.5 text-xs leading-none font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] shadow-xs focus:outline-none"
                                  />
                                  <button
                                    id="dropdown-button"
                                    data-target="dropdown"
                                    className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-3 pl-2 text-center text-base font-medium text-gray-900"
                                  ></button>
                                  <div
                                    id="dropdown"
                                    className="open absolute top-9 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                          7
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          8
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          9
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          10
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex w-28 flex-col items-start justify-start">
                          <div className="flex w-28 flex-col items-start justify-start gap-1">
                            <div className="flex w-28 flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Quantity
                                </span>
                              </div>
                              <button className="inline-flex h-8 w-28 items-center justify-start gap-0.5 rounded-full border border-gray-300 bg-transparent px-2.5 py-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                                <div className="flex w-20 items-center justify-start gap-0.5 bg-transparent py-px pl-0.5">
                                  <input
                                    type="text"
                                    className="w-14 bg-transparent text-center text-xs leading-5 font-normal text-gray-900 placeholder-gray-900 focus:outline-none"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="group pt-1"></button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-5 rounded-3xl border border-gray-300 p-5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex-row">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712056811.png"
                  />
                  <div className="flex w-full items-start justify-between">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                      <div className="flex flex-col items-start justify-start gap-1">
                        <h4 className="text-xl leading-loose font-medium text-gray-900">
                          Girl’s Shoes
                        </h4>
                        <h5 className="text-lg leading-8 font-semibold text-green-900">
                          $100
                        </h5>
                      </div>
                      <div className="inline-flex items-center justify-start gap-5">
                        <div className="inline-flex flex-col items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <div className="flex flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Size
                                </span>
                              </div>
                              <div className="flex w-full">
                                <div className="relative w-full">
                                  <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                                  <input
                                    type="text"
                                    className="inline-flex h-8 w-28 items-center justify-start gap-2 rounded-full border border-gray-300 bg-transparent px-2.5 py-1.5 text-xs leading-none font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] shadow-xs focus:outline-none"
                                  />
                                  <button
                                    id="dropdown-button"
                                    data-target="dropdown1"
                                    className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-3 pl-2 text-center text-base font-medium text-gray-900"
                                  ></button>
                                  <div
                                    id="dropdown1"
                                    className="open absolute top-9 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                          7
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          8
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          9
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          10
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <div className="flex flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Quantity
                                </span>
                              </div>
                              <button className="inline-flex h-8 w-28 items-center justify-start gap-0.5 rounded-full border border-gray-300 bg-transparent px-2.5 py-1.5 text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                                <div className="flex w-20 items-center justify-start gap-0.5 bg-transparent py-px pl-0.5">
                                  <input
                                    type="text"
                                    className="w-14 bg-transparent text-center text-xs leading-5 font-normal text-gray-900 placeholder-gray-900 focus:outline-none"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="group pt-1"></button>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full items-end justify-start gap-5">
                <div className="inline-flex w-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="inline-flex items-center justify-start gap-0.5">
                        <span className="text-xs leading-5 font-medium text-gray-600">
                          Coupon Code
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-1.5 rounded-full border border-gray-300 bg-transparent px-3.5 py-2 leading-snug shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-full bg-green-900 px-3.5 py-2 shadow transition-all duration-700 ease-in-out hover:bg-green-800">
                  <span className="px-1.5 py-px text-sm leading-relaxed font-medium whitespace-nowrap text-white">
                    Apply Code
                  </span>
                </button>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <div className="inline-flex w-full items-center justify-between py-2">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Subtotal:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $220.00
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-6 py-2">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Delivery:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $2.00
                    </h6>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start border-t border-gray-300 pt-3.5">
                  <div className="inline-flex w-full items-center justify-between gap-6 py-2">
                    <h6 className="text-lg leading-8 font-normal text-gray-600">
                      Total:
                    </h6>
                    <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $222.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto flex w-96 items-center justify-center rounded-full bg-green-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-green-800">
          <span className="px-2 text-lg leading-8 font-semibold text-white">
            Place Order
          </span>
        </button>
      </div>
    </section>
  )
}
