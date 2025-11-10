export default function RecentFeedbackWithAddReview() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <h2 className="title font-manrope mb-8 text-center text-4xl leading-10 font-bold text-black">
          Shopping Cart
        </h2>
        <div className="mb-8 grid grid-cols-12 gap-y-4 rounded-3xl border-2 border-gray-200 p-4 max-lg:mx-auto max-lg:max-w-lg lg:p-8">
          <div className="img box col-span-12 lg:col-span-2">
            <img
              src="https://pagedone.io/asset/uploads/1701162826.png"
              alt="speaker image"
              className="rounded-lg object-cover max-lg:w-full lg:w-[180px]"
            />
          </div>
          <div className="detail col-span-12 w-full lg:col-span-10 lg:pl-3">
            <div className="mb-4 flex w-full items-center justify-between">
              <h5 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                Round white portable speaker
              </h5>
              <button className="group flex items-center justify-center rounded-full focus-within:outline-red-500"></button>
            </div>
            <p className="mb-6 text-base leading-7 font-normal text-gray-500">
              Introducing our sleek round white portable speaker, the epitome of
              style and sound! Elevate your auditory experience with this
              compact yet powerful device that delivers crystal-clear audio
              wherever you go.{" "}
              <a href="javascript:;" className="text-indigo-600">
                More....
              </a>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="group flex items-center justify-center rounded-[50px] border border-gray-200 bg-white p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                <input
                  type="text"
                  id="number"
                  className="aspect-square w-10 rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-center text-sm font-semibold text-gray-900 outline-none"
                />
                <button className="group flex items-center justify-center rounded-[50px] border border-gray-200 bg-white p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
              </div>
              <h6 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                $220
              </h6>
            </div>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-12 gap-y-4 rounded-3xl border-2 border-gray-200 p-4 max-lg:mx-auto max-lg:max-w-lg lg:p-8">
          <div className="img box col-span-12 lg:col-span-2">
            <img
              src="https://pagedone.io/asset/uploads/1701162839.png"
              alt="speaker image"
              className="rounded-lg object-cover max-lg:w-full lg:w-[180px]"
            />
          </div>
          <div className="detail col-span-12 w-full lg:col-span-10 lg:pl-3">
            <div className="mb-4 flex w-full items-center justify-between">
              <h5 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                Gray round portable speaker
              </h5>
              <button className="group flex items-center justify-center rounded-full focus-within:outline-red-500"></button>
            </div>
            <p className="mb-6 text-base leading-7 font-normal text-gray-500">
              Introducing our sleek round white portable speaker, the epitome of
              style and sound! Elevate your auditory experience with this
              compact yet powerful device that delivers crystal-clear audio
              wherever you go.{" "}
              <a href="javascript:;" className="text-indigo-600">
                More....
              </a>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="group flex items-center justify-center rounded-[50px] border border-gray-200 bg-white p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
                <input
                  type="text"
                  id="number"
                  className="aspect-square w-10 rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-center text-sm font-semibold text-gray-900 outline-none"
                />
                <button className="group flex items-center justify-center rounded-[50px] border border-gray-200 bg-white p-2.5 shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"></button>
              </div>
              <h6 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                $220
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-b border-gray-200 pb-6 max-lg:mx-auto max-lg:max-w-lg md:flex-row md:items-center lg:px-6">
          <h5 className="font-manrope w-full text-2xl leading-9 font-semibold text-gray-900 max-md:mb-4 max-md:text-center">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5">
            <button className="rounded-full bg-indigo-50 px-3 py-2.5 text-center text-xs font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope lead-10 text-3xl font-bold text-indigo-600">
              $440
            </h6>
          </div>
        </div>
        <div className="max-lg:mx-auto max-lg:max-w-lg">
          <p className="mt-6 mb-5 text-center text-base leading-7 font-normal text-gray-500">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <button className="w-full rounded-full bg-indigo-600 px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </section>
  )
}
