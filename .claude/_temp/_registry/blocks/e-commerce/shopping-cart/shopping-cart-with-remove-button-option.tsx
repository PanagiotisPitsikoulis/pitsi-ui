export default function ShoppingCartWithRemoveButtonOption() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto max-lg:px-3">
        <div className="w-full xl:max-w-[1216px] mx-auto xl:px-0 px-5">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-center text-black mb-8">
            Your Shopping Cart
          </h2>
          <div className="flex items-center max-sm:flex-col justify-between gap-8 mb-8 group relative transition-all duration-500 max-sm:max-w-sm max-sm:mx-auto">
            <div className="grid grid-cols-12 gap-3 p-6 bg-gray-50 rounded-3xl w-full xl:min-h-[242px] border border-transparent transition-all duration-500 relative z-10 group-hover:border-gray-300 sm:group-hover:mr-24  ">
              <div className="col-span-12 lg:col-span-6 grid grid-cols-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162934.png"
                    alt="Denim Shirt image"
                    className="max-sm:mx-auto xl:min-w-[194px] rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 flex items-center justify-center sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="font-medium text-xl leading-8 text-black mb-3 max-sm:text-center">
                      Dark Denim Shirt
                    </h5>
                    <p className="font-normal text-lg text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 max-lg:pt-4 lg:col-span-6 grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-black text-center">
                    Dark Blue
                  </h5>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="relative sm:absolute p-2 sm:p-4 rounded-full border border-gray-200 group max-sm:bottom-0  z-0 sm:top-1/2 sm:right-0 sm:-translate-y-1/2 transition-all duration-500 hover:bg-gray-50 hover:border-gray-400"></button>
          </div>
          <div className="flex items-center max-sm:flex-col justify-between gap-8 mb-8 group relative transition-all duration-500  max-sm:max-w-sm max-sm:mx-auto">
            <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 rounded-3xl w-full xl:min-h-[242px] border border-transparent transition-all duration-500 relative z-10 group-hover:border-gray-300 sm:group-hover:mr-24  ">
              <div className="col-span-12 lg:col-span-6 grid grid-cols-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162949.png"
                    alt="denim jacket image"
                    className="max-sm:mx-auto xl:min-w-[194px] rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 flex items-center justify-center sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="font-medium text-xl leading-8 text-black mb-3 max-sm:text-center">
                      Denim Trendy Jacket
                    </h5>
                    <p className="font-normal text-lg text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 max-lg:pt-4 lg:col-span-6 grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-black text-center">
                    Sky Blue
                  </h5>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="relative sm:absolute p-2 sm:p-4 rounded-full border border-gray-200 group max-sm:bottom-0  z-0 sm:top-1/2 sm:right-0 sm:-translate-y-1/2 transition-all duration-500 hover:bg-gray-50 hover:border-gray-400"></button>
          </div>
          <div className="flex items-center max-sm:flex-col justify-between gap-8 mb-8 group relative transition-all duration-500  max-sm:max-w-sm max-sm:mx-auto">
            <div className="grid grid-cols-12 p-6 bg-gray-50 rounded-3xl w-full xl:min-h-[242px] border border-transparent transition-all duration-500 relative z-10 group-hover:border-gray-300 sm:group-hover:mr-24 ">
              <div className="col-span-12 lg:col-span-6 grid grid-cols-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162962.png"
                    alt="retro shirt image"
                    className="max-sm:mx-auto xl:min-w-[194px] rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 flex items-center justify-center sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="font-medium text-xl leading-8 text-black mb-3 max-sm:text-center">
                      Retro Shirt For Women
                    </h5>
                    <p className="font-normal text-lg text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 max-lg:pt-4 lg:col-span-6 grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-black text-center">
                    Magenta
                  </h5>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
                  <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="relative sm:absolute p-2 sm:p-4 rounded-full border border-gray-200 group max-sm:bottom-0 z-0 sm:top-1/2 sm:right-0 sm:-translate-y-1/2 transition-all duration-500 hover:bg-gray-50 hover:border-gray-400"></button>
          </div>
          <div className="flex max-sm:gap-2 max-sm:flex-col items-center justify-between pb-6 border-b border-gray-300">
            <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
              Subtotal
            </h5>
            <div className="flex items-center gap-5">
              <button className="rounded-full py-2.5 px-3 bg-gray-50 font-semibold text-xs text-indigo-600 transition-all duration-500 shadow-sm shadow-transparent hover:bg-gray-100 hover:shadow-gray-200">
                Promo Code?
              </button>
              <h5 className="font-manrope font-bold text-3xl leading-10 text-indigo-600">
                $440.00
              </h5>
            </div>
          </div>
          <p className="pt-6 text-center font-normal text-base leading-7 text-gray-500 pb-5">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-end gap-5  max-sm:max-w-sm max-sm:mx-auto">
            <button className="rounded-xl py-4 px-6 bg-black flex items-center justify-center gap-2 text-white font-semibold text-lg w-full shadow-sm shadow-transparent transition-all duration-500 hover:bg-black/80 hover:shadow-black/30">
              Back to Shop
            </button>
            <button className="rounded-xl py-4 px-6 bg-indigo-600 flex items-center justify-center gap-2 text-white font-semibold text-lg w-full shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400 ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
