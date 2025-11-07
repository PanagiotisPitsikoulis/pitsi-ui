export default function OrderSummaryWithTabs() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
          <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
            Order Summaries
          </h2>
          <p className="text-center text-gray-500 text-lg font-normal leading-8">
            Order summaries are essential for both customers and sellers,
            ensuring transparency and accuracy in transactions.
          </p>
        </div>
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex lg:mt-14 mt-8">
          <div className="w-full justify-between items-center gap-10 flex md:flex-row flex-col">
            <div className="justify-start items-start gap-3.5 flex">
              <h4 className="text-gray-500 text-2xl font-medium font-manrope leading-9 whitespace-nowrap">
                Order ID:
              </h4>
              <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                #214525001
              </h4>
            </div>
            <div className="w-full md:justify-end justify-start items-start gap-3.5 flex sm:flex-row flex-col">
              <button className="md:w-fit w-full px-5 py-2.5 rounded-lg shadow border hover:border-transparent hover:bg-indigo-50 transition-all duration-700 ease-in-out border-indigo-600 justify-center items-center flex">
                <span className="px-2 text-center text-indigo-600 text-base font-semibold leading-relaxed">
                  Invoice
                </span>
              </button>
              <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow justify-center items-center flex">
                <span className="px-2 py-px text-center text-white text-base font-semibold leading-relaxed">
                  Track Order
                </span>
              </button>
            </div>
          </div>
          <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
            <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-lg shadow justify-center items-center flex">
              <span className="px-1.5 py-px text-center text-white text-base font-semibold leading-relaxed">
                Summary
              </span>
            </button>
            <button className="group md:w-fit w-full px-5 py-2.5 rounded-lg shadow border border-indigo-600 hover:bg-indigo-50 hover:border-transparent transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-2 text-center text-indigo-600 text-base font-semibold leading-relaxed">
                Payment
              </span>
            </button>
            <button className="group md:w-fit w-full px-5 py-2.5 rounded-lg shadow border border-indigo-600 hover:bg-indigo-50 hover:border-transparent transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-2.5 text-center text-indigo-600 text-base font-semibold leading-relaxed">
                Delivery
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <div className="w-full pb-8 border-b border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1715407957.png"
                alt="Titan Watch image"
              />
              <div className="w-full justify-between items-center lg:gap-10 gap-4 flex md:flex-row flex-col">
                <div className="flex-col justify-start md:items-start items-center gap-4 inline-flex">
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Titan Watch
                  </h4>
                  <h4 className=" text-gray-500 text-xl font-normal leading-loose">
                    Midnight Aluminum Case
                  </h4>
                </div>
                <div className="justify-center items-center gap-5 flex">
                  <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  <input
                    type="text"
                    className="w-11 h-11 text-gray-900 placeholder-gray-900 focus:outline-none text-lg font-medium leading-8 px-1 py-1.5 text-center bg-white rounded-full border border-gray-200 justify-center items-center flex"
                  />
                  <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                </div>
                <h3 className="text-center text-black text-3xl font-semibold font-manrope leading-normal">
                  $120.00
                </h3>
              </div>
            </div>
            <div className="w-full pb-8 border-b border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1715407968.png"
                alt="Water Bottle image"
              />
              <div className="w-full justify-between items-center lg:gap-10 gap-4 flex md:flex-row flex-col">
                <div className="flex-col justify-start md:items-start items-center gap-4 inline-flex">
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Water Bottle
                  </h4>
                  <h4 className=" text-gray-500 text-xl font-normal leading-loose">
                    Midnight Aluminum Case
                  </h4>
                </div>
                <div className="justify-center items-center gap-5 flex">
                  <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  <input
                    type="text"
                    className="w-11 h-11 text-gray-900 placeholder-gray-900 focus:outline-none text-lg font-medium leading-8 px-1 py-1.5 text-center bg-white rounded-full border border-gray-200 justify-center items-center flex"
                  />
                  <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                </div>
                <h3 className="text-center text-black text-3xl font-semibold font-manrope leading-normal">
                  $100.00
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl flex-col justify-start items-start gap-6 flex">
            <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h4 className="text-gray-500 text-xl font-normal leading-8">
                  Subtotal
                </h4>
                <h4 className="text-right text-gray-900 text-xl font-semibold leading-8">
                  $220.00
                </h4>
              </div>
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h4 className="text-gray-500 text-xl font-normal leading-8">
                  Shipping Charge
                </h4>
                <h4 className="text-right text-gray-900 text-xl font-semibold leading-8">
                  $30.00
                </h4>
              </div>
            </div>
            <div className="pb-6 border-b border-gray-200 w-full justify-between items-start gap-6 inline-flex">
              <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                Total
              </h4>
              <h4 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
                $190.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
