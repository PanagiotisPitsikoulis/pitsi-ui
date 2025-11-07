export default function CurrencyConverterModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-30"
            data-modal-target="modalBox-30"
            data-modal-toggle="modalBox-30"
          >
            Swap
          </button>
          <div
            id="modalBox-30"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-gray-900 p-6 rounded-2xl">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-white ">
                      Swap
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-30"
                      data-modal-target="modalBox-30"
                    ></button>
                  </div>
                  <div className="flex flex-col gap-2.5 relative mb-5">
                    <div className="rounded-xl p-3 bg-gray-800 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-normal text-white">
                          From:
                        </span>
                        <span className="text-xs font-normal text-white">
                          Balance: 20,000.00
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="dropdown relative inline-flex w-max">
                          <button
                            data-target="dropdown-30-1"
                            className="dropdown-toggle flex py-2.5 w-full rounded-lg justify-between items-center gap-2 "
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-white uppercase">
                                ETH
                              </span>
                            </div>
                          </button>
                          <div
                            id="dropdown-30-1"
                            className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 top-full w-40 mt-2 hidden"
                            aria-labelledby="dropdown-30-1"
                          >
                            <ul className="py-2">
                              <li className="flex items-center gap-1.5 p-2.5">
                                <span className="text-sm font-normal text-gray-900 uppercase">
                                  ETH
                                </span>
                              </li>
                              <li className="flex items-center gap-1.5 p-2.5">
                                <span className="text-sm font-normal text-gray-900 uppercase">
                                  BTC
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-white">
                          2,621.75
                        </span>
                      </div>
                      <p className="text-xs font-normal text-white">
                        Tether USD
                      </p>
                    </div>
                    <div className="rounded-xl p-3 bg-gray-800 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-normal text-white">
                          To:
                        </span>
                        <span className="text-xs font-normal text-white">
                          Balance: 7,57
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="dropdown relative inline-flex w-max">
                          <button
                            data-target="dropdown-30-2"
                            className="dropdown-toggle flex py-2.5 w-full rounded-lg justify-between items-center gap-2 "
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-white uppercase">
                                BTC
                              </span>
                            </div>
                          </button>
                          <div
                            id="dropdown-30-2"
                            className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 top-full w-40 mt-2 hidden"
                            aria-labelledby="dropdown-30-2"
                          >
                            <ul className="py-2">
                              <li className="flex items-center gap-1.5 p-2.5">
                                <span className="text-sm font-normal text-gray-900 uppercase">
                                  ETH
                                </span>
                              </li>
                              <li className="flex items-center gap-1.5 p-2.5">
                                <span className="text-sm font-normal text-gray-900 uppercase">
                                  BTC
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-white">
                          3.78
                        </span>
                      </div>
                      <p className="text-xs font-normal text-white">
                        Binance Coin
                      </p>
                    </div>
                    <button className="absolute w-8 h-8 flex items-center justify-center rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"></button>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className="close-modal-button py-2.5 w-full text-center px-8 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-700 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-30"
                      data-modal-target="modalBox-30"
                    >
                      Swap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="backdrop"
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
