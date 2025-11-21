export default function WithImageAndDescription() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-3xl leading-10 font-bold text-black max-lg:text-center min-[400px]:text-4xl">
          Trending Gadgets
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          <div className="group grid grid-cols-12 gap-5">
            <a
              href="javascript:;"
              className="col-span-12 overflow-hidden rounded-2xl lg:col-span-4"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157951.png"
                alt="mobile phone image"
                className="rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05] max-lg:mx-auto lg:h-auto lg:w-full"
              />
            </a>
            <div className="col-span-12 flex items-center max-lg:mx-auto max-lg:max-w-lg lg:col-span-8 lg:pl-3">
              <div className="w-full">
                <div className="mb-4 flex w-full items-center justify-between gap-6">
                  <div className="name">
                    <h5 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900">
                      iPhone 15
                    </h5>
                    <p className="text-base leading-7 font-normal text-gray-500">
                      Apple Inc.
                    </p>
                  </div>
                  <button className="rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100"></button>
                </div>
                <div className="mb-6 flex items-center border-b border-gray-100 pb-6">
                  <h6 className="font-manrope border-r border-gray-200 pr-3 text-2xl leading-9 font-bold text-indigo-600">
                    $799
                  </h6>
                  <div className="flex items-center gap-1 pl-3"></div>
                  <p className="pl-2 text-base leading-7 font-normal text-amber-400">
                    1624 review
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Operating System:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      iOS 17
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Display Size:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      654 IP
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      RAM:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      8 GB
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Built In Memory:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      128 GB
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="group grid grid-cols-12 gap-5">
            <a
              href="javascript:;"
              className="col-span-12 overflow-hidden rounded-2xl lg:col-span-4"
            >
              <img
                src="https://pagedone.io/asset/uploads/1701157973.png"
                alt="mobile iphone image"
                className="rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.05] max-lg:mx-auto lg:h-auto lg:w-full"
              />
            </a>
            <div className="col-span-12 flex items-center max-lg:mx-auto max-lg:max-w-lg lg:col-span-8 lg:pl-3">
              <div className="w-full">
                <div className="mb-4 flex w-full items-center justify-between gap-6">
                  <div className="name">
                    <h5 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900">
                      iPhone 14
                    </h5>
                    <p className="text-base leading-7 font-normal text-gray-500">
                      Apple Inc.
                    </p>
                  </div>
                  <button className="rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100"></button>
                </div>
                <div className="mb-6 flex items-center border-b border-gray-100 pb-6">
                  <h6 className="font-manrope border-r border-gray-200 pr-3 text-2xl leading-9 font-bold text-indigo-600">
                    $999
                  </h6>
                  <div className="flex items-center gap-1 pl-3"></div>
                  <p className="pl-2 text-base leading-7 font-normal text-amber-400">
                    1624 review
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Operating System:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      iOS 17
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Display Size:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      654 IP
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      RAM:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
                      16 GB
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="text-base leading-7 font-normal text-gray-400">
                      Built In Memory:
                    </p>
                    <p className="text-base leading-7 font-medium text-black">
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
  )
}
