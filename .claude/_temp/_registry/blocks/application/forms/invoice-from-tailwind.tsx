export default function InvoiceFromTailwind() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-14 gap-9 inline-flex">
          <h2 className="w-full text-start text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Invoice #001
          </h2>
          <div className="w-full flex-col justify-start items-start flex">
            <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-4 lg:mb-10 mb-7">
              <div className="justify-start items-center gap-1.5 inline-flex ">
                <div className="dropdown relative inline-flex gap-2 justify-start w-full items-center">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Date: 03 - 10 - 2023
                    </p>
                  </button>
                  <div
                    id="dropdown-check-in"
                    className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 open hidden z-10"
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
                  <button className="w-[18] h-[18] flex items-center justify-center"></button>
                </div>
              </div>
              <div className="justify-start items-center gap-1.5 inline-flex ">
                <div className="dropdown relative inline-flex gap-2 justify-start w-full items-center">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Due Date: dd - mm - yyyy
                    </p>
                  </button>
                  <div
                    id="dropdown-check-out"
                    className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 open hidden z-10"
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
                  <button className="w-[18] h-[18] flex items-center justify-center"></button>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-start lg:gap-8 gap-6 flex sm:flex-row flex-col mb-10">
              <div className="w-full bg-white rounded-xl flex-col justify-start items-start lg:gap-6 gap-4 inline-flex">
                <h4 className="w-full text-gray-900 text-xl font-medium leading-loose">
                  Bill from
                </h4>
                <div className="w-full justify-start items-start gap-5 flex flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      rows={6}
                      className="w-full resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Enter a description..."
                    />
                  </div>
                </div>
              </div>
              <div className="w-full bg-white rounded-xl flex-col justify-start items-start lg:gap-6 gap-4 inline-flex">
                <h4 className="text-gray-900 text-xl font-medium leading-loose">
                  Bill to
                </h4>
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      rows={6}
                      className="w-full resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Enter a description..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:mb-10 mb-7">
              <div className="w-full justify-start items-start grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                <div className="w-full flex">
                  <div className="xl:w-96 w-full flex flex-col">
                    <div className="py-2 px-3.5 border-y border-gray-200">
                      <span className="w-full text-black text-lg font-semibold leading-7 text-start">
                        Item
                      </span>
                    </div>
                    <div className="xl:w-96 px-3.5 w-full flex flex-col gap-2.5 mt-4">
                      <input
                        type="text"
                        className="w-full focus:outline-none px-3.5 py-2 rounded-lg border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 text-sm font-normal leading-relaxed"
                        placeholder="Item name"
                      />
                      <input
                        type="text"
                        className="w-full focus:outline-none px-3.5 py-2 rounded-lg border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 text-sm font-normal leading-relaxed"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <div className="py-2 px-3.5 border-y border-gray-200">
                      <span className="w-full text-black text-lg font-semibold leading-7 text-start">
                        Qty
                      </span>
                    </div>
                    <div className="w-full h-fit px-3.5 flex mt-4">
                      <div className="w-full h-fit flex-col justify-start items-start flex">
                        <div className="flex w-full">
                          <div className="relative w-full ">
                            <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                            <input
                              type="text"
                              className="block w-full px-4 h-10 py-2.5 text-sm font-normal leading-relaxed
                                          shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 focus:outline-none border border-gray-300 rounded-lg placeholder-gray-400"
                            />
                            <button
                              id="dropdown-button"
                              data-target="dropdown-3"
                              className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-3 pr-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                            ></button>
                            <div
                              id="dropdown-3"
                              className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                <div className="w-full flex">
                  <div className="w-full flex flex-col">
                    <div className="py-2 px-3.5 border-y border-gray-200">
                      <span className="w-full text-black text-lg font-semibold leading-7 text-start">
                        Rate
                      </span>
                    </div>
                    <div className="w-full h-fit px-3.5 flex mt-4">
                      <div className="relative ">
                        <div className="absolute left-0 top-0 py-3 px-4"></div>
                        <input
                          type="text"
                          className="block w-full max-w-xs px-3.5 py-2 h-10 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-300 focus:outline-none leading-relaxed"
                        />
                        <select
                          id="countries"
                          className="w-20 h-6 mt-2 text-gray-900 text-sm block absolute top-0 right-3 px-2 border-l focus:outline-none"
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
                  <div className="w-full items-center flex flex-col">
                    <div className="w-full flex py-2 px-3.5 border-y border-gray-200">
                      <span className="w-full text-black text-lg font-semibold leading-7 text-center">
                        Total
                      </span>
                    </div>
                    <div className="w-full h-fit flex mt-4">
                      <span className="w-full text-center px-3.5 pt-2.5 text-black text-sm font-normal leading-5">
                        $0.00
                      </span>
                    </div>
                  </div>
                  <div className="w-full items-center flex flex-col">
                    <div className="w-full flex py-2 px-3.5 border-y border-gray-200">
                      <span className="w-full text-black text-lg font-semibold leading-7 text-center">
                        Action
                      </span>
                    </div>
                    <div className="w-full h-fit flex mt-4">
                      <div className="relative w-full pt-2.5 px-3.5">
                        <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                        <button
                          id="dropdown-button"
                          data-target="dropdown-2"
                          className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                        ></button>
                        <div
                          id="dropdown-2"
                          className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
            <div className="w-full flex-col justify-start items-start border-t border-gray-200 flex lg:mb-10 mb-7 pt-3.5">
              <a className="flex items-center gap-1">
                <h6 className="text-blue-700 text-base font-semibold leading-relaxed">
                  Add Item
                </h6>
              </a>
            </div>
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-between items-center gap-5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Subtotal
                  </h6>
                  <h5 className="text-right text-black text-lg font-semibold leading-8">
                    $0.00
                  </h5>
                </div>
                <a className="text-blue-700 text-base font-medium leading-relaxed">
                  Add discount
                </a>
                <a className="text-blue-700 text-base font-medium leading-relaxed">
                  Add tax
                </a>
              </div>
              <div className="w-full justify-between items-center gap-3 flex border-t border-gray-200 pt-3">
                <h6 className="text-black text-base font-medium leading-relaxed">
                  Total
                </h6>
                <h5 className="text-right text-black text-lg font-semibold leading-8">
                  $0.00
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-5">
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 rounded-xl shadow justify-center items-center flex">
              <div className="relative"></div>
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Send Invoice
              </span>
            </button>
            <div className="sm:w-fit w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
              <button className="sm:w-fit w-full px-6 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                  Preview
                </span>
              </button>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                  Download
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
