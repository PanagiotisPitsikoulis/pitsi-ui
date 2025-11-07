export default function SimpleModalWithNumberInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-24"
            data-modal-target="modalBox-24"
            data-modal-toggle="modalBox-24"
          >
            Verify Number
          </button>
          <div
            id="modalBox-24"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Two step authentication
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-24"
                      data-modal-target="modalBox-24"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Provide us with your mobile phone number and we will send
                    you an SMS when you try to login.
                  </p>
                  <div className="block mb-5">
                    <label
                      htmlFor="coun"
                      className="text-xs font-medium text-gray-600 pb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative w-full mb-1">
                      <select
                        id="coun"
                        className="w-16 text-gray-900 text-sm rounded-lg block absolute left-px top-0.5 h-9 px-2 focus:outline-none"
                      >
                        <option value="US" selected>
                          IN
                        </option>
                        <option value="CA">CA</option>
                        <option value="FR">Fr</option>
                      </select>
                      <input
                        type="text"
                        className="block w-full pr-4 pl-20 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                    <p className="text-xs font-normal text-gray-400">
                      By proviling your mobile number, you agree to receive text
                      messages from us.
                    </p>
                  </div>
                  <button className="w-full text-center rounded-lg py-2.5 px-3.5 bg-blue-600 text-white text-sm font-medium">
                    Send Text
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
