export default function TwoColumnShoppingCartWithOrderSummary() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-manrope w-full text-start text-3xl leading-normal font-semibold text-gray-900">
              Cart
            </h2>
            <div className="my-8 flex w-full flex-col items-center justify-start gap-16 border-b border-gray-200 pb-8 md:flex-row">
              <img
                className="mx-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1712571255.png"
                alt="shopping cart section image"
              />
              <div className="inline-flex w-full flex-col items-start justify-between gap-6">
                <div className="inline-flex w-full items-center justify-between">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                    Man T-shirt
                  </h3>
                  <h4 className="text-right text-xl leading-loose font-semibold text-emerald-900">
                    ₹2,000
                  </h4>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-600">
                    Color :{" "}
                    <span className="font-semibold text-gray-900">Black</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-600">
                    Size :{" "}
                    <span className="font-semibold text-gray-900">L</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-600">
                    Material :{" "}
                    <span className="font-semibold text-gray-900">Cotton</span>
                  </h6>
                </div>
                <div className="inline-flex w-full items-end justify-between border-t border-gray-200 pt-6">
                  <div className="mx-auto flex w-full items-center justify-start">
                    <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                    <input
                      type="text"
                      className="h-12 w-14 border-y border-gray-300 bg-transparent px-6 text-center text-lg leading-snug font-semibold text-gray-900 outline-none placeholder:text-gray-900"
                    />
                    <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                  </div>
                  <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-3 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700"></button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 md:flex-row">
              <button className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="text-start text-base leading-relaxed font-semibold text-gray-900">
                  35% on Selected Styles
                </span>
              </button>
              <button className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="text-start text-base leading-relaxed font-semibold text-gray-900">
                  Free Shipping for Members
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-8 lg:col-span-4">
            <h2 className="font-manrope text-3xl leading-normal font-semibold text-gray-900">
              Order Summary
            </h2>
            <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="inline-flex w-full items-center justify-between">
                <h6 className="text-lg leading-8 font-normal text-gray-600">
                  Subtotal:
                </h6>
                <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                  ₹2000.00
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h6 className="text-lg leading-8 font-normal text-gray-600">
                  Delivery:
                </h6>
                <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                  ₹22.00
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
                <h6 className="text-lg leading-8 font-normal text-gray-600">
                  Tax:
                </h6>
                <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                  ₹0
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h6 className="text-lg leading-8 font-normal text-gray-600">
                  Total:
                </h6>
                <h6 className="text-right text-lg leading-8 font-semibold text-gray-900">
                  ₹2022.00
                </h6>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8">
              <button className="flex w-full items-center justify-center rounded-xl bg-emerald-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-emerald-950">
                <span className="px-2 text-lg leading-8 font-semibold text-white">
                  Check Out
                </span>
              </button>
              <div className="inline-flex items-center justify-center gap-5">
                <a className="relative flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"></a>
                <a className="relative flex h-10 w-[58px] items-center justify-center rounded-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"></a>
                <a className="flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"></a>
                <a className="flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
