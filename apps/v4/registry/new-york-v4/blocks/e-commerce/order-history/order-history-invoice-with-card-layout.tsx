export default function OrderHistoryInvoiceWithCardLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="flex flex-col gap-7 lg:gap-12">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-extrabold text-black lg:text-left">
            Your Orders
          </h2>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-10 rounded-3xl border border-gray-300 p-9 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8 rounded-2xl">
              <div className="inline-flex w-full items-center justify-center sm:items-start sm:justify-start">
                <div className="flex items-center justify-start rounded-full bg-emerald-50 py-0.5 pr-3 pl-2.5">
                  <div className="flex items-center justify-start gap-1.5">
                    <span className="text-center text-xs leading-5 font-medium text-emerald-600">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-300 pb-8">
                <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                  Order Number
                  <span className="text-black">#2562015893</span>
                </h6>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:items-start">
                  <h6 className="flex w-full flex-col items-center border-gray-300 pr-5 text-base leading-relaxed font-semibold text-gray-400 sm:items-start sm:border-r">
                    Order Date
                    <span className="text-black">Jan 18, 2022</span>
                  </h6>
                  <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                    Delivery Date
                    <span className="text-black">Jan 26, 2022</span>
                  </h6>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:items-start">
                  <h6 className="flex w-full flex-col items-center border-gray-300 pr-5 text-base leading-relaxed font-semibold text-gray-400 sm:items-start sm:border-r">
                    Ship To
                    <span className="text-black">Rajkot, Gujrat, India</span>
                  </h6>
                  <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                    Payment Method
                    <span className="text-black">COD</span>
                  </h6>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
                <h4 className="text-lg leading-8 font-semibold text-gray-400">
                  Total Amount :
                  <span className="text-xl text-gray-900">$48.00</span>
                </h4>
                <div className="flex items-center justify-end gap-2.5">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-right text-base leading-relaxed font-semibold text-indigo-600">
                    Download Invoice
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-300 pb-6 md:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584363.png"
                  alt="Wooden Chopping Board image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                    <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row">
                      <h4 className="text-xl leading-8 font-medium text-black">
                        Wooden Chopping Board
                      </h4>
                      <h4 className="text-right text-xl leading-8 font-semibold text-black">
                        $12.00
                      </h4>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Size :
                        <span className="text-gray-900"> 20 x 10 inch</span>
                      </h6>
                    </div>
                  </div>
                  <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start">
                    Buy it again
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584375.png"
                  alt="Whiter Coffee Mug image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                    <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row">
                      <h4 className="text-xl leading-8 font-medium text-black">
                        Whiter Coffee Mug
                      </h4>
                      <h4 className="text-right text-xl leading-8 font-semibold text-black">
                        $36.00
                      </h4>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Size :<span className="text-gray-900"> Regular</span>
                      </h6>
                    </div>
                  </div>
                  <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start">
                    Buy it again
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-10 rounded-3xl border border-gray-300 p-9 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8 rounded-2xl">
              <div className="inline-flex w-full items-center justify-center sm:items-start sm:justify-start">
                <div className="flex items-center justify-start rounded-full bg-emerald-50 py-0.5 pr-3 pl-2.5">
                  <div className="flex items-center justify-start gap-1.5">
                    <span className="text-center text-xs leading-5 font-medium text-emerald-600">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4 border-b border-gray-300 pb-8">
                <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                  Order Number
                  <span className="text-black">#2562015893</span>
                </h6>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:items-start">
                  <h6 className="flex w-full flex-col items-center border-gray-300 pr-5 text-base leading-relaxed font-semibold text-gray-400 sm:items-start sm:border-r">
                    Order Date
                    <span className="text-black">Jan 18, 2022</span>
                  </h6>
                  <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                    Delivery Date
                    <span className="text-black">Jan 26, 2022</span>
                  </h6>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row sm:items-start">
                  <h6 className="flex w-full flex-col items-center border-gray-300 pr-5 text-base leading-relaxed font-semibold text-gray-400 sm:items-start sm:border-r">
                    Ship To
                    <span className="text-black">Rajkot, Gujrat, India</span>
                  </h6>
                  <h6 className="flex w-full flex-col items-center text-base leading-relaxed font-semibold text-gray-400 sm:items-start">
                    Payment Method
                    <span className="text-black">COD</span>
                  </h6>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
                <h4 className="text-lg leading-8 font-semibold text-gray-400">
                  Total Amount :
                  <span className="text-xl text-gray-900">$170.00</span>
                </h4>
                <div className="flex items-center justify-end gap-2.5">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-right text-base leading-relaxed font-semibold text-indigo-600">
                    Download Invoice
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-300 pb-6 md:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584387.png"
                  alt="Sun Screen & Face Serum image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                    <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row">
                      <h4 className="text-xl leading-8 font-medium text-black">
                        Sun Screen &amp; Face Serum
                      </h4>
                      <h4 className="text-right text-xl leading-8 font-semibold text-black">
                        $94.00
                      </h4>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Size :<span className="text-gray-900"> 150 ml</span>
                      </h6>
                    </div>
                  </div>
                  <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start">
                    Buy it again
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584398.png"
                  alt="Hair Care Product image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                    <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row">
                      <h4 className="text-xl leading-8 font-medium text-black">
                        Hair Care Product
                      </h4>
                      <h4 className="text-right text-xl leading-8 font-semibold text-black">
                        $76.00
                      </h4>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-normal text-gray-400">
                        Size :<span className="text-gray-900"> 500 ml</span>
                      </h6>
                    </div>
                  </div>
                  <a className="w-full text-center text-base leading-relaxed font-semibold text-indigo-600 md:text-start">
                    Buy it again
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
