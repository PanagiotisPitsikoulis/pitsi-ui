export default function ModalWithSearchAndCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-37"
            data-modal-target="modalBox-37"
            data-modal-toggle="modalBox-37"
          >
            Button
          </button>
          <div
            id="modalBox-37"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between gap-5">
                    <h6 className="mb-1 text-lg font-bold text-gray-900">
                      The Case for Adding
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-37"
                      data-modal-target="modalBox-37"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Adding a metro can have various benefits, including.
                  </p>
                  <div className="relative mb-4 text-gray-500 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Search name or email"
                    />
                  </div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <label
                        htmlFor="person-1"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777052.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Alex Johnson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            $95/mo
                          </p>
                        </div>
                      </label>
                      <input
                        id="person-1"
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-500 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <label
                        htmlFor="person-2"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777063.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Emma Davis
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            $85/mo
                          </p>
                        </div>
                      </label>
                      <input
                        id="person-2"
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-500 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <label
                        htmlFor="person-3"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777075.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            James Miller
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            $70/mo
                          </p>
                        </div>
                      </label>
                      <input
                        id="person-3"
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-500 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <label
                        htmlFor="person-4"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777085.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Olivia Carter
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            $95/mo
                          </p>
                        </div>
                      </label>
                      <input
                        id="person-4"
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-500 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
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
