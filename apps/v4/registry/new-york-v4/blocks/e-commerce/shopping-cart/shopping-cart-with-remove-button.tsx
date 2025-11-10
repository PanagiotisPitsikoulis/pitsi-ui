export default function ShoppingCartWithRemoveButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="font-manrope pb-8 text-center text-4xl leading-normal font-bold text-black">
          My Shopping Cart
        </h2>
        <div className="hidden grid-cols-2 bg-gray-50 p-4 lg:grid">
          <span className="text-base leading-relaxed font-normal text-gray-500">
            Product
          </span>
          <p className="flex items-center justify-between text-base leading-relaxed font-normal text-gray-500">
            <span className="w-full max-w-[200px] pl-2 text-center">Size</span>
            <span className="w-full max-w-[260px] pl-5 text-center">
              Quantity
            </span>
            <span className="w-full max-w-[200px] pl-10 text-center">
              Price
            </span>
            <span className="w-full max-w-[200px] text-center" />
          </p>
        </div>
        <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-lg:max-w-xl min-[550px]:gap-6 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-4">
            <div className="img-box inline-flex items-center justify-center rounded-xl bg-gray-50 px-6 py-4">
              <img
                src="https://pagedone.io/asset/uploads/1713334568.png"
                alt="Denim Shirt image"
                className="object-cover xl:w-[75px]"
              />
            </div>
            <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
              <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                Blue Denim Shirt
              </h4>
              <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                Product Code: 20214
              </h5>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
            <h4 className="w-full max-w-[142px] text-center text-xl leading-loose font-medium text-black">
              L
            </h4>
            <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
              <input
                type="text"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
              />
            </button>
            <h4 className="w-full max-w-[142px] pl-5 text-center text-xl leading-loose font-medium text-black">
              $50.00
            </h4>
            <button className="w-full max-w-[176px] text-center"></button>
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-lg:max-w-xl min-[550px]:gap-6 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-4">
            <div className="img-box inline-flex items-center justify-center rounded-xl bg-gray-50 px-6 py-4">
              <img
                src="https://pagedone.io/asset/uploads/1713334581.png"
                alt="Levis Shirt image"
                className="object-cover xl:w-[75px]"
              />
            </div>
            <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
              <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                Levis Shirt Women
              </h4>
              <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                Product Code: 02145
              </h5>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
            <h4 className="w-full max-w-[142px] text-center text-xl leading-loose font-medium text-black">
              M
            </h4>
            <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
              <input
                type="text"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
              />
            </button>
            <h4 className="w-full max-w-[142px] pl-5 text-center text-xl leading-loose font-medium text-black">
              $60.00
            </h4>
            <button className="w-full max-w-[176px] text-center"></button>
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-lg:max-w-xl min-[550px]:gap-6 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-4">
            <div className="img-box inline-flex items-center justify-center rounded-xl bg-gray-50 px-5 py-5">
              <img
                src="https://pagedone.io/asset/uploads/1713334593.png"
                alt="Levis Shirt image"
                className="object-cover xl:w-[81px]"
              />
            </div>
            <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
              <h4 className="w-full text-lg leading-8 font-medium text-black max-[550px]:text-center">
                Levis Shirt Men
              </h4>
              <h5 className="my-2 w-full text-base leading-relaxed font-normal text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                Product Code: 21405
              </h5>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
            <h4 className="w-full max-w-[142px] text-center text-xl leading-loose font-medium text-black">
              XL
            </h4>
            <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
              <input
                type="text"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
              />
            </button>
            <h4 className="w-full max-w-[142px] pl-5 text-center text-xl leading-loose font-medium text-black">
              $100.00
            </h4>
            <button className="w-full max-w-[176px] text-center"></button>
          </div>
        </div>
        <div className="my-8 grid grid-cols-1 gap-8 max-xl:mx-auto max-lg:max-w-xl md:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
            <div className="inline-flex w-full items-start justify-between gap-2.5">
              <h5 className="text-xl leading-loose font-medium text-gray-600">
                Discount
              </h5>
              <h5 className="text-right text-xl leading-loose font-medium text-black">
                $0.00
              </h5>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-2.5">
              <h5 className="text-xl leading-loose font-medium text-gray-600">
                Delivery
              </h5>
              <h5 className="text-right text-xl leading-loose font-medium text-black">
                $20.00
              </h5>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-6">
            <div className="inline-flex w-full items-start justify-between gap-2.5">
              <h5 className="text-xl leading-loose font-medium text-gray-600">
                Subtotal
              </h5>
              <h5 className="text-right text-xl leading-loose font-medium text-black">
                $260.00
              </h5>
            </div>
            <div className="inline-flex w-full items-start justify-between gap-2.5">
              <h5 className="text-xl leading-loose font-medium text-gray-600">
                Total
              </h5>
              <h5 className="text-right text-xl leading-loose font-medium text-black">
                $280.00
              </h5>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 max-xl:mx-auto max-lg:max-w-xl">
          <span className="text-sm leading-snug font-medium text-gray-400">
            If you have a promation code, please enter it here.
          </span>
          <div className="inline-flex w-full items-start justify-start">
            <input
              type="text"
              className="border-opacity-20 flex w-full items-center justify-center gap-2.5 rounded-tl-xl rounded-r-xl rounded-bl-xl border border-black py-2.5 pl-4 text-base leading-relaxed font-normal text-black placeholder-gray-400 focus:outline-none sm:rounded-r-none"
              placeholder="Please enter promo code"
            />
            <button className="hidden items-center justify-center rounded-tr-xl rounded-br-xl bg-indigo-600 px-7 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:flex">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                Apply Discount
              </span>
            </button>
          </div>
          <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-600 sm:hidden">
            <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
              Apply Discount
            </span>
          </button>
        </div>
        <div className="mt-8 flex w-full flex-col gap-5 max-xl:mx-auto max-lg:max-w-xl md:flex-row">
          <button className="w-full rounded-xl bg-gray-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-gray-800">
            <span className="px-2 text-lg leading-8 font-semibold text-white">
              Back to Shop
            </span>
          </button>
          <button className="w-full rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
            <span className="px-2 text-lg leading-8 font-semibold text-white">
              Checkout
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
