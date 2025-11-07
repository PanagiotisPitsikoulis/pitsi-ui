export default function MasonryImageAndDescription() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="box w-full h-full relative max-lg:max-w-xl mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1700475349.png"
                alt="Leather jacket image"
                className="mx-auto rounded-3xl object-cover"
              />
              <span className="absolute top-5 right-5 font-medium text-base leading-7 py-2 px-4 bg-white text-indigo-600 rounded-full z-10">
                Special Edition
              </span>
            </div>
            <div className="box">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700475364.png"
                    alt="Leather jacket image"
                    className="mx-auto max-sm:w-full rounded-3xl object-cover"
                  />
                </div>
                <div className="box max-sm:hidden">
                  <img
                    src="https://pagedone.io/asset/uploads/1700475364.png"
                    alt="Leather jacket image"
                    className="mx-auto  rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div className="box mt-8 max-lg:max-w-xl max-lg:mx-auto">
                <img
                  src="https://pagedone.io/asset/uploads/1700475386.png"
                  alt="Leather jacket image"
                  className=" rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 max-lg:max-w-xl lg:grid-cols-2 gap-8 max-lg:mx-auto">
            <div className="pro-detail">
              <div className="flex items-center justify-between gap-3 mb-5">
                <h2 className="font-manrope max-w-xs font-bold text-2xl sm:text-3xl leading-normal text-gray-900">
                  Headset Neon HM760 White Version
                </h2>
                <button className="group transition-all duration-500 p-0.5"></button>
              </div>
              <div className="flex sm:items-center gap-3 flex-col min-[450px]:flex-row justify-between mb-4 min-[450px]:mb-8">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 bg-amber-400 rounded-md py-0.5 px-1.5 font-medium text-base leading-7 text-white">
                    4.8
                  </span>
                  <p className="font-medium text-base leading-7 text-gray-900">
                    1624 Reviews
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-base leading-7 text-gray-900">
                    1250 <span className="text-gray-400">Sold</span>
                  </p>

                  <p className="font-medium text-base leading-7 text-indigo-600">
                    750 <span className="text-gray-900">In Stock</span>
                  </p>
                </div>
              </div>
              <p className="font-normal text-base leading-7 text-gray-500 mb-5">
                Elevate your outerwear collection with the Leather Jacket
                Special Black Edition. Meticulously crafted for the discerning
                individual, this jacket seamlessly fuses edgy aesthetics with
                premium quality, making it a standout piece in any wardrobe.
              </p>
              <div className="w-full">
                <p className="font-medium text-base leading-7 text-gray-900 mb-2">
                  Size (kg)
                </p>
                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 ">
                  <button className="bg-white text-center px-4 py-2.5 w-full max-w-[110px] rounded-full font-manrope font-semibold text-sm border border-gray-300 text-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    S
                  </button>
                  <button className="bg-white text-center px-4 py-2.5 w-full max-w-[110px] rounded-full font-manrope font-semibold text-sm border border-gray-300 text-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    M
                  </button>
                  <button className="bg-white text-center px-4 py-2.5 w-full max-w-[110px] rounded-full font-manrope font-semibold text-sm border border-gray-300 text-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    L
                  </button>
                  <button className="bg-white text-center px-4 py-2.5 w-full max-w-[110px] rounded-full font-manrope font-semibold text-sm border border-gray-300 text-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    XL
                  </button>
                  <button className="bg-white text-center px-4 py-2.5 w-full max-w-[110px] rounded-full font-manrope font-semibold text-sm border border-gray-300 text-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    2XL
                  </button>
                </div>
              </div>
            </div>
            <div className="por-price">
              <div className="flex flex-col min-[400px]:flex-row items-center rounded-[30px] p-6 bg-indigo-50 justify-between mb-8">
                <h6 className="font-manrope font-bold text-3xl leading-10 text-gray-900">
                  $80.00
                </h6>
                <div className="btns w-full flex items-center justify-center min-[400px]:justify-end max-[400px]:mt-3 gap-5">
                  <button className="aspect-square h-11 flex items-center justify-center rounded-full border-[0.8px] bg-white border-gray-300 group transition-all duration-500 hover:bg-indigo-600"></button>
                  <button className="py-2.5 px-4 rounded-full bg-indigo-600 h-11 flex items-center justify-center font-semibold text-sm text-white text-center w-full max-w-[126px] transition-all duration-500 hover:bg-indigo-700 hover:text-white">
                    But now
                  </button>
                </div>
              </div>
              <p className="font-medium text-base leading-7 text-gray-900 mb-2">
                Sleeve
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-5 border border-gray-300 bg-white rounded-xl group transition-all duration-500 hover:border-indigo-600">
                  <h6 className="font-medium text-lg leading-8 text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Full Sleeve
                  </h6>
                  <p className="mt-3 font-normal text-base text-gray-400 tracking-tight leading-7 transition-all duration-500 group-hover:text-gray-900">
                    Stay cool and casual with our Half Sleeve collection – the
                    perfect blend of comfort and style for any occasion
                  </p>
                </div>
                <div className="p-5 border border-gray-300 bg-white rounded-xl group transition-all duration-500 hover:border-indigo-600">
                  <h6 className="font-medium text-lg leading-8 text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Half Sleeve
                  </h6>
                  <p className="mt-3 font-normal text-base text-gray-400 tracking-tight leading-7 transition-all duration-500 group-hover:text-gray-900">
                    Wrap yourself in timeless sophistication with our Full
                    Sleeve collection – where comfort meets elegance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
