export default function TwoColumnGridImagesAndDescription() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-4 max-sm:hidden">
            <ul className="flex items-center gap-5">
              <li>
                <div className="flex items-center gap-2">
                  <a
                    href="javascript:;"
                    className="text-base leading-7 font-medium text-gray-900"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <a
                    href="javascript:;"
                    className="text-base leading-7 font-medium text-gray-400"
                  >
                    Clothing
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <a
                    href="javascript:;"
                    className="text-base leading-7 font-medium text-gray-400"
                  >
                    Winter
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <a
                    href="javascript:;"
                    className="flex items-center gap-3 text-base leading-7 font-medium text-indigo-600"
                  >
                    Jacket
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-600">
                      New
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="grid grid-cols-1 gap-8 max-md:mx-auto max-md:max-w-xl md:grid-cols-2 xl:grid-cols-1">
              <div className="img-box overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1700475934.png"
                  alt="west-turn hot blue jacket image"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
              <div className="img-box overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1700475957.png"
                  alt="west-turn hot blue jacket image"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
            </div>
            <div className="pro-detail mx-auto">
              <div className="grid grid-cols-1 max-md:mx-auto max-md:max-w-xl lg:grid-cols-2 lg:gap-8 xl:grid-cols-1 xl:gap-0">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-6">
                    <div className="title">
                      <h2 className="font-manrope mb-2 text-2xl leading-10 font-bold text-gray-900 sm:text-3xl">
                        Cotton west-turn hot blue jacket
                      </h2>
                      <p className="text-base font-normal text-indigo-600">
                        Pagedone brand
                      </p>
                    </div>
                    <button className="group rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"></button>
                  </div>
                  <p className="mb-8 text-base font-normal text-gray-400">
                    Elevate your wardrobe with the timeless simplicity and
                    comfort of our Cotton Comfort Vest. This versatile piece
                    seamlessly blends style and ease, making it a wardrobe
                    essential for those seeking a laid-back yet polished look.
                    <a href="javascript:;" className="text-indigo-600">
                      More....
                    </a>
                  </p>
                  <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2">
                    <div className="box">
                      <p className="mb-3 border-b border-gray-100 pb-4 text-lg leading-8 font-medium text-gray-900">
                        Rental price
                      </p>
                      <h4 className="font-manrope flex items-end gap-2 text-3xl leading-10 font-bold text-gray-900">
                        $160{" "}
                        <span className="font-inter text-lg leading-8 font-normal text-gray-400">
                          / month
                        </span>
                      </h4>
                    </div>
                    <div className="box">
                      <p className="mb-3 border-b border-gray-100 pb-4 text-lg leading-8 font-medium text-gray-900">
                        Retail value
                      </p>
                      <h4 className="font-manrope text-3xl leading-10 font-bold text-indigo-600">
                        $1,410
                      </h4>
                    </div>
                  </div>
                  <div className="size mb-3 border-b border-gray-100 pb-3 min-[400px]:mb-8 min-[400px]:pb-8">
                    <h6 className="mb-2 text-lg leading-8 font-medium text-gray-900">
                      Size (cm)
                    </h6>
                    <div className="grid grid-cols-3 gap-3 min-[400px]:grid-cols-6">
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        XS
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        S
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        M
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        L
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        XL
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-400">
                        2XL
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="buy mb-8 border-b border-gray-100">
                    <div className="mb-4 flex flex-col items-center justify-center gap-5 min-[400px]:flex-row">
                      <button className="flex w-full items-center justify-center rounded-full bg-indigo-50 py-4 text-lg font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-300">
                        Add to bag
                      </button>
                      <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 py-4 text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                        Buy now
                      </button>
                    </div>
                    <p className="mb-8 text-center text-sm leading-6 font-normal text-gray-400">
                      *Love it buy it. All rental fess go towards your purchase
                    </p>
                  </div>
                  <div className="detail">
                    <p className="lead8-8 mb-4 text-lg font-medium text-gray-900">
                      Product detais
                    </p>
                    <ul>
                      <li className="mb-4 flex items-center gap-3">
                        <span className="text-base leading-7 font-normal text-gray-900">
                          Branded Top-cut
                        </span>
                      </li>
                      <li className="mb-4 flex items-center gap-3">
                        <span className="text-base leading-7 font-normal text-gray-900">
                          3 color style top
                        </span>
                      </li>
                      <li className="mb-4 flex items-center gap-3">
                        <span className="text-base leading-7 font-normal text-gray-900">
                          Pure Cotton Shirt with 60% as 40%
                        </span>
                      </li>
                      <li className="mb-4 flex items-center gap-3">
                        <span className="text-base leading-7 font-normal text-gray-900">
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
  )
}
