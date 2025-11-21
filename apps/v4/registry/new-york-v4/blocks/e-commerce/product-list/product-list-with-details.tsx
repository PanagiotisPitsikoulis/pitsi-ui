export default function ProductListWithDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-4xl font-bold text-black max-xl:text-center">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <a
            href="javascript:;"
            className="group relative mx-auto cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center sm:mr-0 xl:mx-auto"
          >
            <img
              className="rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1700731972.png"
              alt="Jacket image"
            />
            <div className="absolute bottom-3 left-0 z-10 mx-3 w-[calc(100%-24px)] rounded-xl bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-50 group-hover:shadow-indigo-200">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="text-base leading-7 font-semibold text-black">
                  Trendy Jacket
                </h6>
                <h6 className="text-right text-base leading-7 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500">
                Women's Winter Wear
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group relative mx-auto cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center sm:ml-0 xl:mx-auto"
          >
            <img
              className="rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1700731993.png"
              alt="Blazer image"
            />
            <div className="absolute bottom-3 left-0 z-10 mx-3 w-[calc(100%-24px)] rounded-xl bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-50 group-hover:shadow-indigo-200">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="text-base leading-7 font-semibold text-black">
                  Black Blazer
                </h6>
                <h6 className="text-right text-base leading-7 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group relative mx-auto cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center sm:mr-0 xl:mx-auto"
          >
            <img
              className="rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1700732011.png"
              alt="printed top image"
            />
            <div className="absolute bottom-3 left-0 z-10 mx-3 w-[calc(100%-24px)] rounded-xl bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-50 group-hover:shadow-indigo-200">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="text-base leading-7 font-semibold text-black">
                  Red Flowers
                </h6>
                <h6 className="text-right text-base leading-7 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500">Womenswear</p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group relative mx-auto cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center sm:ml-0 xl:mx-auto"
          >
            <img
              className="rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1700732027.png"
              alt="Denim jacket image"
            />
            <div className="absolute bottom-3 left-0 z-10 mx-3 w-[calc(100%-24px)] rounded-xl bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-50 group-hover:shadow-indigo-200">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="text-base leading-7 font-semibold text-black">
                  Denim Jacket
                </h6>
                <h6 className="text-right text-base leading-7 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500">Children Wear</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
