export default function OrderSummaryWithCheckout() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-11">
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <h2 className="text-black text-3xl font-semibold font-manrope leading-normal">
              Checkout
            </h2>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <h4 className="text-black text-xl font-semibold leading-loose">
                Customer Details
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        First Name
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="Sarah"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Last Name
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="Davis"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Email
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="w-full box relative gap-1.5 flex flex-col">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="font-medium text-sm text-gray-600 leading-snug">
                        Phone Number
                      </span>
                    </div>
                    <div className="flex">
                      <div
                        id="dropdown-button"
                        data-target="dropdown-1"
                        className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-3 pl-4 pr-2 text-base font-medium text-center text-gray-900 bg-transparent  absolute  "
                      >
                        IN
                      </div>
                      <div
                        id="dropdown-1"
                        className="absolute hidden top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
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
                          className="block w-full h-12 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed pl-[60px] pr-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none"
                          placeholder="00000 00000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <h4 className="text-black text-xl font-semibold leading-loose">
                Shipping Details
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <h6 className="text-gray-600 text-sm font-medium leading-snug">
                      Street Address
                    </h6>
                  </div>
                  <input
                    type="text"
                    className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                    placeholder="Alpha Plus A-1002, Raiya Telephone Exchange"
                  />
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Postal Code
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        City
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Country
                      </h6>
                    </div>
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                      <input
                        type="text"
                        className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg"
                        placeholder="India"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown"
                        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-5 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                      ></button>
                      <div
                        id="dropdown"
                        className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <h4 className="text-black text-xl font-semibold leading-loose">
                Payment Method
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-start items-start xl:gap-6 lg:gap-4 gap-6 grid sm:grid-cols-3 grid-cols-1">
                  <div className="px-4 py-2.5 bg-gray-100 rounded-lg w-full flex items-center ">
                    <input
                      id="radio_1"
                      type="radio"
                      name="radio"
                      className="hidden sr-only peer"
                    />
                    <label
                      htmlFor="radio_1"
                      className="py-[1px] text-gray-400 text-base font-normal leading-6 w-full flex items-center cursor-pointer bg-transparent"
                    >
                      <span className="w-4 h-4 mr-2 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      Paypal
                    </label>
                  </div>
                  <div className="px-4 py-2.5 bg-gray-100 rounded-lg w-full flex items-center ">
                    <input
                      id="radio_2"
                      type="radio"
                      name="radio"
                      className="hidden sr-only peer"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_2"
                      className="py-[1px] text-gray-400 text-base font-normal leading-6 w-full flex items-center cursor-pointer bg-transparent whitespace-nowrap"
                    >
                      <span className="w-4 h-4 mr-2 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      Credit Card
                    </label>
                  </div>
                  <div className="px-4 py-2.5 bg-gray-100 rounded-lg w-full flex items-center ">
                    <input
                      id="radio_3"
                      type="radio"
                      name="radio"
                      className="hidden sr-only peer"
                    />
                    <label
                      htmlFor="radio_3"
                      className="py-[1px] text-gray-400 text-base font-normal leading-6 w-full flex items-center cursor-pointer bg-transparent"
                    >
                      <span className="w-4 h-4 mr-2 rounded-full border border-indigo-600 checked:border-indigo-600" />
                      COD
                    </label>
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="xl:w-80 lg:w-72 w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Caed Number
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="xxxx xxxx xxxx 4568"
                    />
                  </div>
                  <div className="xl:w-28 lg:w-32 w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        Expiry Date
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                      placeholder="08/2027"
                    />
                  </div>
                  <div className="xl:w-28 lg:w-32 w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-snug">
                        CVV
                      </h6>
                    </div>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 border-l border-gray-200 flex-col justify-start items-start gap-11 inline-flex">
            <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
              Order Summary
            </h3>
            <div className="w-full justify-start items-center sm:gap-6 gap-4 flex sm:flex-row flex-col">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1715252065.png"
                alt="Perfume image"
              />
              <div className="w-full flex-col justify-start sm:items-start items-center sm:gap-5 gap-4 inline-flex">
                <div className="w-full flex-col justify-start sm:items-start items-center gap-3 flex">
                  <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                    <h5 className="text-black text-lg font-medium leading-8">
                      Eau De Perfume for Men
                    </h5>
                    <button className="p-1 hover:bg-red-50 transition-all duration-700 ease-in-out"></button>
                  </div>
                  <h4 className="text-black text-xl font-semibold leading-loose">
                    $10.68
                  </h4>
                </div>
                <div className="justify-start items-center gap-3.5 flex">
                  <button className="p-[9px] bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"></button>
                  <input
                    type="text"
                    className="w-[9px] h-[30px] text-black text-lg font-medium leading-8"
                  />
                  <button className="p-[9px] bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"></button>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center sm:gap-6 gap-4 flex sm:flex-row flex-col pb-11 border-b border-gray-200">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1715252079.png"
                alt="Makeup Kit"
              />
              <div className="w-full flex-col justify-start sm:items-start items-center sm:gap-5 gap-4 inline-flex">
                <div className="w-full flex-col justify-start sm:items-start items-center gap-3 flex">
                  <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                    <h5 className="text-black text-lg font-medium leading-8">
                      NARS Makeup Kit
                    </h5>
                    <button className="p-1 hover:bg-red-50 transition-all duration-700 ease-in-out"></button>
                  </div>
                  <h4 className="text-black text-xl font-semibold leading-loose">
                    $80.00
                  </h4>
                </div>
                <div className="justify-start items-center gap-3.5 inline-flex">
                  <button className="p-[9px] bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"></button>
                  <input
                    type="text"
                    className="w-[9px] h-[30px] text-black text-lg font-medium leading-8"
                  />
                  <button className="p-[9px] bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"></button>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-center items-start gap-6 flex pb-11 border-b border-gray-200">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <h6 className="text-gray-600 text-sm font-medium leading-snug">
                  Discount Code
                </h6>
                <input
                  type="text"
                  className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 bg-gray-100 rounded-lg"
                  placeholder="Davis"
                />
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Apply
                </span>
              </button>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                <div className="w-full pb-6 flex-col justify-start items-start gap-6 flex">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-8">
                      Subtotal
                    </h5>
                    <h4 className="text-right text-gray-500 text-xl font-semibold leading-loose">
                      $90.68
                    </h4>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="w-[181px] text-gray-500 text-lg font-normal leading-8">
                      Shipping Charge
                    </h5>
                    <h4 className="text-right text-gray-500 text-xl font-semibold leading-loose">
                      $08.00
                    </h4>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-8">
                      Taxes
                    </h5>
                    <h4 className="text-right text-gray-500 text-xl font-semibold leading-loose">
                      $22.00
                    </h4>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-8">
                      Discount
                    </h5>
                    <h4 className="text-right text-gray-500 text-xl font-semibold leading-loose">
                      $12.00
                    </h4>
                  </div>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Total
                  </h4>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $108.68
                  </h4>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Check Out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
