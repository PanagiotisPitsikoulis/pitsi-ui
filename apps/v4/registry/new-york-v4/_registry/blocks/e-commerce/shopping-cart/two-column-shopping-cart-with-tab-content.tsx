export default function TwoColumnShoppingCartWithTabContent() {
  return (
    <section className="after:contents-[''] relative z-10 after:absolute after:top-0 after:right-0 after:z-0 after:h-full after:bg-teal-50 xl:after:w-1/3">
      <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-3 md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 w-full pt-14 pb-8 max-xl:mx-auto max-xl:max-w-3xl lg:col-span-7 lg:py-24 lg:pr-8">
            <h2 className="font-manrope w-full pb-8 text-4xl leading-loose font-bold text-gray-900">
              Payment Details
            </h2>
            <div className="tabs">
              <div className="block">
                <ul className="-mb-px flex gap-7 transition-all duration-700 ease-in-out">
                  <li>
                    <a
                      className="tab-active:border-b-indigo-600 tab-active:text-indigo-600 active tablink inline-block pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-900"
                      data-tab="tabs-with-underline-1"
                      role="tab"
                    >
                      {" "}
                      Credit Card{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink inline-block pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-900"
                      data-tab="tabs-with-underline-2"
                      role="tab"
                    >
                      {" "}
                      PayPal{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink inline-block pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-900"
                      data-tab="tabs-with-underline-3"
                      role="tab"
                    >
                      {" "}
                      Apple Pay{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink inline-block pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-900"
                      data-tab="tabs-with-underline-4"
                      role="tab"
                    >
                      {" "}
                      Other{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-14">
                <div
                  id="tabs-with-underline-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-1"
                  className="tabcontent"
                >
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1713334390.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1713334411.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <a className="inline-flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-indigo-600 bg-indigo-50 p-2.5 py-28 sm:py-0">
                        <div className="flex flex-col items-center justify-center gap-0.5">
                          <span className="text-xs leading-5 font-medium text-indigo-600">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="inline-flex w-full flex-col items-end justify-end gap-10">
                      <div className="flex w-full flex-col items-start justify-start gap-5">
                        <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                          <div className="flex w-full items-start justify-start gap-1">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="inline-flex w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="inline-flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex w-full items-start justify-center gap-5 md:justify-end">
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-teal-100 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-teal-900">
                            Cancel Order
                          </span>
                        </button>
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-teal-800 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-2"
                  className="tabcontent hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-2"
                >
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1713334390.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1713334411.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <a className="inline-flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-indigo-600 bg-indigo-50 p-2.5 py-28 sm:py-0">
                        <div className="flex flex-col items-center justify-center gap-0.5">
                          <span className="text-xs leading-5 font-medium text-indigo-600">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="inline-flex w-full flex-col items-end justify-end gap-10">
                      <div className="flex w-full flex-col items-start justify-start gap-5">
                        <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                          <div className="flex w-full items-start justify-start gap-1">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="inline-flex w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="inline-flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex w-full items-start justify-center gap-5 md:justify-end">
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-teal-100 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-teal-900">
                            Cancel Order
                          </span>
                        </button>
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-teal-800 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-3"
                  className="tabcontent hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-3"
                >
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1713334390.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1713334411.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <a className="inline-flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-indigo-600 bg-indigo-50 p-2.5 py-28 sm:py-0">
                        <div className="flex flex-col items-center justify-center gap-0.5">
                          <span className="text-xs leading-5 font-medium text-indigo-600">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="inline-flex w-full flex-col items-end justify-end gap-10">
                      <div className="flex w-full flex-col items-start justify-start gap-5">
                        <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                          <div className="flex w-full items-start justify-start gap-1">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="inline-flex w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="inline-flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex w-full items-start justify-center gap-5 md:justify-end">
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-teal-100 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-teal-900">
                            Cancel Order
                          </span>
                        </button>
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-teal-800 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-4"
                  className="tabcontent hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-4"
                >
                  <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1713334390.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1713334411.png"
                        alt="credit card image"
                        className="w-full rounded-lg object-cover"
                      />
                      <a className="inline-flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-indigo-600 bg-indigo-50 p-2.5 py-28 sm:py-0">
                        <div className="flex flex-col items-center justify-center gap-0.5">
                          <span className="text-xs leading-5 font-medium text-indigo-600">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="inline-flex w-full flex-col items-end justify-end gap-10">
                      <div className="flex w-full flex-col items-start justify-start gap-5">
                        <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
                          <div className="flex w-full items-start justify-start gap-1">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="inline-flex items-center justify-start gap-0.5">
                                <span className="text-xs leading-5 font-medium text-gray-600">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="inline-flex w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="inline-flex w-full flex-col items-start justify-start">
                            <div className="flex w-full flex-col items-start justify-start gap-1">
                              <div className="flex w-full flex-col items-start justify-start gap-1">
                                <div className="inline-flex items-center justify-start gap-0.5">
                                  <span className="text-xs leading-5 font-medium text-gray-600">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex w-full items-start justify-center gap-5 md:justify-end">
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-teal-100 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-teal-900">
                            Cancel Order
                          </span>
                        </button>
                        <button className="flex w-full items-center justify-center rounded-xl bg-teal-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-teal-800 md:w-fit">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mx-auto w-full max-w-3xl bg-teal-50 px-3 py-14 md:px-6 lg:col-span-5 lg:py-24 lg:pl-8 xl:max-w-lg">
            <h3 className="font-manrope w-full pb-8 text-4xl leading-loose font-bold text-gray-900">
              Payment Details
            </h3>
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <ul className="flex items-start justify-start gap-2 sm:gap-3 lg:gap-1 xl:gap-5">
                <li className="p-1.5 md:p-3 lg:p-1.5 xl:p-3.5">
                  <a className="flex items-center justify-start gap-1.5 sm:gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-200"></div>
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <div className="text-sm leading-snug font-normal text-gray-800">
                        Step 1
                      </div>
                      <div className="text-xs leading-5 font-normal text-gray-800">
                        Shipping
                      </div>
                    </div>
                  </a>
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-1.5 py-2 md:px-3 lg:px-1.5 lg:py-2.5 xl:px-3.5 xl:py-3.5">
                  <a className="inline-flex flex-col items-start justify-start gap-1.5 sm:gap-2.5">
                    <div className="items-centersm:gap-2.5 inline-flex justify-start gap-1.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-200"></div>
                      <div className="inline-flex flex-col items-start justify-start gap-0.5">
                        <div className="text-sm leading-snug font-normal text-gray-800">
                          Step 2
                        </div>
                        <div className="text-xs leading-5 font-semibold text-gray-800">
                          Payment
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="p-1.5 md:p-3 lg:p-1.5 xl:p-3.5">
                  <a className="flex items-center justify-start gap-1.5 sm:gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-200"></div>
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <div className="text-sm leading-snug font-normal whitespace-nowrap text-gray-800">
                        Step 3
                      </div>
                      <div className="text-xs leading-5 font-normal text-gray-800">
                        Review
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="flex w-full flex-col items-end justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-300 p-2.5">
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="w-[156px] text-lg leading-8 font-normal text-gray-600">
                        Subtotal:
                      </div>
                      <div className="text-right text-lg leading-8 font-semibold text-gray-900">
                        ₹600.00
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="w-[156px] text-lg leading-8 font-normal text-gray-600">
                        GST
                      </div>
                      <div className="text-right text-lg leading-8 font-semibold text-gray-900">
                        ₹60.00
                      </div>
                    </div>
                    <div className="inline-flex w-full items-center justify-between gap-6">
                      <div className="text-lg leading-8 font-normal text-gray-600">
                        Delivery:
                      </div>
                      <div className="text-right text-lg leading-8 font-semibold text-gray-900">
                        ₹0.00
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-6 border-t border-gray-300 pt-3.5">
                    <div className="text-lg leading-8 font-normal text-gray-600">
                      Total:
                    </div>
                    <div className="text-right text-lg leading-8 font-semibold text-gray-900">
                      ₹660.00
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="flex w-full flex-col items-start justify-start gap-1">
                        <div className="inline-flex items-center justify-start gap-0.5">
                          <span className="text-xs leading-5 font-medium text-gray-600">
                            Apply Coupon Code
                          </span>
                        </div>
                        <div className="flex w-full gap-4">
                          <input
                            type="text"
                            className="inline-flex w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 bg-transparent px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          />
                          <button className="flex items-center justify-center rounded-lg bg-teal-900 px-3.5 py-2 shadow transition-all duration-700 ease-in-out hover:bg-teal-800">
                            <span className="px-1.5 py-px text-sm leading-relaxed font-medium whitespace-nowrap text-white">
                              Apply Code
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
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
