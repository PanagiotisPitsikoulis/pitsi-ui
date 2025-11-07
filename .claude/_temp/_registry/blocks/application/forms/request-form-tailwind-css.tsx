export default function RequestFormTailwindCss() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-3 inline-flex mb-12">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Request a Quote
          </h2>
          <p className="w-full mx-auto max-w-3xl text-center text-gray-500 text-base font-normal leading-relaxed">
            Success in business is not merely about finding opportunities; it's
            about creating them. Seize the moment, harness your strengths, and
            forge ahead with unwavering determination.
          </p>
        </div>
        <div className="w-full flex-col justify-start items-center gap-9 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-5 flex">
            <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="Pagedone"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="mail.pagedone@gmail.com"
                />
              </div>
            </div>
            <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <div className="flex gap-1 items-center">
                  <span className="text-gray-600 text-sm font-medium leading-snug">
                    Mobile Number
                  </span>
                </div>
                <div className="w-full flex relative items-center h-12">
                  <div
                    id="dropdown-button"
                    data-target="dropdown-1"
                    className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                  >
                    IN
                  </div>
                  <div
                    id="dropdown-1"
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
                          IN
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          US
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          FR
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="w-full text-gray-900 placeholder-gray-400 focus:outline-none text-base font-normal leading-relaxed block py-2.5 pr-4 pl-[74px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-transparent border border-gray-300 rounded-lg"
                      placeholder="00000 00000"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <span className="text-gray-600 text-sm font-medium leading-snug">
                  Country
                </span>
                <div className="flex w-full">
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2 text-base font-normal leading-normal
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                   border-gray-300 rounded-lg placeholder-gray-400"
                    >
                      <option value={1}>India</option>
                      <option value={2} selected>
                        Canada
                      </option>
                      <option value={3}>USA</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Project Type
                </label>
                <div className="flex w-full">
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2 text-base font-normal leading-normal
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                   border-gray-300 rounded-lg placeholder-gray-400"
                    >
                      <option value={1}>Theory</option>
                      <option value={2} selected>
                        Practical
                      </option>
                      <option value={3}>VIVA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Estimate Budget
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                  placeholder="Write your budget"
                />
              </div>
            </div>
            <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Maximum time for the project
                </label>
                <div className="w-full h-12 px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex ">
                  <div className="dropdown relative inline-flex gap-2 justify-start w-full items-center">
                    <button
                      data-target="dropdown-check-out"
                      className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                    >
                      <p className="text-gray-400 text-base font-normal leading-relaxed py-px">
                        Aug 28, 2024
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
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                >
                  Company Name
                </label>
                <div className="flex w-full">
                  <div className="relative w-full ">
                    <select
                      id="countries"
                      className="block w-full px-4 py-2.5 text-base font-normal leading-normal
                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                   border-gray-300 rounded-lg placeholder-gray-400"
                    >
                      <option value={1}>Design Studio</option>
                      <option value={2} selected>
                        Design Studio
                      </option>
                      <option value={3}>Design Studio</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 "
              >
                <div className="mb-3 flex items-center justify-center"></div>
                <span className="text-center text-gray-900 text-sm font-medium leading-4 mb-1">
                  Drag an image here
                </span>
                <h6 className="text-center text-gray-400 text-xs font-light leading-5 mb-1">
                  OR
                </h6>
                <button className="p-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-1.5 text-white text-xs font-medium leading-relaxed">
                    Choose File
                  </span>
                </button>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="text-gray-600 text-sm font-medium leading-snug"
                >
                  Message
                </label>
                <textarea
                  name=""
                  rows={5}
                  className="w-full resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-6 px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="Write here..."
                />
              </div>
            </div>
          </div>
          <button className="sm:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
            <span className="px-2 text-white text-lg font-semibold leading-8">
              Request a Quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
