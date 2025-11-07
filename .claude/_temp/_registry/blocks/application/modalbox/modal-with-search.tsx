export default function ModalWithSearch() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-31"
            data-modal-target="modalBox-31"
            data-modal-toggle="modalBox-31"
          >
            Select a Token
          </button>
          <div
            id="modalBox-31"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-gray-900 p-6 rounded-2xl">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-white ">
                      Select a Token
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-31"
                      data-modal-target="modalBox-31"
                    ></button>
                  </div>
                  <div className="relative  text-gray-500 focus-within:text-gray-900 mb-5">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs text-white bg-gray-800 rounded-lg placeholder-gray-300 focus:outline-none leading-relaxed"
                      placeholder="Search name or mint address"
                    />
                  </div>
                  <div className="block mb-5">
                    <p className="text-sm font-medium text-white mb-3.5">
                      Popular tokens
                    </p>
                    <ul className="flex items-center gap-2.5">
                      <li className="p-1.5 rounded-lg  text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-500 cursor-pointer">
                        <a href="#" className="flex items-center gap-1.5 ">
                          USDT
                        </a>
                      </li>
                      <li className="p-1.5 rounded-lg  text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-500 cursor-pointer">
                        <a href="#" className="flex items-center gap-1.5">
                          KCS
                        </a>
                      </li>
                      <li className="p-1.5 rounded-lg  text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-500 cursor-pointer">
                        <a href="#" className="flex items-center gap-1.5">
                          BTC
                        </a>
                      </li>
                      <li className="p-1.5 rounded-lg  text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-500 cursor-pointer">
                        <a href="#" className="flex items-center gap-1.5">
                          BNB
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mb-3.5">
                    <p className="text-sm font-medium text-white">Token</p>
                    <p className="text-sm font-medium text-white">Balance</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li className="rounded-lg px-2.5 py-3 flex items-center justify-between bg-gray-800">
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
                    <li className="rounded-lg px-2.5 py-3 flex items-center justify-between bg-gray-800">
                      <div className="flex items-center gap-2.5">
                        <p className="text-xs font-normal text-white">
                          KCS <span className="text-gray-400">(Ku Coin)</span>
                        </p>
                      </div>
                      <p className="text-xs font-normal text-gray-400">
                        98.90 KCS
                      </p>
                    </li>
                    <li className="rounded-lg px-2.5 py-3 flex items-center justify-between bg-gray-800">
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
