export default function TwoColumnShoppingCartWithStickyPosition() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative">
        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-none pb-8 lg:text-start text-center">
          Checkout
        </h2>
        <div className="lg:flex grid xl:gap-16 gap-10">
          <div className="lg:w-[696px] w-full">
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Customer Information
              </h3>
              <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="justify-start items-center gap-1 inline-flex">
                        <span className="text-gray-600 text-sm font-medium leading-snug">
                          Email
                        </span>
                      </div>
                      <div className="w-full relative">
                        <input
                          type="text"
                          id="default-search"
                          className="w-full text-gray-900 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex
                                    shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-900 focus:outline-none"
                          placeholder="mail@pagedone.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="w-full box relative">
                      <div className="justify-start items-center gap-1 inline-flex mb-1.5">
                        <span className="font-medium text-sm text-gray-600 capitalize">
                          Phone Number
                        </span>
                      </div>
                      <div className="flex">
                        <div
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute  "
                        >
                          IN
                        </div>
                        <div
                          id="dropdown-1"
                          className="absolute top-16 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
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
                            className="w-full text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed block py-2.5 px-4 pl-16 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg  focus-within:outline-none"
                            placeholder="+91 000 000 0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-6 p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Shipping Address
              </h3>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Full Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                    placeholder="Metlinda Parker"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Street Address
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                    placeholder="3782 Pine Street, Draper"
                  />
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-sm font-medium leading-snug">
                        Country
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                      placeholder="North Macedonia"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-sm font-medium leading-snug">
                        State
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                      placeholder="Alabama"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-sm font-medium leading-snug">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                      placeholder="Alabama"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-sm font-medium leading-snug">
                        Zipcode
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Payment Method
              </h3>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="cursor-pointer group w-full p-3 border-transparent transition-all duration-700 ease-in-out bg-yellow-50 bg-transparent rounded-xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] justify-between items-center flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="w-[58px] h-10 pl-2.5 pr-[10.74px] pt-[8.38px] pb-[9.28px] bg-gray-900 rounded-md justify-center items-center flex"></div>
                      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <h5 className="text-gray-600 text-sm font-medium leading-snug">
                          Master Card
                        </h5>
                        <h6 className="text-gray-600 text-xs font-normal leading-5">
                          xxx - xxx - 6897
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer group w-full px-2.5 py-3 rounded-xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] bg-transparent border border-gray-300 transition-all duration-700 ease-in-out justify-between items-center gap-3 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="w-[58px] h-10 pl-2 pr-[10.33px] pt-[13.50px] pb-[13.47px] bg-blue-100 rounded-md justify-center items-center inline-flex"></div>
                      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <h5 className="text-gray-600 text-sm font-medium leading-snug">
                          Visa{" "}
                        </h5>
                        <h6 className="text-gray-600 text-xs font-normal leading-5">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="cursor-pointer group w-full px-2.5 py-3 rounded-xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] bg-transparent border border-gray-300 transition-all duration-700 ease-in-out justify-between items-center gap-3 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="w-[58px] h-10 pl-[19.25px] pr-[20.76px] pt-[9.55px] pb-[8.51px] bg-blue-100 rounded-md justify-center items-center flex"></div>
                      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <h5 className="text-gray-600 text-sm font-medium leading-snug">
                          Paypal
                        </h5>
                        <h6 className="text-gray-600 text-xs font-normal leading-5">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer group w-full px-2.5 py-3 rounded-xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] bg-transparent border border-gray-300 transition-all duration-700 ease-in-out justify-between items-center gap-3 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="w-[58px] h-10 pl-[8.33px] pr-[7.67px] pt-[11.67px] pb-[10.97px] bg-gray-100 rounded-lg justify-center items-center inline-flex"></div>
                      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <h5 className="text-gray-600 text-sm font-medium leading-snug">
                          Apple Pay
                        </h5>
                        <h6 className="text-gray-600 text-xs font-normal leading-5">
                          xxx - xxx - xxx
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-6 p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Payment Info
              </h3>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <h5 className="text-gray-600 text-sm font-medium leading-snug">
                      Card Number
                    </h5>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex placeholder-gray-900 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                    placeholder="xxx - xxx - 6897"
                  />
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h5 className="text-gray-600 text-sm font-medium leading-snug">
                        Expiry Date
                      </h5>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex placeholder-gray-400 focus:outline-none text-gray-900 text-base font-normal leading-relaxed"
                      placeholder="Month / Year"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h5 className="text-gray-600 text-sm font-medium leading-snug">
                        CVV
                      </h5>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex placeholder-gray-400 focus:outline-none text-gray-900  text-base font-normal leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Order Item
              </h3>
              <div className="w-full justify-start items-center gap-12 flex sm:flex-row flex-col">
                <img src="https://pagedone.io/asset/uploads/1712575276.png" />
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <div className="w-full justify-between items-center inline-flex pb-2">
                    <h4 className="text-gray-900 text-xl font-bold leading-loose">
                      Man T-shirt
                    </h4>
                    <h5 className="text-right text-emerald-900 text-lg font-semibold leading-8">
                      ₹2,000
                    </h5>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex pb-4">
                    <h6 className="text-gray-600 text-sm font-normal leading-snug">
                      Color :{" "}
                      <span className="text-gray-900 font-semibold">Black</span>
                    </h6>
                    <h6 className="text-gray-600 text-sm font-normal leading-snug">
                      Size :{" "}
                      <span className="text-gray-900 font-semibold">L</span>
                    </h6>
                    <h6 className="text-gray-600 text-sm font-normal leading-snug">
                      Material :{" "}
                      <span className="text-gray-900 font-semibold">
                        Cotton
                      </span>
                    </h6>
                  </div>
                  <div className="w-full justify-between items-end inline-flex pt-4 border-t border-gray-200">
                    <div className="flex items-center w-full mx-auto justify-start">
                      <button className="group rounded-l-lg px-4 py-3 border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                      <input
                        type="text"
                        className="border-y border-gray-300 outline-none text-gray-900 font-semibold text-lg w-14 px-6 placeholder:text-gray-900 text-center bg-transparent leading-snug h-12"
                      />
                      <button className="group rounded-r-lg px-4 py-3 border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                    </div>
                    <button className="group p-3 rounded-lg border border-gray-300 hover:border-transparent hover:bg-red-700 transition-all duration-700 ease-in-out justify-start items-start inline-flex"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[464px] w-full h-full block lg:overflow-y-visible translate-y-0 lg:top-[1.5rem] lg:sticky">
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex mb-6">
              <h3 className="text-gray-900 text-xl font-medium leading-loose">
                Checkout Receipt
              </h3>
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Subtotal:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      ₹600.00
                    </h6>
                  </div>
                  <div className="w-full justify-between items-center gap-6 inline-flex">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Delivery:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      ₹0.00
                    </h6>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-3.5 pt-3.5 flex border-t border-gray-200">
                  <div className="w-full justify-between items-center gap-6 inline-flex">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Total:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      ₹600.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h3 className="text-gray-900 text-xl font-medium leading-loose">
                Discount Code
              </h3>
              <div className="w-full justify-start items-start gap-5 flex">
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed"
                  placeholder="Enter Code here"
                />
                <button className="sm:mx-0 mx-auto px-5 py-2.5 hover:bg-indigo-800 transition-all duration-700 ease-in-out bg-indigo-600 rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Apply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
