export default function ProductReasonSelectionForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-start lg:gap-16 gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-14 gap-10 flex">
            <div className="w-full flex-col justify-start sm:items-start items-center gap-3 flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Request for Return
              </h2>
              <p className="text-gray-500 text-base font-medium leading-relaxed sm:text-start text-center">
                Choose the product you need to return and let us know the reason
                for your return.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Return Product
                </h4>
                <div className="w-full justify-start items-start lg:gap-5 gap-4 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full lg:p-6 p-3 rounded-xl border border-gray-200 justify-start items-center lg:gap-8 gap-4 flex sm:flex-row flex-col">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1718174948.png"
                      alt="Hydrating Face Moisturizer image"
                    />
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex">
                      <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                        Hydrating Face Moisturizer - 50 ml
                      </h4>
                      <div className="flex-col justify-center sm:items-start items-center gap-1 flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Price:
                          <span className="text-gray-500">$84.00</span>
                        </h6>
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          QTY:
                          <span className="text-gray-500">1</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full lg:p-6 p-3 rounded-xl border border-gray-200 justify-start items-center lg:gap-8 gap-4 flex sm:flex-row flex-col">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1718174958.png"
                      alt="Oversized T-Shirt image"
                    />
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex">
                      <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                        Black SPACEOUT Oversized T-Shirt
                      </h4>
                      <div className="h-14 flex-col justify-center sm:items-start items-center gap-1 flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Price:
                          <span className="text-gray-500">$50.00</span>
                        </h6>
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          QTY:
                          <span className="text-gray-500">1</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  What do you want in return?
                </h4>
                <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                  <button className="md:w-fit w-full group px-6 py-3 bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                    <span className="px-2 text-indigo-300 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
                      Replacement
                    </span>
                  </button>
                  <button className="md:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 text-white text-lg font-semibold leading-8">
                      Return Product
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Select Refund Option
                </h4>
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-start gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600 mt-1" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            UPI
                          </h6>
                          <p className="sm:max-w-lg text-gray-400 text-base font-normal leading-relaxed">
                            Once the pickup is completed, your refund will be
                            transferred to your UPI within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_2"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-start gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600 mt-1" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            Wallet
                          </h6>
                          <p className="sm:max-w-lg text-gray-400 text-base font-normal leading-relaxed">
                            Once the pickup is completed, your refund will be
                            transferred to your Wallet within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="w-full justify-start items-start gap-5 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_3"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-start gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600 mt-1" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            Bank Account
                          </h6>
                          <p className="sm:max-w-lg text-gray-400 text-base font-normal leading-relaxed">
                            Once the pickup is completed, your refund will be
                            transferred to your Bank Account within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_4"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_4"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-start gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600 mt-1" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            Gift Card or Voucher
                          </h6>
                          <p className="sm:max-w-lg text-gray-400 text-base font-normal leading-relaxed">
                            Once the pickup is completed, your refund will be
                            transferred to your Gift Card or Voucher within one
                            day.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Reason for Return
                </h4>
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full justify-start items-center gap-5 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Defective or Damaged Product
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Incorrect Product Received
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Changed Mind/Not as Expected
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Misleading Product Information
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Quality Issues
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Product Not as Described
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Size/Fit Issue
                      </label>
                    </div>
                    <div className="w-full flex items-center px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start gap-2">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-gray-600 text-base font-normal leading-relaxed"
                      >
                        Missing Parts or Accessories
                      </label>
                    </div>
                  </div>
                  <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      I have another Problem
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Pick Up Address
                </h4>
                <div className="w-full px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-start gap-3 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-full justify-between items-center gap-8 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Michael Brown
                      </h5>
                      <a className="text-right text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                        Change Address
                      </a>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                        123 Main Street, Apartment 101, Anytown, USA, 12345
                      </h6>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Phone Number:
                        <span className="font-normal"> +1 555 5555</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Send Request
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
