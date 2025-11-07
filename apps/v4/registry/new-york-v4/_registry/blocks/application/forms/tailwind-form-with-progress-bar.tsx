export default function TailwindFormWithProgressBar() {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="h-2.5 w-full rounded-[20px] bg-white">
          <div className="h-2.5 rounded-[20px] bg-indigo-600" />
        </div>
        <div className="mt-12 inline-flex w-full flex-col items-start justify-start gap-8">
          <div className="flex w-full flex-col items-start justify-start gap-6 rounded-2xl bg-white p-6">
            <a className="inline-flex items-center justify-start gap-3">
              <div className="inline-flex h-7 w-7 flex-col items-center justify-center gap-2.5 rounded-full border border-indigo-600">
                <span className="text-xs leading-5 font-semibold text-indigo-600">
                  1
                </span>
              </div>
              <h4 className="text-xl leading-8 font-semibold text-indigo-600">
                Personal Details
              </h4>
            </a>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Name of Student
                    </span>
                  </div>
                  <div className="relative flex h-12 w-full items-center">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-1"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-1"
                      className="absolute top-10 z-20 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-20 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Kevin Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Date of Birth
                    </span>
                  </div>
                  <div className="flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-2.5">
                    <div className="dropdown relative inline-flex px-2 py-px">
                      <button
                        data-target="dropdown-check-in"
                        className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                      >
                        <p className="text-base font-normal text-gray-400 placeholder-gray-400">
                          23 / 05 / 2005
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
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Mobile Number
                    </span>
                  </div>
                  <div className="relative flex h-12 w-full items-center">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-2"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                    >
                      +91
                    </div>
                    <div
                      id="dropdown-2"
                      className="absolute top-10 z-10 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-20 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="76532 25623"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Email Address
                    </span>
                  </div>
                  <div className="relative w-full text-gray-500 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-10 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Gender
                  </label>
                  <div className="flex gap-3.5">
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_1"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_1"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Male
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_2"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_2"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Female
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_3"
                        type="radio"
                        name="radio"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_3"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Category
                  </label>
                  <div className="flex gap-2.5">
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_4"
                        type="radio"
                        name="radio1"
                        className="peer sr-only hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_4"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        General
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_5"
                        type="radio"
                        name="radio1"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_5"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        ST
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_6"
                        type="radio"
                        name="radio1"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_6"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        SC
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_7"
                        type="radio"
                        name="radio1"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_7"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        OBC
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Father’s Name
                    </span>
                  </div>
                  <div className="relative flex h-12 w-full items-center">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-3"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-3"
                      className="absolute top-10 z-20 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-20 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Karan Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-5 font-medium text-gray-600">
                      Occupation
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-medium text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Mother’s Name
                    </span>
                  </div>
                  <div className="relative flex h-12 w-full items-center">
                    <div
                      id="dropdown-button"
                      data-target="dropdown-4"
                      className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                    >
                      Mr.
                    </div>
                    <div
                      id="dropdown-4"
                      className="absolute top-10 z-20 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                        className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-20 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Sweta Patel"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-5 font-medium text-gray-600">
                      Occupation
                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className="relative w-full">
                      <select
                        id="countries"
                        className="block h-12 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-medium text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
              <div className="w-full flex-col items-start justify-start">
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <label
                    htmlFor=""
                    className="flex w-full items-center gap-1 text-sm leading-6 font-medium text-gray-600"
                  >
                    Family Annual Income
                  </label>
                  <div className="flex gap-3.5">
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_8"
                        type="radio"
                        name="radio3"
                        className="peer sr-only hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="radio_8"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal whitespace-nowrap text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        Less than 2.5 Lakh
                      </label>
                    </div>
                    <div className="flex w-full items-center py-0.5">
                      <input
                        id="radio_9"
                        type="radio"
                        name="radio3"
                        className="peer sr-only hidden"
                      />
                      <label
                        htmlFor="radio_9"
                        className="flex w-full cursor-pointer items-center text-base leading-6 font-normal whitespace-nowrap text-gray-600"
                      >
                        <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                        More than 2.5 Lakh
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 rounded-2xl bg-white p-6">
            <a className="inline-flex items-center justify-start gap-3">
              <div className="inline-flex h-7 w-7 flex-col items-center justify-center gap-2.5 rounded-full border border-indigo-600">
                <span className="text-xs leading-5 font-semibold text-indigo-600">
                  2
                </span>
              </div>
              <h4 className="text-xl leading-8 font-medium text-indigo-600">
                Education Detail
              </h4>
            </a>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 rounded-2xl bg-white p-6">
            <a className="inline-flex items-center justify-start gap-3">
              <div className="inline-flex h-7 w-7 flex-col items-center justify-center gap-2.5 rounded-full border border-indigo-600">
                <span className="text-xs leading-5 font-semibold text-indigo-600">
                  3
                </span>
              </div>
              <h4 className="text-xl leading-8 font-medium text-indigo-600">
                Upload Document
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
