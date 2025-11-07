export default function ModalWithFormElement() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-29"
            data-modal-target="modalBox-29"
            data-modal-toggle="modalBox-29"
          >
            Feedback
          </button>
          <div
            id="modalBox-29"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Send Us Message
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-29"
                      data-modal-target="modalBox-29"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Send Us Message is a phrase typically used as an invitation
                    or prompt for individuals to communicate
                  </p>
                  <form action="#" className="flex flex-col gap-5 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full pl-4 pr-3.5 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="John"
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
                          className="block w-full px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="John@gamil.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-24 px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed resize-none"
                        placeholder="Drop some letter or just say Hi"
                      />
                    </div>
                  </form>
                  <div className="flex items-center justify-end">
                    <button
                      className="close-modal-button py-2.5 px-8 rounded-lg bg-indigo-600 text-white text-sm font-medium transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-700 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-29"
                      data-modal-target="modalBox-29"
                    >
                      Send Message
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
