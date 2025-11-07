export default function ShareModalWithInputAndCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-25"
            data-modal-target="modalBox-25"
            data-modal-toggle="modalBox-25"
          >
            Share
          </button>
          <div
            id="modalBox-25"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-8">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Share the Document
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-25"
                      data-modal-target="modalBox-25"
                    ></button>
                  </div>
                  <div className="relative mb-4">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Share this document
                    </label>
                    <div className="rounded-lg py-2.5 pr-3.5 pl-4 border border-gray-200 text-sm font-normal text-blue-500 select-all mb-1">
                      https//.pagedone.io / blog
                    </div>
                    <p className="text-xs font-normal text-gray-400 text-right">
                      Anyone with this can
                    </p>
                  </div>
                  <div className="relative mb-4">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Send document via email
                    </label>
                    <div className="rounded-lg border border-gray-200 p-1  min-h-[42px]">
                      <button
                        className="py-2 px-2.5 rounded flex items-center justify-between bg-gray-200"
                        role="alert"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-normal text-black">
                          John smith
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="block mb-5 white-check">
                    <p className="text-xs font-medium text-gray-600 mb-2.5">
                      Other options
                    </p>
                    <div className="flex items-center gap-4 mb-2.5">
                      <div className="flex items-center ">
                        <input
                          id="checkbox-download"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border cursor-pointer border-blue-500  rounded-md mr-2 hover:border-blue-500 hover:bg-blue-500 checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-500 "
                          defaultChecked
                        />
                        <label
                          htmlFor="checkbox-download"
                          className="text-sm whitespace-nowrap font-norma cursor-pointer text-gray-600"
                        >
                          Download the file
                        </label>
                      </div>
                      <div className="flex items-center ">
                        <input
                          id="checkbox-download-original"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border cursor-pointer border-blue-500  rounded-md mr-2 hover:border-blue-500 hover:bg-blue-500 checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-500"
                        />
                        <label
                          htmlFor="checkbox-download-original"
                          className="text-sm font-norma cursor-pointer whitespace-nowrap text-gray-600"
                        >
                          Download original documents
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <input
                        id="checkbox-print"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-blue-500  rounded-md mr-2 hover:border-blue-500 hover:bg-blue-500 checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-500"
                      />
                      <label
                        htmlFor="checkbox-print"
                        className="text-sm font-norma cursor-pointer text-gray-600"
                      >
                        Print
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg transition-all duration-500 border border-blue-600 hover:bg-blue-50 text-sm font-medium text-blue-600 close-modal-button"
                      data-pd-overlay="#modalBox-25"
                      data-modal-target="modalBox-25"
                    >
                      Cancel
                    </button>
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg transition-all duration-500 bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white close-modal-button"
                      data-pd-overlay="#modalBox-25"
                      data-modal-target="modalBox-25"
                    >
                      Update
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
