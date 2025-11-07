export default function ModalWithLinkSharing() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-2"
            data-modal-target="modalBox-2"
            data-modal-toggle="modalBox-2"
          >
            Share Blog
          </button>
          <div
            id="modalBox-2"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Blog Post Published
                    </h6>
                    <button
                      className="close-modal-button text-indigo-300 transition-all duration-300 hover:text-indigo-600"
                      data-pd-overlay="#modalBox-2"
                      data-modal-target="modalBox-2"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-7">
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
                        className="p-2 pl-3 w-full rounded-lg border border-gray-300 placeholder:text-gray-400 text-xs font-normal"
                        placeholder="www.pagedone.io / blog"
                      />
                      <button className="py-2 pr-3 pl-1.5 rounded-md flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 transition-all duration-300 hover:bg-indigo-100">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center pt-5 gap-4">
                    <button
                      className="w-full text-center p-1.5 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-900 close-modal-button transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                      data-pd-overlay="#modalBox-2"
                      data-modal-target="modalBox-2"
                    >
                      Cancel
                    </button>
                    <button
                      className="w-full text-center p-1.5 py-2 rounded-md bg-indigo-600 text-white text-xs font-medium close-modal-button transition-all duration-300 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
