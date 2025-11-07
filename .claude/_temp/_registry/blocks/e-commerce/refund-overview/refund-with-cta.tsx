export default function RefundWithCta() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal sm:text-start text-center">
              My Refunds
            </h2>
            <div className="w-full justify-end items-center gap-5 flex sm:flex-row flex-col">
              <button className="md:w-fit w-full px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                <span className="px-1.5 py-px text-indigo-600 text-sm font-medium leading-snug">
                  Back to Shopping
                </span>
              </button>
              <button className="md:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-5 flex">
            <div className="w-full px-6 pt-5 pb-6 rounded-2xl border border-gray-200 flex-col justify-start items-center gap-5 flex">
              <div className="w-full justify-between items-center md:gap-8 gap-4 flex lg:flex-nowrap flex-wrap border-b border-gray-200 pb-5">
                <div className="w-full justify-between items-center gap-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap">
                      Return Request Date :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      June 21, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup On :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      July 4, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Return Reason :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      {" "}
                      Defective Product
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup To :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="md:w-auto w-full flex-col lg:justify-center justify-start lg:items-end items-start gap-2.5 inline-flex">
                  <h6 className="lg:text-right sm:text-start text-center text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap w-full">
                    Order :<span className="text-black"> #25610235901</span>
                  </h6>
                  <button className="sm:w-fit w-full px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 bg-transparent hover:bg-gray-50 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-5 whitespace-nowrap">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex sm:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868744.png"
                  alt="Vitamin C Night Serum image"
                />
                <div className="w-full flex-col sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                  <h5 className="text-black text-lg font-semibold leading-relaxed sm:text-start text-center">
                    Garnier Bright Complete Vitamin C Night Serum 10% Pure
                    Vitamin C to Repair &amp; Brighten Skin
                  </h5>
                  <div className="w-full sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                    <a className="group justify-start items-center gap-2.5 flex border-r border-indigo-600 pr-5">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group justify-start items-center gap-2.5 flex">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                        View Details
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-6 pt-5 pb-6 rounded-2xl border border-gray-200 flex-col justify-start items-center gap-5 flex">
              <div className="w-full justify-between items-center md:gap-8 gap-4 flex lg:flex-nowrap flex-wrap border-b border-gray-200 pb-5">
                <div className="w-full justify-between items-center gap-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap">
                      Return Request Date :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      May 13, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup On :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      May 24, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Return Reason :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      {" "}
                      Incorrect Product
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup To :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="md:w-auto w-full flex-col lg:justify-center justify-start lg:items-end items-start gap-2.5 inline-flex">
                  <h6 className="lg:text-right sm:text-start text-center text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap w-full">
                    Order :<span className="text-black"> #20258145662</span>
                  </h6>
                  <button className="sm:w-fit w-full px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 bg-transparent hover:bg-gray-50 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-5 whitespace-nowrap">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex sm:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868755.png"
                  alt="Skin Gamechangers Kit image"
                />
                <div className="w-full flex-col sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                  <h5 className="text-black text-lg font-semibold leading-relaxed sm:text-start text-center">
                    Skin Gamechangers Kit
                  </h5>
                  <div className="w-full sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                    <a className="group justify-start items-center gap-2.5 flex border-r border-indigo-600 pr-5">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group justify-start items-center gap-2.5 flex">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                        View Details
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-6 pt-5 pb-6 rounded-2xl border border-gray-200 flex-col justify-start items-center gap-5 flex">
              <div className="w-full justify-between items-center md:gap-8 gap-4 flex lg:flex-nowrap flex-wrap border-b border-gray-200 pb-5">
                <div className="w-full justify-between items-center gap-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap">
                      Return Request Date :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      April 20, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup On :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      April 28, 2024
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Return Reason :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      {" "}
                      Quality Issues
                    </h6>
                  </div>
                  <div className="flex flex-col md:justify-start justify-center sm:items-start items-center">
                    <h6 className="text-gray-400 text-base font-semibold leading-relaxed">
                      Pickup To :
                    </h6>
                    <h6 className="text-black text-base font-semibold leading-relaxed">
                      Rajkot, Gujrat, India
                    </h6>
                  </div>
                </div>
                <div className="md:w-auto w-full flex-col lg:justify-center justify-start lg:items-end items-start gap-2.5 inline-flex">
                  <h6 className="lg:text-right sm:text-start text-center text-gray-400 text-base font-semibold leading-relaxed whitespace-nowrap w-full">
                    Order :<span className="text-black"> #52524585426</span>
                  </h6>
                  <button className="sm:w-fit w-full px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 bg-transparent hover:bg-gray-50 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-5 whitespace-nowrap">
                      Download Return Report
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex sm:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718868765.png"
                  alt="Flora EDP Perfume for Women image"
                />
                <div className="w-full flex-col sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                  <h5 className="text-black text-lg font-semibold leading-relaxed sm:text-start text-center">
                    Flora EDP Perfume for Women | Strong and Long Lasting Spray
                  </h5>
                  <div className="w-full sm:justify-start justify-center sm:items-start items-center gap-5 inline-flex">
                    <a className="group justify-start items-center gap-2.5 flex border-r border-indigo-600 pr-5">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                        Re-Order
                      </h6>
                    </a>
                    <a className="group justify-start items-center gap-2.5 flex">
                      <h6 className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
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
  );
}
