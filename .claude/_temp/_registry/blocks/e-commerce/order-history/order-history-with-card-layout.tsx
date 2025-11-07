export default function OrderHistoryWithCardLayout() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex max-md:flex-col items-center justify-between mb-12">
          <div className="data">
            <h2 className="font-manrope font-extrabold text-3xl leading-10 text-black mb-3">
              Order History
            </h2>
            <p className="font-normal text-base leading-7 text-gray-500">
              Order History Is Track Your Purchases and View Past Orders
            </p>
          </div>
          <div className="flex items-center gap-3 max-md:mt-5">
            <button className="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-100 hover:border-gray-400">
              Show Invoice
            </button>
            <button className="rounded-full px-7 py-3 bg-indigo-600 text-white font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-400">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col min-[620px]:flex-row gap-8 mb-11 w-full">
          <div className="flex items-center flex-col lg:flex-row gap-8 lg:w-full">
            <div className="rounded-2xl border border-gray-300 p-5 flex items-center gap-3 w-full sm:w-[280px] lg:w-full cursor-pointer transition-all duration-500 hover:bg-indigo-50 hover:border-gray-400">
              <span className="rounded-full p-4 bg-indigo-50 flex items-center justify-center"></span>
              <div className="data">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black mb-0.5">
                  36
                </h5>
                <p className="font-medium text-base leading-7 text-gray-500">
                  Total Order
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-300 p-5 flex items-center gap-3 w-full sm:w-[280px] lg:w-full cursor-pointer transition-all duration-500 hover:bg-amber-50 hover:border-gray-400">
              <span className="rounded-full p-4 bg-amber-50 flex items-center justify-center"></span>
              <div className="data">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black mb-0.5">
                  24
                </h5>
                <p className="font-medium text-base leading-7 text-gray-500">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-8 lg:w-full">
            <div className="rounded-2xl border border-gray-300 p-5 flex items-center gap-3 w-full sm:w-[280px] lg:w-full cursor-pointer transition-all duration-500 hover:bg-emerald-50 hover:border-gray-400">
              <span className="rounded-full p-4 bg-emerald-50 flex items-center justify-center"></span>
              <div className="data">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black mb-0.5">
                  2
                </h5>
                <p className="font-medium text-base leading-7 text-gray-500">
                  Active order
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-300 p-5 flex items-center gap-3 w-full sm:w-[280px] lg:w-full cursor-pointer transition-all duration-500 hover:bg-red-50 hover:border-gray-400">
              <span className="rounded-full p-4 bg-red-50 flex items-center justify-center"></span>
              <div className="data">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black mb-0.5">
                  12
                </h5>
                <p className="font-medium text-base leading-7 text-gray-500">
                  Canceled
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-6 w-full max-lg:max-w-xl max-lg:mx-auto">
          <div className="col-span-7 lg:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="max-sm:mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="col-span-7 lg:col-span-6 flex items-center w-full">
            <div className="data w-full">
              <div className="flex sm:items-center max-sm:flex-col justify-between w-full mb-4 sm:mb-7">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black max-sm:text-center">
                  Decoration Triangle Like Pyramid
                </h5>
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black sm:text-right max-sm:text-center">
                  $325.00
                </h5>
              </div>
              <p className="font-normal text-xl leading-8 text-gray-500 mb-3 max-sm:text-center">
                Quantity : <span className="text-black">1</span>
              </p>
              <p className="font-normal text-xl leading-8 text-gray-500 mb-3 max-sm:text-center">
                Order : <span className="text-black">BK98601090</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-6 w-full  max-lg:max-w-xl max-lg:mx-auto">
          <div className="col-span-7 lg:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="max-sm:mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="col-span-7 lg:col-span-6 flex items-center w-full">
            <div className="data w-full">
              <div className="flex sm:items-center max-sm:flex-col justify-between w-full mb-7">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black max-sm:text-center">
                  Decoration Port Mini Tree
                </h5>
                <h5 className="font-manrope font-bold text-2xl leading-9 text-black sm:text-right max-sm:text-center">
                  $325.00
                </h5>
              </div>
              <p className="font-normal text-xl leading-8 text-gray-500 mb-3 max-sm:text-center">
                Quantity : <span className="text-black">1</span>
              </p>
              <p className="font-normal text-xl leading-8 text-gray-500 mb-3 max-sm:text-center">
                Order : <span className="text-black">BK98601090</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
