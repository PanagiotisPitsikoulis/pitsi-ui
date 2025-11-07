export default function ModalWithLinkSharing() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-2"
            data-modal-target="modalBox-2"
            data-modal-toggle="modalBox-2"
          >
            Share Blog
          </button>
          <div
            id="modalBox-2"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Blog Post Published
                    </h6>
                    <button
                      className="close-modal-button text-indigo-300 transition-all duration-300 hover:text-indigo-600"
                      data-pd-overlay="#modalBox-2"
                      data-modal-target="modalBox-2"
                    ></button>
                  </div>
                  <p className="mb-7 text-xs font-normal text-gray-500">
                    This blog post is now live. Team members can edit and
                    republish any changes.
                  </p>
                  <div>
                    <p className="text-xs font-medium text-gray-600">
                      Share link
                    </p>
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 p-2 pl-3 text-xs font-normal placeholder:text-gray-400"
                        placeholder="www.pagedone.io / blog"
                      />
                      <button className="flex items-center gap-1.5 rounded-md bg-indigo-50 py-2 pr-3 pl-1.5 text-xs font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-100">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-5">
                    <button
                      className="close-modal-button w-full rounded-md border border-gray-200 p-1.5 py-2 text-center text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-2"
                      data-modal-target="modalBox-2"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-md bg-indigo-600 p-1.5 py-2 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-2"
                      data-modal-target="modalBox-2"
                    >
                      Confirm
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
