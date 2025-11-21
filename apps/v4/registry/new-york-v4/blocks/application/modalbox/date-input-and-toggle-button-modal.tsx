export default function DateInputAndToggleButtonModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-39"
            data-modal-target="modalBox-39"
            data-modal-toggle="modalBox-39"
          >
            Button
          </button>
          <div
            id="modalBox-39"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <h6 className="mb-1 text-lg font-bold text-gray-900">
                      Manage Link
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-39"
                      data-modal-target="modalBox-39"
                    ></button>
                  </div>
                  <div className="relative mb-4 text-gray-500 focus-within:text-gray-900">
                    <label
                      htmlFor="date"
                      className="mb-1 text-xs font-medium text-gray-600"
                    >
                      Expiry Date
                    </label>
                    <div className="pointer-events-none absolute bottom-3.5 left-0 flex items-center pl-4"></div>
                    <input
                      type="text"
                      id="date"
                      className="block w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Monday , Jan 20"
                    />
                  </div>
                  <div className="mb-4 border-b border-gray-200 pb-4">
                    <p className="mb-1 text-xs font-medium text-gray-600">
                      Link uses
                    </p>
                    <div className="flex items-center gap-2.5">
                      <button className="rounded-lg border border-indigo-50 bg-indigo-50 p-1.5 text-xs font-medium text-indigo-600 transition-all duration-500 hover:border-indigo-50 hover:bg-indigo-50 hover:text-indigo-600">
                        No Limit
                      </button>
                      <button className="rounded-lg border border-gray-200 p-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-indigo-50 hover:bg-indigo-50 hover:text-indigo-600">
                        50
                      </button>
                      <button className="rounded-lg border border-gray-200 p-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-indigo-50 hover:bg-indigo-50 hover:text-indigo-600">
                        100
                      </button>
                      <button className="rounded-lg border border-gray-200 p-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-indigo-50 hover:bg-indigo-50 hover:text-indigo-600">
                        200
                      </button>
                      <button className="rounded-lg border border-gray-200 p-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-indigo-50 hover:bg-indigo-50 hover:text-indigo-600">
                        300
                      </button>
                    </div>
                  </div>
                  <label className="relative mb-3.5 flex cursor-pointer items-center justify-between">
                    <span className="text-sm font-medium text-black">
                      Temporary access
                    </span>
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-indigo-600 peer-focus:outline-0 after:absolute after:top-[2px] after:right-[18px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-transparent hover:bg-gray-300 hover:peer-checked:bg-indigo-700 dark:border-gray-600" />
                  </label>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Temporary access is often accompanied by restrictions or
                    limitations to ensure security, privacy, and compliance with
                    regulations. Once the designated period expires, access
                    rights are revoked.
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-39"
                      data-modal-target="modalBox-39"
                      className="close-modal-button rounded-lg border border-gray-200 px-9 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:border-gray-100 focus-within:bg-gray-100 focus-within:outline-0 hover:border-gray-100 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-39"
                      data-modal-target="modalBox-39"
                      className="close-modal-button rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-800 focus-within:outline-0 hover:bg-indigo-800"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
