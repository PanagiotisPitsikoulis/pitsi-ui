export default function ShoppingCartWithRemoveButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal pb-8">
          My Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 p-4 bg-gray-50">
          <span className="text-gray-500 text-base font-normal leading-relaxed">
            Product
          </span>
          <p className="text-gray-500 text-base font-normal leading-relaxed flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center pl-2">Size</span>
            <span className="w-full max-w-[260px] text-center pl-5">
              Quantity
            </span>
            <span className="w-full max-w-[200px] text-center pl-10">
              Price
            </span>
            <span className="w-full max-w-[200px] text-center" />
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-lg:max-w-xl max-xl:mx-auto">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box bg-gray-50 rounded-xl justify-center items-center inline-flex py-4 px-6">
              <img
                src="https://pagedone.io/asset/uploads/1713334568.png"
                alt="Denim Shirt image"
                className="xl:w-[75px] object-cover"
              />
            </div>
            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
              <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">
                Blue Denim Shirt
              </h4>
              <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">
                Product Code: 20214
              </h5>
            </div>
          </div>
          <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
            <h4 className="w-full max-w-[142px] text-center text-black text-xl font-medium leading-loose">
              L
            </h4>
            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
              <input
                type="text"
                className="w-11 h-11 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-8 px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
              />
            </button>
            <h4 className="max-w-[142px] w-full text-center text-black text-xl font-medium leading-loose pl-5">
              $50.00
            </h4>
            <button className="max-w-[176px] text-center w-full "></button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-lg:max-w-xl max-xl:mx-auto">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box bg-gray-50 rounded-xl justify-center items-center inline-flex py-4 px-6">
              <img
                src="https://pagedone.io/asset/uploads/1713334581.png"
                alt="Levis Shirt image"
                className="xl:w-[75px] object-cover"
              />
            </div>
            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
              <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">
                Levis Shirt Women
              </h4>
              <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">
                Product Code: 02145
              </h5>
            </div>
          </div>
          <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
            <h4 className="w-full max-w-[142px] text-center text-black text-xl font-medium leading-loose">
              M
            </h4>
            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
              <input
                type="text"
                className="w-11 h-11 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-8 px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
              />
            </button>
            <h4 className="max-w-[142px] w-full text-center text-black text-xl font-medium leading-loose pl-5">
              $60.00
            </h4>
            <button className="max-w-[176px] text-center w-full "></button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-lg:max-w-xl max-xl:mx-auto">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box bg-gray-50 rounded-xl justify-center items-center inline-flex py-5 px-5">
              <img
                src="https://pagedone.io/asset/uploads/1713334593.png"
                alt="Levis Shirt image"
                className="xl:w-[81px] object-cover"
              />
            </div>
            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
              <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">
                Levis Shirt Men
              </h4>
              <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">
                Product Code: 21405
              </h5>
            </div>
          </div>
          <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
            <h4 className="w-full max-w-[142px] text-center text-black text-xl font-medium leading-loose">
              XL
            </h4>
            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
              <input
                type="text"
                className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-8 px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex"
              />
            </button>
            <h4 className="max-w-[142px] w-full text-center text-black text-xl font-medium leading-loose pl-5">
              $100.00
            </h4>
            <button className="max-w-[176px] text-center w-full "></button>
          </div>
        </div>
        <div className="my-8 md:grid-cols-2 grid-cols-1 grid gap-8 max-lg:max-w-xl max-xl:mx-auto">
          <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full justify-between items-start gap-2.5 inline-flex">
              <h5 className="text-gray-600 text-xl font-medium leading-loose">
                Discount
              </h5>
              <h5 className="text-right text-black text-xl font-medium leading-loose">
                $0.00
              </h5>
            </div>
            <div className="w-full justify-between items-start gap-2.5 inline-flex">
              <h5 className="text-gray-600 text-xl font-medium leading-loose">
                Delivery
              </h5>
              <h5 className="text-right text-black text-xl font-medium leading-loose">
                $20.00
              </h5>
            </div>
          </div>
          <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full justify-between items-start gap-2.5 inline-flex">
              <h5 className="text-gray-600 text-xl font-medium leading-loose">
                Subtotal
              </h5>
              <h5 className="text-right text-black text-xl font-medium leading-loose">
                $260.00
              </h5>
            </div>
            <div className="w-full justify-between items-start gap-2.5 inline-flex">
              <h5 className="text-gray-600 text-xl font-medium leading-loose">
                Total
              </h5>
              <h5 className="text-right text-black text-xl font-medium leading-loose">
                $280.00
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 max-lg:max-w-xl max-xl:mx-auto">
          <span className="text-gray-400 text-sm font-medium leading-snug">
            If you have a promation code, please enter it here.
          </span>
          <div className="w-full justify-start items-start inline-flex">
            <input
              type="text"
              className="w-full pl-4 py-2.5 focus:outline-none text-black placeholder-gray-400 text-base font-normal leading-relaxed rounded-tl-xl rounded-bl-xl sm:rounded-r-none rounded-r-xl border border-black border-opacity-20 justify-center items-center gap-2.5 flex"
              placeholder="Please enter promo code"
            />
            <button className="px-7 py-2.5 hover:bg-indigo-800 transition-all duration-700 ease-in-out bg-indigo-600 rounded-tr-xl rounded-br-xl shadow justify-center items-center sm:flex hidden">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                Apply Discount
              </span>
            </button>
          </div>
          <button className="sm:hidden px-7 py-2.5 hover:bg-indigo-600 transition-all duration-700 ease-in-out bg-indigo-600 rounded-xl shadow justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
              Apply Discount
            </span>
          </button>
        </div>
        <div className="w-full mt-8 gap-5 flex md:flex-row flex-col max-lg:max-w-xl max-xl:mx-auto">
          <button className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-700 ease-in-out shadow">
            <span className="px-2 text-white text-lg font-semibold leading-8">
              Back to Shop
            </span>
          </button>
          <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 rounded-xl transition-all duration-700 ease-in-out shadow">
            <span className="px-2 text-white text-lg font-semibold leading-8">
              Checkout
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
