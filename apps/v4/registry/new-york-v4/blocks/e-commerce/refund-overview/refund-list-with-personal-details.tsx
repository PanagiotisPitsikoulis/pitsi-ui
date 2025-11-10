export default function RefundListWithPersonalDetails() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-end justify-start gap-12 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-14">
            <div className="flex w-full flex-col items-start justify-start gap-3">
              <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900">
                Product Return Application
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-medium text-gray-500">
                fill out the return request form below to initiate the return
                process for your item.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Item Select for Return
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 p-8">
                  <div className="flex w-full flex-col items-center justify-between gap-4 border-b border-gray-200 pb-8 sm:flex-row">
                    <h5 className="text-lg leading-normal font-semibold text-gray-900">
                      Oder:
                      <span className="font-medium text-gray-500">
                        #2015656
                      </span>
                    </h5>
                    <h5 className="text-lg leading-normal font-semibold text-gray-900">
                      Oder Date:
                      <span className="font-medium text-gray-500">
                        25th May, 2024 2:00 PM
                      </span>
                    </h5>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-6">
                    <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:items-start sm:gap-8">
                      <img
                        className="h-[120px] w-[122px] rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1701158078.png"
                        alt="UV Protected Lens image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-3 pt-1 sm:items-start">
                        <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:gap-5">
                          <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                            Golden Frame &amp; Blue Round Sunglasses with UV
                            Protected Lens
                          </h4>
                          <div className="flex items-center">
                            <input
                              id="checkbox-default1"
                              type="checkbox"
                              className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Color:
                            <span className="text-gray-500">
                              Blue &amp; Golden
                            </span>
                          </h6>
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            QTY:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:items-start sm:gap-8">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1718103938.png"
                        alt="Two Tone Casual Watch image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-3 pt-1 sm:items-start">
                        <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:gap-5">
                          <h4 className="text-center text-xl leading-8 font-semibold text-gray-900 sm:text-start">
                            Rolex Datejust Lexington Two Tone Casual Watch
                          </h4>
                          <div className="flex items-center">
                            <input
                              id="checkbox-default2"
                              type="checkbox"
                              className="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-50 checked:bg-center checked:bg-no-repeat"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Color:
                            <span className="text-gray-500">
                              Silver &amp; Golden
                            </span>
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
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Select Reason for Returning
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-3.5 sm:flex-row lg:gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <h6 className="text-sm leading-normal font-medium text-gray-600">
                        Choose Reason
                      </h6>
                    </div>
                    <div className="flex w-full">
                      <div className="relative w-full">
                        <select
                          id="countries"
                          className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        >
                          <option value={1}>Other</option>
                          <option value={2} selected>
                            Medical Leave
                          </option>
                          <option value={3}>Personal Reason</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label className="text-sm leading-normal font-medium text-gray-600">
                      Write Reason
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-12 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Write here..."
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Select the Method of Delivery of Product
                </h4>
                <div className="inline-flex w-full items-start justify-start gap-8">
                  <div className="flex w-full flex-col gap-3.5 md:flex-row">
                    <div className="flex w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="flex w-full cursor-pointer items-center gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            Express Courier - $29
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-xs">
                            Return Item to our courier service via post office
                            pr dropp-off point
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_2"
                        className="flex w-full cursor-pointer items-center gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            At Store - Free
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400">
                            You can return item to our stores
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_3"
                        className="flex w-full cursor-pointer items-center gap-2 text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="inline-flex w-fit flex-col items-start justify-start gap-1">
                          <h6 className="text-base leading-relaxed font-normal text-gray-600">
                            Pickup - $36
                          </h6>
                          <p className="text-base leading-relaxed font-normal text-gray-400 sm:max-w-xs">
                            Your item our delivery boy pickup direct your
                            address
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Select Refund Option
                </h4>
                <div className="grid w-full grid-cols-1 items-start justify-start gap-3.5 md:grid-cols-3 lg:gap-8">
                  <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_4"
                      type="radio"
                      name="radio1"
                      className="peer sr-only hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_4"
                      className="flex w-full cursor-pointer items-center gap-2 text-base leading-relaxed font-normal text-gray-600"
                    >
                      <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want a Gift Card
                    </label>
                  </div>
                  <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_5"
                      type="radio"
                      name="radio1"
                      className="peer sr-only hidden"
                    />
                    <label
                      htmlFor="radio_5"
                      className="flex w-full cursor-pointer items-center gap-2 text-base leading-relaxed font-normal text-gray-600"
                    >
                      <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want my money back
                    </label>
                  </div>
                  <div className="flex h-full w-full items-center rounded-lg border border-gray-300 px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_6"
                      type="radio"
                      name="radio1"
                      className="peer sr-only hidden"
                    />
                    <label
                      htmlFor="radio_6"
                      className="flex w-full cursor-pointer items-center gap-2 text-base leading-relaxed font-normal text-gray-600"
                    >
                      <span className="h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want exchange my product
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
            <span className="px-2 text-base leading-7 font-semibold text-white">
              Save Application
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
