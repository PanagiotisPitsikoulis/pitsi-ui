export default function OrderConfirmationWithMessage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8">
          <div className="flex w-full flex-col items-start justify-start gap-8 lg:gap-14">
            <div className="font-manrope w-full text-center text-3xl leading-normal font-bold text-black">
              Order Confirmation
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4 className="text-xl leading-8 font-medium text-black">
                Hello, John smith
              </h4>
              <h5 className="text-lg leading-8 font-normal text-gray-500">
                Thank you for shopping
              </h5>
              <h5 className="text-lg leading-8 font-normal text-gray-500">
                Your order has been confirmed and will be shipped within two
                days.
              </h5>
            </div>
          </div>
          <div className="w-full items-start justify-center">
            <div className="hidden w-full grid-cols-2 bg-gray-50 p-4 md:grid">
              <span className="text-base leading-relaxed font-normal text-gray-500">
                Product
              </span>
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                  Size
                </span>
                <span className="w-full max-w-[260px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                  Quantity
                </span>
                <span className="w-full max-w-[200px] px-8 text-center text-base leading-relaxed font-normal text-gray-500">
                  Price
                </span>
                <span className="w-full max-w-[200px] text-center" />
              </p>
            </div>
            <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
              <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                  <img
                    src="https://pagedone.io/asset/uploads/1713334568.png"
                    alt="Denim Shirt image"
                    className="object-cover xl:w-[75px]"
                  />
                </div>
                <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                  <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                    Top for Women
                  </h4>
                  <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                    Product ID: 4553458120
                  </h5>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                <h5 className="w-full max-w-[142px] text-center text-lg leading-relaxed font-medium text-black">
                  L
                </h5>
                <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                  <input
                    type="text"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                  />
                </button>
                <h5 className="w-full max-w-[142px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                  $50.00
                </h5>
                <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out"></button>
              </div>
            </div>
            <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
              <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                  <img
                    src="https://pagedone.io/asset/uploads/1713334581.png"
                    alt="Blue T-shirt for Men image"
                    className="object-cover xl:w-[75px]"
                  />
                </div>
                <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                  <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                    Blue T-shirt for Men
                  </h4>
                  <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                    Product ID: 8953458747
                  </h5>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                <h5 className="w-full max-w-[142px] text-center text-lg leading-relaxed font-medium text-black">
                  M
                </h5>
                <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                  <input
                    type="text"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-relaxed font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                  />
                </button>
                <h5 className="w-full max-w-[142px] pl-5 text-center text-lg leading-relaxed font-medium text-black">
                  $50.00
                </h5>
                <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out"></button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-5">
            <div className="inline-flex w-full items-center justify-between gap-6">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Subtotal:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                $ 100.00
              </h5>
            </div>
            <div className="inline-flex w-full items-center justify-between gap-6">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Delivery:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                Free
              </h5>
            </div>
            <div className="inline-flex w-full items-center justify-between gap-6">
              <h5 className="text-lg leading-8 font-normal text-gray-600">
                Total:
              </h5>
              <h5 className="text-right text-lg leading-8 font-semibold text-gray-900">
                ₹100.00
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
