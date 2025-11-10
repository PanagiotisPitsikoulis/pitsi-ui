export default function RefundRequestProcess() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-center gap-12 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-10 lg:gap-14">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
              Submit a Return Request
            </h2>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Item Select for Return &amp; Tell the Reason
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 p-8">
                  <div className="flex w-full flex-col items-center justify-between gap-4 border-b border-gray-200 pb-8 sm:flex-row">
                    <h5 className="text-lg leading-9 font-semibold text-gray-900">
                      Oder Date:
                      <span className="font-medium text-gray-500">
                        May 14, 2024
                      </span>
                    </h5>
                    <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Delivery Date:
                      <span className="font-medium text-gray-500">
                        {" "}
                        May 28, 2024
                      </span>
                    </h5>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-7 md:gap-6">
                    <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:gap-8">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                          defaultChecked
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171447.png"
                        alt="Oversized T-shirt for Men image"
                      />
                      <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
                        <div className="inline-flex w-full flex-col items-center justify-start gap-3 pt-1 sm:items-start">
                          <div className="inline-flex items-center justify-start gap-5">
                            <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                              Plain Oversized T-shirt for Men
                            </h4>
                          </div>
                          <div className="inline-flex items-center justify-start gap-3">
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Size:
                              <span className="text-gray-500">L</span>
                            </h6>
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Price:
                              <span className="text-gray-500">₹499</span>
                            </h6>
                            <h6 className="text-base leading-relaxed font-medium text-gray-900">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex w-full justify-end md:w-80">
                          <div className="relative w-full md:w-80">
                            <select
                              id="countries"
                              className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none md:w-80"
                            >
                              <option value={1} selected>
                                Unsatisfied Quality
                              </option>
                              <option value={2}>Satisfied Quality</option>
                              <option value={3}>defective products</option>
                              <option value={4}>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:gap-8">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171513.png"
                        alt="Printed Cotton Saree image"
                      />
                      <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
                        <div className="inline-flex w-full flex-col items-center justify-start gap-3 pt-1 sm:items-start">
                          <div className="inline-flex items-center justify-start gap-5">
                            <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                              Crafts Moda Printed Cotton Saree
                            </h4>
                          </div>
                          <div className="inline-flex items-center justify-start gap-3">
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Size:
                              <span className="text-gray-500">Regular</span>
                            </h6>
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Price:
                              <span className="text-gray-500">₹999</span>
                            </h6>
                            <h6 className="text-base leading-relaxed font-medium text-gray-900">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex w-full justify-end md:w-80">
                          <div className="relative w-full md:w-80">
                            <select
                              id="countries"
                              className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none md:w-80"
                            >
                              <option value={1} selected>
                                Select Reason
                              </option>
                              <option value={2}>defective products</option>
                              <option value={3}>Satisfied Quality</option>
                              <option value={4}>Unsatisfied Quality</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:gap-8">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                          defaultChecked
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171460.png"
                        alt="Perfume image"
                      />
                      <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
                        <div className="inline-flex w-full flex-col items-center justify-start gap-3 pt-1 sm:items-start">
                          <div className="inline-flex items-center justify-start gap-5">
                            <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                              On The Rocks &amp; Marine Set Of 2 Long Lasting
                              EDP
                            </h4>
                          </div>
                          <div className="inline-flex items-center justify-start gap-3">
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Size:
                              <span className="text-gray-500">120ml</span>
                            </h6>
                            <h6 className="border-r border-gray-200 pr-3 text-base leading-relaxed font-medium text-gray-900">
                              Price:
                              <span className="text-gray-500">₹520</span>
                            </h6>
                            <h6 className="text-base leading-relaxed font-medium text-gray-900">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex w-full justify-end md:w-80">
                          <div className="relative w-full md:w-80">
                            <select
                              id="countries"
                              className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none md:w-80"
                            >
                              <option value={1} selected>
                                Defective products
                              </option>
                              <option value={2}>Unsatisfied Quality</option>
                              <option value={3}>Satisfied Quality</option>
                              <option value={4}>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Select Refund Option
                </h4>
                <div className="grid w-full grid-cols-1 items-start justify-start gap-4 md:grid-cols-3 lg:gap-8">
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
                          Want Sopping Voucher
                        </h6>
                        <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-xs">
                          Used for selecting only one option
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
                          Money Back
                        </h6>
                        <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-xs">
                          Used for selecting only one option
                        </p>
                      </div>
                    </label>
                  </div>
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
                          Want Another Product
                        </h6>
                        <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-xs">
                          Used for selecting only one option
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-72">
            <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
              SUBMIT
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
