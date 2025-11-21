export default function ShareModalWithInputAndCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-25"
            data-modal-target="modalBox-25"
            data-modal-toggle="modalBox-25"
          >
            Share
          </button>
          <div
            id="modalBox-25"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-8 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Share the Document
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-25"
                      data-modal-target="modalBox-25"
                    ></button>
                  </div>
                  <div className="relative mb-4">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Share this document
                    </label>
                    <div className="mb-1 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4 text-sm font-normal text-blue-500 select-all">
                      https//.pagedone.io / blog
                    </div>
                    <p className="text-right text-xs font-normal text-gray-400">
                      Anyone with this can
                    </p>
                  </div>
                  <div className="relative mb-4">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Send document via email
                    </label>
                    <div className="min-h-[42px] rounded-lg border border-gray-200 p-1">
                      <button
                        className="flex items-center justify-between rounded bg-gray-200 px-2.5 py-2"
                        role="alert"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-normal text-black">
                          John smith
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="white-check mb-5 block">
                    <p className="mb-2.5 text-xs font-medium text-gray-600">
                      Other options
                    </p>
                    <div className="mb-2.5 flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-download"
                          type="checkbox"
                          className="checked:bg-primary hover:bg-primary mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-500 checked:border-blue-500 checked:bg-center checked:bg-no-repeat hover:border-blue-500"
                          defaultChecked
                        />
                        <label
                          htmlFor="checkbox-download"
                          className="font-norma cursor-pointer text-sm whitespace-nowrap text-gray-600"
                        >
                          Download the file
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-download-original"
                          type="checkbox"
                          className="checked:bg-primary hover:bg-primary mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-500 checked:border-blue-500 checked:bg-center checked:bg-no-repeat hover:border-blue-500"
                        />
                        <label
                          htmlFor="checkbox-download-original"
                          className="font-norma cursor-pointer text-sm whitespace-nowrap text-gray-600"
                        >
                          Download original documents
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checkbox-print"
                        type="checkbox"
                        className="checked:bg-primary hover:bg-primary mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-500 checked:border-blue-500 checked:bg-center checked:bg-no-repeat hover:border-blue-500"
                      />
                      <label
                        htmlFor="checkbox-print"
                        className="font-norma cursor-pointer text-sm text-gray-600"
                      >
                        Print
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg border border-blue-600 px-3.5 py-2.5 text-center text-sm font-medium text-blue-600 transition-all duration-500 hover:bg-blue-50"
                      data-pd-overlay="#modalBox-25"
                      data-modal-target="modalBox-25"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 hover:bg-blue-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
