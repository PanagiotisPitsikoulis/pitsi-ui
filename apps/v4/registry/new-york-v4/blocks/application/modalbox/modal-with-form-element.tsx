export default function ModalWithFormElement() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-29"
            data-modal-target="modalBox-29"
            data-modal-toggle="modalBox-29"
          >
            Feedback
          </button>
          <div
            id="modalBox-29"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Send Us Message
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-29"
                      data-modal-target="modalBox-29"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Send Us Message is a phrase typically used as an invitation
                    or prompt for individuals to communicate
                  </p>
                  <form action="#" className="mb-5 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                          Name
                        </label>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="John"
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
                          className="block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="John@gamil.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Message
                      </label>
                      <textarea
                        className="block h-24 w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Drop some letter or just say Hi"
                      />
                    </div>
                  </form>
                  <div className="flex items-center justify-end">
                    <button
                      className="close-modal-button rounded-lg bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-700 focus-within:outline-0 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
