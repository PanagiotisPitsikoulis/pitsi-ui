export default function OrderHistoryWithBanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-8 lg:mb-12">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-extrabold text-black sm:text-start">
            Your Orders
          </h2>
        </div>
        <div className="tabs flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">
          <div className="block w-full">
            <ul className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:gap-1 lg:gap-5">
              <li>
                <a
                  className="active tablink tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg inline-block items-start justify-start gap-2.5 px-8 py-1.5 text-lg leading-8 font-medium text-gray-900"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  className="tablink tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg inline-block items-start justify-start gap-2.5 px-8 py-1.5 text-lg leading-8 font-medium whitespace-nowrap text-gray-900"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Not Yet Shipped
                </a>
              </li>
              <li>
                <a
                  className="tablink tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:rounded-lg inline-block items-start justify-start gap-2.5 px-8 py-1.5 text-lg leading-8 font-medium whitespace-nowrap text-gray-900"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  Cancelled Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center justify-center sm:items-start sm:justify-start lg:items-end lg:justify-end">
            <div className="inline-flex flex-col items-start justify-start">
              <div className="relative w-full rounded-lg border border-gray-200 pr-3 transition-all duration-700 ease-in-out">
                <select
                  id="countries"
                  className="block h-12 w-full appearance-auto rounded-lg px-4 px-5 py-2.5 text-base leading-relaxed font-semibold text-gray-600 text-gray-900 placeholder-gray-900 focus:outline-none"
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
            className="tabcontent hidden"
          ></div>
          <div
            id="tabs-with-underline-3"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
            className="tabcontent hidden"
          ></div>
        </div>
        <div className="my-8 inline-flex w-full flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 px-9 pt-6 pb-9">
          <div className="flex w-full flex-col items-center justify-between gap-6 border-b border-gray-300 pb-6 lg:flex-row lg:gap-16">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start sm:gap-3 lg:w-[781px]">
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Order Date :<span className="text-black">Mar 18, 2023</span>
              </h6>
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Total Amount :<span className="text-black">$859.00</span>
              </h6>
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Ship To :
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-center gap-4 sm:items-start sm:justify-start sm:gap-2.5 lg:w-[299px] lg:items-end lg:justify-center">
              <div className="text-right">
                <h4 className="text-xl leading-loose font-semibold text-gray-400">
                  Order :<span className="text-black"> #25610235901</span>
                </h4>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:gap-3 lg:justify-end">
                <button className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:border-transparent hover:bg-indigo-50 sm:w-fit">
                  <span className="px-3.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-gray-900">
                    View Invoice
                  </span>
                </button>
                <button className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-indigo-800 sm:w-fit">
                  <span className="px-4 py-px text-sm leading-snug font-medium whitespace-nowrap text-white">
                    View Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full items-center justify-between rounded-lg bg-amber-50 p-2.5">
            <div className="flex items-start justify-start gap-1.5">
              <a href="#"></a>
              <span className="text-xs leading-normal font-medium text-amber-500">
                Please rate your experience the seller
              </span>
            </div>
            <a href="#"></a>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 pt-3 md:gap-6">
            <h4 className="w-full text-center text-xl leading-8 font-semibold text-black md:text-start">
              Delivered May 10
            </h4>
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715670933.png"
                alt="OnePlus 12R image"
              />
              <div className="inline-flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:gap-5">
                <div className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <h4 className="text-center text-xl leading-8 font-semibold text-black md:text-start">
                    OnePlus 12R (Iron Gray, 8GB RAM, 256GB Storage)
                  </h4>
                  <p className="text-center text-base leading-relaxed font-medium text-gray-400 md:text-start">
                    Return or Replace items : Eligible through July 12, 2023
                  </p>
                </div>
                <div className="inline-flex items-start justify-start gap-5">
                  <a className="flex items-center justify-start gap-2.5 border-r border-indigo-600 pr-5">
                    <h6 className="text-base leading-relaxed font-semibold text-indigo-600">
                      Buy it again
                    </h6>
                  </a>
                  <a className="flex items-center justify-start gap-2.5">
                    <h6 className="text-base leading-relaxed font-semibold text-indigo-600">
                      View Product
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 px-9 pt-6 pb-9">
          <div className="flex w-full flex-col items-center justify-between gap-6 border-b border-gray-300 pb-6 lg:flex-row lg:gap-16">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start sm:gap-3 lg:w-[781px]">
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Order Date :<span className="text-black">Jan 21, 2022</span>
              </h6>
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Total Amount :<span className="text-black">$1200.00</span>
              </h6>
              <h6 className="flex w-full flex-col text-center text-base leading-relaxed font-semibold text-gray-400 sm:text-start">
                Ship To :
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-center gap-4 sm:items-start sm:justify-start sm:gap-2.5 lg:w-[299px] lg:items-end lg:justify-center">
              <div className="text-right">
                <h4 className="text-xl leading-loose font-semibold text-gray-400">
                  Order :<span className="text-black"> #25610235901</span>
                </h4>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:gap-3 lg:justify-end">
                <button className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:border-transparent hover:bg-indigo-50 sm:w-fit">
                  <span className="px-3.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-gray-900">
                    View Invoice
                  </span>
                </button>
                <button className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-indigo-800 sm:w-fit">
                  <span className="px-4 py-px text-sm leading-snug font-medium whitespace-nowrap text-white">
                    View Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 pt-3 md:gap-6">
            <h4 className="w-full text-center text-xl leading-8 font-semibold text-black md:text-start">
              Delivered May 10
            </h4>
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715670943.png"
                alt="MacBook Pro image"
              />
              <div className="inline-flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:gap-5">
                <div className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <h4 className="text-center text-xl leading-8 font-semibold text-black md:text-start">
                    Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core
                    CPU and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black
                  </h4>
                  <p className="text-center text-base leading-relaxed font-medium text-gray-400 md:text-start">
                    Return or Replace items : Eligible through July 12, 2023
                  </p>
                </div>
                <div className="inline-flex items-start justify-start gap-5">
                  <a className="flex items-center justify-start gap-2.5 border-r border-indigo-600 pr-5">
                    <h6 className="text-base leading-relaxed font-semibold text-indigo-600">
                      Buy it again
                    </h6>
                  </a>
                  <a className="flex items-center justify-start gap-2.5">
                    <h6 className="text-base leading-relaxed font-semibold text-indigo-600">
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
  )
}
