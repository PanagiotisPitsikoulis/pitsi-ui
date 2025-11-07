export default function TwoColumnShoppingCartWithTabContent() {
  return (
    <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-teal-50">
      <div className="w-full max-w-7xl px-3 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="col-span-12 lg:col-span-7 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <h2 className="w-full text-gray-900 text-4xl font-bold font-manrope leading-loose pb-8">
              Payment Details
            </h2>
            <div className="tabs">
              <div className="block">
                <ul className="flex transition-all duration-700 ease-in-out gap-7 -mb-px">
                  <li>
                    <a
                      className="inline-block tab-active:border-b-indigo-600 tab-active:text-indigo-600 active tablink whitespace-nowrap pb-2.5 text-gray-900 text-base font-medium leading-relaxed"
                      data-tab="tabs-with-underline-1"
                      role="tab"
                    >
                      {" "}
                      Credit Card{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink whitespace-nowrap pb-2.5 text-gray-900 text-base font-medium leading-relaxed"
                      data-tab="tabs-with-underline-2"
                      role="tab"
                    >
                      {" "}
                      PayPal{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink whitespace-nowrap pb-2.5 text-gray-900 text-base font-medium leading-relaxed"
                      data-tab="tabs-with-underline-3"
                      role="tab"
                    >
                      {" "}
                      Apple Pay{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block tab-active:border-b-indigo-600 tab-active:text-indigo-600 tablink whitespace-nowrap pb-2.5 text-gray-900 text-base font-medium leading-relaxed"
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
                  <div className="w-full justify-start items-start gap-8 flex flex-col ">
                    <div className="w-full justify-start items-start gap-5 grid sm:grid-cols-3 grid-cols-1">
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
                      <a className="w-full h-full p-2.5 sm:py-0 py-28 bg-indigo-50 rounded-lg border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="flex-col justify-center items-center gap-0.5 flex">
                          <span className="text-indigo-600 text-xs font-medium leading-5">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="w-full flex-col justify-end items-end gap-10 inline-flex">
                      <div className="w-full flex-col justify-start items-start gap-5 flex">
                        <div className="w-full justify-start items-start flex sm:flex-row flex-col gap-4">
                          <div className="w-full justify-start items-start gap-1 flex">
                            <div className="w-full justify-start items-start gap-1 flex flex-col">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="w-full text-sm font-normal leading-relaxed text-gray-900 focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex placeholder-gray-400"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full focus:outline-none text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-400"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:justify-end justify-center items-start gap-5 inline-flex">
                        <button
                          className="md:w-fit w-full px-5 py-2.5 bg-teal-50 rounded-xl justify-center items-center flex hover:bg-teal-100
                            transition-all duration-700 ease-in-out"
                        >
                          <span className="px-2 py-px text-teal-900 text-base font-semibold leading-relaxed">
                            Cancel Order
                          </span>
                        </button>
                        <button className="md:w-fit w-full px-5 py-2.5 bg-teal-900 rounded-xl shadow justify-center items-center flex hover:bg-teal-800 transition-all duration-700 ease-in-out">
                          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-2"
                  className="hidden tabcontent"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-2"
                >
                  <div className="w-full justify-start items-start gap-8 flex flex-col ">
                    <div className="w-full justify-start items-start gap-5 grid sm:grid-cols-3 grid-cols-1">
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
                      <a className="w-full h-full p-2.5 sm:py-0 py-28 bg-indigo-50 rounded-lg border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="flex-col justify-center items-center gap-0.5 flex">
                          <span className="text-indigo-600 text-xs font-medium leading-5">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="w-full flex-col justify-end items-end gap-10 inline-flex">
                      <div className="w-full flex-col justify-start items-start gap-5 flex">
                        <div className="w-full justify-start items-start flex sm:flex-row flex-col gap-4">
                          <div className="w-full justify-start items-start gap-1 flex">
                            <div className="w-full justify-start items-start gap-1 flex flex-col">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="w-full text-sm font-normal leading-relaxed text-gray-900 focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex placeholder-gray-400"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full focus:outline-none text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-400"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg
                                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:justify-end justify-center items-start gap-5 inline-flex">
                        <button
                          className="md:w-fit w-full px-5 py-2.5 bg-teal-50 rounded-xl justify-center items-center flex hover:bg-teal-100
                                  transition-all duration-700 ease-in-out"
                        >
                          <span className="px-2 py-px text-teal-900 text-base font-semibold leading-relaxed">
                            Cancel Order
                          </span>
                        </button>
                        <button className="md:w-fit w-full px-5 py-2.5 bg-teal-900 rounded-xl shadow justify-center items-center flex hover:bg-teal-800 transition-all duration-700 ease-in-out">
                          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-3"
                  className="hidden tabcontent"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-3"
                >
                  <div className="w-full justify-start items-start gap-8 flex flex-col ">
                    <div className="w-full justify-start items-start gap-5 grid sm:grid-cols-3 grid-cols-1">
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
                      <a className="w-full h-full p-2.5 sm:py-0 py-28 bg-indigo-50 rounded-lg border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="flex-col justify-center items-center gap-0.5 flex">
                          <span className="text-indigo-600 text-xs font-medium leading-5">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="w-full flex-col justify-end items-end gap-10 inline-flex">
                      <div className="w-full flex-col justify-start items-start gap-5 flex">
                        <div className="w-full justify-start items-start flex sm:flex-row flex-col gap-4">
                          <div className="w-full justify-start items-start gap-1 flex">
                            <div className="w-full justify-start items-start gap-1 flex flex-col">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="w-full text-sm font-normal leading-relaxed text-gray-900 focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex placeholder-gray-400"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full focus:outline-none text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-400"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg
                                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:justify-end justify-center items-start gap-5 inline-flex">
                        <button
                          className="md:w-fit w-full px-5 py-2.5 bg-teal-50 rounded-xl justify-center items-center flex hover:bg-teal-100
                                  transition-all duration-700 ease-in-out"
                        >
                          <span className="px-2 py-px text-teal-900 text-base font-semibold leading-relaxed">
                            Cancel Order
                          </span>
                        </button>
                        <button className="md:w-fit w-full px-5 py-2.5 bg-teal-900 rounded-xl shadow justify-center items-center flex hover:bg-teal-800 transition-all duration-700 ease-in-out">
                          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                            Place Order
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-underline-4"
                  className="hidden tabcontent"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-4"
                >
                  <div className="w-full justify-start items-start gap-8 flex flex-col ">
                    <div className="w-full justify-start items-start gap-5 grid sm:grid-cols-3 grid-cols-1">
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
                      <a className="w-full h-full p-2.5 sm:py-0 py-28 bg-indigo-50 rounded-lg border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="flex-col justify-center items-center gap-0.5 flex">
                          <span className="text-indigo-600 text-xs font-medium leading-5">
                            Add Card
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="w-full flex-col justify-end items-end gap-10 inline-flex">
                      <div className="w-full flex-col justify-start items-start gap-5 flex">
                        <div className="w-full justify-start items-start flex sm:flex-row flex-col gap-4">
                          <div className="w-full justify-start items-start gap-1 flex">
                            <div className="w-full justify-start items-start gap-1 flex flex-col">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Credit Card
                                </span>
                              </div>
                              <input
                                type="text"
                                className="w-full text-sm font-normal leading-relaxed text-gray-900 focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex placeholder-gray-400"
                                placeholder="**** **** 6548"
                              />
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Pagedone"
                                  className="w-full focus:outline-none text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-400"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    Expiry Date
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="MM / YYYY"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex-col justify-start items-start inline-flex">
                            <div className="w-full flex-col justify-start items-start gap-1 flex">
                              <div className="w-full flex-col justify-start items-start gap-1 flex flex-col">
                                <div className="justify-start items-center gap-0.5 inline-flex">
                                  <span className="text-gray-600 text-xs font-medium leading-5">
                                    CVV
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="w-full text-gray-900 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg
                                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none placeholder-gray-400"
                                  placeholder="Enter 3 digit code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:justify-end justify-center items-start gap-5 inline-flex">
                        <button
                          className="md:w-fit w-full px-5 py-2.5 bg-teal-50 rounded-xl justify-center items-center flex hover:bg-teal-100
                                  transition-all duration-700 ease-in-out"
                        >
                          <span className="px-2 py-px text-teal-900 text-base font-semibold leading-relaxed">
                            Cancel Order
                          </span>
                        </button>
                        <button className="md:w-fit w-full px-5 py-2.5 bg-teal-900 rounded-xl shadow justify-center items-center flex hover:bg-teal-800 transition-all duration-700 ease-in-out">
                          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
          <div className="col-span-12 lg:col-span-5 bg-teal-50 w-full md:px-6 px-3 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 lg:py-24 py-14">
            <h3 className="w-full text-gray-900 text-4xl font-bold font-manrope leading-loose pb-8">
              Payment Details
            </h3>
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <ul className="justify-start items-start xl:gap-5 lg:gap-1 sm:gap-3 gap-2 flex ">
                <li className="xl:p-3.5 lg:p-1.5 md:p-3 p-1.5">
                  <a className="justify-start items-center sm:gap-2.5 gap-1.5 flex">
                    <div className="w-11 h-11 justify-center items-center flex bg-blue-200 rounded-full"></div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <div className="text-gray-800 text-sm font-normal leading-snug">
                        Step 1
                      </div>
                      <div className="text-gray-800 text-xs font-normal leading-5">
                        Shipping
                      </div>
                    </div>
                  </a>
                </li>
                <li className="xl:px-3.5 lg:px-1.5 md:px-3 px-1.5 xl:py-3.5 lg:py-2.5 py-2 bg-white rounded-lg border border-gray-200 ">
                  <a className="flex-col justify-start items-start sm:gap-2.5 gap-1.5 inline-flex">
                    <div className="justify-start items-centersm:gap-2.5 gap-1.5 inline-flex">
                      <div className="w-11 h-11 justify-center items-center flex bg-orange-200 rounded-full"></div>
                      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-gray-800 text-sm font-normal leading-snug">
                          Step 2
                        </div>
                        <div className="text-gray-800 text-xs font-semibold leading-5">
                          Payment
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="xl:p-3.5 lg:p-1.5 md:p-3 p-1.5">
                  <a className="justify-start items-center sm:gap-2.5 gap-1.5 flex">
                    <div className="w-11 h-11 justify-center items-center flex bg-emerald-200 rounded-full"></div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <div className="text-gray-800 text-sm font-normal leading-snug whitespace-nowrap">
                        Step 3
                      </div>
                      <div className="text-gray-800 text-xs font-normal leading-5">
                        Review
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="w-full justify-start items-end gap-5 flex flex-col">
                <div className="w-full p-2.5 rounded-xl border border-gray-300 flex-col justify-start items-start gap-5 flex">
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <div className="w-[156px] text-gray-600 text-lg font-normal leading-8">
                        Subtotal:
                      </div>
                      <div className="text-right text-gray-900 text-lg font-semibold leading-8">
                        ₹600.00
                      </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                      <div className="w-[156px] text-gray-600 text-lg font-normal leading-8">
                        GST
                      </div>
                      <div className="text-right text-gray-900 text-lg font-semibold leading-8">
                        ₹60.00
                      </div>
                    </div>
                    <div className="w-full justify-between items-center gap-6 inline-flex">
                      <div className="text-gray-600 text-lg font-normal leading-8">
                        Delivery:
                      </div>
                      <div className="text-right text-gray-900 text-lg font-semibold leading-8">
                        ₹0.00
                      </div>
                    </div>
                  </div>
                  <div className="w-full justify-between items-center gap-6 inline-flex pt-3.5 border-t border-gray-300">
                    <div className="text-gray-600 text-lg font-normal leading-8">
                      Total:
                    </div>
                    <div className="text-right text-gray-900 text-lg font-semibold leading-8">
                      ₹660.00
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full flex-col justify-start items-start flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            Apply Coupon Code
                          </span>
                        </div>
                        <div className="w-full gap-4 flex">
                          <input
                            type="text"
                            className="w-full text-gray-900 bg-transparent placeholder-gray-400 text-sm font-normal leading-relaxed focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex"
                          />
                          <button className="px-3.5 py-2 bg-teal-900 rounded-lg shadow justify-center items-center flex transition-all duration-700 ease-in-out hover:bg-teal-800">
                            <span className="px-1.5 py-px text-white text-sm font-medium leading-relaxed whitespace-nowrap">
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
  );
}
