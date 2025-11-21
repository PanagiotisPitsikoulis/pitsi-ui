export default function ModalWithSearch() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-31"
            data-modal-target="modalBox-31"
            data-modal-toggle="modalBox-31"
          >
            Select a Token
          </button>
          <div
            id="modalBox-31"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start rounded-2xl bg-gray-900 p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-white">
                      Select a Token
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-31"
                      data-modal-target="modalBox-31"
                    ></button>
                  </div>
                  <div className="relative mb-5 text-gray-500 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg bg-gray-800 py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-white placeholder-gray-300 shadow-xs focus:outline-none"
                      placeholder="Search name or mint address"
                    />
                  </div>
                  <div className="mb-5 block">
                    <p className="mb-3.5 text-sm font-medium text-white">
                      Popular tokens
                    </p>
                    <ul className="flex items-center gap-2.5">
                      <li className="cursor-pointer rounded-lg bg-gray-800 p-1.5 text-xs font-medium text-white transition-all duration-500 hover:bg-gray-700">
                        <a href="#" className="flex items-center gap-1.5">
                          USDT
                        </a>
                      </li>
                      <li className="cursor-pointer rounded-lg bg-gray-800 p-1.5 text-xs font-medium text-white transition-all duration-500 hover:bg-gray-700">
                        <a href="#" className="flex items-center gap-1.5">
                          KCS
                        </a>
                      </li>
                      <li className="cursor-pointer rounded-lg bg-gray-800 p-1.5 text-xs font-medium text-white transition-all duration-500 hover:bg-gray-700">
                        <a href="#" className="flex items-center gap-1.5">
                          BTC
                        </a>
                      </li>
                      <li className="cursor-pointer rounded-lg bg-gray-800 p-1.5 text-xs font-medium text-white transition-all duration-500 hover:bg-gray-700">
                        <a href="#" className="flex items-center gap-1.5">
                          BNB
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3.5 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Token</p>
                    <p className="text-sm font-medium text-white">Balance</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-center justify-between rounded-lg bg-gray-800 px-2.5 py-3">
                      <div className="flex items-center gap-2.5">
                        <p className="text-xs font-normal text-white">
                          BNB{" "}
                          <span className="text-gray-400"> (Binance Coin)</span>
                        </p>
                      </div>
                      <p className="text-xs font-normal text-gray-400">
                        15.90 BNB
                      </p>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-gray-800 px-2.5 py-3">
                      <div className="flex items-center gap-2.5">
                        <p className="text-xs font-normal text-white">
                          KCS <span className="text-gray-400">(Ku Coin)</span>
                        </p>
                      </div>
                      <p className="text-xs font-normal text-gray-400">
                        98.90 KCS
                      </p>
                    </li>
                    <li className="flex items-center justify-between rounded-lg bg-gray-800 px-2.5 py-3">
                      <div className="flex items-center gap-2.5">
                        <p className="text-xs font-normal text-white">
                          USDT{" "}
                          <span className="text-gray-400">(Tether Coin)</span>
                        </p>
                      </div>
                      <p className="text-xs font-normal text-gray-400">
                        15.90 BNB
                      </p>
                    </li>
                  </ul>
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
