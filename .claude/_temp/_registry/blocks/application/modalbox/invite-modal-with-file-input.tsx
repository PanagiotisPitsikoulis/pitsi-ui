export default function InviteModalWithFileInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-27"
            data-modal-target="modalBox-27"
            data-modal-toggle="modalBox-27"
          >
            Add members
          </button>
          <div
            id="modalBox-27"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Add members to Auzmor
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-27"
                      data-modal-target="modalBox-27"
                    ></button>
                  </div>
                  <form action="#" className="flex flex-col gap-4">
                    <div className="relative">
                      <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full pl-4 pr-3.5 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Teammate Name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                        Email
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full px-4 py-2 mb-1 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Teammate email"
                        required
                      />
                      <p className="text-xs font-normal text-indigo-600">
                        + Add another
                      </p>
                    </div>
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
                          Drag and Drop your file here or{" "}
                          <span className="text-indigo-600">Browse file</span>
                        </h4>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </form>
                  <div className="flex items-center gap-4">
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 close-modal-button transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-100 hover:bg-indigo-100"
                      data-pd-overlay="#modalBox-27"
                      data-modal-target="modalBox-27"
                    >
                      Cancel
                    </button>
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg bg-indigo-600 text-sm font-medium text-white close-modal-button transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-700 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-27"
                      data-modal-target="modalBox-27"
                    >
                      Sent Invitation
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
