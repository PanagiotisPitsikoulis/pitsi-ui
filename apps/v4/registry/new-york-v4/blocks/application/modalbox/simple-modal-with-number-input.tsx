export default function SimpleModalWithNumberInput() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-24"
            data-modal-target="modalBox-24"
            data-modal-toggle="modalBox-24"
          >
            Verify Number
          </button>
          <div
            id="modalBox-24"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Two step authentication
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-24"
                      data-modal-target="modalBox-24"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Provide us with your mobile phone number and we will send
                    you an SMS when you try to login.
                  </p>
                  <div className="mb-5 block">
                    <label
                      htmlFor="coun"
                      className="pb-1 text-xs font-medium text-gray-600"
                    >
                      Phone Number
                    </label>
                    <div className="relative mb-1 w-full">
                      <select
                        id="coun"
                        className="absolute top-0.5 left-px block h-9 w-16 rounded-lg px-2 text-sm text-gray-900 focus:outline-none"
                      >
                        <option value="US" selected>
                          IN
                        </option>
                        <option value="CA">CA</option>
                        <option value="FR">Fr</option>
                      </select>
                      <input
                        type="text"
                        className="block w-full rounded-lg border border-gray-200 bg-transparent py-2 pr-4 pl-20 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                    <p className="text-xs font-normal text-gray-400">
                      By proviling your mobile number, you agree to receive text
                      messages from us.
                    </p>
                  </div>
                  <button className="w-full rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-sm font-medium text-white">
                    Send Text
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
