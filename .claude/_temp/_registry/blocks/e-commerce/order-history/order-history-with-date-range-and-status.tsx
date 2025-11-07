export default function OrderHistoryWithDateRangeAndStatus() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="lg:pb-12 pb-7">
          <h2 className="w-full text-black text-3xl font-extrabold font-manrope leading-normal text-center lg:text-left">
            Your Orders
          </h2>
        </div>
        <div className="w-full p-6 rounded-xl border border-gray-300 justify-center items-end grid xl:grid-cols-12 grid-cols-1 lg:gap-10 gap-7 mb-8">
          <div className="w-full xl:col-span-9 col-span-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-7">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-gray-600 text-xs font-medium leading-5"
              >
                From Date
              </label>
              <div className="w-full h-10 px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex">
                <div className="dropdown relative inline-flex gap-1.5 justify-between w-full items-center">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-gray-400 text-sm font-normal leading-snug py-px">
                      Select Date
                    </p>
                  </button>

                  <div
                    id="dropdown-check-in"
                    className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 open hidden"
                    aria-labelledby="dropdown-default"
                  >
                    <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                          <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                          January
                          <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                        </div>
                        <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-cyan-600 hover:bg-cyan-100">
                          2023
                        </button>
                      </div>
                      <table className="pb-3 border-b border-gray-300">
                        <thead className="mb-2">
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Mo
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Tu
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                We
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Th
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Fr
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Sa
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Su
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                6
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                7
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                8
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                9
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                10
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                11
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                12
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                              <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                13
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 ">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                14
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                15
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                16
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 ">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                17
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                18
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                19
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                20
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                21
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                22
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                23
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                24
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                25
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex items-center justify-end pt-3 gap-4">
                        <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:text-cyan-600 hover:bg-cyan-100">
                          Cancel
                        </button>
                        <button className="py-2 px-3 rounded-full text-xs font-medium bg-cyan-600 text-white transition-all duration-500 hover:bg-cyan-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-gray-600 text-xs font-medium leading-5"
              >
                To Date
              </label>
              <div className="w-full h-10 px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex ">
                <div className="dropdown relative inline-flex gap-1.5 justify-between w-full items-center">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-gray-400 text-sm font-normal leading-snug py-px">
                      Select Date
                    </p>
                  </button>

                  <div
                    id="dropdown-check-out"
                    className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 open hidden"
                    aria-labelledby="dropdown-default"
                  >
                    <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                          <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                          January
                          <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                        </div>
                        <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-cyan-600 hover:bg-cyan-100">
                          2023
                        </button>
                      </div>
                      <table className="pb-3 border-b border-gray-300">
                        <thead className="mb-2">
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Mo
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Tu
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                We
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Th
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Fr
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Sa
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Su
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                6
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                7
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                8
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                9
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                10
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                11
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                12
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                              <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                13
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 ">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                14
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                15
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                16
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 ">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                17
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                18
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                19
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                20
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                21
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                22
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                23
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                24
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                25
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex items-center justify-center w-10 h-10">
                              <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex items-center justify-end pt-3 gap-4">
                        <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:text-cyan-600 hover:bg-cyan-100">
                          Cancel
                        </button>
                        <button className="py-2 px-3 rounded-full text-xs font-medium bg-cyan-600 text-white transition-all duration-500 hover:bg-cyan-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <h6 className="text-gray-600 text-xs font-medium leading-5">
                  Status
                </h6>
              </div>
              <div className="relative w-full ">
                <select
                  id="small_select"
                  className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 text-gray-400 text-sm font-normal leading-6
                              block w-full shadow-xs placeholder-gray-500 focus:outline-gray-400  block w-full px-3 py-2 focus:outline-0  h-10"
                >
                  <option selected>Please select...</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <button
                  id="dropdown-button"
                  data-target="dropdown"
                  className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-3 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-1 pl-2 "
                ></button>
                <div
                  id="dropdown"
                  className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
                        54320
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        00011
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        15142
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        18211
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <h6 className="text-gray-600 text-xs font-medium leading-5">
                  Reference
                </h6>
              </div>
              <div className="relative w-full ">
                <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                <input
                  type="text"
                  className="h-10 px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 text-gray-400 text-sm font-normal leading-6
                              block w-full shadow-xs placeholder-gray-500 focus:outline-gray-400 "
                  placeholder="#"
                />
                <button
                  id="dropdown-button"
                  data-target="dropdown1"
                  className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center pt-3 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-1 pl-2 "
                ></button>
                <div
                  id="dropdown1"
                  className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
                        54320
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        00011
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        15142
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        18211
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12 w-full xl:justify-end justify-center items-start lg:gap-3 gap-7 flex sm:flex-row flex-col">
            <button className="xl:w-fit w-full h-10 px-3.5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-6 py-px text-gray-900 text-sm font-medium leading-snug">
                Clear
              </span>
            </button>
            <button className="xl:w-fit w-full h-10 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-5 py-px text-white text-sm font-medium leading-snug">
                Search
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
          <div className="px-6 pb-6 flex-col justify-start items-start gap-6 flex border-b border-gray-300">
            <div className="py-6 justify-start items-center xl:gap-6 md:gap-8 gap-4 flex lg:flex-row flex-col">
              <div className="justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413088.png"
                  alt="Planter Pot image"
                />
                <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-loose md:text-start text-center">
                    Notakia Face Planter Pot Head Planter Wall Mounted Outdoor
                    Face Planter with Drainage for Cute Plants for Indoor Wall
                    Decor Succulent Cactus Planter
                  </h4>
                  <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="sm:w-auto w-full justify-start items-center gap-4 flex sm:flex-row flex-col  ">
                <button className="sm:w-fit w-full p-1.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-md justify-center items-center flex">
                  <span className="px-1.5 text-indigo-600 text-xs font-medium leading-5 whitespace-nowrap">
                    Order Details
                  </span>
                </button>
                <button className="sm:w-fit w-full p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-md shadow justify-center items-center flex">
                  <span className="px-1.5 text-white text-xs font-medium leading-5 whitespace-nowrap">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6 flex-col justify-start items-start gap-6 flex border-b border-gray-300">
            <div className="pb-6 justify-start items-center xl:gap-6 md:gap-8 gap-4 flex lg:flex-row flex-col">
              <div className="justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413100.png"
                  alt="Planter Pot image"
                />
                <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-loose md:text-start text-center">
                    Dream Catchers Wall Hangings, Home Décor, Handmade
                    Dreamcatcher for Bedroom, Balcony, Garden, Party, Café,
                    Small Ring Beaded Blue &amp; Black
                  </h4>
                  <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Qty :<span className="text-gray-900"> 4</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="sm:w-auto w-full justify-start items-center gap-4 flex sm:flex-row flex-col  ">
                <button className="sm:w-fit w-full p-1.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-md justify-center items-center flex">
                  <span className="px-1.5 text-indigo-600 text-xs font-medium leading-5 whitespace-nowrap">
                    Order Details
                  </span>
                </button>
                <button className="sm:w-fit w-full p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-md shadow justify-center items-center flex">
                  <span className="px-1.5 text-white text-xs font-medium leading-5 whitespace-nowrap">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6 flex-col justify-start items-start gap-6 flex border-b border-gray-300">
            <div className="pb-6 justify-start items-center xl:gap-6 md:gap-8 gap-4 flex lg:flex-row flex-col">
              <div className="justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413113.png"
                  alt="Planter Pot image"
                />
                <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-loose md:text-start text-center">
                    Craftter Premium Roman Sculpture Abstract Art Metal Analog
                    Wall Clock (Copper, 75 Cm)
                  </h4>
                  <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="sm:w-auto w-full justify-start items-center gap-4 flex sm:flex-row flex-col  ">
                <button className="sm:w-fit w-full p-1.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-md justify-center items-center flex">
                  <span className="px-1.5 text-indigo-600 text-xs font-medium leading-5 whitespace-nowrap">
                    Order Details
                  </span>
                </button>
                <button className="sm:w-fit w-full p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-md shadow justify-center items-center flex">
                  <span className="px-1.5 text-white text-xs font-medium leading-5 whitespace-nowrap">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center xl:gap-6 md:gap-8 gap-4 flex lg:flex-row flex-col">
              <div className="justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413124.png"
                  alt="Planter Pot image"
                />
                <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-loose md:text-start text-center">
                    Aster Macrame Plant Hangers, Unique Designs,Handmade Cotton
                    Rope Hanging Planters Flower Pots Holder Stand
                  </h4>
                  <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="sm:w-auto w-full justify-start items-center gap-4 flex sm:flex-row flex-col  ">
                <button className="sm:w-fit w-full p-1.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-md justify-center items-center flex">
                  <span className="px-1.5 text-indigo-600 text-xs font-medium leading-5 whitespace-nowrap">
                    Order Details
                  </span>
                </button>
                <button className="sm:w-fit w-full p-1.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-md shadow justify-center items-center flex">
                  <span className="px-1.5 text-white text-xs font-medium leading-5 whitespace-nowrap">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
