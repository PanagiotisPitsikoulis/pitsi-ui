export default function IncentivePageWithFourColumnGrid() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex max-sm:flex-col items-center gap-5 group cursor-grab">
            <span className="w-11 h-11 bg-indigo-50 rounded-full p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="font-normal text-xs py-[1px] text-gray-500 mb-1 max-sm:text-center">
                The shipping is on your place
              </p>
              <p className="font-medium text-sm leading-6 text-black max-sm:text-center">
                Free Delivery Is Available
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col items-center gap-5 group cursor-grab">
            <span className="w-11 h-11 bg-indigo-50 rounded-full p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="font-normal text-xs py-[1px] text-gray-500 mb-1 max-sm:text-center">
                Buy and get free gift
              </p>
              <p className="font-medium text-sm leading-6 text-black max-sm:text-center">
                Free Gift On $1100 Up Shopping
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col items-center gap-5 group cursor-grab">
            <span className="w-11 h-11 bg-indigo-50 rounded-full p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="font-normal text-xs py-[1px] text-gray-500 mb-1 max-sm:text-center">
                Shop is available in city
              </p>
              <p className="font-medium text-sm leading-6 text-black max-sm:text-center">
                All Item Is Available In Shop
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col items-center gap-5 group cursor-grab">
            <span className="w-11 h-11 bg-indigo-50 rounded-full p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="font-normal text-xs py-[1px] text-gray-500 mb-1 max-sm:text-center">
                Plz get your discount
              </p>
              <p className="font-medium text-sm leading-6 text-black max-sm:text-center">
                Get 100% Discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
