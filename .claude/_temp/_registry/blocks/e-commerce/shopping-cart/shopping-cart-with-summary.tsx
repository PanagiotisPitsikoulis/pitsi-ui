export default function ShoppingCartWithSummary() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-loose pb-8 lg:text-start text-center">
          Shopping Cart
        </h2>
        <div className="w-full justify-center items-start gap-8 flex lg:flex-row flex-col">
          <div className="p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex mx-auto">
            <img
              className="rounded-xl mx-auto object-cover"
              src="https://pagedone.io/asset/uploads/1711968712.png"
            />
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex gap-4">
                <h5 className="text-gray-900 text-lg font-semibold leading-8">
                  Sunscreen &amp; Serum{" "}
                </h5>
                <h5 className="text-gray-500 text-lg font-medium leading-8">
                  ₹652.00
                </h5>
              </div>
              <div className="w-full justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    #2564123450
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    100 ml
                  </h6>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <p className="text-gray-400 text-sm font-medium leading-snug">
                    4.5
                  </p>
                </div>
              </div>
              <div className="w-full justify-between items-center inline-flex">
                <div className="flex items-center h-full">
                  <button className="group rounded-l-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                  <input
                    type="text"
                    className="border-y border-gray-300 outline-none text-gray-900 text-sm font-semibold leading-snug w-full max-w-[63px] min-w-[50px] placeholder-gray-900 py-[13px] h-12 text-center bg-transparent"
                  />
                  <button className="group rounded-r-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                </div>
                <button className="group p-2.5 rounded-lg border border-gray-300 hover:border-transparent hover:bg-red-700 transition-all duration-700 ease-in-out justify-start items-start inline-flex"></button>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex mx-auto">
            <img
              className="rounded-xl mx-auto object-cover"
              src="https://pagedone.io/asset/uploads/1711968724.png"
            />
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h5 className="text-gray-900 text-lg font-semibold leading-8">
                  C- Prime Serum
                </h5>
                <h5 className="text-gray-500 text-lg font-medium leading-8">
                  ₹400.00
                </h5>
              </div>
              <div className="w-full justify-between items-start gap-3.5 inline-flex">
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    #2564123450
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    250 ml
                  </h6>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <p className="text-gray-400 text-sm font-medium leading-snug">
                    3.2
                  </p>
                </div>
              </div>
              <div className="w-full justify-between items-center inline-flex">
                <div className="flex items-center h-full">
                  <button className="group rounded-l-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                  <input
                    type="text"
                    className="border-y border-gray-300 h-12 outline-none text-gray-900 text-sm font-semibold leading-snug w-full max-w-[63px] min-w-[50px] placeholder-gray-900 py-[13px] text-center bg-transparent"
                  />
                  <button className="group rounded-r-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                </div>
                <button className="group p-2.5 rounded-lg border border-gray-300 hover:border-transparent hover:bg-red-700 transition-all duration-700 ease-in-out justify-start items-start inline-flex"></button>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex mx-auto">
            <img
              className="rounded-xl mx-auto object-cover"
              src="https://pagedone.io/asset/uploads/1711968738.png"
            />
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h5 className="text-gray-900 text-lg font-semibold leading-8">
                  Skincare Product
                </h5>
                <h5 className="text-gray-500 text-lg font-medium leading-8">
                  ₹799.00
                </h5>
              </div>
              <div className="w-full justify-between items-start gap-3.5 inline-flex">
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    #2564123450
                  </h6>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    500 ml
                  </h6>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <p className="text-gray-400 text-sm font-medium leading-snug">
                    4.5
                  </p>
                </div>
              </div>
              <div className="w-full justify-between items-center inline-flex">
                <div className="flex items-center h-full">
                  <button className="group rounded-l-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                  <input
                    type="text"
                    className="border-y border-gray-300 outline-none text-gray-900 text-sm font-semibold leading-snug w-full max-w-[63px] min-w-[50px] placeholder-gray-900 text-gray-900 py-[13px] h-12 text-center bg-transparent"
                  />
                  <button className="group rounded-r-lg px-3.5 py-3 border border-gray-300 flex items-center justify-center transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                </div>
                <button className="group p-2.5 rounded-lg border border-gray-300 hover:border-transparent hover:bg-red-700 transition-all duration-700 ease-in-out justify-start items-start inline-flex"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-lg:max-w-[384px] max-lg:mx-auto max-lg:items-center max-lg:justify-center max-lg:flex w-full my-8 p-5 bg-gray-50 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-full lg:justify-between items-end gap-8 max-lg:gap-5 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <h6 className="text-gray-400 text-sm font-medium leading-snug">
                      Coupon Code
                    </h6>
                  </div>
                  <div className="relative w-full ">
                    <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                    <input
                      type="text"
                      className="block w-full px-4 py-2.5 bg-transparent rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 text-gray-400 text-base font-normal leading-relaxed
                                      block w-full placeholder-gray-400 text-gray-900 focus:outline-none"
                      placeholder="X X X X - X X X X"
                    />
                    <button
                      id="dropdown-button"
                      data-target="dropdown"
                      className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-400 bg-transparent  absolute right-0 top-1 pl-2"
                    ></button>
                    <div
                      id="dropdown"
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
                            54320
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            0011
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            2574
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            1821
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="px-10 py-2.5 bg-gray-900 max-lg:w-full max-lg:mx-auto hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2.5 py-px text-white text-base font-semibold leading-relaxed">
                Apply
              </span>
            </button>
          </div>
          <div className="w-full px-0.5 rounded-xl flex-col justify-start items-center gap-2.5 flex">
            <div className="w-full justify-between items-center inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">
                Subtotal:
              </h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                ₹2000.00
              </h5>
            </div>
            <div className="w-full justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">
                Delivery:
              </h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                ₹0.00
              </h5>
            </div>
            <div className="w-full pb-4 border-b border-gray-200 justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">
                Tax:
              </h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                ₹20.00
              </h5>
            </div>
            <div className="w-full justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">
                Total:
              </h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                ₹2020.00
              </h5>
            </div>
          </div>
        </div>
        <button className="mr-0 ml-auto flex items-center max-lg:justify-center max-lg:mx-auto hover:bg-gray-800 transition-all duration-700 ease-in-out bg-gray-900 px-6 py-3 rounded-xl shadow">
          <span className="px-2 text-white text-lg font-semibold leading-8">
            Checkout
          </span>
        </button>
      </div>
    </section>
  );
}
