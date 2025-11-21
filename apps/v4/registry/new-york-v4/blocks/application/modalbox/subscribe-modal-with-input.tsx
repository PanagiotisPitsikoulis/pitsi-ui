export default function SubscribeModalWithInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-14"
            data-modal-target="modalBox-14"
            data-modal-toggle="modalBox-14"
          >
            Newsletter
          </button>
          <div
            id="modalBox-14"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="mb-1 flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-14"
                    data-modal-target="modalBox-14"
                  ></button>
                </div>
                <h6 className="mb-2 text-lg leading-8 font-bold text-gray-900">
                  Subscribe to our Newsletter
                </h6>
                <p className="mb-8 text-xs font-normal text-gray-500">
                  Receive incredible deals and the latest updates on our
                  products and services.
                </p>
                <form action="#" className="flex flex-col gap-3.5">
                  <div className="relative w-full">
                    <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                      Email
                    </label>
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2 pr-4 pl-12 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="name@pagedone.com"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
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
