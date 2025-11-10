export default function ProductReviewWithSlider() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 md:px-5 lg:px-5">
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12">
          <div className="box col-span-12 flex w-full flex-col gap-y-2.5 border-b border-gray-100 pb-11 md:border-b-0 lg:col-span-5 lg:border-r lg:pr-11 lg:pb-0 xl:col-span-4">
            <div className="flex w-full items-center">
              <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                5
              </p>
              <div className="w-5"></div>
              <p className="mr-2.5 ml-5 h-3 w-full rounded-[30px] bg-gray-50 sm:min-w-[278px]">
                <span className="flex h-full w-[90%] rounded-[30px] bg-sky-800" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                90%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                4
              </p>
              <div className="w-5"></div>
              <p className="mr-2.5 ml-5 h-3 w-full rounded-[30px] bg-gray-50 sm:min-w-[278px]">
                <span className="flex h-full w-[60%] rounded-[30px] bg-sky-800" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                60%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                3
              </p>
              <div className="w-5"></div>
              <p className="mr-2.5 ml-5 h-3 w-full rounded-[30px] bg-gray-50 sm:min-w-[278px]">
                <span className="flex h-full w-[40%] rounded-[30px] bg-sky-800" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                40%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                2
              </p>
              <div className="w-5"></div>
              <p className="mr-2.5 ml-5 h-3 w-full rounded-[30px] bg-gray-50 sm:min-w-[278px]">
                <span className="flex h-full w-[30%] rounded-[30px] bg-sky-800" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                30%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                {" "}
                1
              </p>
              <div className="w-5"></div>
              <p className="mr-2.5 ml-5 h-3 w-full rounded-[30px] bg-gray-50 sm:min-w-[278px]">
                <span className="flex h-full w-[10%] rounded-[30px] bg-sky-800" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                10%
              </p>
            </div>
          </div>
          <div className="col-span-12 flex w-full flex-col md:flex-row lg:col-span-7 xl:col-span-8">
            <div className="flex w-full flex-col justify-center gap-4 border-b border-gray-100 px-11 py-11 md:border-r md:border-b-0 lg:py-0">
              <h4 className="text-center text-3xl leading-normal font-bold text-black">
                Total Reviews
              </h4>
              <h5 className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-500">
                5K+ <span className="text-2xl">Reviews</span>
              </h5>
            </div>
            <div className="flex w-full flex-col justify-center gap-4 px-11 py-11 lg:py-0">
              <h4 className="text-center text-3xl leading-normal font-bold text-black">
                Average Rating
              </h4>
              <div className="flex items-center justify-center gap-4">
                <h4 className="font-manrope text-3xl leading-normal font-semibold text-gray-500">
                  4.5
                </h4>
                <div className="flex items-center gap-1.5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col items-center justify-between gap-5 pb-6 md:flex-row">
            <h4 className="font-manrope w-full text-start text-3xl leading-normal font-semibold text-gray-900">
              Customer Feedbacks
            </h4>
            <div className="flex w-full flex-col items-start justify-end gap-5 sm:flex-row">
              <div className="relative flex w-full cursor-pointer items-center rounded-lg bg-sky-50 px-3.5 py-2.5 transition-all duration-700 ease-in-out hover:bg-sky-100 md:w-[129px]">
                <span className="px-1.5 text-sm leading-snug font-medium text-sky-800">
                  All Ratings
                </span>
                <div
                  id="dropdown-button"
                  data-target="dropdown"
                  className="dropdown-toggle absolute top-2 right-0 z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 pt-2 pl-2 text-center text-base font-medium text-gray-900"
                ></div>
                <div
                  id="dropdown"
                  className="open absolute top-9 right-0 z-10 hidden w-32 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        5*
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        4*
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        3*
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex w-full cursor-pointer items-center rounded-lg bg-sky-800 px-3.5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-sky-900 md:w-[154px]">
                <span className="px-1.5 text-sm leading-snug font-medium text-white">
                  Latest Ratings
                </span>
                <button
                  id="dropdown-button"
                  data-target="dropdown1"
                  className="dropdown-toggle absolute top-2 right-0 z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 pt-2 pl-2 text-center text-base font-medium text-gray-900"
                ></button>
                <div
                  id="dropdown1"
                  className="open absolute top-9 right-0 z-10 hidden w-36 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        5*
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        4*
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        3*
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-container gallery-top h-[450px] overflow-hidden">
            <div className="swiper-wrapper w-max">
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        RK
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      Robert Karmazov
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    This shirt is awesome! Seriously top-notch quality. It's
                    super comfy and looks really sharp. Definitely worth every
                    penny!
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      4 days ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          5
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        JD
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      John Doe
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    This shirt is comfortable and stylish, perfect for any
                    occasion, whether at work or out with friends. Its classic
                    design and high-quality craftsmanship make it a great
                    investment.
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      1 week ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          8
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        SB
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      Surbhi Bhut
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    Love the quality of this shirt! Definitely one of my top
                    purchases. It's so comfy and stylish, definitely money well
                    spent!
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      6 weeks ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          10
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          2
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        RK
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      Robert Karmazov
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    This shirt is awesome! Seriously top-notch quality. It's
                    super comfy and looks really sharp. Definitely worth every
                    penny!
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      4 days ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          5
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        JD
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      John Doe
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    This shirt is comfortable and stylish, perfect for any
                    occasion, whether at work or out with friends. Its classic
                    design and high-quality craftsmanship make it a great
                    investment.
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      1 week ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          8
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full">
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 items-center justify-center rounded-full bg-sky-100 py-1.5">
                      <span className="text-center text-xs leading-normal font-semibold text-sky-800">
                        SB
                      </span>
                    </div>
                    <h5 className="text-lg leading-7 font-semibold text-black">
                      Surbhi Bhut
                    </h5>
                  </div>
                  <div className="flex items-center gap-1.5 py-4"></div>
                  <p className="w-auto pb-8 text-base leading-relaxed font-normal text-gray-400 lg:w-[336px]">
                    Love the quality of this shirt! Definitely one of my top
                    purchases. It's so comfy and stylish, definitely money well
                    spent!
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-300 pt-8">
                    <h6 className="text-base leading-relaxed font-normal text-black">
                      6 weeks ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          10
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-base leading-relaxed font-normal text-black">
                          2
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box relative mx-auto flex hidden h-auto items-center gap-5 pt-8">
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1714976816.png"
                      alt="shirt image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 flex items-center justify-center gap-32">
            <button
              id="slider-button-left"
              className="swiper-button-prev group relative z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-700 ease-in-out hover:bg-gray-100"
            ></button>
            <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" />
            {/*Slider Pagination*/}
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-700 ease-in-out hover:bg-gray-100"
            ></button>
          </div>
        </div>
      </div>
    </section>
  )
}
