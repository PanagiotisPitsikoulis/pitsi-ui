export default function OrderHistoryWithDateRangeAndStatus() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="pb-7 lg:pb-12">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-extrabold text-black lg:text-left">
            Your Orders
          </h2>
        </div>
        <div className="mb-8 grid w-full grid-cols-1 items-end justify-center gap-7 rounded-xl border border-gray-300 p-6 lg:gap-10 xl:grid-cols-12">
          <div className="col-span-12 grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:col-span-9">
            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor=""
                className="text-xs leading-5 font-medium text-gray-600"
              >
                From Date
              </label>
              <div className="inline-flex h-10 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <div className="dropdown relative inline-flex w-full items-center justify-between gap-1.5">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="py-px text-sm leading-snug font-normal text-gray-400">
                      Select Date
                    </p>
                  </button>

                  <div
                    id="dropdown-check-in"
                    className="dropdown-menu open absolute top-6 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                    aria-labelledby="dropdown-default"
                  >
                    <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                          <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                          January
                          <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                        </div>
                        <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                          2023
                        </button>
                      </div>
                      <table className="border-b border-gray-300 pb-3">
                        <thead className="mb-2">
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Mo
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Tu
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                We
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Th
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Fr
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Sa
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Su
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                6
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                7
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                8
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                9
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                10
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                11
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                12
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                              <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                13
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                14
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                15
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                16
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                17
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                18
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                19
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                20
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                21
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                22
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                23
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                24
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                25
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex items-center justify-end gap-4 pt-3">
                        <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:bg-cyan-100 hover:text-cyan-600">
                          Cancel
                        </button>
                        <button className="rounded-full bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-cyan-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor=""
                className="text-xs leading-5 font-medium text-gray-600"
              >
                To Date
              </label>
              <div className="inline-flex h-10 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <div className="dropdown relative inline-flex w-full items-center justify-between gap-1.5">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="py-px text-sm leading-snug font-normal text-gray-400">
                      Select Date
                    </p>
                  </button>

                  <div
                    id="dropdown-check-out"
                    className="dropdown-menu open absolute top-6 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                    aria-labelledby="dropdown-default"
                  >
                    <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                          <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                          January
                          <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600"></button>
                        </div>
                        <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                          2023
                        </button>
                      </div>
                      <table className="border-b border-gray-300 pb-3">
                        <thead className="mb-2">
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Mo
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Tu
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                We
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Th
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Fr
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Sa
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                Su
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                6
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                7
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                8
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                9
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                10
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                11
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                12
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                              <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                13
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                14
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                15
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                16
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                17
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                18
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                19
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                20
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                21
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                22
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                23
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                24
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                25
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                26
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                27
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                28
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                29
                              </p>
                            </td>
                          </tr>
                          <tr className="flex">
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                30
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                31
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                1
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                2
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                3
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                4
                              </p>
                            </td>
                            <td className="flex h-10 w-10 items-center justify-center">
                              <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex items-center justify-end gap-4 pt-3">
                        <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:bg-cyan-100 hover:text-cyan-600">
                          Cancel
                        </button>
                        <button className="rounded-full bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-cyan-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1">
              <div className="inline-flex items-center justify-start gap-1">
                <h6 className="text-xs leading-5 font-medium text-gray-600">
                  Status
                </h6>
              </div>
              <div className="relative w-full">
                <select
                  id="small_select"
                  className="block h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm leading-6 font-normal text-gray-400 placeholder-gray-500 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] shadow-xs focus:outline-0 focus:outline-gray-400"
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
                  className="dropdown-toggle absolute top-1 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 pt-3 pl-2 text-center text-base font-medium text-gray-900"
                ></button>
                <div
                  id="dropdown"
                  className="absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
            <div className="flex w-full flex-col items-start justify-start gap-1">
              <div className="inline-flex items-center justify-start gap-1">
                <h6 className="text-xs leading-5 font-medium text-gray-600">
                  Reference
                </h6>
              </div>
              <div className="relative w-full">
                <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                <input
                  type="text"
                  className="block h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm leading-6 font-normal text-gray-400 placeholder-gray-500 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] shadow-xs focus:outline-gray-400"
                  placeholder="#"
                />
                <button
                  id="dropdown-button"
                  data-target="dropdown1"
                  className="dropdown-toggle absolute top-1 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 pt-3 pl-2 text-center text-base font-medium text-gray-900"
                ></button>
                <div
                  id="dropdown1"
                  className="absolute top-10 right-0 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
          <div className="col-span-12 flex w-full flex-col items-start justify-center gap-7 sm:flex-row lg:gap-3 xl:col-span-3 xl:justify-end">
            <button className="flex h-10 w-full items-center justify-center rounded-xl border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 xl:w-fit">
              <span className="px-6 py-px text-sm leading-snug font-medium text-gray-900">
                Clear
              </span>
            </button>
            <button className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 xl:w-fit">
              <span className="px-5 py-px text-sm leading-snug font-medium text-white">
                Search
              </span>
            </button>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-6 border-b border-gray-300 px-6 pb-6">
            <div className="flex flex-col items-center justify-start gap-4 py-6 md:gap-8 lg:flex-row xl:gap-6">
              <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413088.png"
                  alt="Planter Pot image"
                />
                <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                  <h4 className="text-center text-xl leading-loose font-medium text-gray-900 md:text-start">
                    Notakia Face Planter Pot Head Planter Wall Mounted Outdoor
                    Face Planter with Drainage for Cute Plants for Indoor Wall
                    Decor Succulent Cactus Planter
                  </h4>
                  <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-auto sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600">
                    Order Details
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-white">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 border-b border-gray-300 px-6 pb-6">
            <div className="flex flex-col items-center justify-start gap-4 pb-6 md:gap-8 lg:flex-row xl:gap-6">
              <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413100.png"
                  alt="Planter Pot image"
                />
                <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                  <h4 className="text-center text-xl leading-loose font-medium text-gray-900 md:text-start">
                    Dream Catchers Wall Hangings, Home Décor, Handmade
                    Dreamcatcher for Bedroom, Balcony, Garden, Party, Café,
                    Small Ring Beaded Blue &amp; Black
                  </h4>
                  <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Qty :<span className="text-gray-900"> 4</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-auto sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600">
                    Order Details
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-white">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 border-b border-gray-300 px-6 pb-6">
            <div className="flex flex-col items-center justify-start gap-4 pb-6 md:gap-8 lg:flex-row xl:gap-6">
              <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413113.png"
                  alt="Planter Pot image"
                />
                <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                  <h4 className="text-center text-xl leading-loose font-medium text-gray-900 md:text-start">
                    Craftter Premium Roman Sculpture Abstract Art Metal Analog
                    Wall Clock (Copper, 75 Cm)
                  </h4>
                  <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-auto sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600">
                    Order Details
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-white">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 px-6">
            <div className="flex flex-col items-center justify-start gap-4 md:gap-8 lg:flex-row xl:gap-6">
              <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1715413124.png"
                  alt="Planter Pot image"
                />
                <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                  <h4 className="text-center text-xl leading-loose font-medium text-gray-900 md:text-start">
                    Aster Macrame Plant Hangers, Unique Designs,Handmade Cotton
                    Rope Hanging Planters Flower Pots Holder Stand
                  </h4>
                  <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Order :<span className="text-gray-900"> #25201</span>
                    </h6>
                    <h6 className="text-base leading-relaxed font-normal text-gray-400">
                      Qty :<span className="text-gray-900"> 1</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 sm:w-auto sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600">
                    Order Details
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                  <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-white">
                    Re - Order
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
