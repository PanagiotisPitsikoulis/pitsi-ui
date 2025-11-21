export default function ReviewPageWithFiltersReviewPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <div>
          <h2 className="font-manrope mb-8 text-center text-3xl leading-10 font-bold text-black sm:text-4xl">
            Customer reviews &amp; rating
          </h2>
          <div className="mb-11 grid grid-cols-12">
            <div className="col-span-12 flex items-center xl:col-span-4">
              <div className="box mx-auto flex w-full flex-col gap-y-4 max-xl:max-w-3xl">
                <div className="flex w-full items-center">
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    5
                  </p>

                  <p className="mr-3 ml-5 h-2 w-full rounded-[30px] bg-gray-200 sm:min-w-[278px]">
                    <span className="flex h-full w-[30%] rounded-[30px] bg-indigo-500" />
                  </p>
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    30
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    4
                  </p>

                  <p className="mr-3 ml-5 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                    <span className="flex h-full w-[40%] rounded-[30px] bg-indigo-500" />
                  </p>
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    40
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    3
                  </p>

                  <p className="mr-3 ml-5 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                    <span className="flex h-full w-[20%] rounded-[30px] bg-indigo-500" />
                  </p>
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    20
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    2
                  </p>

                  <p className="mr-3 ml-5 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                    <span className="flex h-full w-[16%] rounded-[30px] bg-indigo-500" />
                  </p>
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    16
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    1
                  </p>

                  <p className="mr-3 ml-5 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                    <span className="flex h-full w-[8%] rounded-[30px] bg-indigo-500" />
                  </p>
                  <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                    8
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 min-h-[230px] w-full max-xl:mt-8 xl:col-span-8 xl:pl-8">
              <div className="grid h-full w-full grid-cols-12 rounded-3xl bg-gray-100 px-8 max-xl:mx-auto max-xl:max-w-3xl max-lg:py-8">
                <div className="col-span-12 flex items-center md:col-span-8">
                  <div className="flex h-full w-full flex-col items-center max-lg:justify-center sm:flex-row">
                    <div className="flex flex-col items-center justify-center border-gray-200 sm:border-r sm:pr-3">
                      <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-black">
                        4.3
                      </h2>
                      <div className="mb-4 flex items-center gap-3"></div>
                      <p className="text-lg leading-8 font-normal text-gray-400">
                        46 Ratings
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-gray-200 sm:border-l sm:pl-3">
                      <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-black">
                        4.8
                      </h2>
                      <div className="mb-4 flex items-center gap-3"></div>
                      <p className="text-lg leading-8 font-normal text-gray-400">
                        Last Month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 max-lg:mt-8 md:col-span-4 md:pl-8">
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <button className="mb-6 w-full rounded-full bg-indigo-600 px-6 py-4 text-center text-lg font-semibold whitespace-nowrap text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                      Write A Review
                    </button>
                    <button className="w-full rounded-full bg-white px-6 py-4 text-center text-lg font-semibold whitespace-nowrap text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                      See All Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-8 max-xl:mx-auto max-xl:max-w-3xl">
            <h4 className="font-manrope mb-6 text-3xl leading-10 font-semibold text-black">
              Most helpful positive review
            </h4>
            <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
              <div className="flex items-center gap-3"></div>
              <div className="flex items-center gap-3">
                <h6 className="text-lg leading-8 font-semibold text-black">
                  @john.doe
                </h6>
                <p className="text-base leading-7 font-medium text-gray-400">
                  Nov 01, 2023
                </p>
              </div>
            </div>
            <p className="text-lg leading-8 font-normal text-gray-500">
              I recently had the opportunity to explore Pagedone's UI design
              system, and it left a lasting impression on my workflow. The
              system seamlessly blends user-friendly features with a robust set
              of design components, making it a go-to for creating visually
              stunning and consistent interfaces.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between pt-8 max-xl:mx-auto max-xl:max-w-3xl sm:flex-row">
            <p className="py-[1px] text-lg font-normal text-black">
              46 reviews
            </p>
            <form>
              <div className="flex">
                <div className="relative">
                  <div className="absolute top-0 -left-0 px-2 py-2">
                    <p className="text-lg leading-8 font-normal text-gray-500">
                      Sort by:
                    </p>
                  </div>
                  <input
                    type="text"
                    className="block h-11 w-60 cursor-pointer rounded-full bg-transparent py-2.5 pr-4 pl-20 text-lg leading-8 font-medium text-black placeholder-black shadow-xs focus:outline-gray-200"
                    placeholder="Most Relevant"
                  />
                  <div
                    id="dropdown-button"
                    data-target="dropdown"
                    className="dropdown-toggle absolute top-2 right-0 z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 pl-2 text-center text-base font-medium text-gray-900"
                  ></div>
                  <div
                    id="dropdown"
                    className="absolute top-9 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                          Most Relevant
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          last week
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          oldest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
