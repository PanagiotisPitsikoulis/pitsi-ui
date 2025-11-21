export default function ProductReasonSelectionForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-center gap-12 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-10 lg:gap-14">
            <div className="flex w-full flex-col items-center justify-start gap-3 sm:items-start">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Request for Return
              </h2>
              <p className="text-center text-base leading-relaxed font-medium text-gray-500 sm:text-start">
                Choose the product you need to return and let us know the reason
                for your return.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  Return Product
                </h4>
                <div className="grid w-full grid-cols-1 items-start justify-start gap-4 md:grid-cols-2 lg:gap-5">
                  <div className="flex h-full w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-3 sm:flex-row lg:gap-8 lg:p-6">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1718174948.png"
                      alt="Hydrating Face Moisturizer image"
                    />
                    <div className="inline-flex w-full flex-col items-center justify-start gap-2 sm:items-start">
                      <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                        Hydrating Face Moisturizer - 50 ml
                      </h4>
                      <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Price:
                          <span className="text-gray-500">$84.00</span>
                        </h6>
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          QTY:
                          <span className="text-gray-500">1</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-3 sm:flex-row lg:gap-8 lg:p-6">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1718174958.png"
                      alt="Oversized T-Shirt image"
                    />
                    <div className="inline-flex w-full flex-col items-center justify-start gap-2 sm:items-start">
                      <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                        Black SPACEOUT Oversized T-Shirt
                      </h4>
                      <div className="flex h-14 flex-col items-center justify-center gap-1 sm:items-start">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Price:
                          <span className="text-gray-500">$50.00</span>
                        </h6>
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          QTY:
                          <span className="text-gray-500">1</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  What do you want in return?
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                  <button className="group flex w-full items-center justify-center rounded-xl bg-indigo-50 px-6 py-3 transition-all duration-700 ease-in-out hover:bg-indigo-600 md:w-fit">
                    <span className="px-2 text-lg leading-8 font-semibold text-indigo-300 transition-all duration-700 ease-in-out group-hover:text-white">
                      Replacement
                    </span>
                  </button>
                  <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                    <span className="px-2 text-lg leading-8 font-semibold text-white">
                      Return Product
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  Select Refund Option
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-2">
                    <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="flex w-full cursor-pointer items-start gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mt-1 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            UPI
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-lg">
                            Once the pickup is completed, your refund will be
                            transferred to your UPI within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_2"
                        className="flex w-full cursor-pointer items-start gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mt-1 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            Wallet
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-lg">
                            Once the pickup is completed, your refund will be
                            transferred to your Wallet within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-2">
                    <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_3"
                        className="flex w-full cursor-pointer items-start gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mt-1 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            Bank Account
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-lg">
                            Once the pickup is completed, your refund will be
                            transferred to your Bank Account within one day.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_4"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_4"
                        className="flex w-full cursor-pointer items-start gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mt-1 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            Gift Card or Voucher
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-lg">
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
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  Reason for Return
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-5 md:grid-cols-2">
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Defective or Damaged Product
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Incorrect Product Received
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Changed Mind/Not as Expected
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Misleading Product Information
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Quality Issues
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Product Not as Described
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Size/Fit Issue
                      </label>
                    </div>
                    <div className="flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="checkbox-default1"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                        defaultChecked
                      />
                      <label
                        htmlFor=""
                        className="text-base leading-relaxed font-normal text-gray-600"
                      >
                        Missing Parts or Accessories
                      </label>
                    </div>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      I have another Problem
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  Pick Up Address
                </h4>
                <div className="inline-flex w-full items-start justify-start gap-3 rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-3">
                    <div className="inline-flex w-full items-center justify-between gap-8">
                      <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                        Michael Brown
                      </h5>
                      <a className="text-right text-xs leading-normal font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                        Change Address
                      </a>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h6 className="text-base leading-relaxed font-normal text-gray-900">
                        123 Main Street, Apartment 101, Anytown, USA, 12345
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Phone Number:
                        <span className="font-normal"> +1 555 5555</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
            <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
              Send Request
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
