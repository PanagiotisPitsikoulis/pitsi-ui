export default function ProductReviewWithSlider() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 grid-cols-1 mb-14">
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 w-full box flex flex-col gap-y-2.5 lg:pr-11 lg:pb-0 pb-11 lg:border-r md:border-b-0 border-b border-gray-100">
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                5
              </p>
              <div className="w-5"></div>
              <p className="h-3 w-full sm:min-w-[278px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                <span className="h-full w-[90%] rounded-[30px] bg-sky-800 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                90%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                4
              </p>
              <div className="w-5"></div>
              <p className="h-3 w-full sm:min-w-[278px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                <span className="h-full w-[60%] rounded-[30px] bg-sky-800 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                60%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                3
              </p>
              <div className="w-5"></div>
              <p className="h-3 w-full sm:min-w-[278px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                <span className="h-full w-[40%] rounded-[30px] bg-sky-800 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                40%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                2
              </p>
              <div className="w-5"></div>
              <p className="h-3 w-full sm:min-w-[278px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                <span className="h-full w-[30%] rounded-[30px] bg-sky-800 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                30%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                {" "}
                1
              </p>
              <div className="w-5"></div>
              <p className="h-3 w-full sm:min-w-[278px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                <span className="h-full w-[10%] rounded-[30px] bg-sky-800 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                10%
              </p>
            </div>
          </div>
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 w-full flex md:flex-row flex-col">
            <div className="w-full px-11 lg:py-0 py-11 md:border-r md:border-b-0 border-b border-gray-100 flex flex-col justify-center gap-4">
              <h4 className="text-black text-center text-3xl font-bold leading-normal">
                Total Reviews
              </h4>
              <h5 className="text-gray-500 text-center text-3xl font-semibold font-manrope leading-normal">
                5K+ <span className="text-2xl">Reviews</span>
              </h5>
            </div>
            <div className="w-full px-11 lg:py-0 py-11 flex flex-col justify-center gap-4">
              <h4 className="text-black text-center text-3xl font-bold leading-normal">
                Average Rating
              </h4>
              <div className="flex items-center justify-center gap-4">
                <h4 className="text-gray-500 text-3xl font-semibold font-manrope leading-normal">
                  4.5
                </h4>
                <div className="flex items-center gap-1.5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full justify-between items-center flex md:flex-row flex-col pb-6 gap-5">
            <h4 className="w-full text-gray-900 text-3xl font-semibold font-manrope leading-normal text-start">
              Customer Feedbacks
            </h4>
            <div className="w-full justify-end items-start gap-5 flex sm:flex-row flex-col">
              <div className="md:w-[129px] w-full cursor-pointer px-3.5 py-2.5 bg-sky-50 hover:bg-sky-100 transition-all duration-700 ease-in-out rounded-lg items-center flex relative">
                <span className="text-sky-800 text-sm font-medium leading-snug px-1.5">
                  All Ratings
                </span>
                <div
                  id="dropdown-button"
                  data-target="dropdown"
                  className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center pt-2 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-2 pl-2 "
                ></div>
                <div
                  id="dropdown"
                  className="absolute top-9 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 open hidden"
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
              <div className="md:w-[154px] w-full cursor-pointer flex px-3.5 py-2.5 bg-sky-800 hover:bg-sky-900 transition-all duration-700 ease-in-out rounded-lg shadow items-center relative">
                <span className="text-white text-sm font-medium leading-snug px-1.5">
                  Latest Ratings
                </span>
                <button
                  id="dropdown-button"
                  data-target="dropdown1"
                  className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center pt-2 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-2 pl-2 "
                ></button>
                <div
                  id="dropdown1"
                  className="absolute top-9 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 open hidden"
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        RK
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      Robert Karmazov
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    This shirt is awesome! Seriously top-notch quality. It's
                    super comfy and looks really sharp. Definitely worth every
                    penny!
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      4 days ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          5
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        JD
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      John Doe
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    This shirt is comfortable and stylish, perfect for any
                    occasion, whether at work or out with friends. Its classic
                    design and high-quality craftsmanship make it a great
                    investment.
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      1 week ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          8
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        SB
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      Surbhi Bhut
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    Love the quality of this shirt! Definitely one of my top
                    purchases. It's so comfy and stylish, definitely money well
                    spent!
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      6 weeks ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          10
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          2
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        RK
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      Robert Karmazov
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    This shirt is awesome! Seriously top-notch quality. It's
                    super comfy and looks really sharp. Definitely worth every
                    penny!
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      4 days ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          5
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        JD
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      John Doe
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    This shirt is comfortable and stylish, perfect for any
                    occasion, whether at work or out with friends. Its classic
                    design and high-quality craftsmanship make it a great
                    investment.
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      1 week ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          8
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          0
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
              <div className="swiper-slide max-w-full grid">
                <div className="p-6 rounded-3xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 py-1.5 bg-sky-100 rounded-full justify-center items-center flex">
                      <span className="text-center text-sky-800 text-xs font-semibold leading-normal">
                        SB
                      </span>
                    </div>
                    <h5 className="text-black text-lg font-semibold leading-7">
                      Surbhi Bhut
                    </h5>
                  </div>
                  <div className="py-4 flex items-center gap-1.5"></div>
                  <p className="lg:w-[336px] w-auto text-gray-400 text-base font-normal leading-relaxed pb-8">
                    Love the quality of this shirt! Definitely one of my top
                    purchases. It's so comfy and stylish, definitely money well
                    spent!
                  </p>
                  <div className="border-t border-gray-300 pt-8 flex items-center justify-between gap-4">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      6 weeks ago
                    </h6>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          10
                        </h6>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a href="#"></a>
                        <h6 className="text-black text-base font-normal leading-relaxed">
                          2
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto swiper-box mx-auto relative items-center pt-8 gap-5 flex hidden">
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
          <div className="flex items-center justify-center gap-32 relative mt-10">
            <button
              id="slider-button-left"
              className="relative z-50 swiper-button-prev hover:bg-gray-100 rounded-full  w-12 h-12 flex items-center justify-center group transition-all duration-700 ease-in-out"
            ></button>
            <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" />
            {/*Slider Pagination*/}
            <button
              id="slider-button-right"
              className="swiper-button-next w-12 h-12 hover:bg-gray-100 rounded-full flex items-center justify-center group transition-all duration-700 ease-in-out"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
