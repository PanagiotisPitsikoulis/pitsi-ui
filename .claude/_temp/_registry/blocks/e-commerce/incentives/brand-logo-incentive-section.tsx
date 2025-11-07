export default function BrandLogoIncentiveSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-11 items-center p-11 border border-gray-300 rounded-xl">
          <div className="box max-w-md w-full">
            <div className="flex items-center justify-center gap-[5px]">
              <span className="font-manrope font-bold text-xl leading-normal tracking-[-0.209px] text-gray-900">
                Pagedone
              </span>
            </div>
            <p className="mt-3 text-center font-normal text-xl leading-8 text-black">
              Lowest Prices Best Quality Shoppings
            </p>
          </div>
          <div className="grid grid-cols-2 min-[450px]:grid-cols-3 sm:grid-cols-5 gap-y-6 xl:gap-14 w-full max-lg:max-w-xl">
            <div className="box flex flex-col items-center">
              <button className="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0"></button>
              <p className="mt-2 font-medium text-sm leading-6 text-black w-[81px] text-center">
                Free delivery
              </p>
            </div>
            <div className="box flex flex-col items-center">
              <button className="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0"></button>
              <p className="mt-2 font-medium text-sm leading-6 text-black w-[81px] text-center">
                Cash in delivery
              </p>
            </div>
            <div className="box flex flex-col items-center">
              <button className="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0"></button>
              <p className="mt-2 font-medium text-sm leading-6 text-black w-[81px] text-center">
                Free Gift Chance
              </p>
            </div>
            <div className="box flex flex-col items-center">
              <button className="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0"></button>
              <p className="mt-2 font-medium text-sm leading-6 text-black w-[81px] text-center">
                Price Tag Available
              </p>
            </div>
            <div className="box flex flex-col items-center max-[450px]:col-span-2">
              <button className="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0"></button>
              <p className="mt-2 font-medium text-sm leading-6 text-black w-[81px] text-center">
                Best discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
