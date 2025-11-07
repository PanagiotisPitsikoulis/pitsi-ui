export default function WithUserRating() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl leading-10 text-black mb-8 text-center">
          Feature Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="javascript:;"
            className="card max-w-[280px] mx-auto sm:mr-0 group"
          >
            <div className="img-box rounded-xl overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158229.png"
                alt="Laptop image"
                className="w-full h-auto cursor-pointer transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </div>
            <div className="text pt-5">
              <div className="flex justify-between items-center">
                <h6 className="font-medium text-lg leading-8 text-black">
                  Laptop
                </h6>
                <button className="rounded-full border border-gray-300 bg-white p-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="flex mt-3 pb-5 gap-1 border-b border-gray-100 items-center"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card max-w-[280px] max-sm:mx-auto group"
          >
            <div className="img-box rounded-xl overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158252.png"
                alt="iPhone image"
                className="w-full h-auto cursor-pointer transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </div>
            <div className="text pt-5">
              <div className="flex justify-between items-center">
                <h6 className="font-medium text-lg leading-8 text-black">
                  iPhone
                </h6>
                <button className="rounded-full border border-gray-300 bg-white p-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="flex mt-3 pb-5 gap-1 border-b border-gray-100 items-center"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card max-w-[280px] mx-auto sm:mr-0 group"
          >
            <div className="img-box rounded-xl overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158264.png"
                alt="iPad image"
                className="w-full h-auto cursor-pointer transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </div>
            <div className="text pt-5">
              <div className="flex justify-between items-center">
                <h6 className="font-medium text-lg leading-8 text-black">
                  iPad
                </h6>
                <button className="rounded-full border border-gray-300 bg-white p-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="flex mt-3 pb-5 gap-1 border-b border-gray-100 items-center"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card max-w-[280px] max-sm:mx-auto group"
          >
            <div className="img-box rounded-xl overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158275.png"
                alt="Smart Watch image"
                className="w-full h-auto cursor-pointer transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </div>
            <div className="text pt-5">
              <div className="flex justify-between items-center">
                <h6 className="font-medium text-lg leading-8 text-black">
                  Smart Watch
                </h6>
                <button className="rounded-full border border-gray-300 bg-white p-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"></button>
              </div>
              <div className="flex mt-3 pb-5 gap-1 border-b border-gray-100 items-center"></div>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
