export default function TwoColumnGridImagesAndDescription() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-4 max-sm:hidden">
            <ul className="flex items-center gap-5 ">
              <li>
                <div className="flex items-center gap-2 ">
                  <a
                    href="javascript:;"
                    className="font-medium text-base leading-7 text-gray-900"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5 ">
                  <a
                    href="javascript:;"
                    className="font-medium text-base leading-7 text-gray-400"
                  >
                    Clothing
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5 ">
                  <a
                    href="javascript:;"
                    className="font-medium text-base leading-7 text-gray-400"
                  >
                    Winter
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5 ">
                  <a
                    href="javascript:;"
                    className="font-medium text-base leading-7 text-indigo-600 flex items-center gap-3"
                  >
                    Jacket
                    <span className="py-1.5 px-2.5 rounded-full font-medium text-xs text-indigo-600 bg-indigo-50">
                      New
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8 max-md:max-w-xl max-md:mx-auto">
              <div className="img-box  overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1700475934.png"
                  alt="west-turn hot blue jacket image"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <div className="img-box overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1700475957.png"
                  alt="west-turn hot blue jacket image"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pro-detail  mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 lg:gap-8 xl:gap-0  max-md:max-w-xl max-md:mx-auto">
                <div>
                  <div className="flex items-center justify-between gap-6 mb-6">
                    <div className="title">
                      <h2 className="font-manrope font-bold text-2xl sm:text-3xl leading-10 text-gray-900 mb-2">
                        Cotton west-turn hot blue jacket
                      </h2>
                      <p className="font-normal text-base text-indigo-600">
                        Pagedone brand
                      </p>
                    </div>
                    <button className="group p-4 shadow-sm shadow-transparent bg-indigo-50 rounded-full transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"></button>
                  </div>
                  <p className="font-normal text-base text-gray-400 mb-8">
                    Elevate your wardrobe with the timeless simplicity and
                    comfort of our Cotton Comfort Vest. This versatile piece
                    seamlessly blends style and ease, making it a wardrobe
                    essential for those seeking a laid-back yet polished look.
                    <a href="javascript:;" className="text-indigo-600">
                      More....
                    </a>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 mb-8">
                    <div className="box">
                      <p className="font-medium text-lg leading-8 text-gray-900 pb-4 border-b border-gray-100 mb-3">
                        Rental price
                      </p>
                      <h4 className="font-manrope font-bold text-3xl leading-10 text-gray-900 flex items-end gap-2">
                        $160{" "}
                        <span className="font-inter font-normal text-lg leading-8 text-gray-400">
                          / month
                        </span>
                      </h4>
                    </div>
                    <div className="box">
                      <p className="font-medium text-lg leading-8 text-gray-900 pb-4 border-b border-gray-100 mb-3">
                        Retail value
                      </p>
                      <h4 className="font-manrope font-bold text-3xl leading-10 text-indigo-600">
                        $1,410
                      </h4>
                    </div>
                  </div>
                  <div className="size pb-3 min-[400px]:pb-8 border-b border-gray-100 mb-3 min-[400px]:mb-8">
                    <h6 className="font-medium text-lg leading-8 text-gray-900 mb-2">
                      Size (cm)
                    </h6>
                    <div className="grid grid-cols-3 min-[400px]:grid-cols-6 gap-3">
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        XS
                      </button>
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        S
                      </button>
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        M
                      </button>
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        L
                      </button>
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        XL
                      </button>
                      <button className="rounded-full border border-gray-300 bg-white py-2.5 px-4 w-full flex items-center justify-center font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        2XL
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="buy border-b border-gray-100 mb-8">
                    <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-5 mb-4">
                      <button className="w-full py-4  rounded-full flex items-center justify-center bg-indigo-50 text-lg text-indigo-600 font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-300">
                        Add to bag
                      </button>
                      <button className="w-full py-4  rounded-full flex items-center justify-center bg-indigo-600 text-lg text-white font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                        Buy now
                      </button>
                    </div>
                    <p className="font-normal text-sm leading-6 text-gray-400 mb-8 text-center">
                      *Love it buy it. All rental fess go towards your purchase
                    </p>
                  </div>
                  <div className="detail">
                    <p className="font-medium text-lg lead8-8 text-gray-900 mb-4">
                      Product detais
                    </p>
                    <ul>
                      <li className="flex gap-3 items-center mb-4">
                        <span className="font-normal text-base leading-7 text-gray-900">
                          Branded Top-cut
                        </span>
                      </li>
                      <li className="flex gap-3 items-center mb-4">
                        <span className="font-normal text-base leading-7 text-gray-900">
                          3 color style top
                        </span>
                      </li>
                      <li className="flex gap-3 items-center mb-4">
                        <span className="font-normal text-base leading-7 text-gray-900">
                          Pure Cotton Shirt with 60% as 40%
                        </span>
                      </li>
                      <li className="flex items-center gap-3 mb-4">
                        <span className="font-normal text-base leading-7 text-gray-900">
                          7 Days return policy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
