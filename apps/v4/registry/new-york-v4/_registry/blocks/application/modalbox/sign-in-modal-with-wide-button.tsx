export default function SignInModalWithWideButton() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-22"
            data-modal-target="modalBox-22"
            data-modal-toggle="modalBox-22"
          >
            Login
          </button>
          <div
            id="modalBox-22"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Sign In
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-22"
                      data-modal-target="modalBox-22"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Sign In to access your dashboard, settings and projects.
                  </p>
                  <form action="#" className="mb-5 flex flex-col gap-4">
                    <div className="relative">
                      <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Johnsmith@gmail.com"
                        required
                      />
                    </div>
                    <div className="block">
                      <div className="relative">
                        <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                          Passward
                        </label>
                        <input
                          type="password"
                          id="default-search"
                          className="block w-full max-w-xs rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="********"
                          required
                        />
                      </div>
                      <div className="orange-check mt-2 flex items-center">
                        <input
                          id="Keep-me-signed-in"
                          type="checkbox"
                          className="mr-2 h-4 w-4 cursor-pointer appearance-none rounded-md border border-orange-600 checked:border-orange-600 checked:bg-orange-100 checked:bg-center checked:bg-no-repeat hover:border-orange-700 hover:bg-orange-100"
                        />
                        <label
                          htmlFor="Keep-me-signed-in"
                          className="font-norma cursor-pointer text-sm text-gray-600"
                        >
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                  </form>
                  <button
                    className="close-modal-button w-full rounded-lg bg-orange-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-orange-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
