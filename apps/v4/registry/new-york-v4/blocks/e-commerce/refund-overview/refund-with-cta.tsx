export default function RefundWithCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900 sm:text-start">
              My Refunds
            </h2>
            <div className="flex w-full flex-col items-center justify-end gap-5 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-50 px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-100 md:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-indigo-600">
                  Back to Shopping
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <div className="flex w-full flex-col items-center justify-start gap-5 rounded-2xl border border-gray-200 px-6 pt-5 pb-6">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 md:gap-8 lg:flex-nowrap">
                <div className="grid w-full grid-cols-1 items-center justify-between gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400">
                      Return Request Date :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      June 21, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup On :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      July 4, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Return Reason :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      {" "}
                      Defective Product
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup To :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 md:w-auto lg:items-end lg:justify-center">
                  <h6 className="w-full text-center text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400 sm:text-start lg:text-right">
                    Order :<span className="text-black"> #25610235901</span>
                  </h6>
                  <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-transparent px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-500 hover:bg-gray-50 sm:w-fit">
                    <span className="px-1.5 py-px text-sm leading-5 font-medium whitespace-nowrap text-gray-900">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868744.png"
                  alt="Vitamin C Night Serum image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
                  <h5 className="text-center text-lg leading-relaxed font-semibold text-black sm:text-start">
                    Garnier Bright Complete Vitamin C Night Serum 10% Pure
                    Vitamin C to Repair &amp; Brighten Skin
                  </h5>
                  <div className="inline-flex w-full items-center justify-center gap-5 sm:items-start sm:justify-start">
                    <a className="group flex items-center justify-start gap-2.5 border-r border-indigo-600 pr-5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group flex items-center justify-start gap-2.5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        View Details
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-5 rounded-2xl border border-gray-200 px-6 pt-5 pb-6">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 md:gap-8 lg:flex-nowrap">
                <div className="grid w-full grid-cols-1 items-center justify-between gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400">
                      Return Request Date :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      May 13, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup On :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      May 24, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Return Reason :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      {" "}
                      Incorrect Product
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup To :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 md:w-auto lg:items-end lg:justify-center">
                  <h6 className="w-full text-center text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400 sm:text-start lg:text-right">
                    Order :<span className="text-black"> #20258145662</span>
                  </h6>
                  <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-transparent px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-500 hover:bg-gray-50 sm:w-fit">
                    <span className="px-1.5 py-px text-sm leading-5 font-medium whitespace-nowrap text-gray-900">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868755.png"
                  alt="Skin Gamechangers Kit image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
                  <h5 className="text-center text-lg leading-relaxed font-semibold text-black sm:text-start">
                    Skin Gamechangers Kit
                  </h5>
                  <div className="inline-flex w-full items-center justify-center gap-5 sm:items-start sm:justify-start">
                    <a className="group flex items-center justify-start gap-2.5 border-r border-indigo-600 pr-5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group flex items-center justify-start gap-2.5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        View Details
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-5 rounded-2xl border border-gray-200 px-6 pt-5 pb-6">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 md:gap-8 lg:flex-nowrap">
                <div className="grid w-full grid-cols-1 items-center justify-between gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400">
                      Return Request Date :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      April 20, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup On :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      April 28, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Return Reason :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      {" "}
                      Quality Issues
                    </h6>
                  </div>
                  <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-400">
                      Pickup To :
                    </h6>
                    <h6 className="text-base leading-relaxed font-semibold text-black">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 md:w-auto lg:items-end lg:justify-center">
                  <h6 className="w-full text-center text-base leading-relaxed font-semibold whitespace-nowrap text-gray-400 sm:text-start lg:text-right">
                    Order :<span className="text-black"> #52524585426</span>
                  </h6>
                  <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-transparent px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-500 hover:bg-gray-50 sm:w-fit">
                    <span className="px-1.5 py-px text-sm leading-5 font-medium whitespace-nowrap text-gray-900">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868765.png"
                  alt="Flora EDP Perfume for Women image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
                  <h5 className="text-center text-lg leading-relaxed font-semibold text-black sm:text-start">
                    Flora EDP Perfume for Women | Strong and Long Lasting Spray
                  </h5>
                  <div className="inline-flex w-full items-center justify-center gap-5 sm:items-start sm:justify-start">
                    <a className="group flex items-center justify-start gap-2.5 border-r border-indigo-600 pr-5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group flex items-center justify-start gap-2.5">
                      <h6 className="text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                        View Details
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
