export default function MultiLevelTableHeaderWithFilters() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-fit rounded-2xl bg-white p-4">
          <div className="flex flex-wrap items-center gap-4 pb-4 xl:flex-nowrap">
            <div className="inline-flex h-[54px] w-[200px] flex-col items-start justify-start gap-1 lg:w-[368px]">
              <label className="text-xs leading-5 font-medium text-gray-600">
                what are you looking for?
              </label>
              <div className="inline-flex h-8 w-full items-center justify-start gap-1 rounded-lg border border-gray-300 px-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <input
                  type="text"
                  className="w-full text-xs leading-5 font-normal text-gray-900 placeholder-gray-400 focus:outline-none"
                  placeholder="mail@pagedone.com"
                />
              </div>
            </div>
            <div className="relative flex w-[200px] cursor-pointer flex-col items-center gap-1 lg:w-[140px]">
              <label
                htmlFor=""
                className="w-full text-left text-xs leading-5 font-medium text-gray-600"
              >
                Account
              </label>
              <select
                id="Offer"
                className="relative block h-auto w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs leading-5 font-medium text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 focus-within:border-gray-300 hover:bg-gray-50 focus:outline-none"
              >
                <option selected>All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
                <option value="Loan">Loan</option>
              </select>
            </div>
            <div className="relative flex w-[200px] cursor-pointer flex-col items-center gap-1 lg:w-[140px]">
              <label
                htmlFor=""
                className="w-full text-left text-xs leading-5 font-medium text-gray-600"
              >
                Status
              </label>
              <select
                id="Offer"
                className="relative block h-auto w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs leading-5 font-medium text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 focus-within:border-gray-300 hover:bg-gray-50 focus:outline-none"
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
            <div className="relative flex w-[200px] cursor-pointer flex-col items-center gap-1 lg:w-[140px]">
              <label
                htmlFor=""
                className="w-full text-left text-xs leading-5 font-medium text-gray-600"
              >
                From
              </label>
              <div className="relative flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <div className="dropdown relative inline-flex px-1.5">
                  <button
                    data-target="dropdown-check-in"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-xs font-medium text-gray-400">
                      DD/MM/YYYY
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
                </div>
              </div>
            </div>
            <div className="relative flex w-[200px] cursor-pointer flex-col items-center gap-1 lg:w-[140px]">
              <label
                htmlFor=""
                className="w-full text-left text-xs leading-5 font-medium text-gray-600"
              >
                To
              </label>
              <div className="relative flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <div className="dropdown relative inline-flex px-1.5">
                  <button
                    data-target="dropdown-check-out"
                    className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                  >
                    <p className="text-xs font-medium text-gray-400">
                      DD/MM/YYYY
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
            <button className="mt-[22px] flex w-[200px] items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow lg:w-fit">
              <span className="px-1.5 text-xs leading-5 font-medium text-white">
                Search
              </span>
            </button>
          </div>
          <div className="flex flex-row gap-4 border-t border-gray-200 pt-4">
            <span className="text-xs leading-5 font-medium whitespace-nowrap text-gray-900">
              Show by:
            </span>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <input
                  id="radio_1"
                  type="radio"
                  name="radio"
                  className="peer sr-only hidden"
                  defaultChecked
                />
                <label
                  htmlFor="radio_1"
                  className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-600"
                >
                  <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                  All
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_2"
                  type="radio"
                  name="radio"
                  className="peer sr-only hidden"
                />
                <label
                  htmlFor="radio_2"
                  className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-600"
                >
                  <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                  By Category
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_3"
                  type="radio"
                  name="radio"
                  className="peer sr-only hidden"
                />
                <label
                  htmlFor="radio_3"
                  className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-600"
                >
                  <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                  By Price
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_4"
                  type="radio"
                  name="radio"
                  className="peer sr-only hidden"
                />
                <label
                  htmlFor="radio_4"
                  className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-600"
                >
                  <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                  By State
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio_5"
                  type="radio"
                  name="radio"
                  className="peer sr-only hidden"
                />
                <label
                  htmlFor="radio_5"
                  className="flex w-full cursor-pointer items-center bg-transparent text-sm leading-snug font-normal text-gray-600"
                >
                  <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                  By Brand
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
