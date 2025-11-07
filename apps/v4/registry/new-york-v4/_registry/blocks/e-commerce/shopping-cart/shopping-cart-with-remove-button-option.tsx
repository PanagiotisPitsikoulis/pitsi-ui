export default function ShoppingCartWithRemoveButtonOption() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-lg:px-3">
        <div className="mx-auto w-full px-5 xl:max-w-[1216px] xl:px-0">
          <h2 className="font-manrope mb-8 text-center text-4xl leading-10 font-bold text-black">
            Your Shopping Cart
          </h2>
          <div className="group relative mb-8 flex items-center justify-between gap-8 transition-all duration-500 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col">
            <div className="relative z-10 grid w-full grid-cols-12 gap-3 rounded-3xl border border-transparent bg-gray-50 p-6 transition-all duration-500 group-hover:border-gray-300 sm:group-hover:mr-24 xl:min-h-[242px]">
              <div className="col-span-12 grid grid-cols-6 lg:col-span-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162934.png"
                    alt="Denim Shirt image"
                    className="rounded-xl object-cover max-sm:mx-auto xl:min-w-[194px]"
                  />
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-4 sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="mb-3 text-xl leading-8 font-medium text-black max-sm:text-center">
                      Dark Denim Shirt
                    </h5>
                    <p className="text-lg font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-6 gap-3 max-lg:pt-4 lg:col-span-6">
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-black">
                    Dark Blue
                  </h5>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="group relative z-0 rounded-full border border-gray-200 p-2 transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 max-sm:bottom-0 sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 sm:p-4"></button>
          </div>
          <div className="group relative mb-8 flex items-center justify-between gap-8 transition-all duration-500 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col">
            <div className="relative z-10 grid w-full grid-cols-12 gap-6 rounded-3xl border border-transparent bg-gray-50 p-6 transition-all duration-500 group-hover:border-gray-300 sm:group-hover:mr-24 xl:min-h-[242px]">
              <div className="col-span-12 grid grid-cols-6 lg:col-span-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162949.png"
                    alt="denim jacket image"
                    className="rounded-xl object-cover max-sm:mx-auto xl:min-w-[194px]"
                  />
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-4 sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="mb-3 text-xl leading-8 font-medium text-black max-sm:text-center">
                      Denim Trendy Jacket
                    </h5>
                    <p className="text-lg font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-6 gap-3 max-lg:pt-4 lg:col-span-6">
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-black">
                    Sky Blue
                  </h5>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="group relative z-0 rounded-full border border-gray-200 p-2 transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 max-sm:bottom-0 sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 sm:p-4"></button>
          </div>
          <div className="group relative mb-8 flex items-center justify-between gap-8 transition-all duration-500 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col">
            <div className="relative z-10 grid w-full grid-cols-12 rounded-3xl border border-transparent bg-gray-50 p-6 transition-all duration-500 group-hover:border-gray-300 sm:group-hover:mr-24 xl:min-h-[242px]">
              <div className="col-span-12 grid grid-cols-6 lg:col-span-6">
                <div className="col-span-6 sm:col-span-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162962.png"
                    alt="retro shirt image"
                    className="rounded-xl object-cover max-sm:mx-auto xl:min-w-[194px]"
                  />
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-4 sm:justify-start sm:pl-3">
                  <div className="data pl-3 transition-all duration-300 group-hover:pl-5">
                    <h5 className="mb-3 text-xl leading-8 font-medium text-black max-sm:text-center">
                      Retro Shirt For Women
                    </h5>
                    <p className="text-lg font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-6 gap-3 max-lg:pt-4 lg:col-span-6">
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-black">
                    Magenta
                  </h5>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-6 flex items-center justify-center sm:col-span-2">
                  <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <button className="group relative z-0 rounded-full border border-gray-200 p-2 transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 max-sm:bottom-0 sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 sm:p-4"></button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 pb-6 max-sm:flex-col max-sm:gap-2">
            <h5 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
              Subtotal
            </h5>
            <div className="flex items-center gap-5">
              <button className="rounded-full bg-gray-50 px-3 py-2.5 text-xs font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-200">
                Promo Code?
              </button>
              <h5 className="font-manrope text-3xl leading-10 font-bold text-indigo-600">
                $440.00
              </h5>
            </div>
          </div>
          <p className="pt-6 pb-5 text-center text-base leading-7 font-normal text-gray-500">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <div className="flex flex-col justify-center gap-5 max-sm:mx-auto max-sm:max-w-sm sm:flex-row sm:items-center sm:justify-end">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-black/80 hover:shadow-black/30">
              Back to Shop
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
