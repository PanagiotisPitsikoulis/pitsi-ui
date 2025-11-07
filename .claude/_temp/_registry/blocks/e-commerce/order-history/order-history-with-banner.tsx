export default function OrderHistoryWithBanner() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="lg:mb-12 mb-8">
          <h2 className="w-full text-black text-3xl font-extrabold font-manrope leading-normal sm:text-start text-center">
            Your Orders
          </h2>
        </div>
        <div className="w-full justify-between items-center lg:gap-10 gap-4 flex lg:flex-row flex-col tabs">
          <div className="w-full block">
            <ul className="flex lg:gap-5 md:gap-1 gap-4 sm:flex-row flex-col sm:items-start items-center">
              <li>
                <a
                  className="active inline-block tablink text-gray-900 text-lg font-medium leading-8 px-8 py-1.5 justify-start items-start gap-2.5 tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  className="inline-block tablink text-gray-900 text-lg font-medium leading-8 px-8 py-1.5 justify-start items-start gap-2.5 whitespace-nowrap tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Not Yet Shipped
                </a>
              </li>
              <li>
                <a
                  className="inline-block tablink text-gray-900 text-lg font-medium leading-8 px-8 py-1.5 justify-start items-start gap-2.5 whitespace-nowrap tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  Cancelled Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex lg:items-end sm:items-start items-center lg:justify-end sm:justify-start justify-center">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="relative w-full transition-all duration-700 ease-in-out pr-3  rounded-lg border border-gray-200">
                <select
                  id="countries"
                  className="h-12 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none text-gray-900 placeholder-gray-900 text-base font-semibold leading-relaxed px-5 py-2.5 appearance-auto"
                >
                  <option selected>Past 12 Week</option>
                  <option value={2}>Past 14 Week</option>
                  <option value={3}>Past 14 Week</option>
                  <option value={4}>Past 14 Week</option>
                  <option value={5}>Past 14 Week</option>
                </select>
              </div>
            </div>
          </div>
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
            className="tabcontent"
          ></div>
          <div
            id="tabs-with-underline-2"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
            className="hidden tabcontent"
          ></div>
          <div
            id="tabs-with-underline-3"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
            className="hidden tabcontent"
          ></div>
        </div>
        <div className="w-full my-8 px-9 pt-6 pb-9 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-full justify-between items-center lg:gap-16 gap-6 pb-6 border-b border-gray-300 flex lg:flex-row flex-col">
            <div className="lg:w-[781px] w-full sm:justify-start justify-center items-center sm:gap-3 gap-4 flex sm:flex-row flex-col">
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Order Date :<span className="text-black">Mar 18, 2023</span>
              </h6>
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Total Amount :<span className="text-black">$859.00</span>
              </h6>
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Ship To :
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
            <div className="lg:w-[299px] w-full flex-col lg:justify-center sm:justify-start justify-center lg:items-end sm:items-start items-center sm:gap-2.5 gap-4 inline-flex">
              <div className="text-right">
                <h4 className="text-gray-400 text-xl font-semibold leading-loose">
                  Order :<span className="text-black"> #25610235901</span>
                </h4>
              </div>
              <div className="w-full lg:justify-end justify-start items-start sm:gap-3 gap-4 flex sm:flex-row flex-col">
                <button className="sm:w-fit w-full px-4 py-2 h-10 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 justify-center items-center flex">
                  <span className="px-3.5 py-px text-gray-900 text-sm font-medium leading-snug whitespace-nowrap">
                    View Invoice
                  </span>
                </button>
                <button className="sm:w-fit w-full px-4 py-2 h-10 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-4 py-px text-white text-sm font-medium leading-snug whitespace-nowrap">
                    View Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-2.5 bg-amber-50 rounded-lg justify-between items-center inline-flex">
            <div className="justify-start items-start gap-1.5 flex">
              <a href="#"></a>
              <span className="text-amber-500 text-xs font-medium leading-normal">
                Please rate your experience the seller
              </span>
            </div>
            <a href="#"></a>
          </div>
          <div className="w-full pt-3 flex-col justify-start items-center md:gap-6 gap-4 flex">
            <h4 className="w-full text-black text-xl font-semibold leading-8 md:text-start text-center">
              Delivered May 10
            </h4>
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715670933.png"
                alt="OnePlus 12R image"
              />
              <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-5 gap-4 inline-flex">
                <div className="flex-col md:justify-start justify-center md:items-start items-center gap-3 flex">
                  <h4 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                    OnePlus 12R (Iron Gray, 8GB RAM, 256GB Storage)
                  </h4>
                  <p className="text-gray-400 text-base font-medium leading-relaxed md:text-start text-center">
                    Return or Replace items : Eligible through July 12, 2023
                  </p>
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <a className="justify-start items-center gap-2.5 flex border-r border-indigo-600 pr-5">
                    <h6 className="text-indigo-600 text-base font-semibold leading-relaxed">
                      Buy it again
                    </h6>
                  </a>
                  <a className="justify-start items-center gap-2.5 flex">
                    <h6 className="text-indigo-600 text-base font-semibold leading-relaxed">
                      View Product
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-9 pt-6 pb-9 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-full justify-between items-center lg:gap-16 gap-6 pb-6 border-b border-gray-300 flex lg:flex-row flex-col">
            <div className="lg:w-[781px] w-full sm:justify-start justify-center items-center sm:gap-3 gap-4 flex sm:flex-row flex-col">
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Order Date :<span className="text-black">Jan 21, 2022</span>
              </h6>
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Total Amount :<span className="text-black">$1200.00</span>
              </h6>
              <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:text-start text-center">
                Ship To :
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
            <div className="lg:w-[299px] w-full flex-col lg:justify-center sm:justify-start justify-center lg:items-end sm:items-start items-center sm:gap-2.5 gap-4 inline-flex">
              <div className="text-right">
                <h4 className="text-gray-400 text-xl font-semibold leading-loose">
                  Order :<span className="text-black"> #25610235901</span>
                </h4>
              </div>
              <div className="w-full lg:justify-end justify-start items-start sm:gap-3 gap-4 flex sm:flex-row flex-col">
                <button className="sm:w-fit w-full px-4 py-2 h-10 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 justify-center items-center flex">
                  <span className="px-3.5 py-px text-gray-900 text-sm font-medium leading-snug whitespace-nowrap">
                    View Invoice
                  </span>
                </button>
                <button className="sm:w-fit w-full px-4 py-2 h-10 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-4 py-px text-white text-sm font-medium leading-snug whitespace-nowrap">
                    View Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full pt-3 flex-col justify-start items-center md:gap-6 gap-4 flex">
            <h4 className="w-full text-black text-xl font-semibold leading-8 md:text-start text-center">
              Delivered May 10
            </h4>
            <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715670943.png"
                alt="MacBook Pro image"
              />
              <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-5 gap-4 inline-flex">
                <div className="flex-col md:justify-start justify-center md:items-start items-center gap-3 flex">
                  <h4 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                    Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core
                    CPU and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black
                  </h4>
                  <p className="text-gray-400 text-base font-medium leading-relaxed md:text-start text-center">
                    Return or Replace items : Eligible through July 12, 2023
                  </p>
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <a className="justify-start items-center gap-2.5 flex border-r border-indigo-600 pr-5">
                    <h6 className="text-indigo-600 text-base font-semibold leading-relaxed">
                      Buy it again
                    </h6>
                  </a>
                  <a className="justify-start items-center gap-2.5 flex">
                    <h6 className="text-indigo-600 text-base font-semibold leading-relaxed">
                      View Product
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
