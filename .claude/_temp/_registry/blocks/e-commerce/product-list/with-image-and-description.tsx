export default function WithImageAndDescription() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl leading-10 text-black mb-8 max-lg:text-center">
          Trending Gadgets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="grid grid-cols-12 gap-5 group">
            <a
              href="javascript:;"
              className="col-span-12 lg:col-span-4 overflow-hidden rounded-2xl "
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157951.png"
                alt="mobile phone image"
                className="lg:w-full lg:h-auto max-lg:mx-auto transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </a>
            <div className="col-span-12 lg:col-span-8 flex items-center lg:pl-3 max-lg:max-w-lg max-lg:mx-auto">
              <div className="w-full">
                <div className="flex items-center justify-between gap-6 w-full mb-4">
                  <div className="name">
                    <h5 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      iPhone 15
                    </h5>
                    <p className="font-normal text-base leading-7 text-gray-500">
                      Apple Inc.
                    </p>
                  </div>
                  <button className="p-4 rounded-full bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100"></button>
                </div>
                <div className="flex items-center pb-6 border-b border-gray-100 mb-6">
                  <h6 className="font-manrope font-bold text-2xl leading-9 text-indigo-600 pr-3 border-r border-gray-200">
                    $799
                  </h6>
                  <div className="flex items-center pl-3 gap-1"></div>
                  <p className="font-normal text-base leading-7 text-amber-400 pl-2">
                    1624 review
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Operating System:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      iOS 17
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Display Size:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      654 IP
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      RAM:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      8 GB
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Built In Memory:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      128 GB
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 group">
            <a
              href="javascript:;"
              className="col-span-12 lg:col-span-4 overflow-hidden rounded-2xl "
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157973.png"
                alt="mobile iphone image"
                className="lg:w-full lg:h-auto max-lg:mx-auto transition-all duration-700 group-hover:scale-[1.05] rounded-xl object-cover"
              />
            </a>
            <div className="col-span-12 lg:col-span-8 flex items-center lg:pl-3 max-lg:max-w-lg max-lg:mx-auto">
              <div className="w-full">
                <div className="flex items-center justify-between gap-6 w-full mb-4">
                  <div className="name">
                    <h5 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      iPhone 14
                    </h5>
                    <p className="font-normal text-base leading-7 text-gray-500">
                      Apple Inc.
                    </p>
                  </div>
                  <button className="p-4 rounded-full bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100"></button>
                </div>
                <div className="flex items-center pb-6 border-b border-gray-100 mb-6">
                  <h6 className="font-manrope font-bold text-2xl leading-9 text-indigo-600 pr-3 border-r border-gray-200">
                    $999
                  </h6>
                  <div className="flex items-center pl-3 gap-1"></div>
                  <p className="font-normal text-base leading-7 text-amber-400 pl-2">
                    1624 review
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Operating System:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      iOS 17
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Display Size:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      654 IP
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      RAM:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      16 GB
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-normal text-base leading-7 text-gray-400">
                      Built In Memory:
                    </p>
                    <p className="font-medium text-base leading-7 text-black">
                      512 GB
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
