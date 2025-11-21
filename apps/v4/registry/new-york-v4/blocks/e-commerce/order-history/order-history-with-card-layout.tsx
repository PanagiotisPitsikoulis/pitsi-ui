export default function OrderHistoryWithCardLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex items-center justify-between max-md:flex-col">
          <div className="data">
            <h2 className="font-manrope mb-3 text-3xl leading-10 font-extrabold text-black">
              Order History
            </h2>
            <p className="text-base leading-7 font-normal text-gray-500">
              Order History Is Track Your Purchases and View Past Orders
            </p>
          </div>
          <div className="flex items-center gap-3 max-md:mt-5">
            <button className="rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
              Show Invoice
            </button>
            <button className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-400">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mb-11 flex w-full flex-col items-center justify-center gap-8 min-[620px]:flex-row">
          <div className="flex flex-col items-center gap-8 lg:w-full lg:flex-row">
            <div className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-gray-300 p-5 transition-all duration-500 hover:border-gray-400 hover:bg-indigo-50 sm:w-[280px] lg:w-full">
              <span className="flex items-center justify-center rounded-full bg-indigo-50 p-4"></span>
              <div className="data">
                <h5 className="font-manrope mb-0.5 text-2xl leading-9 font-bold text-black">
                  36
                </h5>
                <p className="text-base leading-7 font-medium text-gray-500">
                  Total Order
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-gray-300 p-5 transition-all duration-500 hover:border-gray-400 hover:bg-amber-50 sm:w-[280px] lg:w-full">
              <span className="flex items-center justify-center rounded-full bg-amber-50 p-4"></span>
              <div className="data">
                <h5 className="font-manrope mb-0.5 text-2xl leading-9 font-bold text-black">
                  24
                </h5>
                <p className="text-base leading-7 font-medium text-gray-500">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 lg:w-full lg:flex-row">
            <div className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-gray-300 p-5 transition-all duration-500 hover:border-gray-400 hover:bg-emerald-50 sm:w-[280px] lg:w-full">
              <span className="flex items-center justify-center rounded-full bg-emerald-50 p-4"></span>
              <div className="data">
                <h5 className="font-manrope mb-0.5 text-2xl leading-9 font-bold text-black">
                  2
                </h5>
                <p className="text-base leading-7 font-medium text-gray-500">
                  Active order
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-gray-300 p-5 transition-all duration-500 hover:border-gray-400 hover:bg-red-50 sm:w-[280px] lg:w-full">
              <span className="flex items-center justify-center rounded-full bg-red-50 p-4"></span>
              <div className="data">
                <h5 className="font-manrope mb-0.5 text-2xl leading-9 font-bold text-black">
                  12
                </h5>
                <p className="text-base leading-7 font-medium text-gray-500">
                  Canceled
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-7 gap-6 max-lg:mx-auto max-lg:max-w-xl">
          <div className="col-span-7 lg:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="rounded-xl object-cover max-sm:mx-auto"
            />
          </div>
          <div className="col-span-7 flex w-full items-center lg:col-span-6">
            <div className="data w-full">
              <div className="mb-4 flex w-full justify-between max-sm:flex-col sm:mb-7 sm:items-center">
                <h5 className="font-manrope text-2xl leading-9 font-bold text-black max-sm:text-center">
                  Decoration Triangle Like Pyramid
                </h5>
                <h5 className="font-manrope text-2xl leading-9 font-bold text-black max-sm:text-center sm:text-right">
                  $325.00
                </h5>
              </div>
              <p className="mb-3 text-xl leading-8 font-normal text-gray-500 max-sm:text-center">
                Quantity : <span className="text-black">1</span>
              </p>
              <p className="mb-3 text-xl leading-8 font-normal text-gray-500 max-sm:text-center">
                Order : <span className="text-black">BK98601090</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-7 gap-6 max-lg:mx-auto max-lg:max-w-xl">
          <div className="col-span-7 lg:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="rounded-xl object-cover max-sm:mx-auto"
            />
          </div>
          <div className="col-span-7 flex w-full items-center lg:col-span-6">
            <div className="data w-full">
              <div className="mb-7 flex w-full justify-between max-sm:flex-col sm:items-center">
                <h5 className="font-manrope text-2xl leading-9 font-bold text-black max-sm:text-center">
                  Decoration Port Mini Tree
                </h5>
                <h5 className="font-manrope text-2xl leading-9 font-bold text-black max-sm:text-center sm:text-right">
                  $325.00
                </h5>
              </div>
              <p className="mb-3 text-xl leading-8 font-normal text-gray-500 max-sm:text-center">
                Quantity : <span className="text-black">1</span>
              </p>
              <p className="mb-3 text-xl leading-8 font-normal text-gray-500 max-sm:text-center">
                Order : <span className="text-black">BK98601090</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
