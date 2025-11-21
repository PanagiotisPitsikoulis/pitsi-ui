export default function ModalWithSeparator() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-38"
            data-modal-target="modalBox-38"
            data-modal-toggle="modalBox-38"
          >
            Button
          </button>
          <div
            id="modalBox-38"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <h6 className="mb-1 text-lg font-bold text-gray-900">
                      Login or Signup
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-38"
                      data-modal-target="modalBox-38"
                    ></button>
                  </div>
                  <div className="relative mb-8 text-gray-500 focus-within:text-gray-900">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <div className="pointer-events-none absolute bottom-3.5 left-0 flex items-center pl-4"></div>
                    <input
                      type="text"
                      id="email"
                      className="block w-full rounded-full border border-gray-200 bg-transparent py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Search name or email"
                    />
                  </div>
                  <button className="mb-2.5 w-full rounded-full bg-teal-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 focus-within:bg-teal-700 focus-within:outline-0 hover:bg-teal-700">
                    Continue
                  </button>
                  <div className="green-check mb-4 flex items-center">
                    <input
                      id="checkbox-default"
                      type="checkbox"
                      className="mr-2 h-4 w-4 min-w-[16px] cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-teal-600 checked:bg-teal-50 checked:bg-center checked:bg-no-repeat hover:border-teal-600 hover:bg-teal-100"
                    />
                    <label
                      htmlFor="checkbox-default"
                      className="cursor-pointer text-xs font-normal text-gray-500"
                    >
                      By continuing. you agree to the Terms of use, Privacy
                      Policy and Community Standards of pagdone
                    </label>
                  </div>
                  <div className="my-5 flex items-center gap-8">
                    <p className="py-1.5 text-xs font-medium text-gray-900">
                      Or
                    </p>
                  </div>
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-full border border-gray-300 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:outline-0 hover:bg-gray-100">
                    Continue with Google
                  </button>
                  <button className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full border border-gray-300 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:outline-0 hover:bg-gray-100">
                    Continue with Facebook
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
