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
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
            <div className="flex w-full flex-col items-center justify-start gap-4 lg:flex-row lg:gap-8">
              <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
                My Refunds
              </h2>
              <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                <div className="relative flex w-full flex-col sm:w-40">
                  <a className="absolute top-2.5 z-10 mr-1.5 pl-3.5"></a>
                  <select
                    id="countries"
                    className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 py-2 pr-3.5 pl-9 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none sm:w-40"
                  >
                    <option value={1} selected>
                      Filter
                    </option>
                    <option value={2}>Selected Orders</option>
                    <option value={3}>Customized Orders</option>
                    <option value={4}>Other Orders</option>
                  </select>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2.5 sm:flex-row">
                  <div className="relative w-full sm:w-fit">
                    <input
                      type="text"
                      className="h-10 w-full rounded-lg border border-gray-300 py-2 pr-3.5 pl-9 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none sm:w-80"
                      placeholder="Search by id"
                    />
                  </div>
                  <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                    <span className="px-1.5 text-sm leading-6 font-medium text-white">
                      Search
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-4 lg:gap-5 lg:p-5">
                <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-4 sm:flex-row lg:gap-5 lg:pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865845.png"
                    alt="Perfume image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="flex items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                        <a href="#"></a>
                        <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-1.5 sm:items-start">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Reason:
                        <span className="font-medium text-gray-500">
                          Incorrect Product
                        </span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Status:
                        <span className="font-medium text-emerald-600">
                          Ongoing
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8">
                  <a className="group flex items-center justify-start gap-2">
                    <h6 className="text-base leading-relaxed font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="flex items-center justify-end gap-2.5">
                    <a href="#"></a>
                    <h6 className="text-right text-base leading-relaxed font-semibold text-orange-500">
                      Set for Pickup on June 20, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-4 lg:gap-5 lg:p-5">
                <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-4 sm:flex-row lg:gap-5 lg:pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865857.png"
                    alt="Watch image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="flex items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                        <a href="#"></a>
                        <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-1.5 sm:items-start">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Reason:
                        <span className="font-medium text-gray-500">
                          Defective Product
                        </span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Status:
                        <span className="font-medium text-indigo-600">
                          Completed
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8">
                  <a className="group flex items-center justify-start gap-2">
                    <h6 className="text-base leading-relaxed font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="flex items-center justify-end gap-2.5">
                    <a href="#"></a>
                    <h6 className="text-right text-base leading-relaxed font-semibold text-gray-500">
                      Return Confirmed on June 5, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-4 lg:gap-5 lg:p-5">
                <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-4 sm:flex-row lg:gap-5 lg:pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865868.png"
                    alt="Ladies Purse image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="flex items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                        <a href="#"></a>
                        <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-1.5 sm:items-start">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Reason:
                        <span className="font-medium text-gray-500">
                          Material not as Expected
                        </span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Status:
                        <span className="font-medium text-red-600">Failed</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8">
                  <a className="group flex items-center justify-start gap-2">
                    <h6 className="text-base leading-relaxed font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="flex items-center justify-end gap-2.5">
                    <a href="#"></a>
                    <h6 className="text-right text-base leading-relaxed font-semibold text-gray-500">
                      Return Failed on May 26, 2024
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-4 lg:gap-5 lg:p-5">
                <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-4 sm:flex-row lg:gap-5 lg:pb-5">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718865880.png"
                    alt="T-shirt image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-5">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return ID:
                        <span className="text-gray-500"> #2012455</span>
                      </h6>
                      <button className="flex items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                        <a href="#"></a>
                        <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600">
                          See Details
                        </span>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-1.5 sm:items-start">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Reason:
                        <span className="font-medium text-gray-500">
                          Size Issue
                        </span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Return Status:
                        <span className="font-medium text-indigo-600">
                          Completed
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8">
                  <a className="group flex items-center justify-start gap-2">
                    <h6 className="text-base leading-relaxed font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                      Download Return Report
                    </h6>
                  </a>
                  <div className="flex items-center justify-end gap-2.5">
                    <a href="#"></a>
                    <h6 className="text-right text-base leading-relaxed font-semibold text-gray-500">
                      Return Confirmed on May 13, 2024
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-5 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                <span className="px-1.5 text-sm leading-6 font-medium text-indigo-600">
                  Back to Shopping
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-1.5 text-sm leading-6 font-medium text-white">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
