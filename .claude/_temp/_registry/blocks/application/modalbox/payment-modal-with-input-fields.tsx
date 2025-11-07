export default function PaymentModalWithInputFields() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-21"
            data-modal-target="modalBox-21"
            data-modal-toggle="modalBox-21"
          >
            add Payment
          </button>
          <div
            id="modalBox-21"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Edit Payment Method
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-21"
                      data-modal-target="modalBox-21"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Note: Some payment providers issue a temporary authorization
                    charge
                  </p>
                  <form action="#" className="flex flex-col gap-4 mb-5">
                    <div className="relative">
                      <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="1234 5678 9123 4567"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                          Expiration
                        </label>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="01/23"
                          required
                        />
                      </div>
                      <div className="relative">
                        <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          required
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="John smith"
                        required
                      />
                    </div>
                  </form>
                  <div className="flex items-center gap-4">
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg border border-blue-600 hover:bg-blue-50 text-sm font-medium text-blue-600 transition-all duration-500 close-modal-button"
                      data-pd-overlay="#modalBox-21"
                      data-modal-target="modalBox-21"
                    >
                      Cancel
                    </button>
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg bg-blue-600 transition-all duration-500 hover:bg-blue-700 text-sm font-medium text-white close-modal-button"
                      data-pd-overlay="#modalBox-21"
                      data-modal-target="modalBox-21"
                    >
                      Update
                    </button>
                  </div>
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
