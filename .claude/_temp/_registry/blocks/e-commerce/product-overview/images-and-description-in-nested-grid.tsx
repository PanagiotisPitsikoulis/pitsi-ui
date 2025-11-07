export default function ImagesAndDescriptionInNestedGrid() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="block lg:flex items-center justify-between mb-4">
            <div className="flex md:flex-row flex-col items-center gap-4 lg:justify-start justify-center">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 md:text-left text-center">
                White Light polka dots red top
              </h2>
              <span className="rounded-full py-1.5 px-4 bg-indigo-50 text-indigo-600 font-medium text-sm">
                #01 - Best seller
              </span>
            </div>
            <div className="social flex items-center gap-4 lg:justify-end justify-center max-lg:mt-4">
              <a
                href="javascript:;"
                className="w-10 h-10 rounded-lg flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-100"
              ></a>
              <a
                href="javascript:;"
                className="w-10 h-10 rounded-lg flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-100"
              ></a>
              <a
                href="javascript:;"
                className="w-10 h-10 rounded-lg flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-100"
              ></a>
              <a
                href="javascript:;"
                className="w-10 h-10 rounded-lg flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-100"
              ></a>
            </div>
          </div>
          <div className="flex items-center lg:justify-start justify-center max-sm:flex-wrap gap-y-3 mt-3">
            <span className="p-2 rounded-full border border-indigo-600 cursor-pointer ml-3 group transition-all duration-500 hover:bg-indigo-600"></span>
            <p className="font-semibold text-lg leading-8 text-gray-900 ml-3 whitespace-nowrap">
              <span className="text-gray-500 font-medium text-base leading-7">
                By{" "}
              </span>{" "}
              Pagedone
            </p>

            <div className="flex items-center ">
              <span className="flex items-center gap-1 bg-amber-400 rounded-md py-0.5 px-1.5 font-medium text-base leading-7 text-white">
                4.8
              </span>
              <p className="font-medium text-base leading-7 text-gray-900 ml-2">
                2.5k Reviews
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-8 mb-12">
            <div className="img-box col-span-12 lg:col-span-8">
              <img
                src="https://pagedone.io/asset/uploads/1700476434.png"
                alt="red dots top image"
                className="max-lg:mx-auto rounded-3xl object-cover"
              />
            </div>
            <div className="img-box col-span-12 lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-7">
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700476447.png"
                    alt="red dots top image"
                    className="max-lg:ml-auto max-sm:w-full rounded-3xl object-cover"
                  />
                </div>
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700476462.png"
                    alt="red dots top image"
                    className="max-lg:mr-auto max-sm:w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 max-lg:max-w-[800px] max-lg:mx-auto">
            <div className="col-span-12 md:col-span-6 lg:col-span-8 max-lg:mx-auto">
              <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 mb-5">
                Overview
              </h5>
              <p className="text-gray-400 text-base font-normal mb-8">
                Elevate your fashion game with our White Light Polka Dots Red
                Top, a delightful blend of classic charm and contemporary style.
                Perfect for a day out or a casual evening, this top effortlessly
                combines comfort with a touch of whimsy.
                <a href="javascript:;" className="text-indigo-600">
                  More....
                </a>
              </p>
              <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 mb-5">
                Product detais
              </h5>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-900">
                    Branded Top-cut
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-900">
                    3 color style top
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-900">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-900">
                    7 Days return policy
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 max-lg:mx-auto">
              <p className="font-medium text-sm leading-6 text-gray-900 mb-2">
                Select size
              </p>
              <div className="flex items-center w-full divide-x divide-gray-200 rounded-full border border-gray-200 mb-4">
                <button className="font-semibold text-sm leading-6 text-gray-900 text-center px-2 w-full bg-transparent py-2.5 rounded-l-full shadow-inner shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-100">
                  S
                </button>
                <button className="font-semibold text-sm leading-6 text-gray-900 px-2 text-center w-full bg-transparent py-2.5 shadow-inner shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-100">
                  M
                </button>
                <button className="font-semibold text-sm leading-6 text-gray-900 px-2 text-center w-full bg-transparent py-2.5 shadow-inner shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-100">
                  L
                </button>
                <button className="font-semibold text-sm leading-6 text-gray-900 px-2 text-center w-full bg-transparent py-2.5 rounded-r-full shadow-inner shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-100">
                  XL
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-3xl cursor-pointer bg-gray-50 w-full mb-6 group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-100">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-base leading-7 text-gray-400 transition-all duration-500 group-hover:text-black">
                    Size Guide
                  </p>
                </div>
              </div>
              <p className="font-normal text-sm leading-6 text-gray-400 mb-6">
                Refer to our size guide for accurate measurements and find the
                perfect fit for your style.
              </p>
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-indigo-600 font-bold font-manrope text-3xl leading-10">
                  $220.00
                </h5>
                <div className="flex items-center justify-end gap-4">
                  <input
                    type="text"
                    name="qty"
                    id="qty"
                    className="outline-none border border-gray-200 bg-gray-100 rounded-full w-10 h-10 text-center font-semibold text-base leading-7 text-gray-900 placeholder:text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:placeholder:text-black focus-within:text-black"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between py-2.5 pl-6 pr-3 rounded-full bg-indigo-50">
                <div>
                  <p className="font-normal text-xs text-gray-900 mb-2">
                    Total prize
                  </p>
                  <p className="font-semibold text-sm text-indigo-600">$220</p>
                </div>
                <button className=" h-full px-8 text-center rounded-full py-2.5 bg-indigo-600 sh-1 font-semibold text-sm text-white transition-all duration-500 hover:bg-indigo-700">
                  Buy&nbsp;Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
