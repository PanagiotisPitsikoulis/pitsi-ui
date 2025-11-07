export default function ShareModalWithCustomizingOptions() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-40"
            data-modal-target="modalBox-40"
            data-modal-toggle="modalBox-40"
          >
            Button
          </button>
          <div
            id="modalBox-40"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-1">
                    <h6 className="text-lg font-bold text-gray-900 mb-1">
                      Spread URL
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-40"
                      data-modal-target="modalBox-40"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-8">
                    Set preferences before sending out your URL.
                  </p>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-11 h-11 flex items-center justify-center border border-gray-200 rounded-md"></span>
                    <div className="block">
                      <a
                        href="https://pagedone.io/"
                        className="text-base font-medium text-black mb-0.5"
                      >
                        pagedone.com
                      </a>
                      <p className="text-xs font-normal text-gray-500">
                        Last Synced: 2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center w-full justify-between pb-3.5 border-b border-gray-200 mb-3.5">
                    <div className="block">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        Link Access
                      </p>
                      <p className="text-xs font-normal text-gray-500 ">
                        Link grants viewing access
                      </p>
                    </div>
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-2"
                        className="dropdown-toggle inline-flex justify-center items-center gap-1.5  text-xs text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700 "
                      >
                        Can View
                      </button>
                      <div
                        id="dropdown-2"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-50 top-full w-max mt-2 open hidden"
                        aria-labelledby="dropdown-2"
                      >
                        <ul className="py-2">
                          <li>
                            <a
                              className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
                              href="javascript:;"
                            >
                              can view
                            </a>
                          </li>
                          <li>
                            <a
                              className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
                              href="javascript:;"
                            >
                              can Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <label className="relative flex items-center justify-between mb-8 cursor-pointer">
                    <div className="block">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        Download Access
                      </p>
                      <p className="text-xs font-normal text-gray-500 ">
                        Link grants downloading access
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:right-[18px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 " />
                    </div>
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg border border-indigo-600 w-full text-center text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-100 hover:border-indigo-100"
                      data-pd-overlay="#modalBox-40"
                      data-modal-target="modalBox-40"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg w-full text-center bg-indigo-600 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-40"
                      data-modal-target="modalBox-40"
                    >
                      Share
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
