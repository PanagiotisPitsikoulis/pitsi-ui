export default function SplitImageIncentiveSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-12 gap-y-11">
          <div className="col-span-12 flex flex-col justify-between bg-gray-50 px-4 py-12 max-lg:mx-auto max-lg:max-w-lg max-lg:rounded-2xl lg:col-span-7 lg:rounded-l-2xl lg:px-11">
            <h2 className="font-manrope mb-9 text-2xl leading-10 font-bold text-black sm:text-4xl">
              Lowest Prices Best Quality Shoppings
            </h2>
            <div className="mb-14 flex w-full flex-col bg-white py-4 pr-3 pl-3 max-[550px]:gap-4 min-[550px]:flex-row min-[550px]:items-center lg:pr-10 lg:pl-6 xl:w-[calc(100%-45px)]">
              <div className="flex items-center gap-4 border-gray-200 pr-6 max-[550px]:pl-6 min-[550px]:border-r">
                <button className="rounded-full bg-indigo-50 p-3 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="text-sm font-medium text-black">Free delivery</p>
              </div>
              <div className="flex items-center gap-4 border-gray-200 px-6 min-[550px]:border-r">
                <button className="rounded-full bg-indigo-50 p-3 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="text-sm font-medium text-black">
                  Cash on delivery
                </p>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <button className="rounded-full bg-indigo-50 p-3 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="text-sm font-medium text-black">Best discount</p>
              </div>
            </div>
            <a
              href="javascript:;"
              className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400 min-[550px]:w-max"
            >
              <span className="px-2 text-base font-semibold text-white">
                Download the app
              </span>
            </a>
          </div>
          <div className="col-span-12 max-lg:mx-auto lg:col-span-5 lg:max-w-md">
            <img
              src="https://pagedone.io/asset/uploads/1701234779.png"
              alt="Warehouse image"
              className="h-full w-full object-cover max-lg:rounded-3xl lg:rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
