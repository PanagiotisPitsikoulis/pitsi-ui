export default function BasicRefundApplicationForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-end lg:gap-16 gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-14 flex">
            <div className="w-full flex-col justify-start items-start gap-3 flex">
              <h2 className="w-full text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Product Return Application
              </h2>
              <p className="w-full text-center text-gray-500 text-base font-medium leading-relaxed">
                fill out the return request form below to initiate the return
                process for your item.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Item Select for Return
                </h4>
                <div className="w-full p-8 rounded-xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full justify-between items-center gap-4 flex sm:flex-row flex-col pb-8 border-b border-gray-200">
                    <h5 className="text-gray-900 text-lg font-semibold leading-normal">
                      Oder:
                      <span className="text-gray-500 font-medium">
                        #2015656
                      </span>
                    </h5>
                    <h5 className="text-gray-900 text-lg font-semibold leading-normal">
                      Oder Date:
                      <span className="text-gray-500 font-medium">
                        25th May, 2024 2:00 PM
                      </span>
                    </h5>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <div className="w-full justify-start sm:items-start items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                      <img
                        className="w-[122px] h-[120px] rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1701158078.png"
                        alt="UV Protected Lens image"
                      />
                      <div className="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex">
                        <div className="w-full justify-between items-center sm:gap-5 gap-3 flex sm:flex-row flex-col">
                          <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                            Golden Frame &amp; Blue Round Sunglasses with UV
                            Protected Lens
                          </h4>
                          <div className="flex items-center">
                            <input
                              id="checkbox-default1"
                              type="checkbox"
                              className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div className="flex-col justify-center sm:items-start items-center gap-1 flex">
                          <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                            Color:
                            <span className="text-gray-500">
                              Blue &amp; Golden
                            </span>
                          </h6>
                          <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                            QTY:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="w-full justify-start sm:items-start items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1718103938.png"
                        alt="Two Tone Casual Watch image"
                      />
                      <div className="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex">
                        <div className="w-full justify-between items-center sm:gap-5 gap-3 flex sm:flex-row flex-col">
                          <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                            Rolex Datejust Lexington Two Tone Casual Watch
                          </h4>
                          <div className="flex items-center">
                            <input
                              id="checkbox-default2"
                              type="checkbox"
                              className="w-5 h-5 appearance-none border cursor-pointer bg-white border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                            />
                          </div>
                        </div>
                        <div className="flex-col justify-center sm:items-start items-center gap-1 flex">
                          <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                            Color:
                            <span className="text-gray-500">
                              Silver &amp; Golden
                            </span>
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
              </div>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Select Reason for Returning
                </h4>
                <div className="w-full justify-start items-start lg:gap-8 gap-3.5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <h6 className="text-gray-600 text-sm font-medium leading-normal">
                        Choose Reason
                      </h6>
                    </div>
                    <div className="flex w-full">
                      <div className="relative w-full ">
                        <select
                          id="countries"
                          className="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none  font-normal leading-relaxed
                                      shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400"
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
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label className="text-gray-600 text-sm font-medium leading-normal">
                      Write Reason
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none px-4 py-2.5 rounded-lg  border border-gray-300 justify-start items-center gap-2 inline-flex text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed"
                      placeholder="Write here..."
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Select the Method of Delivery of Product
                </h4>
                <div className="w-full justify-start items-start gap-8 inline-flex">
                  <div className="w-full flex gap-3.5 md:flex-row flex-col">
                    <div className="w-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            Express Courier - $29
                          </h6>
                          <p className="sm:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                            Return Item to our courier service via post office
                            pr dropp-off point
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="w-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_2"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            At Store - Free
                          </h6>
                          <p className="text-gray-400 text-base font-normal leading-relaxed">
                            You can return item to our stores
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="w-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_3"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        <div className="w-fit flex-col justify-start items-start gap-1 inline-flex">
                          <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                            Pickup - $36
                          </h6>
                          <p className="sm:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                            Your item our delivery boy pickup direct your
                            address
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Select Refund Option
                </h4>
                <div className="w-full justify-start items-start lg:gap-8 gap-3.5 grid md:grid-cols-3 grid-cols-1">
                  <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_4"
                      type="radio"
                      name="radio1"
                      className="hidden sr-only peer"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_4"
                      className="text-gray-600 text-base font-normal leading-relaxed w-full flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want a Gift Card
                    </label>
                  </div>
                  <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_5"
                      type="radio"
                      name="radio1"
                      className="hidden sr-only peer"
                    />
                    <label
                      htmlFor="radio_5"
                      className="text-gray-600 text-base font-normal leading-relaxed w-full flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want my money back
                    </label>
                  </div>
                  <div className="w-full h-full flex items-center border px-4 py-2.5 border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <input
                      id="radio_6"
                      type="radio"
                      name="radio1"
                      className="hidden sr-only peer"
                    />
                    <label
                      htmlFor="radio_6"
                      className="text-gray-600 text-base font-normal leading-relaxed w-full flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                      I want exchange my product
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-2 text-white text-base font-semibold leading-7">
              Save Application
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
