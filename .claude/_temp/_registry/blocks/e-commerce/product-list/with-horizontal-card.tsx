export default function WithHorizontalCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black mb-8 max-lg:text-center">
          Skin Care
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-12 gap-5">
            <a
              href="javascript:;"
              className="col-span-12 lg:col-span-4 img-box w-full h-full max-w-[488px] max-h-[328px] max-lg:mx-auto overflow-hidden group cursor-pointer rounded-xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157916.png"
                alt="cream image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </a>
            <div className="col-span-12 lg:col-span-8 text lg:ml-3 w-full flex lg:items-center max-lg:mt-3 max-lg:max-w-[488px] mx-auto">
              <div className="w-full">
                <div className="flex items-center justify-between gap-6 w-full mb-4">
                  <div className="name">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-2">
                      Light Cream Skin Care
                    </h5>
                    <p className="font-normal text-base leading-7 text-gray-500">
                      Skin Care
                    </p>
                  </div>
                  <button className="group transition-all duration-500 p-0.5"></button>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3 ">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                      $199.00
                    </h5>
                    <p className="font-semibold text-lg leading-8 text-indigo-600">
                      30% off
                    </p>
                  </div>
                  <span className="flex items-center gap-1 bg-amber-400 rounded-md py-0.5 px-1.5 font-medium text-base leading-7 text-white">
                    4.8
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
                      Prevent acne &amp; Treat wrinkles
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
                      Reduce visible pores
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
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
              className="col-span-12 lg:col-span-4 img-box w-full h-full max-w-[488px] max-h-[328px] max-lg:mx-auto overflow-hidden group cursor-pointer rounded-xl"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157932.png"
                alt="Serum bottle image"
                className="w-full h-full transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </a>
            <div className="col-span-12 lg:col-span-8 text lg:ml-3 w-full flex lg:items-center max-lg:mt-3 max-lg:max-w-[488px] mx-auto">
              <div className="w-full">
                <div className="flex items-center justify-between gap-6 w-full mb-4">
                  <div className="name">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-2">
                      Garderica Floral Skin Serum
                    </h5>
                    <p className="font-normal text-base leading-7 text-gray-500">
                      Skin Care
                    </p>
                  </div>
                  <button className="group transition-all duration-500 p-0.5"></button>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3 ">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                      $199.00
                    </h5>
                    <p className="font-semibold text-lg leading-8 text-indigo-600">
                      30% off
                    </p>
                  </div>
                  <span className="flex items-center gap-1 bg-amber-400 rounded-md py-0.5 px-1.5 font-medium text-base leading-7 text-white">
                    4.8
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
                      Prevent acne &amp; Treat wrinkles
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
                      Reduce visible pores
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <p className="font-normal text-base leading-7 text-gray-900">
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
  );
}
