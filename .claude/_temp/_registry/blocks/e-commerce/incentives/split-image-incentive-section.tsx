export default function SplitImageIncentiveSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-y-11">
          <div className="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
            <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">
              Lowest Prices Best Quality Shoppings
            </h2>
            <div className="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
              <div className="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                <button className="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="font-medium text-sm text-black">Free delivery</p>
              </div>
              <div className="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                <button className="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="font-medium text-sm text-black">
                  Cash on delivery
                </p>
              </div>
              <div className="flex items-center gap-4 pl-6  ">
                <button className="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100"></button>
                <p className="font-medium text-sm text-black">Best discount</p>
              </div>
            </div>
            <a
              href="javascript:;"
              className="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-indigo-600 transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700"
            >
              <span className="px-2 font-semibold text-base text-white">
                Download the app
              </span>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
            <img
              src="https://pagedone.io/asset/uploads/1701234779.png"
              alt="Warehouse image"
              className="w-full h-full max-lg:rounded-3xl lg:rounded-r-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
