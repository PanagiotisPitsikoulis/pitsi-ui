export default function InviteModalWithFileInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-27"
            data-modal-target="modalBox-27"
            data-modal-toggle="modalBox-27"
          >
            Add members
          </button>
          <div
            id="modalBox-27"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
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
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Teammate Name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="mb-1 block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Teammate email"
                        required
                      />
                      <p className="text-xs font-normal text-indigo-600">
                        + Add another
                      </p>
                    </div>
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
                      className="close-modal-button w-full rounded-lg border border-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-indigo-600 transition-all duration-500 focus-within:bg-indigo-100 focus-within:outline-0 hover:bg-indigo-100"
                      data-pd-overlay="#modalBox-27"
                      data-modal-target="modalBox-27"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-700 focus-within:outline-0 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
