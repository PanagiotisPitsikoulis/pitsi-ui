export default function DefaultOrderConfirmation() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
              John, Thank You for Your Order!
            </h2>
            <div className="inline-flex items-center justify-center gap-2.5">
              <h5 className="text-lg leading-8 font-normal text-gray-500">
                Order ID: #200153 / Order Date: June 23, 2023
              </h5>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8">
            <h3 className="font-manrope w-full text-center text-2xl leading-9 font-bold text-gray-900 md:text-start">
              Order Details
            </h3>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 p-4 lg:p-5">
                <ul className="hidden w-full grid-cols-12 items-center justify-start gap-0 border-b border-gray-200 px-6 pb-4 md:grid md:gap-8">
                  <li className="col-span-12 text-xl leading-8 font-medium text-gray-900 md:col-span-5 lg:col-span-4">
                    Item
                  </li>
                  <div className="col-span-12 flex w-full items-center justify-start gap-8 md:col-span-7 lg:col-span-8">
                    <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                      Basic Price
                    </li>
                    <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                      Quantity
                    </li>
                    <li className="col-span-2 w-full text-center text-xl leading-8 font-medium text-gray-900">
                      Total
                    </li>
                  </div>
                </ul>
                <div className="flex w-full flex-col gap-5">
                  <div className="grid w-full grid-cols-12 items-center justify-start gap-3 border-b border-gray-300 px-6 pb-5 md:gap-8">
                    <div className="col-span-12 flex flex-col items-center justify-start gap-3 md:col-span-5 md:flex-row md:gap-6 md:pb-5 lg:col-span-4">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1715681934.png"
                        alt="Story Book image"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Adventure Story Book
                        </h4>
                        <h6 className="text-base leading-7 font-normal text-gray-500">
                          Drama, Adventure...
                        </h6>
                      </div>
                    </div>
                    <div className="col-span-12 flex w-full flex-col items-center justify-start gap-3 md:col-span-7 md:flex-row md:gap-8 lg:col-span-8">
                      <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-500 md:col-span-2">
                        $52.00
                      </h5>
                      <input
                        type="text"
                        className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-500 focus:outline-none md:col-span-2"
                      />
                      <h5 className="col-span-12 flex w-full justify-center text-center text-lg leading-8 font-medium text-gray-900 md:col-span-2">
                        $52.00
                      </h5>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-12 items-center justify-start gap-3 px-6 pb-5 md:gap-8">
                    <div className="col-span-12 flex flex-col items-center justify-start gap-3 md:col-span-5 md:flex-row md:gap-6 lg:col-span-4">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1715681946.png"
                        alt="Travelling Backpack image"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-1.5 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Travelling Backpack
                        </h4>
                        <h6 className="text-base leading-7 font-normal text-gray-500">
                          Leather Material...
                        </h6>
                      </div>
                    </div>
                    <div className="col-span-12 flex w-full flex-col items-center justify-start gap-3 md:col-span-7 md:flex-row md:gap-8 lg:col-span-8">
                      <h5 className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-500 md:col-span-2">
                        $60.00
                      </h5>
                      <input
                        type="text"
                        className="col-span-12 w-full text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-500 focus:outline-none md:col-span-2"
                      />
                      <h5 className="col-span-12 flex w-full justify-center text-center text-lg leading-8 font-medium text-gray-900 md:col-span-2">
                        $120.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 p-4 lg:p-5">
                <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 px-5 pb-6">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-8 font-normal text-gray-500">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $172.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-8 font-normal text-gray-500">
                      Shipping
                    </h5>
                    <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                      $20.00
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6 border-b border-gray-100 px-5 pb-6">
                  <h5 className="text-xl leading-8 font-semibold text-indigo-600">
                    Total
                  </h5>
                  <h5 className="text-right text-xl leading-8 font-semibold text-indigo-600">
                    $192.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-5 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 md:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
                  View Order Details
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Track My Order
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
