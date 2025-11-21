export default function CurrencyConverterModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-30"
            data-modal-target="modalBox-30"
            data-modal-toggle="modalBox-30"
          >
            Swap
          </button>
          <div
            id="modalBox-30"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start rounded-2xl bg-gray-900 p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-white">
                      Swap
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-30"
                      data-modal-target="modalBox-30"
                    ></button>
                  </div>
                  <div className="relative mb-5 flex flex-col gap-2.5">
                    <div className="flex flex-col gap-2 rounded-xl bg-gray-800 p-3">
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
                            className="dropdown-toggle flex w-full items-center justify-between gap-2 rounded-lg py-2.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-white uppercase">
                                ETH
                              </span>
                            </div>
                          </button>
                          <div
                            id="dropdown-30-1"
                            className="dropdown-menu absolute top-full z-10 mt-2 hidden w-40 rounded-xl bg-white shadow-lg"
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
                    <div className="flex flex-col gap-2 rounded-xl bg-gray-800 p-3">
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
                            className="dropdown-toggle flex w-full items-center justify-between gap-2 rounded-lg py-2.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-white uppercase">
                                BTC
                              </span>
                            </div>
                          </button>
                          <div
                            id="dropdown-30-2"
                            className="dropdown-menu absolute top-full z-10 mt-2 hidden w-40 rounded-xl bg-white shadow-lg"
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
                    <button className="group absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"></button>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-8 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-700 focus-within:outline-0 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
