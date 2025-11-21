export default function WithHorizontalCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-4xl leading-10 font-bold text-black max-lg:text-center">
          Skin Care
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-12 gap-5">
            <a
              href="javascript:;"
              className="img-box group col-span-12 h-full max-h-[328px] w-full max-w-[488px] cursor-pointer overflow-hidden rounded-xl max-lg:mx-auto lg:col-span-4"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157916.png"
                alt="cream image"
                className="h-full w-full rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="text col-span-12 mx-auto flex w-full max-lg:mt-3 max-lg:max-w-[488px] lg:col-span-8 lg:ml-3 lg:items-center">
              <div className="w-full">
                <div className="mb-4 flex w-full items-center justify-between gap-6">
                  <div className="name">
                    <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-gray-900">
                      Light Cream Skin Care
                    </h5>
                    <p className="text-base leading-7 font-normal text-gray-500">
                      Skin Care
                    </p>
                  </div>
                  <button className="group p-0.5 transition-all duration-500"></button>
                </div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h5 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                      $199.00
                    </h5>
                    <p className="text-lg leading-8 font-semibold text-indigo-600">
                      30% off
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-md bg-amber-400 px-1.5 py-0.5 text-base leading-7 font-medium text-white">
                    4.8
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Prevent acne &amp; Treat wrinkles
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Reduce visible pores
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Skin tone serum
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <a
              href="javascript:;"
              className="img-box group col-span-12 h-full max-h-[328px] w-full max-w-[488px] cursor-pointer overflow-hidden rounded-xl max-lg:mx-auto lg:col-span-4"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157932.png"
                alt="Serum bottle image"
                className="h-full w-full rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </a>
            <div className="text col-span-12 mx-auto flex w-full max-lg:mt-3 max-lg:max-w-[488px] lg:col-span-8 lg:ml-3 lg:items-center">
              <div className="w-full">
                <div className="mb-4 flex w-full items-center justify-between gap-6">
                  <div className="name">
                    <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-gray-900">
                      Garderica Floral Skin Serum
                    </h5>
                    <p className="text-base leading-7 font-normal text-gray-500">
                      Skin Care
                    </p>
                  </div>
                  <button className="group p-0.5 transition-all duration-500"></button>
                </div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h5 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                      $199.00
                    </h5>
                    <p className="text-lg leading-8 font-semibold text-indigo-600">
                      30% off
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-md bg-amber-400 px-1.5 py-0.5 text-base leading-7 font-medium text-white">
                    4.8
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Prevent acne &amp; Treat wrinkles
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Reduce visible pores
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="text-base leading-7 font-normal text-gray-900">
                      Skin tone serum
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
