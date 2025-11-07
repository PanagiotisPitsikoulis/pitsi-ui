export default function CurrencyExchangeModalWithDropdown() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-13"
            data-modal-target="modalBox-13"
            data-modal-toggle="modalBox-13"
          >
            Currency Exchange
          </button>
          <div
            id="modalBox-13"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end mb-2 w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-13"
                    data-modal-target="modalBox-13"
                  ></button>
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium text-black mb-1.5">
                    Exchange
                  </p>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="dropdown relative inline-flex w-full">
                      <button
                        data-target="dropdown-13-1"
                        className="dropdown-toggle flex py-2.5 pl-4 pr-3.5 w-full rounded-lg border border-gray-200 justify-between items-center gap-2 "
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-normal text-gray-900 uppercase">
                            ETH
                          </span>
                        </div>
                      </button>
                      <div
                        id="dropdown-13-1"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 top-full w-40 mt-2 hidden"
                        aria-labelledby="dropdown-13-1"
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

                    <div className="dropdown relative inline-flex w-full">
                      <button
                        data-target="dropdown-13-2"
                        className="dropdown-toggle flex py-2.5 pl-4 pr-3.5 w-full rounded-lg border border-gray-200 justify-between items-center gap-2 "
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-normal text-gray-900 uppercase">
                            BTC
                          </span>
                        </div>
                      </button>
                      <div
                        id="dropdown-13-2"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 top-full w-40 mt-2 hidden"
                        aria-labelledby="dropdown-13-2"
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
                  </div>
                  <div className="relative mb-5">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Enter Amount
                    </label>
                    <input
                      type="text"
                      id="default-number"
                      className="block w-full px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Amount"
                      required
                    />
                  </div>
                  <div className="mb-2.5">
                    <p className="pb-1.5 text-xs font-medium text-black">
                      Connect Wallet
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="py-2.5 w-full pr-3.5 pl-4 rounded-lg border border-gray-200 flex items-center gap-1.5 text-sm font-normal text-gray-900 transition-all duration-300 hover:text-gray-900 hover:border-blue-700">
                        Family
                      </button>
                      <button className="py-2.5 w-full max-w-[150px] pr-3.5 pl-4 rounded-lg border border-gray-200 flex items-center gap-1.5 text-sm font-normal text-gray-500 transition-all duration-300 hover:text-gray-900 hover:border-blue-700">
                        Other
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 mb-8">
                    <p className="text-xs font-normal text-gray-500">
                      Don’t have a wallet yet?{" "}
                      <span className="text-blue-700">Create One</span>
                    </p>
                  </div>
                  <button
                    className="close-modal-button py-2.5 px-3.5 rounded-lg bg-blue-700 w-full text-center text-sm font-medium text-white"
                    data-pd-overlay="#modalBox-13"
                    data-modal-target="modalBox-13"
                  >
                    Confirm Exchange
                  </button>
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
