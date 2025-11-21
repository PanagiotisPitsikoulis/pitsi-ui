export default function InvoiceFromTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-9 lg:gap-14">
          <h2 className="font-manrope w-full text-start text-4xl leading-normal font-bold text-gray-900">
            Invoice #001
          </h2>
          <div className="flex w-full flex-col items-start justify-start">
            <div className="mb-7 flex w-full flex-col items-center justify-between gap-4 sm:flex-row lg:mb-10">
              <div className="inline-flex items-center justify-start gap-1.5">
                <div className="dropdown relative inline-flex w-full items-center justify-start gap-2">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      Date: 03 - 10 - 2023
                    </p>
                  </button>
                  <div
                    id="dropdown-check-in"
                    className="dropdown-menu open absolute top-6 z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
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
                  <button className="flex h-[18] w-[18] items-center justify-center"></button>
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-1.5">
                <div className="dropdown relative inline-flex w-full items-center justify-start gap-2">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      Due Date: dd - mm - yyyy
                    </p>
                  </button>
                  <div
                    id="dropdown-check-out"
                    className="dropdown-menu open absolute top-6 z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
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
                  <button className="flex h-[18] w-[18] items-center justify-center"></button>
                </div>
              </div>
            </div>
            <div className="mb-10 flex w-full flex-col items-start justify-start gap-6 sm:flex-row lg:gap-8">
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-white lg:gap-6">
                <h4 className="w-full text-xl leading-loose font-medium text-gray-900">
                  Bill from
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      rows={6}
                      className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter a description..."
                    />
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-white lg:gap-6">
                <h4 className="text-xl leading-loose font-medium text-gray-900">
                  Bill to
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      rows={6}
                      className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter a description..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-7 w-full lg:mb-10">
              <div className="grid w-full grid-cols-1 items-start justify-start gap-6 lg:grid-cols-2 lg:gap-0">
                <div className="flex w-full">
                  <div className="flex w-full flex-col xl:w-96">
                    <div className="border-y border-gray-200 px-3.5 py-2">
                      <span className="w-full text-start text-lg leading-7 font-semibold text-black">
                        Item
                      </span>
                    </div>
                    <div className="mt-4 flex w-full flex-col gap-2.5 px-3.5 xl:w-96">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Item name"
                      />
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="border-y border-gray-200 px-3.5 py-2">
                      <span className="w-full text-start text-lg leading-7 font-semibold text-black">
                        Qty
                      </span>
                    </div>
                    <div className="mt-4 flex h-fit w-full px-3.5">
                      <div className="flex h-fit w-full flex-col items-start justify-start">
                        <div className="flex w-full">
                          <div className="relative w-full">
                            <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                            <input
                              type="text"
                              className="block h-10 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                            />
                            <button
                              id="dropdown-button"
                              data-target="dropdown-3"
                              className="dropdown-toggle absolute top-0 right-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent py-3 pr-4 text-center text-base font-medium text-gray-900"
                            ></button>
                            <div
                              id="dropdown-3"
                              className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                    1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="flex w-full flex-col">
                    <div className="border-y border-gray-200 px-3.5 py-2">
                      <span className="w-full text-start text-lg leading-7 font-semibold text-black">
                        Rate
                      </span>
                    </div>
                    <div className="mt-4 flex h-fit w-full px-3.5">
                      <div className="relative">
                        <div className="absolute top-0 left-0 px-4 py-3"></div>
                        <input
                          type="text"
                          className="block h-10 w-full max-w-xs rounded-lg border border-gray-300 bg-transparent px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-300 shadow-xs focus:outline-none"
                        />
                        <select
                          id="countries"
                          className="absolute top-0 right-3 mt-2 block h-6 w-20 border-l px-2 text-sm text-gray-900 focus:outline-none"
                        >
                          <option value="USD" selected>
                            USD
                          </option>
                          <option value="CA">CA</option>
                          <option value="FR">Fr</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-full border-y border-gray-200 px-3.5 py-2">
                      <span className="w-full text-center text-lg leading-7 font-semibold text-black">
                        Total
                      </span>
                    </div>
                    <div className="mt-4 flex h-fit w-full">
                      <span className="w-full px-3.5 pt-2.5 text-center text-sm leading-5 font-normal text-black">
                        $0.00
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-full border-y border-gray-200 px-3.5 py-2">
                      <span className="w-full text-center text-lg leading-7 font-semibold text-black">
                        Action
                      </span>
                    </div>
                    <div className="mt-4 flex h-fit w-full">
                      <div className="relative w-full px-3.5 pt-2.5">
                        <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                        <button
                          id="dropdown-button"
                          data-target="dropdown-2"
                          className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                        ></button>
                        <div
                          id="dropdown-2"
                          className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                                Save
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-7 flex w-full flex-col items-start justify-start border-t border-gray-200 pt-3.5 lg:mb-10">
              <a className="flex items-center gap-1">
                <h6 className="text-base leading-relaxed font-semibold text-blue-700">
                  Add Item
                </h6>
              </a>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                <div className="inline-flex w-full items-center justify-between gap-5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Subtotal
                  </h6>
                  <h5 className="text-right text-lg leading-8 font-semibold text-black">
                    $0.00
                  </h5>
                </div>
                <a className="text-base leading-relaxed font-medium text-blue-700">
                  Add discount
                </a>
                <a className="text-base leading-relaxed font-medium text-blue-700">
                  Add tax
                </a>
              </div>
              <div className="flex w-full items-center justify-between gap-3 border-t border-gray-200 pt-3">
                <h6 className="text-base leading-relaxed font-medium text-black">
                  Total
                </h6>
                <h5 className="text-right text-lg leading-8 font-semibold text-black">
                  $0.00
                </h5>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-5 sm:flex-row">
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow sm:w-fit">
              <div className="relative"></div>
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Send Invoice
              </span>
            </button>
            <div className="flex w-full flex-col items-start justify-start gap-5 sm:w-fit sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-6 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
                  Preview
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
                  Download
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
