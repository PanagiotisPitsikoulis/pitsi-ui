export default function SignInModalWithWideButton() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-22"
            data-modal-target="modalBox-22"
            data-modal-toggle="modalBox-22"
          >
            Login
          </button>
          <div
            id="modalBox-22"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Sign In
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-22"
                      data-modal-target="modalBox-22"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Sign In to access your dashboard, settings and projects.
                  </p>
                  <form action="#" className="flex flex-col gap-4 mb-5">
                    <div className="relative">
                      <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                        Email
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Johnsmith@gmail.com"
                        required
                      />
                    </div>
                    <div className="block">
                      <div className="relative">
                        <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                          Passward
                        </label>
                        <input
                          type="password"
                          id="default-search"
                          className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="********"
                          required
                        />
                      </div>
                      <div className="flex items-center orange-check mt-2">
                        <input
                          id="Keep-me-signed-in"
                          type="checkbox"
                          className="w-4 h-4 appearance-none border cursor-pointer border-orange-600  rounded-md mr-2 hover:border-orange-700 hover:bg-orange-100 checked:bg-no-repeat checked:bg-center checked:border-orange-600 checked:bg-orange-100"
                        />
                        <label
                          htmlFor="Keep-me-signed-in"
                          className="text-sm font-norma cursor-pointer text-gray-600"
                        >
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                  </form>
                  <button
                    className="w-full text-center rounded-lg py-2.5 px-3.5 bg-orange-600 text-white text-sm font-medium transition-all duration-300 hover:bg-orange-700 close-modal-button"
                    data-pd-overlay="#modalBox-22"
                    data-modal-target="modalBox-22"
                  >
                    Sign In
                  </button>
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
