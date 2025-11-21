export default function CurrencyExchangeModalWithDropdown() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-13"
            data-modal-target="modalBox-13"
            data-modal-toggle="modalBox-13"
          >
            Currency Exchange
          </button>
          <div
            id="modalBox-13"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="mb-2 flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-13"
                    data-modal-target="modalBox-13"
                  ></button>
                </div>
                <div className="w-full">
                  <p className="mb-1.5 text-xs font-medium text-black">
                    Exchange
                  </p>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="dropdown relative inline-flex w-full">
                      <button
                        data-target="dropdown-13-1"
                        className="dropdown-toggle flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-normal text-gray-900 uppercase">
                            ETH
                          </span>
                        </div>
                      </button>
                      <div
                        id="dropdown-13-1"
                        className="dropdown-menu absolute top-full z-10 mt-2 hidden w-40 rounded-xl bg-white shadow-lg"
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
                        className="dropdown-toggle flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-normal text-gray-900 uppercase">
                            BTC
                          </span>
                        </div>
                      </button>
                      <div
                        id="dropdown-13-2"
                        className="dropdown-menu absolute top-full z-10 mt-2 hidden w-40 rounded-xl bg-white shadow-lg"
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
                    <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                      Enter Amount
                    </label>
                    <input
                      type="text"
                      id="default-number"
                      className="block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Amount"
                      required
                    />
                  </div>
                  <div className="mb-2.5">
                    <p className="pb-1.5 text-xs font-medium text-black">
                      Connect Wallet
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="flex w-full items-center gap-1.5 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4 text-sm font-normal text-gray-900 transition-all duration-300 hover:border-blue-700 hover:text-gray-900">
                        Family
                      </button>
                      <button className="flex w-full max-w-[150px] items-center gap-1.5 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4 text-sm font-normal text-gray-500 transition-all duration-300 hover:border-blue-700 hover:text-gray-900">
                        Other
                      </button>
                    </div>
                  </div>
                  <div className="mb-8 flex items-center justify-center gap-1.5">
                    <p className="text-xs font-normal text-gray-500">
                      Don’t have a wallet yet?{" "}
                      <span className="text-blue-700">Create One</span>
                    </p>
                  </div>
                  <button
                    className="close-modal-button w-full rounded-lg bg-blue-700 px-3.5 py-2.5 text-center text-sm font-medium text-white"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
