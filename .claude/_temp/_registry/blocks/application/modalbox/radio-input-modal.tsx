export default function RadioInputModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-33"
            data-modal-target="modalBox-33"
            data-modal-toggle="modalBox-33"
          >
            Change Theme
          </button>
          <div
            id="modalBox-33"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Mastering Appearance
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-33"
                      data-modal-target="modalBox-33"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Customize appearance refers to the ability to modify the
                    visual presentation or aesthetics of something.
                  </p>
                  <div className="flex gap-4 flex-col mb-5">
                    <div className="flex items-center">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex items-center cursor-pointer text-gray-900 text-sm font-normal whitespace-nowrap"
                      >
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 " />
                        Light Theme
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex items-center cursor-pointer text-gray-600 text-sm font-normal whitespace-nowrap"
                      >
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 " />
                        Dark Theme
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-33"
                      data-modal-target="modalBox-33"
                      className="close-modal-button py-2.5 px-9 rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-100 focus-within:border-indigo-100 hover:border-indigo-100 hover:bg-indigo-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-33"
                      data-modal-target="modalBox-33"
                      className="close-modal-button py-2.5 border border-indigo-600 px-10 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-800 hover:bg-indigo-800"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
