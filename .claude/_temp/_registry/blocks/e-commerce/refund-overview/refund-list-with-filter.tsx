export default function RefundListWithFilter() {
  return (
    <div>
      {/*Custom CSS*/}select {"{"}
      text-indent: 1px; text-overflow: ''; width: 50px; height: 50px;
      -webkit-appearance: none; -moz-appearance: none; appearance: none;
      background: transparent
      url(https://pagedone.io/asset/uploads/1716542745.png) no-repeat 94%
      center;
      {"}"}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
            <div className="w-full justify-start items-center lg:gap-8 gap-4 flex lg:flex-row flex-col">
              <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
                My Refunds
              </h2>
              <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                <div className="relative sm:w-40 w-full flex flex-col">
                  <a className="absolute z-10 top-2.5 pl-3.5 mr-1.5"></a>
                  <select
                    id="countries"
                    className="focus:outline-none pr-3.5 pl-9 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-sm font-normal leading-snug border border-gray-300 justify-start items-center gap-2 inline-flex
                      h-10 sm:w-40 w-full"
                  >
                    <option value={1} selected>
                      Filter
                    </option>
                    <option value={2}>Selected Orders</option>
                    <option value={3}>Customized Orders</option>
                    <option value={4}>Other Orders</option>
                  </select>
                </div>
                <div className="w-full justify-start items-start gap-2.5 flex sm:flex-row flex-col">
                  <div className="sm:w-fit w-full relative">
                    <input
                      type="text"
                      className="sm:w-80 w-full focus:outline-none pr-3.5 pl-9 py-2 h-10 rounded-lg border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-snug"
                      placeholder="Search by id"
                    />
                  </div>
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Search
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full lg:p-5 p-4 rounded-xl border border-gray-200 flex-col justify-start items-start lg:gap-5 gap-4 flex">
                <div className="w-full justify-start items-center lg:gap-5 gap-4 flex sm:flex-row flex-col lg:pb-5 pb-4 border-b border-gray-200">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865845.png"
                    alt="Perfume image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                        <a href="#"></a>
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-1.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Reason:
                        <span className="text-gray-500 font-medium">
                          Incorrect Product
                        </span>
                      </h6>
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Status:
                        <span className="text-emerald-600 font-medium">
                          Ongoing
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                  <a className="group justify-start items-center gap-2 flex">
                    <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a href="#"></a>
                    <h6 className="text-right text-orange-500 text-base font-semibold leading-relaxed">
                      Set for Pickup on June 20, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full lg:p-5 p-4 rounded-xl border border-gray-200 flex-col justify-start items-start lg:gap-5 gap-4 flex">
                <div className="w-full justify-start items-center lg:gap-5 gap-4 flex sm:flex-row flex-col lg:pb-5 pb-4 border-b border-gray-200">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865857.png"
                    alt="Watch image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                        <a href="#"></a>
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-1.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Reason:
                        <span className="text-gray-500 font-medium">
                          Defective Product
                        </span>
                      </h6>
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Status:
                        <span className="text-indigo-600 font-medium">
                          Completed
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                  <a className="group justify-start items-center gap-2 flex">
                    <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a href="#"></a>
                    <h6 className="text-right text-gray-500 text-base font-semibold leading-relaxed">
                      Return Confirmed on June 5, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full lg:p-5 p-4 rounded-xl border border-gray-200 flex-col justify-start items-start lg:gap-5 gap-4 flex">
                <div className="w-full justify-start items-center lg:gap-5 gap-4 flex sm:flex-row flex-col lg:pb-5 pb-4 border-b border-gray-200">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865868.png"
                    alt="Ladies Purse image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                        <a href="#"></a>
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-1.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Reason:
                        <span className="text-gray-500 font-medium">
                          Material not as Expected
                        </span>
                      </h6>
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Status:
                        <span className="text-red-600 font-medium">Failed</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                  <a className="group justify-start items-center gap-2 flex">
                    <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a href="#"></a>
                    <h6 className="text-right text-gray-500 text-base font-semibold leading-relaxed">
                      Return Failed on May 26, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full lg:p-5 p-4 rounded-xl border border-gray-200 flex-col justify-start items-start lg:gap-5 gap-4 flex">
                <div className="w-full justify-start items-center lg:gap-5 gap-4 flex sm:flex-row flex-col lg:pb-5 pb-4 border-b border-gray-200">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865880.png"
                    alt="T-shirt image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-full justify-between items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                        <a href="#"></a>
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex-col justify-start sm:items-start items-center gap-1.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Reason:
                        <span className="text-gray-500 font-medium">
                          Size Issue
                        </span>
                      </h6>
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Return Status:
                        <span className="text-indigo-600 font-medium">
                          Completed
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                  <a className="group justify-start items-center gap-2 flex">
                    <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a href="#"></a>
                    <h6 className="text-right text-gray-500 text-base font-semibold leading-relaxed">
                      Return Confirmed on May 13, 2024
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-end items-center gap-5 flex sm:flex-row flex-col">
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6">
                  Back to Shopping
                </span>
              </button>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
