export default function SingleColumnShoppingCartPage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
          <div className="col-span-12 lg:col-span-2 img box">
            <img
              src="https://pagedone.io/asset/uploads/1701162826.png"
              alt="speaker image"
              className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
            <div className="flex items-center justify-between w-full mb-4">
              <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                Round white portable speaker
              </h5>
              <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500"></button>
            </div>
            <p className="font-normal text-base leading-7 text-gray-500 mb-6">
              Introducing our sleek round white portable speaker, the epitome of
              style and sound! Elevate your auditory experience with this
              compact yet powerful device that delivers crystal-clear audio
              wherever you go.{" "}
              <a href="javascript:;" className="text-indigo-600">
                More....
              </a>
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                <input
                  type="text"
                  id="number"
                  className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                />
                <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
              </div>
              <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                $220
              </h6>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
          <div className="col-span-12 lg:col-span-2 img box">
            <img
              src="https://pagedone.io/asset/uploads/1701162839.png"
              alt="speaker image"
              className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
            <div className="flex items-center justify-between w-full mb-4">
              <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                Gray round portable speaker
              </h5>
              <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500"></button>
            </div>
            <p className="font-normal text-base leading-7 text-gray-500 mb-6">
              Introducing our sleek round white portable speaker, the epitome of
              style and sound! Elevate your auditory experience with this
              compact yet powerful device that delivers crystal-clear audio
              wherever you go.{" "}
              <a href="javascript:;" className="text-indigo-600">
                More....
              </a>
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
                <input
                  type="text"
                  id="number"
                  className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                />
                <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"></button>
              </div>
              <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                $220
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5 ">
            <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
              $440
            </h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
