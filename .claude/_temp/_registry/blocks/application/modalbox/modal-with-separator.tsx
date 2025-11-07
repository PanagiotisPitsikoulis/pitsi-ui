export default function ModalWithSeparator() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-38"
            data-modal-target="modalBox-38"
            data-modal-toggle="modalBox-38"
          >
            Button
          </button>
          <div
            id="modalBox-38"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-8">
                    <h6 className="text-lg font-bold text-gray-900 mb-1">
                      Login or Signup
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-38"
                      data-modal-target="modalBox-38"
                    ></button>
                  </div>
                  <div className="relative mb-8  text-gray-500 focus-within:text-gray-900 ">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-gray-600 mb-1"
                    >
                      Email
                    </label>
                    <div className="absolute bottom-3.5 left-0 flex items-center pl-4 pointer-events-none "></div>
                    <input
                      type="text"
                      id="email"
                      className="block w-full pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Search name or email"
                    />
                  </div>
                  <button className="py-2.5 px-3.5 w-full text-center rounded-full bg-teal-600 text-white text-sm font-medium mb-2.5 transition-all duration-500 hover:bg-teal-700 focus-within:bg-teal-700 focus-within:outline-0">
                    Continue
                  </button>
                  <div className="flex items-center green-check mb-4">
                    <input
                      id="checkbox-default"
                      type="checkbox"
                      className="w-4 h-4 min-w-[16px] appearance-none border cursor-pointer border-gray-300  rounded-md mr-2 hover:border-teal-600 hover:bg-teal-100 checked:bg-no-repeat checked:bg-center checked:border-teal-600 checked:bg-teal-50"
                    />
                    <label
                      htmlFor="checkbox-default"
                      className="text-xs font-normal cursor-pointer text-gray-500"
                    >
                      By continuing. you agree to the Terms of use, Privacy
                      Policy and Community Standards of pagdone
                    </label>
                  </div>
                  <div className="flex items-center gap-8 my-5">
                    <p className="text-xs font-medium text-gray-900 py-1.5">
                      Or
                    </p>
                  </div>
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 focus-within:bg-gray-100 focus-within:outline-0">
                    Continue with Google
                  </button>
                  <button className="mt-4 flex items-center justify-center gap-2.5 w-full py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 focus-within:bg-gray-100 focus-within:outline-0">
                    Continue with Facebook
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
