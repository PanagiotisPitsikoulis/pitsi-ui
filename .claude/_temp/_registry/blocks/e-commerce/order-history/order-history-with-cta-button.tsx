export default function OrderHistoryWithCtaButton() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="lg:pb-12 pb-7">
          <h2 className="w-full text-gray-900 text-3xl font-extrabold font-manrope leading-normal text-center lg:text-left">
            Order History
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          <div className="w-full md:justify-between justify-center lg:items-center flex lg:gap-14 gap-8 lg:flex-row flex-col md:mb-0 mb-4">
            <div className="md:justify-start justify-center md:items-start items-center lg:gap-14 gap-5 grid sm:grid-cols-4 grid-col-1">
              <a className="text-indigo-600 text-lg font-medium leading-8 whitespace-nowrap">
                All Order(50)
              </a>
              <a className="hover:text-indigo-600 transition-all duration-700 ease-in-out text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                Pending(10)
              </a>
              <a className="hover:text-indigo-600 transition-all duration-700 ease-in-out text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                Completed(8)
              </a>
              <a className="hover:text-indigo-600 transition-all duration-700 ease-in-out text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                Cancelled(22)
              </a>
            </div>
            <div className="lg:w-fit w-full justify-end items-center gap-3 flex sm:flex-row flex-col">
              <button className="lg:w-fit sm:w-full w-fit h-10 px-3.5 py-2 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-transparent hover:bg-indigo-100 transition-all duration-700 ease-in-out justify-center items-center flex">
                <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-snug">
                  View Invoice
                </span>
              </button>
              <button className="lg:w-fit sm:w-full w-fit h-10 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-normal">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-7 inline-flex">
            <ul className="w-full px-6 py-4 rounded-xl border border-gray-200 justify-start items-center md:gap-8 gap-0 md:grid grid-cols-12 hidden">
              <li className="lg:col-span-4 md:col-span-5 col-span-12 text-gray-900 text-xl font-medium leading-8">
                Item
              </li>
              <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center gap-8 flex">
                <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                  Status
                </li>
                <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                  Total
                </li>
                <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                  Details
                </li>
              </div>
            </ul>
            <div className="w-full flex flex-col gap-7">
              <div className="grid grid-cols-12 w-full px-6 md:pb-12 pb-7 justify-start items-center md:gap-8 gap-3 border-b border-gray-300">
                <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 flex md:flex-row flex-col">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681934.png"
                    alt="Story Book image"
                  />
                  <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-loose">
                      Adventure Story Book
                    </h4>
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Qty : 1
                    </h6>
                  </div>
                </div>
                <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                  <h5 className="md:col-span-2 col-span-12 w-full text-amber-500 text-lg font-medium leading-8 text-center">
                    Pending
                    <span className="text-gray-400"> - 5d left</span>
                  </h5>
                  <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-900 text-lg font-medium leading-8">
                    $452.23
                  </h5>
                  <div className="md:col-span-2 col-span-12 w-full flex justify-center">
                    <button className="p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                      <span className="px-1.5 text-white text-xs font-medium leading-5">
                        Order Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-12 grid-cols-1 w-full px-6 md:pb-12 pb-7 justify-start items-center md:gap-8 gap-3 border-b border-gray-300">
                <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 flex md:flex-row flex-col">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681946.png"
                    alt="Travelling Backpack image"
                  />
                  <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-loose">
                      Travelling Backpack
                    </h4>
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Qty : 2
                    </h6>
                  </div>
                </div>
                <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                  <h5 className="md:col-span-2 col-span-12 w-full text-center text-green-600 text-lg font-medium leading-8">
                    Delivered
                  </h5>
                  <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-900 text-lg font-medium leading-8">
                    $452.23
                  </h5>
                  <div className="md:col-span-2 col-span-12 w-full flex justify-center">
                    <button className="p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                      <span className="px-1.5 text-white text-xs font-medium leading-5">
                        Order Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-12 grid-cols-1 w-full px-6 pb-6 justify-start items-center md:gap-8 gap-3">
                <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 flex md:flex-row flex-col">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1715681957.png"
                    alt="Mirrorless Cameras image"
                  />
                  <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-loose">
                      Mirrorless Cameras
                    </h4>
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Qty : 2
                    </h6>
                  </div>
                </div>
                <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                  <h5 className="md:col-span-2 col-span-12 w-full text-center text-green-600 text-lg font-medium leading-8">
                    Delivered
                  </h5>
                  <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-900 text-lg font-medium leading-8">
                    $452.23
                  </h5>
                  <div className="md:col-span-2 col-span-12 w-full flex justify-center">
                    <button className="p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                      <span className="px-1.5 text-white text-xs font-medium leading-5">
                        Order Details
                      </span>
                    </button>
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
