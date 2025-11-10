export default function IncentivePageWithFourColumnGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 min-[500px]:grid-cols-2 lg:grid-cols-4">
          <div className="group flex cursor-grab items-center gap-5 max-sm:flex-col">
            <span className="h-11 w-11 rounded-full bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="mb-1 py-[1px] text-xs font-normal text-gray-500 max-sm:text-center">
                The shipping is on your place
              </p>
              <p className="text-sm leading-6 font-medium text-black max-sm:text-center">
                Free Delivery Is Available
              </p>
            </div>
          </div>
          <div className="group flex cursor-grab items-center gap-5 max-sm:flex-col">
            <span className="h-11 w-11 rounded-full bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="mb-1 py-[1px] text-xs font-normal text-gray-500 max-sm:text-center">
                Buy and get free gift
              </p>
              <p className="text-sm leading-6 font-medium text-black max-sm:text-center">
                Free Gift On $1100 Up Shopping
              </p>
            </div>
          </div>
          <div className="group flex cursor-grab items-center gap-5 max-sm:flex-col">
            <span className="h-11 w-11 rounded-full bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="mb-1 py-[1px] text-xs font-normal text-gray-500 max-sm:text-center">
                Shop is available in city
              </p>
              <p className="text-sm leading-6 font-medium text-black max-sm:text-center">
                All Item Is Available In Shop
              </p>
            </div>
          </div>
          <div className="group flex cursor-grab items-center gap-5 max-sm:flex-col">
            <span className="h-11 w-11 rounded-full bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data">
              <p className="mb-1 py-[1px] text-xs font-normal text-gray-500 max-sm:text-center">
                Plz get your discount
              </p>
              <p className="text-sm leading-6 font-medium text-black max-sm:text-center">
                Get 100% Discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
