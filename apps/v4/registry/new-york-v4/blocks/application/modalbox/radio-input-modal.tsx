export default function RadioInputModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-33"
            data-modal-target="modalBox-33"
            data-modal-toggle="modalBox-33"
          >
            Change Theme
          </button>
          <div
            id="modalBox-33"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Mastering Appearance
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-33"
                      data-modal-target="modalBox-33"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Customize appearance refers to the ability to modify the
                    visual presentation or aesthetics of something.
                  </p>
                  <div className="mb-5 flex flex-col gap-4">
                    <div className="flex items-center">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex cursor-pointer items-center text-sm font-normal whitespace-nowrap text-gray-900"
                      >
                        <span className="mr-2 h-4 w-4 rounded-full border border-gray-300" />
                        Light Theme
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex cursor-pointer items-center text-sm font-normal whitespace-nowrap text-gray-600"
                      >
                        <span className="mr-2 h-4 w-4 rounded-full border border-gray-300" />
                        Dark Theme
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-33"
                      data-modal-target="modalBox-33"
                      className="close-modal-button rounded-lg border border-indigo-600 px-9 py-2.5 text-sm font-medium text-indigo-600 transition-all duration-500 focus-within:border-indigo-100 focus-within:bg-indigo-100 focus-within:outline-0 hover:border-indigo-100 hover:bg-indigo-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-33"
                      data-modal-target="modalBox-33"
                      className="close-modal-button rounded-lg border border-indigo-600 bg-indigo-600 px-10 py-2.5 text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-800 focus-within:outline-0 hover:bg-indigo-800"
                    >
                      Save
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
