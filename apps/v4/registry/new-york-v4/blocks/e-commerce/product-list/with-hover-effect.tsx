export default function WithHoverEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-center text-2xl leading-10 font-bold text-black min-[400px]:text-4xl">
          Available Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="box group mx-auto w-full max-w-[280px] sm:mr-0">
            <a
              href="javascript:;"
              className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-3xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157863.png"
                alt="Blazer image"
                className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="pro-name">
                  <h6 className="mb-2 text-base leading-7 font-semibold text-black">
                    Roadster
                  </h6>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    Black Solid Round Neck
                  </p>
                </div>
                <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200"></button>
              </div>
              <div className="flex gap-1">
                <strong className="text-base leading-7 font-semibold text-indigo-600">
                  $80{" "}
                </strong>
                <p className="flex items-center text-xs leading-5 font-normal text-indigo-200">
                  <del className="text-indigo-200"> $100</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box group mx-auto w-full max-w-[280px] sm:ml-0">
            <a
              href="javascript:;"
              className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-3xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701159448.png"
                alt="blue Blazer image"
                className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="pro-name">
                  <h6 className="mb-2 text-base leading-7 font-semibold text-black">
                    Blue Blazer
                  </h6>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    Men’s clothes
                  </p>
                </div>
                <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200"></button>
              </div>
              <div className="flex gap-1">
                <strong className="text-base leading-7 font-semibold text-indigo-600">
                  $120{" "}
                </strong>
                <p className="flex items-center text-xs leading-5 font-normal text-indigo-200">
                  <del className="text-indigo-200"> $149</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box group mx-auto w-full max-w-[280px] sm:mr-0">
            <a
              href="javascript:;"
              className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-3xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157885.png"
                alt="Shirt image"
                className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="pro-name">
                  <h6 className="mb-2 text-base leading-7 font-semibold text-black">
                    Black Shirt
                  </h6>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    Shirts
                  </p>
                </div>
                <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200"></button>
              </div>
              <div className="flex gap-1">
                <strong className="text-base leading-7 font-semibold text-indigo-600">
                  $75{" "}
                </strong>
                <p className="flex items-center text-xs leading-5 font-normal text-indigo-200">
                  <del className="text-indigo-200"> $100</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box group mx-auto w-full max-w-[280px] sm:ml-0">
            <a
              href="javascript:;"
              className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-3xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157900.png"
                alt="T-shirt image"
                className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="pro-name">
                  <h6 className="mb-2 text-base leading-7 font-semibold text-black">
                    Beige T-shirt
                  </h6>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    Women’s clothes
                  </p>
                </div>
                <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200"></button>
              </div>
              <div className="flex gap-1">
                <strong className="text-base leading-7 font-semibold text-indigo-600">
                  $75{" "}
                </strong>
                <p className="flex items-center text-xs leading-5 font-normal text-indigo-200">
                  <del className="text-indigo-200"> $75</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
