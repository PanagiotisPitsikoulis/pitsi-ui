export default function SplitWithImageAndDescription() {
  return (
    <section className="relative ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto ">
              <img
                src="https://pagedone.io/asset/uploads/1700471600.png"
                alt="Yellow Tropical Printed Shirt image"
                className="max-lg:mx-auto lg:ml-auto h-full object-cover"
              />
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                Clothing&nbsp; /&nbsp; Menswear
              </p>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                Basic Yellow Tropical Printed Shirt
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  $220
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1"></div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                    1624 review
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5">
                Introducing our vibrant Basic Yellow Tropical Printed Shirt - a
                celebration of style and sunshine! Embrace the essence of summer
                wherever you go with this eye-catching piece that effortlessly
                blends comfort and tropical flair.{" "}
                <a href="#" className="text-indigo-600">
                  More....
                </a>
              </p>
              <ul className="grid gap-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base text-gray-900 ">
                    Branded shirt
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base text-gray-900 ">
                    3 color shirt
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base text-gray-900 ">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base text-gray-900 ">
                    all size is available
                  </span>
                </li>
              </ul>
              <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                Size
              </p>
              <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                  <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    S
                  </button>
                  <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    M
                  </button>
                  <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    L
                  </button>
                  <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    XL
                  </button>
                  <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                    XXL
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                <div className="flex sm:items-center sm:justify-center w-full">
                  <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"></button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                  />
                  <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"></button>
                </div>
                <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
                  Add to cart
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300"></button>
                <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
