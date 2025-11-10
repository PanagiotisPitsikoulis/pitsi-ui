export default function ShareModalWithCustomizingOptions() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-40"
            data-modal-target="modalBox-40"
            data-modal-toggle="modalBox-40"
          >
            Button
          </button>
          <div
            id="modalBox-40"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between gap-5">
                    <h6 className="mb-1 text-lg font-bold text-gray-900">
                      Spread URL
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-40"
                      data-modal-target="modalBox-40"
                    ></button>
                  </div>
                  <p className="mb-8 text-xs font-normal text-gray-500">
                    Set preferences before sending out your URL.
                  </p>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200"></span>
                    <div className="block">
                      <a
                        href="https://pagedone.io/"
                        className="mb-0.5 text-base font-medium text-black"
                      >
                        pagedone.com
                      </a>
                      <p className="text-xs font-normal text-gray-500">
                        Last Synced: 2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="mb-3.5 flex w-full items-center justify-between border-b border-gray-200 pb-3.5">
                    <div className="block">
                      <p className="mb-1 text-sm font-medium text-gray-900">
                        Link Access
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        Link grants viewing access
                      </p>
                    </div>
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-2"
                        className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full text-center text-xs font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:text-indigo-700"
                      >
                        Can View
                      </button>
                      <div
                        id="dropdown-2"
                        className="dropdown-menu open absolute top-full z-50 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-2"
                      >
                        <ul className="py-2">
                          <li>
                            <a
                              className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              can view
                            </a>
                          </li>
                          <li>
                            <a
                              className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              can Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <label className="relative mb-8 flex cursor-pointer items-center justify-between">
                    <div className="block">
                      <p className="mb-1 text-sm font-medium text-gray-900">
                        Download Access
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        Link grants downloading access
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        defaultChecked
                      />
                      <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-indigo-600 peer-focus:outline-0 after:absolute after:top-[2px] after:right-[18px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-transparent hover:bg-gray-300 hover:peer-checked:bg-indigo-700 dark:border-gray-600" />
                    </div>
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg border border-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-indigo-600 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-100"
                      data-pd-overlay="#modalBox-40"
                      data-modal-target="modalBox-40"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
