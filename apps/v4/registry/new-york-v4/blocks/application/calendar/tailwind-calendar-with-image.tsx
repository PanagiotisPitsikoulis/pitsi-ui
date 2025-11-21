export default function TailwindCalendarWithImage() {
  return (
    <section className="relative bg-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl px-3 lg:px-8 xl:px-14">
        <div className="mx-auto grid max-w-3xl grid-cols-12 gap-8 xl:max-w-full">
          <div className="col-span-12 xl:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5 rounded-xl bg-gray-800 p-5">
                <img
                  src="https://pagedone.io/asset/uploads/1726480530.png"
                  alt="Jessica Davis's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="mb-1 text-base font-semibold text-white">
                    Jessica Davis
                  </p>
                  <div className="mb-1.5 flex w-full justify-between max-[400px]:flex-col min-[400px]:items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-400">
                        January 10, 2023{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-emerald-400">
                        TeaPost
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-400">
                      at 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-xl bg-gray-800 p-5">
                <img
                  src="https://pagedone.io/asset/uploads/1726480542.png"
                  alt="David Harris's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="mb-1 text-base font-semibold text-white">
                    David Harris
                  </p>
                  <div className="mb-1.5 flex w-full justify-between max-[400px]:flex-col min-[400px]:items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-400">
                        February 21, 2023{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-emerald-400">
                        Starbucks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-400">
                      at 3:20 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-xl bg-gray-800 p-5">
                <img
                  src="https://pagedone.io/asset/uploads/1726480553.png"
                  alt="James Taylor's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="mb-1 text-base font-semibold text-white">
                    James Taylor
                  </p>
                  <div className="mb-1.5 flex w-full justify-between max-[400px]:flex-col min-[400px]:items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-400">
                        January 10, 2023{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-emerald-400">
                        Coffee Point
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-400">
                      at 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-xl bg-gray-800 p-5">
                <img
                  src="https://pagedone.io/asset/uploads/1726480565.png"
                  alt="Sarah Thompson's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="mb-1 text-base font-semibold text-white">
                    Sarah Thompson
                  </p>
                  <div className="mb-1.5 flex w-full justify-between max-[400px]:flex-col min-[400px]:items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-400">
                        January 10, 2023{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-emerald-400">
                        TeaPost
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-400">
                      at 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 max-xl:row-start-1 xl:col-span-8">
            <div className="mx-auto grid grid-cols-1 gap-6 rounded-3xl border border-gray-700 p-2.5 max-md:max-w-md sm:p-6 md:grid-cols-2">
              <div className="calendar">
                <div className="mb-3 sm:p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      January 2023
                    </p>
                    <div className="flex items-center gap-2.5">
                      <button></button>
                      <button></button>
                    </div>
                  </div>
                  <div className="mb-2 grid grid-cols-7">
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Mo
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Tu
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      We
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Th
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Fr
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Sa
                    </div>
                    <div className="flex items-center justify-center py-2.5 text-center text-sm font-medium text-white">
                      Su
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        28
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        29
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        30
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        31
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        1
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        2
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        3
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        4
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        5
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        6
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        7
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        8
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        9
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-medium text-white sm:h-10 sm:w-10">
                        10
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        11
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        12
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        13
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        14
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        15
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        16
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        17
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        18
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        19
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        20
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        21
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        22
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        23
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        24
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        25
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        26
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        27
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        28
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        29
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        30
                      </p>
                    </div>
                    <div className="flex h-10 items-center justify-center transition-all duration-300 hover:bg-gray-800">
                      <p className="flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white sm:h-10 sm:w-10">
                        31
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-emerald-700 px-3.5 py-2.5 text-center text-sm font-medium text-white">
                  Add Events
                </button>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1726480581.png"
                className="mx-auto object-cover lg:h-full lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
