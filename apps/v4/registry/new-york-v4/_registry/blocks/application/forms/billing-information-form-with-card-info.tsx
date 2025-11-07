export default function BillingInformationFormWithCardInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-12 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center justify-center gap-2.5 sm:items-start">
            <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
              Billing Information
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 sm:text-start">
              Choose a payment option below and fill out the appropriate
              information
            </p>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
            <span className="px-3.5 text-center text-lg leading-8 font-semibold text-white">
              Continue
            </span>
          </button>
        </div>
        <div className="tabs mb-8">
          <div className="block">
            <ul className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
              <li className="w-full sm:w-fit">
                <a
                  className="tab-active:border-indigo-600 active tablink tab-active:text-indigo-600 flex inline-block h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-3.5 text-sm leading-6 font-medium text-gray-900 sm:w-fit"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  <div className="flex items-center justify-center rounded border border-gray-100 p-1"></div>
                  Credit Card
                </a>
              </li>
              <li className="w-full sm:w-fit">
                <a
                  className="tab-active:border-indigo-600 tablink tab-active:text-indigo-600 flex h-[52px] items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-3.5 text-sm leading-6 font-medium text-gray-900"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Apple Pay
                </a>
              </li>
              <li className="w-full sm:w-fit">
                <a
                  className="tab-active:border-indigo-600 tablink tab-active:text-indigo-600 flex inline-block h-[52px] items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-3.5 text-sm leading-6 font-medium text-black"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  <div className="flex items-center justify-center rounded border border-gray-100 px-2.5 py-1"></div>
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
              className="tabcontent hidden"
            ></div>
            <div
              id="tabs-with-underline-3"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
              className="tabcontent hidden"
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 bg-white p-6">
            <h4 className="text-xl leading-loose font-medium text-gray-900">
              Billing Address
            </h4>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Kevin Patel"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="mail@pagedone.com"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Mobile Number 1
                    </span>
                  </div>
                  <div className="relative flex w-full items-center">
                    <button
                      id="dropdown-button"
                      data-target="dropdown-2"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-1.5 pr-1 pl-2.5 text-center text-xs font-normal text-gray-900"
                    >
                      IN
                    </button>
                    <div
                      id="dropdown-2"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-1.5 pr-2.5 pl-14 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="76532 25623"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Mobile Number 2
                    </span>
                  </div>
                  <div className="relative flex w-full items-center">
                    <button
                      id="dropdown-button"
                      data-target="dropdown-1"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-1.5 pr-1 pl-2.5 text-center text-xs font-normal text-gray-900"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-1.5 pr-2.5 pl-14 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="A - 1002 Alpha Plus, Raiya Telephone Exchange"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Country
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-auto w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      State
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-auto w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Rajkot"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex h-fit w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 bg-white p-6">
            <h4 className="text-xl leading-loose font-medium text-gray-900">
              Credit Card Info
            </h4>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start gap-1">
                <label
                  htmlFor=""
                  className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Kevin Patel"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1">
                <label
                  htmlFor=""
                  className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="0000 - 0000 - 0000 - 0000"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Exp. Month
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-auto w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Exp. Year
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-auto w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
  )
}
