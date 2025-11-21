export default function WithUserRating() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-center text-3xl leading-10 font-bold text-black min-[400px]:text-4xl">
          Feature Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="javascript:;"
            className="card group mx-auto max-w-[280px] sm:mr-0"
          >
            <div className="img-box overflow-hidden rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1701158229.png"
                alt="Laptop image"
                className="h-auto w-full cursor-pointer rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="text pt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-lg leading-8 font-medium text-black">
                  Laptop
                </h6>
                <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="mt-3 flex items-center gap-1 border-b border-gray-100 pb-5"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group max-w-[280px] max-sm:mx-auto"
          >
            <div className="img-box overflow-hidden rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1701158252.png"
                alt="iPhone image"
                className="h-auto w-full cursor-pointer rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="text pt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-lg leading-8 font-medium text-black">
                  iPhone
                </h6>
                <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="mt-3 flex items-center gap-1 border-b border-gray-100 pb-5"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group mx-auto max-w-[280px] sm:mr-0"
          >
            <div className="img-box overflow-hidden rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1701158264.png"
                alt="iPad image"
                className="h-auto w-full cursor-pointer rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="text pt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-lg leading-8 font-medium text-black">
                  iPad
                </h6>
                <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="mt-3 flex items-center gap-1 border-b border-gray-100 pb-5"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group max-w-[280px] max-sm:mx-auto"
          >
            <div className="img-box overflow-hidden rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1701158275.png"
                alt="Smart Watch image"
                className="h-auto w-full cursor-pointer rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="text pt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-lg leading-8 font-medium text-black">
                  Smart Watch
                </h6>
                <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="mt-3 flex items-center gap-1 border-b border-gray-100 pb-5"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
