export default function OrderHistoryWithSorting() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-between sm:items-start items-center sm:gap-10 gap-5 flex sm:flex-row flex-col lg:mb-12 mb-7">
          <h2 className="text-black text-3xl font-extrabold font-manrope leading-relaxed">
            Your Orders
          </h2>
          <div className="rounded-lg border border-gray-300 justify-start items-center flex">
            <button className="rounded-l-lg border-r border-gray-300 bg-white w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-all duration-700 ease-in-out"></button>
            <div className="flex-col justify-start items-start inline-flex hover:bg-gray-50 transition-all duration-700 ease-in-out">
              <div className="relative w-full transition-all duration-700 ease-in-out pr-3">
                <select
                  id="countries"
                  className="h-12 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none text-gray-900 placeholder-gray-900 text-base font-semibold leading-relaxed px-5 py-2.5 appearance-auto "
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
        <div className="w-full lg:p-9 p-4 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-9 inline-flex">
          <div className="w-full sm:justify-start justify-center items-center lg:gap-16 lg:gap-y-0 gap-y-5 grid lg:grid-cols-12 grid-cols-1 border-b border-gray-300 pb-9">
            <div className="lg:col-span-9 w-full justify-start items-center grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Number :<span className="text-black">#10234987</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Date :<span className="text-black">Mar 18, 2021</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Total Amount :<span className="text-black">$176.00</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Status :<span className="text-amber-500">Processed</span>
              </h6>
            </div>
            <div className="lg:col-span-3 col-span-12 sm:justify-end justify-center sm:items-start items-center gap-5 flex sm:flex-row flex-col">
              <button className="lg:w-fit w-full px-3.5 py-2 h-10 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-indigo-50 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-300 justify-center items-center flex">
                <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-snug whitespace-nowrap">
                  View Invoice
                </span>
              </button>
              <button className="lg:w-fit w-full px-3.5 py-2 h-10 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug whitespace-nowrap">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:justify-start justify-center items-center gap-2 inline-flex">
            <h6 className="text-gray-400 text-base font-medium leading-relaxed">
              Estimated Delivery Tue, May 7 - Mon May 13
            </h6>
          </div>
          <div className="justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col pb-9 border-b border-gray-300">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664967.png"
              alt="Travelling Bag image"
            />
            <div className="flex-col justify-start md:items-start items-center md:gap-5 gap-4 inline-flex">
              <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                <div className="w-full justify-between md:items-start items-center gap-3 flex md:flex-row flex-col">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Travelling Bag
                  </h4>
                  <h4 className=" text-right text-black text-xl font-semibold leading-8">
                    $80.00
                  </h4>
                </div>
                <p className="text-gray-400 text-base font-medium leading-relaxed md:text-start text-center">
                  The Blue Polypropylene Trolley Suitcase with 4-Wheel
                  360-Degree Wheeling System. Engineered for Effortless Mobility
                  and Durability, This Sleek Suitcase Offers Seamless
                  Maneuverability in Any Direction, Making...
                </p>
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between gap-3">
                <div className="w-full md:justify-start justify-center md:items-start items-center gap-2 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Size :<span className="text-gray-900">67’ in</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Color :<span className="text-gray-900">Blue</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Quantity :<span className="text-gray-900">1</span>
                  </h6>
                </div>
                <a className="w-full lg:text-right md:text-start text-center text-indigo-600 text-base font-semibold leading-relaxed">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
          <div className="justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664983.png"
              alt="Travel Essentials image"
            />
            <div className="flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
              <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                <div className="w-full justify-between md:items-start items-center gap-3 flex md:flex-row flex-col">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Compact Travel Essentials
                  </h4>
                  <h4 className="text-right text-black text-xl font-semibold leading-8">
                    $96.00
                  </h4>
                </div>
                <p className="text-gray-400 text-base font-medium leading-relaxed md:text-start text-center">
                  Elevate Your Travel Experience with the Timeless
                  Sophistication of Mini Leather Black Bags. Crafted from
                  Premium Materials, These Bags Exude Professionalism and Style,
                  Making Them Ideal Companions for...
                </p>
              </div>
              <div className="w-full justify-between gap-3 flex lg:flex-row flex-col">
                <div className="w-full flex md:justify-start justify-center md:items-start items-center gap-2">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Size :
                    <span className="text-gray-900 text-base font-medium leading-relaxed">
                      5’ in
                    </span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Color :
                    <span className="text-gray-900 text-base font-medium leading-relaxed">
                      Black
                    </span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Quantity :
                    <span className="text-gray-900 text-base font-medium leading-relaxed">
                      1
                    </span>
                  </h6>
                </div>
                <a className="w-full lg:text-right md:text-start text-center text-indigo-600 text-base font-semibold leading-relaxed">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:p-9 p-4 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-9 inline-flex mt-8">
          <div className="w-full sm:justify-start justify-center items-center lg:gap-16 lg:gap-y-0 gap-y-5 grid lg:grid-cols-12 grid-cols-1 border-b border-gray-300 pb-9">
            <div className="lg:col-span-9 w-full justify-start items-center grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Number :<span className="text-black">#10234987</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Order Date :<span className="text-black">Mar 18, 2021</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Total Amount :<span className="text-black">$176.00</span>
              </h6>
              <h6 className="w-full sm:items-start items-center text-gray-400 text-base font-semibold leading-relaxed flex flex-col">
                Status :<span className="text-green-600">Delivered</span>
              </h6>
            </div>
            <div className="lg:col-span-3 col-span-12 sm:justify-end justify-center sm:items-start items-center gap-5 flex sm:flex-row flex-col">
              <button className="lg:w-fit w-full px-3.5 py-2 h-10 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-indigo-50 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-300 justify-center items-center flex">
                <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-snug whitespace-nowrap">
                  View Invoice
                </span>
              </button>
              <button className="lg:w-fit w-full px-3.5 py-2 h-10 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug whitespace-nowrap">
                  View Order
                </span>
              </button>
            </div>
          </div>
          <div className="justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1715664994.png"
              alt="Golden Metal Belt Watch image"
            />
            <div className="flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
              <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                <div className="w-full justify-between md:items-start items-center gap-3 flex md:flex-row flex-col">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Classy Golden Metal Belt Watch
                  </h4>
                  <h4 className="text-right text-black text-xl font-semibold leading-8">
                    $62.00
                  </h4>
                </div>
                <p className="text-gray-400 text-base font-medium leading-relaxed md:text-start text-center">
                  Indulge in the Luxurious Charm of Golden Metal Belt Watches,
                  Crafted with Precision and Style. Each Timepiece Embodies
                  Sophistication and Prestige, Elevating Every Look with
                  Effortless Elegance. Whether Paired...
                </p>
              </div>
              <div className="w-full justify-between gap-3 flex lg:flex-row flex-col">
                <div className="w-full flex md:justify-start justify-center md:items-start items-center gap-2">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Color :<span className="text-gray-900">Golden</span>
                  </h6>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Quantity :<span className="text-gray-900">1</span>
                  </h6>
                </div>
                <a className="w-full lg:text-right md:text-start text-center text-indigo-600 text-base font-semibold leading-relaxed">
                  View Product | Buy Again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
