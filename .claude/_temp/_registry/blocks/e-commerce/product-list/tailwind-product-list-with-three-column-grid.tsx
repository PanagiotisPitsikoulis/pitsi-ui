export default function TailwindProductListWithThreeColumnGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">
          Available Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <a href="javascript:;" className="max-w-[384px] mx-auto">
            <div className="w-full max-w-sm aspect-square">
              <img
                src="https://pagedone.io/asset/uploads/1701157806.png"
                alt="cream image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black mb-2">
                  Skin care cream
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $74.99
                </h6>
              </div>
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"></button>
            </div>
          </a>
          <a href="javascript:;" className="max-w-[384px] mx-auto">
            <div className="w-full max-w-sm aspect-square">
              <img
                src="https://pagedone.io/asset/uploads/1701157826.png"
                alt="cream image"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black mb-2">
                  Men’s Facial
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $25
                </h6>
              </div>
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"></button>
            </div>
          </a>
          <a href="javascript:;" className="max-w-[384px] mx-auto">
            <div className="w-full max-w-sm aspect-square relative">
              <img
                src="https://pagedone.io/asset/uploads/1701157844.png"
                alt="serum bottle image"
                className="w-full h-full rounded-xl object-cover"
              />
              <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                20% Off
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="font-medium text-xl leading-8 text-black mb-2">
                  Dark circles serum
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $199.99
                </h6>
              </div>
              <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"></button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
