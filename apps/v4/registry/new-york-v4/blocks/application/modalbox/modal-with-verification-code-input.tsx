export default function ModalWithVerificationCodeInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-26"
            data-modal-target="modalBox-26"
            data-modal-toggle="modalBox-26"
          >
            Newsletter
          </button>
          <div
            id="modalBox-26"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="mb-5 flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-26"
                    data-modal-target="modalBox-26"
                  ></button>
                </div>
                <h6 className="mb-1 text-center text-lg leading-8 font-bold text-gray-900">
                  Verify mobile number
                </h6>
                <p className="mb-5 text-center text-xs font-normal text-gray-500">
                  Enter the 6-digit code we sent to +91 95874 20101 Didn’t
                  receive a code?{" "}
                  <span className="text-indigo-600"> Try again.</span>
                </p>
                <form
                  action="#"
                  className="mb-5 flex items-center justify-center gap-3"
                >
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="w-8 rounded border border-gray-200 px-1 py-2 text-center text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:border-indigo-600 focus-within:outline-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="w-8 rounded border border-gray-200 px-1 py-2 text-center text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:border-indigo-600 focus-within:outline-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="w-8 rounded border border-gray-200 px-1 py-2 text-center text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:border-indigo-600 focus-within:outline-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="w-8 rounded border border-gray-200 px-1 py-2 text-center text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:border-indigo-600 focus-within:outline-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="w-8 rounded border border-gray-200 px-1 py-2 text-center text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:border-indigo-600 focus-within:outline-0"
                    />
                  </div>
                </form>
                <div className="flex items-center gap-4">
                  <button
                    className="close-modal-button w-full rounded-lg border border-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-indigo-600 transition-all duration-500 focus-within:border-indigo-600 focus-within:bg-indigo-100 focus-within:outline-0 hover:bg-indigo-100"
                    data-pd-overlay="#modalBox-26"
                    data-modal-target="modalBox-26"
                  >
                    Back
                  </button>
                  <button
                    className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-700 focus-within:outline-0 hover:bg-indigo-700"
                    data-pd-overlay="#modalBox-26"
                    data-modal-target="modalBox-26"
                  >
                    Confirm
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
