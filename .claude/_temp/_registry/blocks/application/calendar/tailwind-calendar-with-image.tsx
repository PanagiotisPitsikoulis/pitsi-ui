export default function TailwindCalendarWithImage() {
  return (
    <section className="relative py-24 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8 xl:px-14">
        <div className="grid grid-cols-12 gap-8 max-w-3xl mx-auto xl:max-w-full">
          <div className="col-span-12 xl:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="p-5 bg-gray-800 flex items-start gap-5 rounded-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1726480530.png"
                  alt="Jessica Davis's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="text-base font-semibold text-white mb-1">
                    Jessica Davis
                  </p>
                  <div className="flex max-[400px]:flex-col min-[400px]:items-center justify-between w-full mb-1.5">
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
              <div className="p-5 bg-gray-800 flex items-start gap-5 rounded-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1726480542.png"
                  alt="David Harris's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="text-base font-semibold text-white mb-1">
                    David Harris
                  </p>
                  <div className="flex max-[400px]:flex-col min-[400px]:items-center justify-between w-full mb-1.5">
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
              <div className="p-5 bg-gray-800 flex items-start gap-5 rounded-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1726480553.png"
                  alt="James Taylor's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="text-base font-semibold text-white mb-1">
                    James Taylor
                  </p>
                  <div className="flex max-[400px]:flex-col min-[400px]:items-center justify-between w-full mb-1.5">
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
              <div className="p-5 bg-gray-800 flex items-start gap-5 rounded-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1726480565.png"
                  alt="Sarah Thompson's image"
                  className="object-cover"
                />
                <div className="block w-full">
                  <p className="text-base font-semibold text-white mb-1">
                    Sarah Thompson
                  </p>
                  <div className="flex max-[400px]:flex-col min-[400px]:items-center justify-between w-full mb-1.5">
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
          <div className="col-span-12 xl:col-span-8 max-xl:row-start-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2.5 sm:p-6 border border-gray-700 rounded-3xl max-md:max-w-md mx-auto">
              <div className="calendar">
                <div className="sm:p-3 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white text-sm font-medium">
                      January 2023
                    </p>
                    <div className="flex items-center gap-2.5">
                      <button></button>
                      <button></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 mb-2">
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
                  <div className="grid grid-cols-7 ">
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        28
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        29
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        30
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        31
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        1
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        2
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        3
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        4
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        5
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        6
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        7
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        8
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        9
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center bg-emerald-700 justify-center aspect-square rounded-full">
                        10
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        11
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        12
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        13
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        14
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        15
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        16
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        17
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        18
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        19
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        20
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        21
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        22
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        23
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        24
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        25
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        26
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        27
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        28
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        29
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        30
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-10 transition-all duration-300 hover:bg-gray-800">
                      <p className="text-sm font-medium text-white sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center aspect-square rounded-full">
                        31
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 px-3.5 text-center rounded-lg text-sm font-medium text-white bg-emerald-700">
                  Add Events
                </button>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1726480581.png"
                className="lg:w-full lg:h-full mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
