export default function OrderHistoryWithDetail() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-3 inline-flex md:mb-12 mb-8">
          <h2 className="text-center text-black text-3xl font-semibold font-manrope leading-normal">
            Order History
          </h2>
          <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
            Stay up-to-date on the status of your most recent orders,
            effortlessly handle returns, and uncover
          </p>
        </div>
        <div className="w-full py-6 border-t border-b border-gray-100 justify-start items-center xl:gap-12 gap-8 grid grid-cols-12 mb-10">
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 w-full justify-start items-start gap-8 flex md:flex-row flex-col">
            <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Order ID
              </h6>
              <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                #1023498789
              </h3>
            </div>
            <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Delivery Date
              </h6>
              <h3 className="text-black text-2xl font-semibold font-manrope leading-9 lg:whitespace-nowrap">
                May 02, 2024
              </h3>
            </div>
            <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Payment Method
              </h6>
              <h3 className="text-black text-2xl font-semibold font-manrope leading-9 lg:whitespace-nowrap">
                Cash on Delivery
              </h3>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 w-full lg:justify-end items-start gap-4 flex md:flex-row flex-col">
            <button className="lg:w-fit w-full px-6 py-3 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:bg-indigo-50 hover:border-transparent transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-2 py-px text-gray-900 text-lg font-semibold leading-7 whitespace-nowrap">
                View Order
              </span>
            </button>
            <button className="lg:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 text-white text-lg font-semibold leading-8 whitespace-nowrap">
                View Invoice
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex-col justify-start items-center gap-8 inline-flex">
          <div className="w-full pb-6 border-b border-gray-500 flex-col justify-start items-start md:gap-6 gap-4 flex">
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1715408661.png"
                alt="Women's Satchel Bag image"
              />
              <div className="w-full justify-between md:items-start items-center md:gap-10 gap-4 flex md:flex-row flex-col">
                <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Leather Women's Satchel Bag
                  </h3>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Half Moon Shoulder Bag
                  </h5>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Qty: 1
                  </h5>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Order ID:
                    <span className="text-gray-800">#1023498789</span>
                  </h5>
                </div>
                <h4 className="text-right text-black text-xl font-semibold leading-loose">
                  Price $80.00
                </h4>
              </div>
            </div>
            <div className="w-full justify-between items-center flex md:flex-row flex-col gap-4">
              <div className="w-full md:justify-start justify-center items-center gap-3 flex">
                <h6 className="text-gray-600 text-xs font-normal leading-5">
                  Delivered On April 28, 2024
                </h6>
              </div>
              <div className="justify-end items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                <a className="text-right text-black hover:text-indigo-600 transition-all duration-700 ease-in-out text-sm font-medium leading-snug whitespace-nowrap">
                  View product
                </a>
                <a className="text-right text-black hover:text-indigo-600 transition-all duration-700 ease-in-out text-sm font-medium leading-snug whitespace-nowrap">
                  Buy again
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pb-6 border-b border-gray-500 flex-col justify-start items-start md:gap-6 gap-4 flex">
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1715408674.png"
                alt="Flower port image"
              />
              <div className="w-full justify-between md:items-start items-center md:gap-10 gap-4 flex md:flex-row flex-col">
                <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Decoration Flower port
                  </h3>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Half Moon Shoulder Bag
                  </h5>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Qty: 1
                  </h5>
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Order ID:
                    <span className="text-gray-800">#1023498789</span>
                  </h5>
                </div>
                <h4 className="text-right text-black text-xl font-semibold leading-loose">
                  Price $80.00
                </h4>
              </div>
            </div>
            <div className="w-full justify-between items-center flex md:flex-row flex-col gap-4">
              <div className="justify-start items-center gap-3 flex">
                <h6 className="text-gray-600 text-xs font-normal leading-5">
                  Not Delivered On April 28, 2024
                </h6>
              </div>
              <div className="justify-end items-center md:gap-5 gap-4 flex sm:flex-row flex-col">
                <a className="text-right text-black hover:text-indigo-600 transition-all duration-700 ease-in-out text-sm font-medium leading-snug whitespace-nowrap">
                  View product
                </a>
                <a className="text-right text-black hover:text-indigo-600 transition-all duration-700 ease-in-out text-sm font-medium leading-snug whitespace-nowrap">
                  Buy again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
