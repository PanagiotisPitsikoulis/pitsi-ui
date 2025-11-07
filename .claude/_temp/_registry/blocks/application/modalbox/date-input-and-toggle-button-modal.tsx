export default function DateInputAndToggleButtonModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-39"
            data-modal-target="modalBox-39"
            data-modal-toggle="modalBox-39"
          >
            Button
          </button>
          <div
            id="modalBox-39"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-5">
                    <h6 className="text-lg font-bold text-gray-900 mb-1">
                      Manage Link
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-39"
                      data-modal-target="modalBox-39"
                    ></button>
                  </div>
                  <div className="relative mb-4  text-gray-500 focus-within:text-gray-900 ">
                    <label
                      htmlFor="date"
                      className="text-xs font-medium text-gray-600 mb-1"
                    >
                      Expiry Date
                    </label>
                    <div className="absolute bottom-3.5 left-0 flex items-center pl-4 pointer-events-none "></div>
                    <input
                      type="text"
                      id="date"
                      className="block w-full pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Monday , Jan 20"
                    />
                  </div>
                  <div className="border-b border-gray-200 mb-4 pb-4">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      Link uses
                    </p>
                    <div className="flex items-center gap-2.5">
                      <button className="rounded-lg p-1.5 border border-indigo-50 bg-indigo-50 text-xs font-medium text-indigo-600 transition-all duration-500 hover:bg-indigo-50 hover:border-indigo-50 hover:text-indigo-600">
                        No Limit
                      </button>
                      <button className="rounded-lg p-1.5 border border-gray-200 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:border-indigo-50 hover:text-indigo-600">
                        50
                      </button>
                      <button className="rounded-lg p-1.5 border border-gray-200 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:border-indigo-50 hover:text-indigo-600">
                        100
                      </button>
                      <button className="rounded-lg p-1.5 border border-gray-200 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:border-indigo-50 hover:text-indigo-600">
                        200
                      </button>
                      <button className="rounded-lg p-1.5 border border-gray-200 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:border-indigo-50 hover:text-indigo-600">
                        300
                      </button>
                    </div>
                  </div>
                  <label className="relative flex items-center justify-between mb-3.5 cursor-pointer">
                    <span className="text-sm font-medium text-black ">
                      Temporary access
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:right-[18px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 " />
                  </label>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Temporary access is often accompanied by restrictions or
                    limitations to ensure security, privacy, and compliance with
                    regulations. Once the designated period expires, access
                    rights are revoked.
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-39"
                      data-modal-target="modalBox-39"
                      className="close-modal-button py-2.5 px-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:outline-0 focus-within:bg-gray-100 focus-within:border-gray-100 hover:border-gray-100 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-39"
                      data-modal-target="modalBox-39"
                      className="close-modal-button py-2.5 border border-indigo-600 px-5 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-800 hover:bg-indigo-800"
                    >
                      Generate
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
