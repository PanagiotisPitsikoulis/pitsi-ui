export default function RequestFormTailwindCss() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-12 inline-flex w-full flex-col items-start justify-start gap-3">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Request a Quote
          </h2>
          <p className="mx-auto w-full max-w-3xl text-center text-base leading-relaxed font-normal text-gray-500">
            Success in business is not merely about finding opportunities; it's
            about creating them. Seize the moment, harness your strengths, and
            forge ahead with unwavering determination.
          </p>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start gap-9">
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Pagedone"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="mail.pagedone@gmail.com"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-sm leading-snug font-medium text-gray-600">
                    Mobile Number
                  </span>
                </div>
                <div className="relative flex h-12 w-full items-center">
                  <div
                    id="dropdown-button"
                    data-target="dropdown-1"
                    className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                  >
                    IN
                  </div>
                  <div
                    id="dropdown-1"
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
                      className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[74px] text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="00000 00000"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <span className="text-sm leading-snug font-medium text-gray-600">
                  Country
                </span>
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
            <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Project Type
                </label>
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Estimate Budget
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Write your budget"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
              <div className="flex w-full flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Maximum time for the project
                </label>
                <div className="inline-flex h-12 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <div className="dropdown relative inline-flex w-full items-center justify-start gap-2">
                    <button
                      data-target="dropdown-check-out"
                      className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                    >
                      <p className="py-px text-base leading-relaxed font-normal text-gray-400">
                        Aug 28, 2024
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
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                >
                  Company Name
                </label>
                <div className="flex w-full">
                  <div className="relative w-full">
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-9"
              >
                <div className="mb-3 flex items-center justify-center"></div>
                <span className="mb-1 text-center text-sm leading-4 font-medium text-gray-900">
                  Drag an image here
                </span>
                <h6 className="mb-1 text-center text-xs leading-5 font-light text-gray-400">
                  OR
                </h6>
                <button className="rounded-full bg-indigo-600 p-1.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                  <span className="px-1.5 text-xs leading-relaxed font-medium text-white">
                    Choose File
                  </span>
                </button>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="text-sm leading-snug font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  name=""
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-6 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Write here..."
                />
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
            <span className="px-2 text-lg leading-8 font-semibold text-white">
              Request a Quote
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
