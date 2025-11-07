export default function ReloginModalWithPasswordInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-12"
            data-modal-target="modalBox-12"
            data-modal-toggle="modalBox-12"
          >
            Payment
          </button>
          <div
            id="modalBox-12"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end mb-1 w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-12"
                    data-modal-target="modalBox-12"
                  ></button>
                </div>
                <h6 className="text-lg font-bold leading-8 text-gray-900 mb-1">
                  Your session has expired
                </h6>
                <p className="text-xs font-normal text-gray-500 mb-5">
                  Enter your password again and reopen the website.
                </p>
                <form action="#" className="flex items-end gap-3">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="default-password"
                      className="block w-full max-w-xs px-4 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    id="submit"
                    className="block w-max rounded-lg px-5 py-2.5 text-sm shadow-xs text-white font-medium bg-indigo-600"
                    defaultValue="Resume"
                    required
                  />
                </form>
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
