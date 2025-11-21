export default function OrderHistoryWithSimpleDetails() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 border-gray-200 md:col-span-8 md:border-r md:pr-8">
            <div className="mb-3 flex items-center justify-between max-sm:flex-col">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-black">
                Purchase Item 1
              </h3>
              <p className="text-lg leading-8 font-medium text-gray-500">
                Order # 91256800100
              </p>
            </div>
            <div className="mb-12 flex items-center justify-between max-sm:flex-col">
              <h2 className="font-manrope text-3xl leading-10 font-bold text-black">
                $150.00
              </h2>
              <p className="cursor-pointer text-xl leading-8 font-semibold text-indigo-600">
                Details
              </p>
            </div>
            <div className="img-box mb-12 w-full max-sm:mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1705403665.png"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col md:justify-end">
              <button className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                Buy Again
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
                View product
              </button>
            </div>
          </div>
          <div className="col-span-12 flex flex-col items-center max-md:mt-7 md:col-span-4 md:pl-8">
            <div className="w-full">
              <div className="mb-5 flex items-center justify-between max-md:max-w-sm max-sm:mx-auto">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-black">
                  Write a review
                </h3>
              </div>
              <div className="flex w-full max-w-sm flex-col items-center max-sm:mx-auto">
                <textarea
                  name="review"
                  id="review"
                  cols={30}
                  rows={10}
                  className="mb-16 h-[283px] w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 text-base leading-7 font-normal text-gray-900 outline-0 placeholder:text-gray-400 max-sm:mx-auto"
                  placeholder="Enter a description..."
                />
                <button className="w-full max-w-sm rounded-full bg-indigo-600 px-5 py-3 text-center text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                  Post review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
