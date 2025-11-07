export default function TwoColumnsShoppingCartWithBackgroundColor() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 mb-16">
          <div className="lg:col-span-5 col-span-12 w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-8 bg-gray-50 rounded-xl flex-col justify-start items-start gap-8 flex">
              <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                Billing Address
              </h3>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          Full Name
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                        placeholder="pagedone"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="justify-start items-center gap-1 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          Phone Number
                        </span>
                      </div>
                      <div className="w-full flex relative">
                        <button
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute  "
                        >
                          IN
                        </button>
                        <div
                          id="dropdown-1"
                          className="absolute top-10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
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
                            className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-sm font-normal leading-relaxed block py-2 px-4 pl-16 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-full"
                            placeholder="+91 000 000 0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          Address
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                        placeholder="pagedone"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            Country
                          </span>
                        </div>
                        <input
                          type="text"
                          className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            State
                          </span>
                        </div>
                        <input
                          type="text"
                          className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            City
                          </span>
                        </div>
                        <input
                          type="text"
                          className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                          placeholder="pagedone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            Zip / Postal Code
                          </span>
                        </div>
                        <input
                          type="text"
                          className="w-full px-3.5 py-2 bg-gray-50 focus:outline-none rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-900 text-sm font-normal leading-relaxed justify-start items-center gap-1.5 inline-flex "
                          placeholder="000 000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-end gap-5 inline-flex">
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="w-full flex-col justify-start items-start gap-1 flex">
                        <div className="w-full justify-start items-center gap-0.5 inline-flex">
                          <span className="text-gray-600 text-xs font-medium leading-5">
                            Select the Delivery Address
                          </span>
                        </div>
                        <div className="flex xl:flex-row lg:flex-col sm:flex-row flex-col gap-5 w-full">
                          <div className="w-full flex items-center ">
                            <input
                              id="radio_1"
                              type="radio"
                              name="radio"
                              className="hidden sr-only peer"
                              defaultChecked
                            />
                            <label
                              htmlFor="radio_1"
                              className="rounded-full border border-gray-300 text-gray-400 text-sm font-normal leading-snug px-4 py-2.5 w-full  flex items-center cursor-pointer bg-transparent"
                            >
                              <span className="w-4 h-4 mr-2 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
                              Home
                            </label>
                          </div>
                          <div className="w-full flex items-center ">
                            <input
                              id="radio_2"
                              type="radio"
                              name="radio"
                              className="hidden sr-only peer"
                            />
                            <label
                              htmlFor="radio_2"
                              className="rounded-full border-gray-300 text-gray-400 text-sm font-normal leading-snug px-4 py-2.5 w-full flex items-center cursor-pointer border bg-transparent"
                            >
                              <span className="w-4 h-4 mr-2 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
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
            <div className="w-full p-8 bg-gray-50 rounded-xl flex-col justify-start items-start gap-8 flex">
              <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                Payment Method
              </h3>
              <div className="w-full justify-start items-center gap-5 flex">
                <div className="w-full flex items-center ">
                  <input
                    id="radio_3"
                    type="radio"
                    name="radio1"
                    className="hidden sr-only peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_3"
                    className="text-gray-400 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-5 h-5 mr-1.5 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <input
                    id="radio_4"
                    type="radio"
                    name="radio1"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_4"
                    className="text-gray-400 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-5 h-5 mr-1.5 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <input
                    id="radio_5"
                    type="radio"
                    name="radio1"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_5"
                    className="text-gray-400 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-5 h-5 mr-1.5 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <input
                    id="radio_6"
                    type="radio"
                    name="radio1"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_6"
                    className="text-gray-400 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-5 h-5 mr-1.5 rounded-full border bg-green-50 border-green-700 checked:border-green-900" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 w-full p-8 bg-gray-50 rounded-xl flex-col justify-start items-start gap-8 inline-flex sticky">
            <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
              Your Order
            </h3>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full p-5 rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712056799.png"
                  />
                  <div className="w-full justify-between items-start flex">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-loose">
                          Men’s Nike Sport Shoes
                        </h4>
                        <h5 className="text-green-900 text-lg font-semibold leading-8">
                          $120
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-5 inline-flex">
                        <div className="w-28 flex-col justify-start items-start inline-flex">
                          <div className="w-28 flex-col justify-start items-start gap-1 flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Size
                                </span>
                              </div>
                              <div className="flex w-full">
                                <div className="relative w-full ">
                                  <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                  <input
                                    type="text"
                                    className="w-28 h-8 px-2.5 py-1.5 rounded-full bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex text-xs font-normal shadow-xs focus:outline-none text-gray-900 leading-none placeholder-gray-900"
                                  />
                                  <button
                                    id="dropdown-button"
                                    data-target="dropdown"
                                    className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                  ></button>
                                  <div
                                    id="dropdown"
                                    className="absolute top-9 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                        <div className="w-28 flex-col justify-start items-start inline-flex">
                          <div className="w-28 flex-col justify-start items-start gap-1 flex">
                            <div className="w-28 flex-col justify-start items-start gap-1 flex">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Quantity
                                </span>
                              </div>
                              <button className="w-28 h-8 px-2.5 py-1.5 bg-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-0.5 inline-flex">
                                <div className="w-20 bg-transparent pl-0.5 py-px justify-start items-center gap-0.5 flex">
                                  <input
                                    type="text"
                                    className="w-14 text-center bg-transparent focus:outline-none placeholder-gray-900 text-gray-900 text-xs font-normal leading-5"
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
                <div className="w-full p-5 rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-center items-center gap-5 flex sm:flex-row flex-col">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712056811.png"
                  />
                  <div className="w-full justify-between items-start flex">
                    <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-loose">
                          Girl’s Shoes
                        </h4>
                        <h5 className="text-green-900 text-lg font-semibold leading-8">
                          $100
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-5 inline-flex">
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Size
                                </span>
                              </div>
                              <div className="flex w-full">
                                <div className="relative w-full ">
                                  <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                  <input
                                    type="text"
                                    className="w-28 h-8 px-2.5 py-1.5 rounded-full bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex text-xs font-normal shadow-xs focus:outline-none text-gray-900 leading-none placeholder-gray-900"
                                  />
                                  <button
                                    id="dropdown-button"
                                    data-target="dropdown1"
                                    className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                  ></button>
                                  <div
                                    id="dropdown1"
                                    className="absolute top-9 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="flex-col justify-start items-start gap-1 flex">
                              <div className="justify-start items-center gap-0.5 inline-flex">
                                <span className="text-gray-600 text-xs font-medium leading-5">
                                  Quantity
                                </span>
                              </div>
                              <button className="w-28 h-8 px-2.5 py-1.5 text-gray-900 bg-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-0.5 inline-flex">
                                <div className="w-20 bg-transparent pl-0.5 py-px justify-start items-center gap-0.5 flex">
                                  <input
                                    type="text"
                                    className="w-14 text-center bg-transparent focus:outline-none placeholder-gray-900 text-gray-900 text-xs font-normal leading-5"
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
              <div className="w-full justify-start items-end gap-5 inline-flex">
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          Coupon Code
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent focus:outline-none border border-gray-300 justify-start items-center gap-1.5 inline-flex leading-snug"
                      />
                    </div>
                  </div>
                </div>
                <button className="px-3.5 py-2 bg-green-900 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                  <span className="px-1.5 py-px text-white text-sm font-medium leading-relaxed whitespace-nowrap">
                    Apply Code
                  </span>
                </button>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-between items-center inline-flex py-2">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Subtotal:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $220.00
                    </h6>
                  </div>
                  <div className="w-full justify-between items-center gap-6 inline-flex py-2">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Delivery:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $2.00
                    </h6>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start pt-3.5 flex border-t border-gray-300">
                  <div className="w-full justify-between items-center gap-6 inline-flex py-2">
                    <h6 className="text-gray-600 text-lg font-normal leading-8">
                      Total:
                    </h6>
                    <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $222.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-96 mx-auto px-6 py-3 hover:bg-green-800 transition-all duration-700 ease-in-out bg-green-900 rounded-full shadow justify-center items-center flex">
          <span className="px-2 text-white text-lg font-semibold leading-8">
            Place Order
          </span>
        </button>
      </div>
    </section>
  );
}
