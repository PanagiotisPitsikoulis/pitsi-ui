export default function ThreeColumnsShoppingCartWithCardDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:gap-8">
          <div className="inline-flex w-96 flex-col items-start justify-start gap-8 md:h-[662px]">
            <h3 className="font-manrope text-3xl leading-normal font-semibold text-black">
              Shopping Cart
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-4">
                <div className="inline-flex w-full items-center justify-start gap-5">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139673.png"
                    alt="Creamy lipsticks image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Creamy lipsticks
                    </h6>
                    <p className="text-sm leading-snug font-medium text-black">
                      $ 20.00
                    </p>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button></button>
                      <input
                        type="text"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-4">
                <div className="inline-flex w-full items-center justify-start gap-5">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139685.png"
                    alt="Nail polish image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Azature Nail polish
                    </h6>
                    <p className="text-sm leading-snug font-medium text-black">
                      $ 30.00
                    </p>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button></button>
                      <input
                        type="text"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-4">
                <div className="inline-flex w-full items-center justify-start gap-5">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139696.png"
                    alt="Men Perfume image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Men Perfume
                    </h6>
                    <p className="text-sm leading-snug font-medium text-black">
                      $ 100.00
                    </p>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button></button>
                      <input
                        type="text"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-6">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-900">
                Total
              </h3>
              <h4 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                $150.00
              </h4>
            </div>
          </div>
          <div className="inline-flex w-96 items-start justify-start gap-2.5 rounded-xl bg-gray-900 p-6 md:h-[662px]">
            <div className="inline-flex w-full flex-col items-start justify-center gap-8">
              <h4 className="font-manrope text-2xl leading-9 font-semibold text-white">
                Address Details
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-20">
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h6 className="text-xs leading-5 font-medium text-gray-500">
                      Full name
                    </h6>
                    <input
                      type="text"
                      className="w-full border-b border-gray-700 bg-transparent pb-2 text-sm leading-snug font-normal text-white placeholder-white focus:outline-none"
                      placeholder="Ronald Richards"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h6 className="text-xs leading-5 font-medium text-gray-500">
                      Phone number
                    </h6>
                    <input
                      type="text"
                      className="w-full border-b border-gray-700 bg-transparent pb-2 text-sm leading-snug font-normal text-white placeholder-white focus:outline-none"
                      placeholder="+91 952 145 5214"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h6 className="text-xs leading-5 font-medium text-gray-500">
                      Email address
                    </h6>
                    <input
                      type="text"
                      className="w-full border-b border-gray-700 bg-transparent pb-2 text-sm leading-snug font-normal text-white placeholder-white focus:outline-none"
                      placeholder="Ronald Richards@gmail.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h6 className="text-xs leading-5 font-medium text-gray-500">
                      Promo Code
                    </h6>
                    <input
                      type="text"
                      className="w-full border-b border-gray-700 bg-transparent pb-2 text-sm leading-snug font-normal text-white placeholder-white focus:outline-none"
                    />
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-6">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                      <h6 className="text-xs leading-5 font-medium text-gray-500">
                        State
                      </h6>
                      <div className="flex w-full">
                        <div className="relative w-full border-b border-gray-700 pb-2">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                          <input
                            type="text"
                            className="inline-flex w-32 items-center justify-start gap-2 bg-transparent px-1 text-sm leading-snug font-normal text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                            placeholder="Gujarat"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown"
                            className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pr-1 text-center text-base font-medium text-gray-500"
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
                                  Gujarat
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  UP
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Bihar
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  MP
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                      <h6 className="w-full text-xs leading-5 font-medium text-gray-500">
                        City
                      </h6>
                      <div className="flex w-full">
                        <div className="relative w-full border-b border-gray-700 pb-2">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                          <input
                            type="text"
                            className="inline-flex w-32 items-center justify-start gap-2 bg-transparent px-1 text-sm leading-snug font-normal text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                            placeholder="Rajkot"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown1"
                            className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pr-1 text-center text-base font-medium text-gray-500"
                          ></button>
                          <div
                            id="dropdown1"
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
                                  Rajkot
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Morbi
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Gondal
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Talala
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h6 className="text-xs leading-5 font-medium text-gray-500">
                      Address
                    </h6>
                    <div className="flex w-full">
                      <div className="relative w-full">
                        <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-700 bg-transparent px-1 pb-2 text-sm leading-snug font-normal text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="Alpha Plus, Near Raiya Telephone."
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown2"
                          className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 pt-2 pl-2 text-center text-base font-medium text-gray-500"
                        ></button>
                        <div
                          id="dropdown2"
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
                                Alpha Plus, Near Raiya Telephone.
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Alpha Plus, Near Raiya Telephone.
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-96 items-start justify-start gap-2.5 rounded-xl bg-gray-900 p-6 md:h-[662px]">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <h3 className="font-manrope text-2xl leading-9 font-semibold text-white">
                Card Details
              </h3>
              <img
                src="https://pagedone.io/asset/uploads/1712142351.png"
                alt="card image"
                className="rounded-xl object-cover"
              />
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <h6 className="text-sm leading-snug font-medium text-gray-400">
                    Name on card
                  </h6>
                  <input
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white focus:outline-none"
                    placeholder="Ronald Richards"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <h6 className="text-sm leading-snug font-medium text-gray-400">
                    Card number
                  </h6>
                  <input
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent pb-2 text-base leading-relaxed font-medium text-white placeholder-white focus:outline-none"
                    placeholder="1254   2154   5478   6215"
                  />
                </div>
                <div className="inline-flex items-end justify-start gap-3.5">
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <h6 className="text-sm leading-snug font-medium text-gray-400">
                      Expiry date
                    </h6>
                    <div className="relative flex w-full">
                      <div className="relative w-full">
                        <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 border-b border-white/20 bg-transparent px-1 pb-2 text-base leading-relaxed font-medium text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="MM"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown3"
                          className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pr-1 text-center text-base font-medium text-gray-500"
                        ></button>
                        <div
                          id="dropdown3"
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
                                Jan
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Feb
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <div className="relative flex w-full">
                      <div className="relative w-full">
                        <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-700 bg-transparent px-1 pb-2 text-base leading-relaxed font-medium text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder="YYYY"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown4"
                          className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pr-1 text-center text-base font-medium text-gray-500"
                        ></button>
                        <div
                          id="dropdown4"
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-2">
                    <div className="text-sm leading-snug font-medium text-gray-400">
                      CVV
                    </div>
                    <div className="relative flex w-full">
                      <div className="relative w-full">
                        <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-50"></div>
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 border-b border-gray-700 bg-transparent px-1 pb-2 text-base leading-relaxed font-medium text-white placeholder-gray-50 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown5"
                          className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent pt-2 pr-1 text-center text-base font-medium text-gray-500"
                        ></button>
                        <div
                          id="dropdown5"
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
                                214
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                218
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Pay Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
