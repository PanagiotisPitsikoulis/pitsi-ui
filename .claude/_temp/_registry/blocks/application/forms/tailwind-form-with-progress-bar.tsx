export default function TailwindFormWithProgressBar() {
  return (
    <section className="py-24 relative bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full bg-white rounded-[20px] h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-[20px]" />
        </div>
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex mt-12">
          <div className="w-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-6 flex">
            <a className="justify-start items-center gap-3 inline-flex">
              <div className="w-7 h-7 rounded-full border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <span className="text-indigo-600 text-xs font-semibold leading-5">
                  1
                </span>
              </div>
              <h4 className="text-indigo-600 text-xl font-semibold leading-8">
                Personal Details
              </h4>
            </a>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Name of Student
                    </span>
                  </div>
                  <div className="w-full flex relative items-center h-12">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-1"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-1"
                      className="absolute top-10 z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mr.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Ms.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mrs.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed block py-2.5 pr-4 pl-20 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                        placeholder="Kevin Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Date of Birth
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-md border border-gray-300 px-4 py-2.5 flex items-center">
                    <div className="dropdown relative inline-flex px-2 py-px">
                      <button
                        data-target="dropdown-check-in"
                        className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                      >
                        <p className="text-base font-normal text-gray-400 placeholder-gray-400">
                          23 / 05 / 2005
                        </p>
                      </button>
                      <div
                        id="dropdown-check-in"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 z-10 open hidden"
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
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Mobile Number
                    </span>
                  </div>
                  <div className="w-full flex relative items-center h-12">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-2"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                    >
                      +91
                    </div>
                    <div
                      id="dropdown-2"
                      className="absolute top-10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            +91
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            +22
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            +21
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed block py-2.5 pr-4 pl-20 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                        placeholder="76532 25623"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Email Address
                    </span>
                  </div>
                  <div className="w-full relative text-gray-500 focus-within:text-gray-900 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full pr-4 pl-10 py-2.5 text-base font-normal shadow-xs bg-transparent border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Gender
                  </label>
                  <div className="flex gap-3.5">
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Male
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_2"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Female
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_3"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Category
                  </label>
                  <div className="flex gap-2.5">
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_4"
                        type="radio"
                        name="radio1"
                        className="hidden sr-only peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_4"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        General
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_5"
                        type="radio"
                        name="radio1"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_5"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        ST
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_6"
                        type="radio"
                        name="radio1"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_6"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        SC
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_7"
                        type="radio"
                        name="radio1"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_7"
                        className="text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        OBC
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Father’s Name
                    </span>
                  </div>
                  <div className="w-full flex relative items-center h-12">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-3"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-3"
                      className="absolute top-10 z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mr.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Ms.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mrs.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed block py-2.5 pr-4 pl-20 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg focus:outline-none"
                        placeholder="Karan Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-5">
                      Occupation
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="h-12 border border-gray-300 text-gray-400 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none block w-full px-4 py-2.5 text-base font-medium leading-relaxed
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]  focus:outline-none border border-gray-300 rounded-lg placeholder-gray-400 "
                      >
                        <option value={1}>Government Job</option>
                        <option value={2} selected>
                          Business
                        </option>
                        <option value={3}>Private Job</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Mother’s Name
                    </span>
                  </div>
                  <div className="w-full flex relative items-center h-12">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-4"
                      className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-4"
                      className="absolute top-10 z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mr.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Ms.
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mrs.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed block py-2.5 pr-4 pl-20 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                        placeholder="Sweta Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-5">
                      Occupation
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full ">
                      <select
                        id="countries"
                        className="h-12 border border-gray-300 text-gray-400 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none block w-full px-4 py-2.5 text-base font-medium leading-relaxed
                                  shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]  focus:outline-none border border-gray-300 rounded-lg placeholder-gray-400 "
                      >
                        <option value="U1" selected>
                          Government Job
                        </option>
                        <option value={2}>Business</option>
                        <option value={3}>Private Job</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start ">
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <label
                    htmlFor=""
                    className="w-full flex gap-1 items-center text-gray-600 text-sm font-medium leading-6"
                  >
                    Family Annual Income
                  </label>
                  <div className="flex gap-3.5">
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_8"
                        type="radio"
                        name="radio3"
                        className="hidden sr-only peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_8"
                        className="text-gray-600 text-base whitespace-nowrap font-normal leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Less than 2.5 Lakh
                      </label>
                    </div>
                    <div className="py-0.5 w-full flex items-center ">
                      <input
                        id="radio_9"
                        type="radio"
                        name="radio3"
                        className="hidden sr-only peer"
                      />
                      <label
                        htmlFor="radio_9"
                        className="text-gray-600 text-base font-normal whitespace-nowrap leading-6 w-full flex items-center cursor-pointer"
                      >
                        <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                        More than 2.5 Lakh
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-6 flex">
            <a className="justify-start items-center gap-3 inline-flex">
              <div className="w-7 h-7 rounded-full border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <span className="text-indigo-600 text-xs font-semibold leading-5">
                  2
                </span>
              </div>
              <h4 className="text-indigo-600 text-xl font-medium leading-8">
                Education Detail
              </h4>
            </a>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-6 flex">
            <a className="justify-start items-center gap-3 inline-flex">
              <div className="w-7 h-7 rounded-full border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <span className="text-indigo-600 text-xs font-semibold leading-5">
                  3
                </span>
              </div>
              <h4 className="text-indigo-600 text-xl font-medium leading-8">
                Upload Document
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
