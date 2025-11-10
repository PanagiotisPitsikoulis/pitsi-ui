export default function ShoppingCartWithSummary() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="font-manrope pb-8 text-center text-4xl leading-loose font-bold text-gray-900 lg:text-start">
          Shopping Cart
        </h2>
        <div className="flex w-full flex-col items-start justify-center gap-8 lg:flex-row">
          <div className="mx-auto inline-flex flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5">
            <img
              className="mx-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711968712.png"
            />
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <div className="inline-flex w-full items-center justify-between gap-4">
                <h5 className="text-lg leading-8 font-semibold text-gray-900">
                  Sunscreen &amp; Serum{" "}
                </h5>
                <h5 className="text-lg leading-8 font-medium text-gray-500">
                  ₹652.00
                </h5>
              </div>
              <div className="inline-flex w-full items-start justify-between">
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    #2564123450
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    100 ml
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="text-sm leading-snug font-medium text-gray-400">
                    4.5
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex h-full items-center">
                  <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                  <input
                    type="text"
                    className="h-12 w-full max-w-[63px] min-w-[50px] border-y border-gray-300 bg-transparent py-[13px] text-center text-sm leading-snug font-semibold text-gray-900 placeholder-gray-900 outline-none"
                  />
                  <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                </div>
                <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-2.5 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700"></button>
              </div>
            </div>
          </div>
          <div className="mx-auto inline-flex flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5">
            <img
              className="mx-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711968724.png"
            />
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <div className="inline-flex w-full items-center justify-between">
                <h5 className="text-lg leading-8 font-semibold text-gray-900">
                  C- Prime Serum
                </h5>
                <h5 className="text-lg leading-8 font-medium text-gray-500">
                  ₹400.00
                </h5>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-3.5">
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    #2564123450
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    250 ml
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="text-sm leading-snug font-medium text-gray-400">
                    3.2
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex h-full items-center">
                  <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                  <input
                    type="text"
                    className="h-12 w-full max-w-[63px] min-w-[50px] border-y border-gray-300 bg-transparent py-[13px] text-center text-sm leading-snug font-semibold text-gray-900 placeholder-gray-900 outline-none"
                  />
                  <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                </div>
                <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-2.5 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700"></button>
              </div>
            </div>
          </div>
          <div className="mx-auto inline-flex flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5">
            <img
              className="mx-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711968738.png"
            />
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <div className="inline-flex w-full items-center justify-between">
                <h5 className="text-lg leading-8 font-semibold text-gray-900">
                  Skincare Product
                </h5>
                <h5 className="text-lg leading-8 font-medium text-gray-500">
                  ₹799.00
                </h5>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-3.5">
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    #2564123450
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    500 ml
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="text-sm leading-snug font-medium text-gray-400">
                    4.5
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex h-full items-center">
                  <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                  <input
                    type="text"
                    className="h-12 w-full max-w-[63px] min-w-[50px] border-y border-gray-300 bg-transparent py-[13px] text-center text-sm leading-snug font-semibold text-gray-900 placeholder-gray-900 outline-none"
                  />
                  <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-3.5 py-3 transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                </div>
                <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-2.5 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 inline-flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 max-lg:mx-auto max-lg:flex max-lg:max-w-[384px] max-lg:items-center max-lg:justify-center">
          <div className="flex w-full flex-col items-end gap-8 max-lg:gap-5 lg:flex-row lg:justify-between">
            <div className="inline-flex w-full flex-col items-start justify-start">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <h6 className="text-sm leading-snug font-medium text-gray-400">
                      Coupon Code
                    </h6>
                  </div>
                  <div className="relative w-full">
                    <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                    <input
                      type="text"
                      className="block w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-base leading-relaxed font-normal text-gray-400 text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="X X X X - X X X X"
                    />
                    <button
                      id="dropdown-button"
                      data-target="dropdown"
                      className="dropdown-toggle absolute top-1 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 pl-2 text-center text-base font-medium text-gray-400"
                    ></button>
                    <div
                      id="dropdown"
                      className="open absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
            <button className="flex items-center justify-center rounded-xl bg-gray-900 px-10 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-800 max-lg:mx-auto max-lg:w-full">
              <span className="px-2.5 py-px text-base leading-relaxed font-semibold text-white">
                Apply
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-2.5 rounded-xl px-0.5">
            <div className="inline-flex w-full items-center justify-between">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Subtotal:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                ₹2000.00
              </h5>
            </div>
            <div className="inline-flex w-full items-center justify-between gap-6">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Delivery:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                ₹0.00
              </h5>
            </div>
            <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Tax:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                ₹20.00
              </h5>
            </div>
            <div className="inline-flex w-full items-center justify-between gap-6">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Total:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                ₹2020.00
              </h5>
            </div>
          </div>
        </div>
        <button className="mr-0 ml-auto flex items-center rounded-xl bg-gray-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-gray-800 max-lg:mx-auto max-lg:justify-center">
          <span className="px-2 text-lg leading-8 font-semibold text-white">
            Checkout
          </span>
        </button>
      </div>
    </section>
  )
}
