export default function RefundRequestProcess() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center lg:gap-16 gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-14 gap-10 flex">
            <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Submit a Return Request
            </h2>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Item Select for Return &amp; Tell the Reason
                </h4>
                <div className="w-full p-8 rounded-xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-4 pb-8 border-b border-gray-200">
                    <h5 className="text-gray-900 text-lg font-semibold leading-9">
                      Oder Date:
                      <span className="text-gray-500 font-medium">
                        May 14, 2024
                      </span>
                    </h5>
                    <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                      Delivery Date:
                      <span className="text-gray-500 font-medium">
                        {" "}
                        May 28, 2024
                      </span>
                    </h5>
                  </div>
                  <div className="w-full flex-col justify-start items-start md:gap-6 gap-7 flex">
                    <div className="w-full justify-start items-center sm:gap-8 gap-5 flex sm:flex-row flex-col">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                          defaultChecked
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171447.png"
                        alt="Oversized T-shirt for Men image"
                      />
                      <div className="w-full justify-between lg:items-center items-start lg:gap-8 gap-4 flex lg:flex-row flex-col">
                        <div className="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex">
                          <div className="justify-start items-center gap-5 inline-flex">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                              Plain Oversized T-shirt for Men
                            </h4>
                          </div>
                          <div className="justify-start items-center gap-3 inline-flex">
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Size:
                              <span className="text-gray-500">L</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Price:
                              <span className="text-gray-500">₹499</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex md:w-80 w-full justify-end">
                          <div className="relative md:w-80 w-full ">
                            <select
                              id="countries"
                              className="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block md:w-80 w-full py-2.5 px-4 focus:outline-none font-normal leading-relaxed
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400"
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
                    <div className="w-full justify-start items-center sm:gap-8 gap-5  flex sm:flex-row flex-col">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171513.png"
                        alt="Printed Cotton Saree image"
                      />
                      <div className="w-full justify-between lg:items-center items-start lg:gap-8 gap-4 flex lg:flex-row flex-col">
                        <div className="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex">
                          <div className="justify-start items-center gap-5 inline-flex">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                              Crafts Moda Printed Cotton Saree
                            </h4>
                          </div>
                          <div className="justify-start items-center gap-3 inline-flex">
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Size:
                              <span className="text-gray-500">Regular</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Price:
                              <span className="text-gray-500">₹999</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex md:w-80 w-full justify-end">
                          <div className="relative md:w-80 w-full ">
                            <select
                              id="countries"
                              className="h-12 border border-gray-300 text-gray-400 text-base rounded-lg block md:w-80 w-full py-2.5 px-4 focus:outline-none font-normal leading-relaxed
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400"
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
                    <div className="w-full justify-start items-center sm:gap-8 gap-5  flex sm:flex-row flex-col">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default1"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-50"
                          defaultChecked
                        />
                      </div>
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1718171460.png"
                        alt="Perfume image"
                      />
                      <div className="w-full justify-between lg:items-center items-start lg:gap-8 gap-4 flex lg:flex-row flex-col">
                        <div className="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex">
                          <div className="justify-start items-center gap-5 inline-flex">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8 sm:text-start text-center">
                              On The Rocks &amp; Marine Set Of 2 Long Lasting
                              EDP
                            </h4>
                          </div>
                          <div className="justify-start items-center gap-3 inline-flex">
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Size:
                              <span className="text-gray-500">120ml</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed pr-3 border-r border-gray-200">
                              Price:
                              <span className="text-gray-500">₹520</span>
                            </h6>
                            <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                              QTY:
                              <span className="text-gray-500">1</span>
                            </h6>
                          </div>
                        </div>
                        <div className="flex md:w-80 w-full justify-end">
                          <div className="relative md:w-80 w-full ">
                            <select
                              id="countries"
                              className="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block md:w-80 w-full py-2.5 px-4 focus:outline-none font-normal leading-relaxed
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400"
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
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Select Refund Option
                </h4>
                <div className="w-full justify-start items-start lg:gap-8 gap-4 grid md:grid-cols-3 grid-cols-1">
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
                          Want Sopping Voucher
                        </h6>
                        <p className="sm:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                          Used for selecting only one option
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
                          Money Back
                        </h6>
                        <p className="sm:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                          Used for selecting only one option
                        </p>
                      </div>
                    </label>
                  </div>
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
                          Want Another Product
                        </h6>
                        <p className="sm:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                          Used for selecting only one option
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="sm:w-72 w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              SUBMIT
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
