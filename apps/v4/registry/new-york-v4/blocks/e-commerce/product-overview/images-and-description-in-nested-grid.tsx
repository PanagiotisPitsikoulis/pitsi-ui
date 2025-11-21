export default function ImagesAndDescriptionInNestedGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-4 block items-center justify-between lg:flex">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
              <h2 className="font-manrope text-center text-3xl leading-10 font-bold text-gray-900 md:text-left">
                White Light polka dots red top
              </h2>
              <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
                #01 - Best seller
              </span>
            </div>
            <div className="social flex items-center justify-center gap-4 max-lg:mt-4 lg:justify-end">
              <a
                href="javascript:;"
                className="group flex h-10 w-10 items-center justify-center rounded-lg shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"
              ></a>
              <a
                href="javascript:;"
                className="group flex h-10 w-10 items-center justify-center rounded-lg shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"
              ></a>
              <a
                href="javascript:;"
                className="group flex h-10 w-10 items-center justify-center rounded-lg shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"
              ></a>
              <a
                href="javascript:;"
                className="group flex h-10 w-10 items-center justify-center rounded-lg shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300"
              ></a>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-y-3 max-sm:flex-wrap lg:justify-start">
            <span className="group ml-3 cursor-pointer rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"></span>
            <p className="ml-3 text-lg leading-8 font-semibold whitespace-nowrap text-gray-900">
              <span className="text-base leading-7 font-medium text-gray-500">
                By{" "}
              </span>{" "}
              Pagedone
            </p>

            <div className="flex items-center">
              <span className="flex items-center gap-1 rounded-md bg-amber-400 px-1.5 py-0.5 text-base leading-7 font-medium text-white">
                4.8
              </span>
              <p className="ml-2 text-base leading-7 font-medium text-gray-900">
                2.5k Reviews
              </p>
            </div>
          </div>
          <div className="mt-8 mb-12 grid grid-cols-12 gap-8">
            <div className="img-box col-span-12 lg:col-span-8">
              <img
                src="https://pagedone.io/asset/uploads/1700476434.png"
                alt="red dots top image"
                className="rounded-3xl object-cover max-lg:mx-auto"
              />
            </div>
            <div className="img-box col-span-12 lg:col-span-4">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700476447.png"
                    alt="red dots top image"
                    className="rounded-3xl object-cover max-lg:ml-auto max-sm:w-full"
                  />
                </div>
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700476462.png"
                    alt="red dots top image"
                    className="rounded-3xl object-cover max-lg:mr-auto max-sm:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 max-lg:mx-auto max-lg:max-w-[800px]">
            <div className="col-span-12 max-lg:mx-auto md:col-span-6 lg:col-span-8">
              <h5 className="font-manrope mb-5 text-2xl leading-9 font-semibold text-gray-900">
                Overview
              </h5>
              <p className="mb-8 text-base font-normal text-gray-400">
                Elevate your fashion game with our White Light Polka Dots Red
                Top, a delightful blend of classic charm and contemporary style.
                Perfect for a day out or a casual evening, this top effortlessly
                combines comfort with a touch of whimsy.
                <a href="javascript:;" className="text-indigo-600">
                  More....
                </a>
              </p>
              <h5 className="font-manrope mb-5 text-2xl leading-9 font-semibold text-gray-900">
                Product detais
              </h5>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="text-base leading-7 font-normal text-gray-900">
                    Branded Top-cut
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base leading-7 font-normal text-gray-900">
                    3 color style top
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base leading-7 font-normal text-gray-900">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base leading-7 font-normal text-gray-900">
                    7 Days return policy
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 max-lg:mx-auto md:col-span-6 lg:col-span-4">
              <p className="mb-2 text-sm leading-6 font-medium text-gray-900">
                Select size
              </p>
              <div className="mb-4 flex w-full items-center divide-x divide-gray-200 rounded-full border border-gray-200">
                <button className="w-full rounded-l-full bg-transparent px-2 py-2.5 text-center text-sm leading-6 font-semibold text-gray-900 shadow-inner shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-200">
                  S
                </button>
                <button className="w-full bg-transparent px-2 py-2.5 text-center text-sm leading-6 font-semibold text-gray-900 shadow-inner shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-200">
                  M
                </button>
                <button className="w-full bg-transparent px-2 py-2.5 text-center text-sm leading-6 font-semibold text-gray-900 shadow-inner shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-200">
                  L
                </button>
                <button className="w-full rounded-r-full bg-transparent px-2 py-2.5 text-center text-sm leading-6 font-semibold text-gray-900 shadow-inner shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-200">
                  XL
                </button>
              </div>
              <div className="group mb-6 flex w-full cursor-pointer items-center justify-between rounded-3xl bg-gray-50 p-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-300">
                <div className="flex items-center gap-2">
                  <p className="text-base leading-7 font-medium text-gray-400 transition-all duration-500 group-hover:text-black">
                    Size Guide
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-6 font-normal text-gray-400">
                Refer to our size guide for accurate measurements and find the
                perfect fit for your style.
              </p>
              <div className="mb-4 flex items-center justify-between">
                <h5 className="font-manrope text-3xl leading-10 font-bold text-indigo-600">
                  $220.00
                </h5>
                <div className="flex items-center justify-end gap-4">
                  <input
                    type="text"
                    name="qty"
                    id="qty"
                    className="h-10 w-10 rounded-full border border-gray-200 bg-gray-100 text-center text-base leading-7 font-semibold text-gray-900 transition-all duration-500 outline-none placeholder:text-gray-900 focus-within:bg-gray-100 focus-within:text-black focus-within:placeholder:text-black"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-full bg-indigo-50 py-2.5 pr-3 pl-6">
                <div>
                  <p className="mb-2 text-xs font-normal text-gray-900">
                    Total prize
                  </p>
                  <p className="text-sm font-semibold text-indigo-600">$220</p>
                </div>
                <button className="sh-1 h-full rounded-full bg-indigo-600 px-8 py-2.5 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                  Buy&nbsp;Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
