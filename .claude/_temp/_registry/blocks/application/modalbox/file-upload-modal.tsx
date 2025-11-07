export default function FileUploadModal() {
  return (
    <section className="relative py-8 sm:p-8 min-h-[800px]">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-5"
            data-modal-target="modalBox-5"
            data-modal-toggle="modalBox-5"
          >
            Upload File
          </button>
          <div
            id="modalBox-5"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Upload Files
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-5"
                      data-modal-target="modalBox-5"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-8">
                    Instantly add files with a simple upload process.
                  </p>
                  <div className="w-full grid">
                    <div className="w-full mb-5">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 "
                      >
                        <div className="mb-3 flex items-center justify-center"></div>
                        <h2 className="text-center text-gray-400   text-xs font-normal leading-4 mb-1">
                          PNG, JPG or PDF, smaller than 15MB
                        </h2>
                        <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                          Drag and Drop your file here or
                        </h4>
                        <div className="relative flex justify-center items-center">
                          <label
                            htmlFor="input-file"
                            className="w-auto text-center p-3 py-2.5 bg-indigo-600 text-white text-xs font-medium  transition-all duration-300 hover:bg-indigo-700 mt-3 rounded-full cursor-pointer"
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
                    <div className="w-full grid gap-1 mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="grid gap-1">
                            <h4 className="text-gray-900 text-sm font-normal  leading-snug">
                              General Documents.txt
                            </h4>
                            <h5 className="text-gray-400   text-xs font-normal  leading-[18px]">
                              Upload complete
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-2.5 py-1.5">
                        <div className="relative  w-full h-2.5  overflow-hidden rounded-3xl bg-gray-100">
                          <div
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className="flex h-full items-center justify-center bg-indigo-600  text-white rounded-3xl"
                          ></div>
                        </div>
                        <span className="ml-2 bg-white  rounded-full  text-gray-800 text-xs font-medium flex justify-center items-center ">
                          100%
                        </span>
                      </div>
                    </div>
                    <div className="w-full grid gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="grid gap-1">
                            <h4 className="text-gray-900 text-sm font-normal leading-snug">
                              General Documents.txt
                            </h4>
                            <h5 className="text-gray-400   text-xs font-normal leading-4">
                              23 seconds remaining
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-2.5 py-1.5">
                        <div className="relative  w-full h-2.5  overflow-hidden rounded-3xl bg-gray-100">
                          <div
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={80}
                            className="flex h-full items-center justify-center bg-indigo-600  text-white rounded-3xl"
                          ></div>
                        </div>
                        <span className="ml-2 bg-white  rounded-full  text-gray-800 text-xs font-medium flex justify-center items-center ">
                          80%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-8 gap-4">
                    <button
                      className="w-full text-center p-1.5 py-2.5 border border-gray-200 rounded-md text-xs font-medium text-gray-900 close-modal-button transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                      data-pd-overlay="#modalBox-5"
                      data-modal-target="modalBox-5"
                    >
                      Cancel
                    </button>
                    <button
                      className="w-full text-center p-1.5 py-2.5 rounded-md bg-indigo-600 text-white text-xs font-medium close-modal-button transition-all duration-300 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
