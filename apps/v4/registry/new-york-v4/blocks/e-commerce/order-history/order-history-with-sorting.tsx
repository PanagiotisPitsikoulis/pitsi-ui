export default function OrderHistoryWithSorting() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-7 flex w-full flex-col items-center justify-between gap-5 sm:flex-row sm:items-start sm:gap-10 lg:mb-12">
          <h2 className="font-manrope text-3xl leading-relaxed font-extrabold text-black">
            Your Orders
          </h2>
          <div className="flex items-center justify-start rounded-lg border border-gray-300">
            <button className="flex h-12 w-12 items-center justify-center rounded-l-lg border-r border-gray-300 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"></button>
            <div className="inline-flex flex-col items-start justify-start transition-all duration-700 ease-in-out hover:bg-gray-50">
              <div className="relative w-full pr-3 transition-all duration-700 ease-in-out">
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
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start gap-9 rounded-2xl border border-gray-300 p-4 lg:p-9">
          <div className="grid w-full grid-cols-1 items-center justify-center gap-y-5 border-b border-gray-300 pb-9 sm:justify-start lg:grid-cols-12 lg:gap-16 lg:gap-y-0">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 md:grid-cols-4 lg:col-span-9">
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Order Number :<span className="text-black">#10234987</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Order Date :<span className="text-black">Mar 18, 2021</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Total Amount :<span className="text-black">$176.00</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Status :<span className="text-amber-500">Processed</span>
              </h6>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:justify-end lg:col-span-3">
              <button className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-gray-900">
                  View Invoice
                </span>
              </button>
              <button className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-white">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex w-full items-center justify-center gap-2 md:justify-start">
            <h6 className="text-base leading-relaxed font-medium text-gray-400">
              Estimated Delivery Tue, May 7 - Mon May 13
            </h6>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 border-b border-gray-300 pb-9 md:flex-row md:gap-8">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664967.png"
              alt="Travelling Bag image"
            />
            <div className="inline-flex flex-col items-center justify-start gap-4 md:items-start md:gap-5">
              <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:items-start">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Travelling Bag
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-semibold text-black">
                    $80.00
                  </h4>
                </div>
                <p className="text-center text-base leading-relaxed font-medium text-gray-400 md:text-start">
                  The Blue Polypropylene Trolley Suitcase with 4-Wheel
                  360-Degree Wheeling System. Engineered for Effortless Mobility
                  and Durability, This Sleek Suitcase Offers Seamless
                  Maneuverability in Any Direction, Making...
                </p>
              </div>
              <div className="flex w-full flex-col justify-between gap-3 lg:flex-row">
                <div className="inline-flex w-full items-center justify-center gap-2 md:items-start md:justify-start">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Size :<span className="text-gray-900">67’ in</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Color :<span className="text-gray-900">Blue</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Quantity :<span className="text-gray-900">1</span>
                  </h6>
                </div>
                <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start lg:text-right">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664983.png"
              alt="Travel Essentials image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4 md:gap-5">
              <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:items-start">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Compact Travel Essentials
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-semibold text-black">
                    $96.00
                  </h4>
                </div>
                <p className="text-center text-base leading-relaxed font-medium text-gray-400 md:text-start">
                  Elevate Your Travel Experience with the Timeless
                  Sophistication of Mini Leather Black Bags. Crafted from
                  Premium Materials, These Bags Exude Professionalism and Style,
                  Making Them Ideal Companions for...
                </p>
              </div>
              <div className="flex w-full flex-col justify-between gap-3 lg:flex-row">
                <div className="flex w-full items-center justify-center gap-2 md:items-start md:justify-start">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Size :
                    <span className="text-base leading-relaxed font-medium text-gray-900">
                      5’ in
                    </span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Color :
                    <span className="text-base leading-relaxed font-medium text-gray-900">
                      Black
                    </span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Quantity :
                    <span className="text-base leading-relaxed font-medium text-gray-900">
                      1
                    </span>
                  </h6>
                </div>
                <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start lg:text-right">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 inline-flex w-full flex-col items-center justify-start gap-9 rounded-2xl border border-gray-300 p-4 lg:p-9">
          <div className="grid w-full grid-cols-1 items-center justify-center gap-y-5 border-b border-gray-300 pb-9 sm:justify-start lg:grid-cols-12 lg:gap-16 lg:gap-y-0">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 md:grid-cols-4 lg:col-span-9">
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Order Number :<span className="text-black">#10234987</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Order Date :<span className="text-black">Mar 18, 2021</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Total Amount :<span className="text-black">$176.00</span>
              </h6>
              <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                Status :<span className="text-green-600">Delivered</span>
              </h6>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:justify-end lg:col-span-3">
              <button className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-gray-900">
                  View Invoice
                </span>
              </button>
              <button className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 lg:w-fit">
                <span className="px-1.5 py-px text-sm leading-snug font-medium whitespace-nowrap text-white">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664994.png"
              alt="Golden Metal Belt Watch image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4 md:gap-5">
              <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:items-start">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Classy Golden Metal Belt Watch
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-semibold text-black">
                    $62.00
                  </h4>
                </div>
                <p className="text-center text-base leading-relaxed font-medium text-gray-400 md:text-start">
                  Indulge in the Luxurious Charm of Golden Metal Belt Watches,
                  Crafted with Precision and Style. Each Timepiece Embodies
                  Sophistication and Prestige, Elevating Every Look with
                  Effortless Elegance. Whether Paired...
                </p>
              </div>
              <div className="flex w-full flex-col justify-between gap-3 lg:flex-row">
                <div className="flex w-full items-center justify-center gap-2 md:items-start md:justify-start">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Color :<span className="text-gray-900">Golden</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Quantity :<span className="text-gray-900">1</span>
                  </h6>
                </div>
                <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start lg:text-right">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
