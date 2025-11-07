export default function WithHoverEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-2xl min-[400px]:text-4xl leading-10 text-black mb-8 text-center">
          Available Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="box w-full max-w-[280px] mx-auto sm:mr-0 group">
            <a
              href="javascript:;"
              className="img-box w-full h-auto rounded-3xl flex flex-col items-center justify-end  overflow-hidden"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157863.png"
                alt="Blazer image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-2xl object-cover"
              />
            </a>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="pro-name">
                  <h6 className="font-semibold text-base leading-7 mb-2 text-black">
                    Roadster
                  </h6>
                  <p className="font-normal text-xs leading-5 text-gray-500">
                    Black Solid Round Neck
                  </p>
                </div>
                <button className="w-14 h-14 p-3 rounded-full bg-transparent flex items-center justify-center border border-gray-200 shadow-sm shadow-transparent group transition-all duration-500 hover:border-gray-400 hover:shadow-gray-200 hover:bg-gray-100"></button>
              </div>
              <div className="flex gap-1">
                <strong className="font-semibold text-base leading-7 text-indigo-600">
                  $80{" "}
                </strong>
                <p className="font-normal text-xs leading-5 text-indigo-200 flex items-center ">
                  <del className="text-indigo-200"> $100</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box  w-full max-w-[280px] mx-auto sm:ml-0 group">
            <a
              href="javascript:;"
              className="img-box w-full h-auto rounded-3xl flex flex-col items-center justify-end  overflow-hidden"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701159448.png"
                alt="blue Blazer image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-2xl object-cover"
              />
            </a>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="pro-name">
                  <h6 className="font-semibold text-base leading-7 mb-2 text-black">
                    Blue Blazer
                  </h6>
                  <p className="font-normal text-xs leading-5 text-gray-500">
                    Men’s clothes
                  </p>
                </div>
                <button className="w-14 h-14 p-3 rounded-full bg-transparent flex items-center justify-center border border-gray-200 shadow-sm shadow-transparent group transition-all duration-500 hover:border-gray-400 hover:shadow-gray-200 hover:bg-gray-100"></button>
              </div>
              <div className="flex gap-1">
                <strong className="font-semibold text-base leading-7 text-indigo-600">
                  $120{" "}
                </strong>
                <p className="font-normal text-xs leading-5 text-indigo-200 flex items-center ">
                  <del className="text-indigo-200"> $149</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box  w-full max-w-[280px] mx-auto sm:mr-0 group">
            <a
              href="javascript:;"
              className="img-box w-full h-auto rounded-3xl flex flex-col items-center justify-end  overflow-hidden"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157885.png"
                alt="Shirt image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-2xl object-cover"
              />
            </a>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="pro-name">
                  <h6 className="font-semibold text-base leading-7 mb-2 text-black">
                    Black Shirt
                  </h6>
                  <p className="font-normal text-xs leading-5 text-gray-500">
                    Shirts
                  </p>
                </div>
                <button className="w-14 h-14 p-3 rounded-full bg-transparent flex items-center justify-center border border-gray-200 shadow-sm shadow-transparent group transition-all duration-500 hover:border-gray-400 hover:shadow-gray-200 hover:bg-gray-100"></button>
              </div>
              <div className="flex gap-1">
                <strong className="font-semibold text-base leading-7 text-indigo-600">
                  $75{" "}
                </strong>
                <p className="font-normal text-xs leading-5 text-indigo-200 flex items-center ">
                  <del className="text-indigo-200"> $100</del>
                </p>
              </div>
            </div>
          </div>
          <div className="box  w-full max-w-[280px] mx-auto sm:ml-0 group">
            <a
              href="javascript:;"
              className="img-box w-full h-auto rounded-3xl flex flex-col items-center justify-end  overflow-hidden"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157900.png"
                alt="T-shirt image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-2xl object-cover"
              />
            </a>
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="pro-name">
                  <h6 className="font-semibold text-base leading-7 mb-2 text-black">
                    Beige T-shirt
                  </h6>
                  <p className="font-normal text-xs leading-5 text-gray-500">
                    Women’s clothes
                  </p>
                </div>
                <button className="w-14 h-14 p-3 rounded-full bg-transparent flex items-center justify-center border border-gray-200 shadow-sm shadow-transparent group transition-all duration-500 hover:border-gray-400 hover:shadow-gray-200 hover:bg-gray-100"></button>
              </div>
              <div className="flex gap-1">
                <strong className="font-semibold text-base leading-7 text-indigo-600">
                  $75{" "}
                </strong>
                <p className="font-normal text-xs leading-5 text-indigo-200 flex items-center ">
                  <del className="text-indigo-200"> $75</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
