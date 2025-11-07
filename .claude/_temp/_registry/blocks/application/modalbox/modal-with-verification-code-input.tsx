export default function ModalWithVerificationCodeInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-26"
            data-modal-target="modalBox-26"
            data-modal-toggle="modalBox-26"
          >
            Newsletter
          </button>
          <div
            id="modalBox-26"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end mb-5 w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-26"
                    data-modal-target="modalBox-26"
                  ></button>
                </div>
                <h6 className="text-lg font-bold leading-8 text-gray-900 text-center mb-1">
                  Verify mobile number
                </h6>
                <p className="text-xs font-normal text-gray-500 mb-5 text-center">
                  Enter the 6-digit code we sent to +91 95874 20101 Didn’t
                  receive a code?{" "}
                  <span className="text-indigo-600"> Try again.</span>
                </p>
                <form
                  action="#"
                  className="flex items-center justify-center gap-3 mb-5"
                >
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="py-2 px-1 text-center w-8 rounded border border-gray-200 text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:outline-0 focus-within:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="py-2 px-1 text-center w-8 rounded border border-gray-200 text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:outline-0 focus-within:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="py-2 px-1 text-center w-8 rounded border border-gray-200 text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:outline-0 focus-within:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="py-2 px-1 text-center w-8 rounded border border-gray-200 text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:outline-0 focus-within:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="code-1" className="hidden" />
                    <input
                      type="text"
                      id="code-1"
                      className="py-2 px-1 text-center w-8 rounded border border-gray-200 text-xs font-normal text-gray-900 placeholder:text-gray-900 focus-within:outline-0 focus-within:border-indigo-600"
                    />
                  </div>
                </form>
                <div className="flex items-center gap-4">
                  <button
                    className="py-2.5 px-3.5 w-full text-center rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 close-modal-button focus-within:outline-0 focus-within:border-indigo-600 transition-all duration-500 hover:bg-indigo-100 focus-within:bg-indigo-100"
                    data-pd-overlay="#modalBox-26"
                    data-modal-target="modalBox-26"
                  >
                    Back
                  </button>
                  <button
                    className="py-2.5 px-3.5 w-full text-center rounded-lg bg-indigo-600 text-sm font-medium text-white close-modal-button transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-700 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
