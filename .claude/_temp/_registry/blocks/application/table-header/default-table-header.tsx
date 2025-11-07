export default function DefaultTableHeader() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="p-4 w-fit mx-auto bg-white rounded-2xl">
          <div className="flex xl:flex-nowrap flex-wrap items-center gap-4 pb-4">
            <div className="lg:w-[368px] w-[200px] h-[54px] gap-1 flex-col justify-start items-start inline-flex">
              <label className="text-gray-600 text-xs font-medium leading-5">
                what are you looking for?
              </label>
              <div className="w-full h-8 px-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1 inline-flex">
                <input
                  type="text"
                  className="w-full focus:outline-none placeholder-gray-400 text-gray-900 text-xs font-normal leading-5"
                  placeholder="mail@pagedone.com"
                />
              </div>
            </div>
            <div className="lg:w-[140px] w-[200px] relative flex flex-col cursor-pointer items-center gap-1">
              <label
                htmlFor=""
                className="w-full text-left text-gray-600 text-xs font-medium leading-5"
              >
                Account
              </label>
              <select
                id="Offer"
                className="h-auto placeholder-gray-400 text-gray-400 cursor-pointer py-1 px-2.5 text-xs font-medium leading-5 block w-full rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:bg-gray-50 focus-within:border-gray-300"
              >
                <option selected>All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
                <option value="Loan">Loan</option>
              </select>
            </div>
            <div className="lg:w-[140px] w-[200px] relative flex flex-col cursor-pointer items-center gap-1">
              <label
                htmlFor=""
                className="w-full text-left text-gray-600 text-xs font-medium leading-5"
              >
                Status
              </label>
              <select
                id="Offer"
                className="h-auto text-gray-400 py-1 px-2.5 text-xs cursor-pointer font-medium leading-5 block w-full rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:bg-gray-50 focus-within:border-gray-300"
              >
                <option className="text-gray-900" selected>
                  Status
                </option>
                <option className="text-gray-900" value="Saving">
                  In process
                </option>
                <option className="text-gray-900" value="Current">
                  Complete
                </option>
                <option className="text-gray-900" value="Loan">
                  Not Approval
                </option>
              </select>
            </div>
            <div className="lg:w-[140px] w-[200px] flex flex-col items-center cursor-pointer gap-1 relative">
              <label
                htmlFor=""
                className="w-full text-left text-gray-600 text-xs font-medium leading-5"
              >
                From
              </label>
              <div className="w-full bg-white relative rounded-lg cursor-pointer border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-1.5 px-2.5 flex items-center gap-2">
                <div className="dropdown relative inline-flex px-1.5">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-xs font-medium text-gray-400">
                      DD/MM/YYYY
                    </p>
                  </button>
                  <div
                    id="dropdown-check-in"
                    className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 z-10 mt-2 open hidden"
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
            <div className="lg:w-[140px] w-[200px] flex flex-col cursor-pointer items-center gap-1 relative">
              <label
                htmlFor=""
                className="w-full text-left text-gray-600 text-xs font-medium leading-5"
              >
                To
              </label>
              <div className="w-full bg-white relative rounded-lg cursor-pointer border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-1.5 px-2.5 flex items-center gap-2">
                <div className="dropdown relative inline-flex px-1.5">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-xs font-medium text-gray-400">
                      DD/MM/YYYY
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
            <button className="lg:w-fit w-[200px] mt-[22px] p-1.5 bg-indigo-600 rounded-md shadow justify-center items-center flex">
              <span className="px-1.5 text-white text-xs font-medium leading-5">
                Search
              </span>
            </button>
          </div>
          <div className="pt-4 border-t border-gray-200 flex flex-row gap-4">
            <span className="text-gray-900 text-xs font-medium leading-5 whitespace-nowrap">
              Show by:
            </span>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <input
                  id="radio_1"
                  type="radio"
                  name="radio"
                  className="hidden sr-only peer"
                  defaultChecked
                />
                <label
                  htmlFor="radio_1"
                  className="text-gray-600 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                >
                  <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                  All
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_2"
                  type="radio"
                  name="radio"
                  className="hidden sr-only peer"
                />
                <label
                  htmlFor="radio_2"
                  className="text-gray-600 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                >
                  <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                  By Category
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_3"
                  type="radio"
                  name="radio"
                  className="hidden sr-only peer"
                />
                <label
                  htmlFor="radio_3"
                  className="text-gray-600 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                >
                  <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                  By Price
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_4"
                  type="radio"
                  name="radio"
                  className="hidden sr-only peer"
                />
                <label
                  htmlFor="radio_4"
                  className="text-gray-600 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                >
                  <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                  By State
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_5"
                  type="radio"
                  name="radio"
                  className="hidden sr-only peer"
                />
                <label
                  htmlFor="radio_5"
                  className="text-gray-600 text-sm font-normal leading-snug w-full flex items-center cursor-pointer bg-transparent"
                >
                  <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                  By Brand
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
