export default function BillingInformationFormWithCardInfo() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-between items-center gap-4 flex sm:flex-row flex-col mb-12">
          <div className="flex-col justify-center sm:items-start items-center gap-2.5 flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Billing Information
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed sm:text-start text-center">
              Choose a payment option below and fill out the appropriate
              information
            </p>
          </div>
          <button className="sm:w-fit w-full px-7 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
            <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">
              Continue
            </span>
          </button>
        </div>
        <div className="tabs mb-8">
          <div className="block">
            <ul className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
              <li className="sm:w-fit w-full">
                <a
                  className="sm:w-fit w-full p-3.5 h-[52px] bg-white rounded-xl border border-gray-200 tab-active:border-indigo-600 flex justify-center items-center gap-2 text-sm font-medium leading-6 inline-block active tablink tab-active:text-indigo-600 text-gray-900"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  <div className="p-1 rounded border border-gray-100 justify-center items-center flex"></div>
                  Credit Card
                </a>
              </li>
              <li className="sm:w-fit w-full">
                <a
                  className="p-3.5 h-[52px] bg-white rounded-xl border tab-active:border-indigo-600 border-gray-200 justify-center items-center gap-2 flex text-gray-900 text-sm font-medium leading-6
                      tablink tab-active:text-indigo-600"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Apple Pay
                </a>
              </li>
              <li className="sm:w-fit w-full">
                <a
                  className="p-3.5 h-[52px] bg-white rounded-xl border tab-active:border-indigo-600 border-gray-200 justify-center items-center gap-2 flex text-black text-sm font-medium leading-6 inline-block tablink tab-active:text-indigo-600"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  <div className="py-1 px-2.5 rounded border border-gray-100 justify-center items-center flex"></div>
                  Pay Pal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
              className="tabcontent"
            ></div>
            <div
              id="tabs-with-underline-2"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
              className="hidden tabcontent"
            ></div>
            <div
              id="tabs-with-underline-3"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
              className="hidden tabcontent"
            ></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full p-6 bg-white rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-medium leading-loose">
              Billing Address
            </h4>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="Kevin Patel"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="mail@pagedone.com"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Mobile Number 1
                    </span>
                  </div>
                  <div className="w-full flex relative items-center">
                    <button
                      id="dropdown-button"
                      data-target="dropdown-2"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-1.5 pr-1 pl-2.5 text-xs font-normal text-center text-gray-900 bg-transparent absolute"
                    >
                      IN
                    </button>
                    <div
                      id="dropdown-2"
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
                            IN
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            CA
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            FR
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-xs font-normal leading-normal block py-1.5 pr-2.5 pl-14 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                        placeholder="76532 25623"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Mobile Number 2
                    </span>
                  </div>
                  <div className="w-full flex relative items-center">
                    <button
                      id="dropdown-button"
                      data-target="dropdown-1"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-1.5 pr-1 pl-2.5 text-xs font-normal text-center text-gray-900 bg-transparent absolute"
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
                            IN
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            CA
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            FR
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-xs font-normal leading-normal block py-1.5 pr-2.5 pl-14 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="A - 1002 Alpha Plus, Raiya Telephone Exchange"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Country
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="block w-full px-2.5 py-1.5 text-xs font-normal leading-normal
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                       border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                      >
                        <option value={1}>India</option>
                        <option value={2} selected>
                          CANADA
                        </option>
                        <option value={3}>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      State
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="block w-full px-2.5 py-1.5 text-xs font-normal leading-normal
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                       border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                      >
                        <option value={1}>Gujrat</option>
                        <option value={2} selected>
                          Punjab
                        </option>
                        <option value={3}>Maharashtra</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="Rajkot"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit p-6 bg-white rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-medium leading-loose">
              Credit Card Info
            </h4>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full flex-col justify-start items-start gap-1 flex">
                <label
                  htmlFor=""
                  className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="Kevin Patel"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1 flex">
                <label
                  htmlFor=""
                  className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="0000 - 0000 - 0000 - 0000"
                />
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-xs font-normal leading-normal px-2.5 py-1.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Exp. Month
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="block w-full px-2.5 py-1.5 text-xs font-normal leading-normal
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                       border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                      >
                        <option value={1}>1</option>
                        <option value={2} selected>
                          2
                        </option>
                        <option value={3}>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Exp. Year
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="block w-full px-2.5 py-1.5 text-xs font-normal leading-normal
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                       border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                      >
                        <option value={1}>2015</option>
                        <option value={2} selected>
                          2016
                        </option>
                        <option value={3}>2017</option>
                      </select>
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
