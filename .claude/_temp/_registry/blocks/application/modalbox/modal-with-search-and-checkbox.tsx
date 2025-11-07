export default function ModalWithSearchAndCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-37"
            data-modal-target="modalBox-37"
            data-modal-toggle="modalBox-37"
          >
            Button
          </button>
          <div
            id="modalBox-37"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-1">
                    <h6 className="text-lg font-bold text-gray-900 mb-1">
                      The Case for Adding
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-37"
                      data-modal-target="modalBox-37"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Adding a metro can have various benefits, including.
                  </p>
                  <div className="relative mb-4  text-gray-500 focus-within:text-gray-900 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Search name or email"
                    />
                  </div>
                  <ul className="flex flex-col gap-4">
                    <li className="pb-3 border-b border-gray-200 flex items-center justify-between">
                      <label
                        htmlFor="person-1"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777052.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-full mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-500"
                      />
                    </li>
                    <li className="pb-3 border-b border-gray-200 flex items-center justify-between">
                      <label
                        htmlFor="person-2"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777063.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-full mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-500"
                      />
                    </li>
                    <li className="pb-3 border-b border-gray-200 flex items-center justify-between">
                      <label
                        htmlFor="person-3"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777075.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-full mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-500"
                      />
                    </li>
                    <li className="pb-3 border-b border-gray-200 flex items-center justify-between">
                      <label
                        htmlFor="person-4"
                        className="flex items-center gap-3"
                      >
                        <img
                          src="https://pagedone.io/asset/uploads/1720777085.png"
                          className="object-cover"
                        />
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-full mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-500"
                      />
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
