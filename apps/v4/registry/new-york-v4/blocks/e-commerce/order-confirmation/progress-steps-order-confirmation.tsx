export default function ProgressStepsOrderConfirmation() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-14">
          <div className="flex w-full flex-col items-start justify-start gap-2.5">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-black">
              Order Confirmation
            </h2>
            <h5 className="w-full text-center text-lg leading-relaxed font-normal text-gray-500">
              Thank you for your order!
            </h5>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-center justify-center gap-8">
              <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
                <li className="relative flex w-full justify-center text-base leading-relaxed font-semibold text-indigo-600 after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent bg-indigo-600 text-sm text-white lg:h-8 lg:w-8">
                      1
                    </span>
                    Shipping
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-base leading-relaxed font-semibold text-indigo-600 after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                  <div className="z-10 block w-full text-center whitespace-nowrap">
                    <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm text-white lg:h-8 lg:w-8">
                      2
                    </span>
                    Payment
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-base leading-relaxed font-semibold text-indigo-600 after:absolute after:top-4 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-36 xl:after:left-36">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm text-white lg:h-8 lg:w-8">
                      3
                    </span>
                    Summary
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-base leading-relaxed font-semibold text-black after:absolute after:top-4 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-['']">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm text-indigo-600 lg:h-8 lg:w-8">
                      4
                    </span>
                    Confirmation
                  </div>
                </li>
              </ol>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-between gap-8 border-y border-gray-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-bold text-gray-500">
                  Delivery Date
                </h6>
                <h4 className="text-lg leading-relaxed font-bold text-black">
                  Jan 01, 2024
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-bold text-gray-500">
                  Order ID
                </h6>
                <h4 className="text-lg leading-relaxed font-bold text-black">
                  #1023498789
                </h4>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-bold text-gray-500">
                  Payment Method
                </h6>
                <a className="inline-flex h-8 w-[46px] items-center justify-center rounded-md border border-gray-200 bg-white"></a>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-bold text-gray-500">
                  Address
                </h6>
                <h4 className="text-lg leading-relaxed font-bold text-black">
                  718 Robbyn Meadow, S...
                </h4>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <div className="hidden w-full grid-cols-2 rounded-t-xl border border-gray-200 py-6 lg:grid">
                <span className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Product
                </span>
                <p className="flex w-full items-center justify-between">
                  <span className="w-full max-w-[200px] text-center text-base leading-relaxed font-normal text-gray-500">
                    Shipping
                  </span>
                  <span className="w-full max-w-[260px] text-center text-base leading-relaxed font-normal text-gray-500">
                    Quantity
                  </span>
                  <span className="w-full max-w-[200px] text-center text-base leading-relaxed font-normal text-gray-500">
                    Total
                  </span>
                </p>
              </div>
              <div className="grid w-full grid-cols-1 border-b border-gray-100 py-6 min-[550px]:gap-6 lg:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-6">
                  <div className="img-box">
                    <img
                      src="https://pagedone.io/asset/uploads/1701162850.png"
                      alt="perfume bottle image"
                      className="w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm">
                    <h5 className="text-xl leading-8 font-semibold text-black max-[550px]:text-center">
                      Rose Petals Divine
                    </h5>
                    <p className="my-2 text-lg leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-3">
                      Perfumes
                    </p>
                    <h6 className="text-lg leading-relaxed font-medium text-indigo-600 max-[550px]:text-center">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h6 className="font-manrope w-full max-w-[176px] text-center text-2xl leading-9 font-bold text-black">
                    $15.00
                  </h6>
                  <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-gray-200">
                    <button className="group group flex h-14 w-14 items-center justify-center rounded-l-full border-r border-gray-200 px-4 py-4 shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                    <input
                      type="text"
                      className="h-14 w-[146px] bg-transparent py-3 text-center text-lg leading-relaxed font-semibold text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="group group flex h-14 w-14 items-center justify-center rounded-r-full border-l border-gray-200 px-4 py-4 shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                  </div>
                  <h6 className="font-manrope w-full max-w-[176px] text-center text-2xl leading-9 font-bold text-indigo-600">
                    $120.00
                  </h6>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 border-b border-gray-100 py-6 min-[550px]:gap-6 lg:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-6">
                  <div className="img-box">
                    <img
                      src="https://pagedone.io/asset/uploads/1701162866.png"
                      alt="Musk Rose Cooper image"
                      className="w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm">
                    <h5 className="text-xl leading-8 font-semibold text-black max-[550px]:text-center">
                      Musk Rose Cooper
                    </h5>
                    <p className="my-2 text-lg leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-3">
                      Perfumes
                    </p>
                    <h6 className="text-lg leading-relaxed font-medium text-indigo-600 max-[550px]:text-center">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h6 className="font-manrope w-full max-w-[176px] text-center text-2xl leading-9 font-bold text-black">
                    Free
                  </h6>
                  <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-gray-200">
                    <button className="group group flex h-14 w-14 items-center justify-center rounded-l-full border-r border-gray-200 px-4 py-4 shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                    <input
                      type="text"
                      className="h-14 w-[146px] bg-transparent py-3 text-center text-lg leading-relaxed font-semibold text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="group group flex h-14 w-14 items-center justify-center rounded-r-full border-l border-gray-200 px-4 py-4 shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                  </div>
                  <h6 className="font-manrope w-full max-w-[176px] text-center text-2xl leading-9 font-bold text-indigo-600">
                    $120.00
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 md:flex-row">
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
                <div className="inline-flex w-full items-start justify-between gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-600">
                    Discount
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-medium text-black">
                    $0.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-600">
                    Delivery
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-medium text-black">
                    $20.00
                  </h4>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
                <div className="inline-flex w-full items-start justify-between gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-600">
                    Subtotal
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-medium text-black">
                    $240.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-2.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-600">
                    Total
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-medium text-black">
                    $260.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-8 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-800">
                <span className="px-2 py-px text-lg leading-relaxed font-semibold text-white">
                  Back to Shop
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 py-px text-lg leading-relaxed font-semibold text-white">
                  Place Order
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
