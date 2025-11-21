export default function SplitWithImageAndDescription() {
  return (
    <section className="relative">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-0">
        <div className="mx-auto grid grid-cols-1 gap-16 max-md:px-2 lg:grid-cols-2">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1700471600.png"
                alt="Yellow Tropical Printed Shirt image"
                className="h-full object-cover max-lg:mx-auto lg:ml-auto"
              />
            </div>
          </div>
          <div className="data my-0 flex w-full items-center justify-center pr-0 max-lg:pb-10 lg:my-5 lg:pr-8 xl:my-2 xl:justify-start">
            <div className="data w-full max-w-xl">
              <p className="mb-4 text-lg leading-8 font-medium text-indigo-600">
                Clothing&nbsp; /&nbsp; Menswear
              </p>
              <h2 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900 capitalize">
                Basic Yellow Tropical Printed Shirt
              </h2>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl leading-9 font-semibold text-gray-900 sm:border-r">
                  $220
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1"></div>
                  <span className="pl-2 text-sm leading-7 font-normal text-gray-500">
                    1624 review
                  </span>
                </div>
              </div>
              <p className="mb-5 text-base font-normal text-gray-500">
                Introducing our vibrant Basic Yellow Tropical Printed Shirt - a
                celebration of style and sunshine! Embrace the essence of summer
                wherever you go with this eye-catching piece that effortlessly
                blends comfort and tropical flair.{" "}
                <a href="#" className="text-indigo-600">
                  More....
                </a>
              </p>
              <ul className="mb-8 grid gap-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-base font-normal text-gray-900">
                    Branded shirt
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base font-normal text-gray-900">
                    3 color shirt
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base font-normal text-gray-900">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base font-normal text-gray-900">
                    all size is available
                  </span>
                </li>
              </ul>
              <p className="mb-4 text-lg leading-8 font-medium text-gray-900">
                Size
              </p>
              <div className="w-full flex-wrap border-b border-gray-100 pb-8">
                <div className="grid max-w-md grid-cols-3 gap-3 min-[400px]:grid-cols-5">
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg leading-8 font-semibold text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    S
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg leading-8 font-semibold text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    M
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg leading-8 font-semibold text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    L
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg leading-8 font-semibold text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    XL
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg leading-8 font-semibold text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    XXL
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-2">
                <div className="flex w-full sm:items-center sm:justify-center">
                  <button className="group rounded-l-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"></button>
                  <input
                    type="text"
                    className="w-full cursor-pointer border-y border-gray-400 bg-transparent px-6 py-[13px] text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 hover:bg-gray-50 sm:max-w-[118px]"
                  />
                  <button className="group rounded-r-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"></button>
                </div>
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-indigo-50 px-5 py-4 text-lg font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                  Add to cart
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="group rounded-full bg-indigo-50 p-4 transition-all duration-500 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300"></button>
                <button className="flex w-full items-center justify-center rounded-[100px] bg-indigo-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
