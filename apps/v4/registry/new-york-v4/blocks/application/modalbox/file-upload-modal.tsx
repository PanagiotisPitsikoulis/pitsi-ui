export default function FileUploadModal() {
  return (
    <section className="relative min-h-[800px] py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-5"
            data-modal-target="modalBox-5"
            data-modal-toggle="modalBox-5"
          >
            Upload File
          </button>
          <div
            id="modalBox-5"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Upload Files
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-5"
                      data-modal-target="modalBox-5"
                    ></button>
                  </div>
                  <p className="mb-8 text-xs font-normal text-gray-500">
                    Instantly add files with a simple upload process.
                  </p>
                  <div className="grid w-full">
                    <div className="mb-5 w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-9"
                      >
                        <div className="mb-3 flex items-center justify-center"></div>
                        <h2 className="mb-1 text-center text-xs leading-4 font-normal text-gray-400">
                          PNG, JPG or PDF, smaller than 15MB
                        </h2>
                        <h4 className="text-center text-sm leading-snug font-medium text-gray-900">
                          Drag and Drop your file here or
                        </h4>
                        <div className="relative flex items-center justify-center">
                          <label
                            htmlFor="input-file"
                            className="mt-3 w-auto cursor-pointer rounded-full bg-indigo-600 p-3 py-2.5 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                          >
                            Choose File
                          </label>
                          <input
                            id="input-file"
                            type="file"
                            className="hidden"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="mb-4 grid w-full gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="grid gap-1">
                            <h4 className="text-sm leading-snug font-normal text-gray-900">
                              General Documents.txt
                            </h4>
                            <h5 className="text-xs leading-[18px] font-normal text-gray-400">
                              Upload complete
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-2.5 py-1.5">
                        <div className="relative h-2.5 w-full overflow-hidden rounded-3xl bg-gray-100">
                          <div
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className="flex h-full items-center justify-center rounded-3xl bg-indigo-600 text-white"
                          ></div>
                        </div>
                        <span className="ml-2 flex items-center justify-center rounded-full bg-white text-xs font-medium text-gray-800">
                          100%
                        </span>
                      </div>
                    </div>
                    <div className="grid w-full gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="grid gap-1">
                            <h4 className="text-sm leading-snug font-normal text-gray-900">
                              General Documents.txt
                            </h4>
                            <h5 className="text-xs leading-4 font-normal text-gray-400">
                              23 seconds remaining
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-2.5 py-1.5">
                        <div className="relative h-2.5 w-full overflow-hidden rounded-3xl bg-gray-100">
                          <div
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={80}
                            className="flex h-full items-center justify-center rounded-3xl bg-indigo-600 text-white"
                          ></div>
                        </div>
                        <span className="ml-2 flex items-center justify-center rounded-full bg-white text-xs font-medium text-gray-800">
                          80%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-8">
                    <button
                      className="close-modal-button w-full rounded-md border border-gray-200 p-1.5 py-2.5 text-center text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-5"
                      data-modal-target="modalBox-5"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-md bg-indigo-600 p-1.5 py-2.5 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-5"
                      data-modal-target="modalBox-5"
                    >
                      Upload
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
