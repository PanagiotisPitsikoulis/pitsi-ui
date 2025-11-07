export default function ThreeColumnsShoppingCartWithCardDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="flex lg:flex-nowrap flex-wrap lg:gap-8 gap-10 justify-center items-center">
          <div className="w-96 flex-col justify-start items-start gap-8 inline-flex md:h-[662px]">
            <h3 className="text-black text-3xl font-semibold font-manrope leading-normal">
              Shopping Cart
            </h3>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full p-4 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-start items-center gap-5 inline-flex">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139673.png"
                    alt="Creamy lipsticks image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Creamy lipsticks
                    </h6>
                    <p className="text-black text-sm font-medium leading-snug">
                      $ 20.00
                    </p>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button></button>
                      <input
                        type="text"
                        className="w-6 h-6 focus:outline-none text-center rounded-full text-gray-900 placeholder-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 border border-gray-200 justify-center items-center flex"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-4 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-start items-center gap-5 inline-flex">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139685.png"
                    alt="Nail polish image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Azature Nail polish
                    </h6>
                    <p className="text-black text-sm font-medium leading-snug">
                      $ 30.00
                    </p>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button></button>
                      <input
                        type="text"
                        className="w-6 h-6 focus:outline-none text-center rounded-full text-gray-900 placeholder-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 border border-gray-200 justify-center items-center flex"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-4 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-start items-center gap-5 inline-flex">
                  <img
                    className="relative rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1712139696.png"
                    alt="Men Perfume image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Men Perfume
                    </h6>
                    <p className="text-black text-sm font-medium leading-snug">
                      $ 100.00
                    </p>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button></button>
                      <input
                        type="text"
                        className="w-6 h-6 focus:outline-none text-center rounded-full text-gray-900 placeholder-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 border border-gray-200 justify-center items-center flex"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-between items-start gap-6 inline-flex">
              <h3 className="text-gray-900 text-2xl font-medium font-manrope leading-9">
                Total
              </h3>
              <h4 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
                $150.00
              </h4>
            </div>
          </div>
          <div className="w-96 p-6 bg-gray-900 rounded-xl justify-start items-start gap-2.5 inline-flex md:h-[662px]">
            <div className="w-full flex-col justify-center items-start gap-8 inline-flex">
              <h4 className="text-white text-2xl font-semibold font-manrope leading-9">
                Address Details
              </h4>
              <div className="w-full flex-col justify-start items-start gap-20 flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h6 className="text-gray-500 text-xs font-medium leading-5">
                      Full name
                    </h6>
                    <input
                      type="text"
                      className="w-full pb-2 focus:outline-none border-b border-gray-700 text-white placeholder-white text-sm font-normal leading-snug bg-transparent"
                      placeholder="Ronald Richards"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h6 className="text-gray-500 text-xs font-medium leading-5">
                      Phone number
                    </h6>
                    <input
                      type="text"
                      className="w-full pb-2 focus:outline-none border-b border-gray-700 text-white placeholder-white text-sm font-normal leading-snug bg-transparent"
                      placeholder="+91 952 145 5214"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h6 className="text-gray-500 text-xs font-medium leading-5">
                      Email address
                    </h6>
                    <input
                      type="text"
                      className="w-full pb-2 focus:outline-none border-b border-gray-700 text-white placeholder-white text-sm font-normal leading-snug bg-transparent"
                      placeholder="Ronald Richards@gmail.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h6 className="text-gray-500 text-xs font-medium leading-5">
                      Promo Code
                    </h6>
                    <input
                      type="text"
                      className="w-full pb-2 focus:outline-none border-b border-gray-700 text-white placeholder-white text-sm font-normal leading-snug bg-transparent"
                    />
                  </div>
                  <div className="w-full justify-start items-start gap-6 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <h6 className="text-gray-500 text-xs font-medium leading-5">
                        State
                      </h6>
                      <div className="flex w-full">
                        <div className="relative w-full border-b border-gray-700 pb-2">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                          <input
                            type="text"
                            className="w-32 text-white text-sm font-normal leading-snug px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                            placeholder="Gujarat"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown"
                            className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 pr-1 text-base font-medium text-center text-gray-500 bg-transparent absolute right-0 top-0 "
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
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <h6 className="w-full text-gray-500 text-xs font-medium leading-5">
                        City
                      </h6>
                      <div className="flex w-full">
                        <div className="relative w-full border-b border-gray-700 pb-2">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                          <input
                            type="text"
                            className="w-32 text-white text-sm font-normal leading-snug px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                            placeholder="Rajkot"
                          />
                          <button
                            id="dropdown-button"
                            data-target="dropdown1"
                            className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 pr-1 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 "
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
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h6 className="text-gray-500 text-xs font-medium leading-5">
                      Address
                    </h6>
                    <div className="flex w-full">
                      <div className="relative w-full">
                        <div className="absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                        <input
                          type="text"
                          className="w-full text-white text-sm font-normal leading-snug pb-2 px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-gray-700 justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                          placeholder="Alpha Plus, Near Raiya Telephone."
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown2"
                          className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 px-4 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pl-2 "
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
          <div className="w-96 p-6 bg-gray-900 rounded-xl justify-start items-start gap-2.5 inline-flex md:h-[662px]">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <h3 className="text-white text-2xl font-semibold font-manrope leading-9">
                Card Details
              </h3>
              <img
                src="https://pagedone.io/asset/uploads/1712142351.png"
                alt="card image"
                className="rounded-xl object-cover"
              />
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-400 text-sm font-medium leading-snug">
                    Name on card
                  </h6>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-white text-base font-medium leading-relaxed bg-transparent placeholder-white pb-2 border-b border-white/20"
                    placeholder="Ronald Richards"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-400 text-sm font-medium leading-snug">
                    Card number
                  </h6>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-white text-base font-medium leading-relaxed bg-transparent placeholder-white pb-2 border-b border-white/20"
                    placeholder="1254   2154   5478   6215"
                  />
                </div>
                <div className="justify-start items-end gap-3.5 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <h6 className="text-gray-400 text-sm font-medium leading-snug">
                      Expiry date
                    </h6>
                    <div className="flex w-full relative">
                      <div className="relative w-full">
                        <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                        <input
                          type="text"
                          className="w-full text-white text-base font-medium leading-relaxed pb-2 px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-white/20 justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                          placeholder="MM"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown3"
                          className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pr-1 "
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
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="flex w-full relative">
                      <div className="relative w-full">
                        <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                        <input
                          type="text"
                          className="w-full text-white text-base font-medium leading-relaxed pb-2 px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-gray-700 justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                          placeholder="YYYY"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown4"
                          className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2 text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pr-1 "
                        ></button>
                        <div
                          id="dropdown4"
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-gray-400 text-sm font-medium leading-snug">
                      CVV
                    </div>
                    <div className="flex w-full relative">
                      <div className="relative w-full">
                        <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-50"></div>
                        <input
                          type="text"
                          className="w-full text-white text-base font-medium leading-relaxed pb-2 px-1 bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-b border-gray-700 justify-start items-center gap-2 inline-flex focus:outline-none placeholder-gray-50"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown5"
                          className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-2  text-base font-medium text-center text-gray-500 bg-transparent  absolute right-0 top-0 pr-1 "
                        ></button>
                        <div
                          id="dropdown5"
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
              <button className="w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Pay Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
