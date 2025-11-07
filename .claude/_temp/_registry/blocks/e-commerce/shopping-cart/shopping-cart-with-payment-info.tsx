export default function ShoppingCartWithPaymentInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="pb-8">
          <h2 className="text-black text-3xl font-semibold font-manrope leading-normal text-center">
            Shopping Cart
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="col-span-12 lg:col-span-8 w-full ">
            <div className="grid grid-cols-12 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-6">
                <h5 className="grow text-gray-500 text-base font-normal leading-relaxed">
                  Service
                </h5>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-6">
                  <div className="col-span-4 flex items-center justify-center">
                    <h5 className="w-52 text-center text-gray-500 text-base font-normal leading-relaxed">
                      Quantity
                    </h5>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <h5 className="w-28 text-center text-gray-500 text-base font-normal leading-relaxed">
                      Price
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col min-[500px]:items-center gap-4 pt-5">
              <div className="w-fit mx-auto p-6 bg-gray-50 rounded-xl justify-start items-center gap-2.5 flex"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-1">
                    <h6 className="text-black text-lg font-medium leading-8 md:text-start text-center">
                      Web Development
                    </h6>
                    <p className="md:w-64 w-full text-gray-500 text-xs font-normal leading-5 md:text-start text-center">
                      Web development encompasses the creation and maintenance
                      of websites{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center h-full max-md:mt-3">
                  <div className="md:justify-start justify-center items-center xl:gap-4 lg:gap-1 gap-4 flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-10 h-10 focus:outline-none text-gray-900 placeholder-gray-900 text-base font-medium leading-relaxed px-3.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center max-md:mt-3 h-full">
                  <h5 className="w-28 text-center text-gray-600 text-lg font-bold leading-8 md:text-right text-center">
                    $220.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col min-[500px]:items-center gap-4 pt-6">
              <div className="w-fit mx-auto p-6 bg-gray-50 rounded-xl justify-start items-center gap-2.5 flex"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-1">
                    <h6 className="text-black text-lg font-medium leading-8 md:text-start text-center">
                      Social media
                    </h6>
                    <p className="md:w-64 w-full text-gray-500 text-xs font-normal leading-5 md:text-start text-center">
                      Our comprehensive content creation and posting service for
                      three social media{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center h-full max-md:mt-3">
                  <div className="md:justify-start justify-center items-center xl:gap-4 lg:gap-1 gap-4 flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-10 h-10 focus:outline-none text-gray-900 placeholder-gray-900 text-base font-medium leading-relaxed px-3.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center max-md:mt-3 h-full">
                  <h5 className="w-28 text-center text-gray-600 text-lg font-bold leading-8 md:text-right text-center">
                    $150.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col min-[500px]:items-center gap-4 pt-6">
              <div className="w-fit mx-auto p-6 bg-gray-50 rounded-xl justify-start items-center gap-2.5 flex"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-1">
                    <h6 className="text-black text-lg font-medium leading-8 md:text-start text-center">
                      Web Hosting
                    </h6>
                    <p className="md:w-64 w-full text-gray-500 text-xs font-normal leading-5 md:text-start text-center">
                      Our complete web hosting package offers you a hassle-free
                      solution to ensure
                    </p>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center h-full max-md:mt-3">
                  <div className="md:justify-start justify-center items-center xl:gap-4 lg:gap-1 gap-4 flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-10 h-10 focus:outline-none text-gray-900 placeholder-gray-900 text-base font-medium leading-relaxed px-3.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center justify-center max-md:mt-3 h-full">
                  <h5 className="w-28 text-center text-gray-600 text-lg font-bold leading-8 md:text-right text-center">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex mt-8">
              <div className="w-full justify-between items-start gap-8 inline-flex">
                <h4 className="text-gray-400 text-xl font-normal leading-relaxed">
                  Subtotal
                </h4>
                <h4 className="text-center text-gray-900 text-xl font-semibold leading-relaxed">
                  $620.00
                </h4>
              </div>
              <div className="w-full justify-between items-start gap-8 inline-flex">
                <h4 className="text-gray-400 text-xl font-normal leading-relaxed">
                  Delivery Charge
                </h4>
                <h4 className="text-center text-gray-900 text-xl font-semibold leading-relaxed">
                  $30.00
                </h4>
              </div>
              <div className="w-full justify-between items-start gap-8 inline-flex">
                <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                  Total
                </h3>
                <h3 className="text-center text-indigo-600 text-2xl font-bold font-manrope leading-9">
                  $650.00
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 w-full p-6 bg-gray-900 rounded-xl flex-col justify-start items-center inline-flex">
            <div className="w-full justify-start items-start gap-8 inline-flex flex-col">
              <h4 className="text-white text-2xl font-semibold font-manrope leading-9">
                Payment Info
              </h4>
              <div className="w-full justify-start items-start gap-8 flex flex-col">
                <div className="w-full justify-start items-start gap-5 flex flex-col">
                  <span className="w-full text-sm text-gray-400 font-medium leading-snug">
                    Payment Method:
                  </span>
                  <div className="w-full flex xl:gap-10 lg:gap-7 gap-6">
                    <div className="w-full flex items-center">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-gray-200 checked:bg-transparent"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="grow text-white text-base font-medium leading-relaxed
                                      flex items-center cursor-pointer whitespace-nowrap"
                      >
                        <span className="border border-gray-200  rounded-full mr-4 w-6 h-6 " />
                        Credit Card
                      </label>
                    </div>
                    <div className="w-full flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-gray-200 checked:bg-transparent"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="grow text-white text-base font-medium leading-relaxed
                                      flex items-center cursor-pointer whitespace-nowrap"
                      >
                        <span className="border border-gray-200  rounded-full mr-4 w-6 h-6 " />
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <span className="text-gray-400 text-sm font-medium leading-snug">
                    Name On Card:
                  </span>
                  <input
                    type="text"
                    className="w-full text-base font-medium bg-transparent text-white leading-relaxed placeholder-white focus:outline-none pb-2 border-b border-white/20"
                    placeholder="Ronald Richards"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <span className="text-gray-400 text-sm font-medium leading-snug">
                    Card Number:
                  </span>
                  <input
                    type="text"
                    className="w-full text-base font-medium bg-transparent text-white leading-relaxed text-white leading-relaxed placeholder-white focus:outline-none pb-2 border-b border-white/20"
                    placeholder="2012   1203   2154   2000"
                  />
                </div>
                <div className="w-full  justify-start items-end gap-3.5 inline-flex">
                  <div className="w-full justify-start items-start gap-3.5 flex xl:flex-nowrap flex-wrap">
                    <div className="w-full grid gap-2">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        Expiry date
                      </span>
                      <div className="flex gap-3.5">
                        <div className="relative w-full xl:w-24">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                          <input
                            type="text"
                            className=" w-full text-white text-base font-medium leading-relaxed
                                      h-8 pb-2 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-white/20 justify-start items-center gap-2 inline-flex text-base focus:outline-none placeholder-white"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown1"
                            className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pl-2 "
                          ></button>
                          <div
                            id="dropdown1"
                            className="absolute top-10 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                          <input
                            type="text"
                            className="w-full text-white text-base font-medium leading-relaxed
                                      h-8 pb-2 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-white/20 justify-start items-center gap-2 inline-flex text-base focus:outline-none placeholder-white"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown2"
                            className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pl-2 "
                          ></button>
                          <div
                            id="dropdown2"
                            className="absolute top-10 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                      <div className="w-full flex-col justify-start items-start gap-2 flex">
                        <span className="text-gray-400 text-sm font-medium leading-snug">
                          CVV
                        </span>
                        <div className="relative w-full xl:w-28">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                          <input
                            type="text"
                            className=" w-full text-white text-base font-medium leading-relaxed
                                      h-8 pb-2 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-white/20 justify-start items-center gap-2 inline-flex text-base focus:outline-none placeholder-white"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown3"
                            className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pl-2 "
                          ></button>
                          <div
                            id="dropdown3"
                            className="absolute top-10 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                <div className="w-full flex items-center">
                  <input
                    id="radio-group"
                    type="radio"
                    name="radio1"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-gray-200 checked:bg-transparent"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio-group"
                    className="grow text-white text-sm font-normal leading-snug
                              flex items-center cursor-pointer whitespace-nowrap"
                  >
                    <span className="border border-gray-200  rounded-full mr-4 w-[22px] h-[22px] " />
                    Save Payment On File
                  </label>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
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
