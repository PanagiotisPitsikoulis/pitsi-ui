export default function RegistrationForm() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="px-0 lg:px-20 xl:px-40">
          <div className="inline-flex w-full flex-col items-center justify-start gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-12">
              <div className="inline-flex items-end justify-start">
                <div className="flex items-start justify-start gap-2.5 rounded-full border border-gray-100 p-1">
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-100"></div>
                </div>
                <div className="relative flex h-[34px] w-[34px] items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="absolute flex h-[34px] w-[34px] -translate-x-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-gray-100"
                  >
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
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
                        Username
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="pagedone123"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="mail@pagedone.com"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <div className="flex items-center gap-1">
                        <span className="text-sm leading-5 font-medium text-gray-600">
                          Mobile Number
                        </span>
                      </div>
                      <div className="relative flex h-12 w-full items-center">
                        <button
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent py-2.5 pr-2 pl-4 text-center text-base font-normal text-gray-900"
                        >
                          IN
                        </button>
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
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Password
                      </label>
                      <div className="relative flex w-full gap-2">
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder=".........."
                        />
                        <a className="absolute top-4 right-5 ml-2"></a>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Confirm Password
                      </label>
                      <div className="relative flex w-full gap-2">
                        <input
                          type="text"
                          className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                          placeholder=".........."
                        />
                        <a className="absolute top-4 right-5 ml-2"></a>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
                    <div className="flex w-full flex-col gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        DOB
                      </label>
                      <div className="inline-flex h-12 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                        <div className="dropdown relative inline-flex w-full items-center justify-start gap-2">
                          <button
                            data-target="dropdown-check-out"
                            className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                          >
                            <p className="py-px text-base leading-relaxed font-normal text-gray-400">
                              Nov 26, 2001
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
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <span className="text-sm leading-snug font-medium text-gray-600">
                        Country
                      </span>
                      <div className="flex w-full">
                        <div className="relative w-full">
                          <select
                            id="countries"
                            className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                </div>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    defaultChecked
                    className="mr-2 h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-400 bg-white checked:border-gray-900 checked:bg-gray-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="cursor-pointer text-sm leading-normal font-normal text-gray-400"
                  >
                    I agree to the Terms of Services and Privacy Policy
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-7">
              <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-800">
                <span className="px-2 text-lg leading-8 font-semibold text-white">
                  Create Account
                </span>
              </button>
              <span className="w-full text-center text-base leading-relaxed font-medium text-gray-400">
                or
              </span>
              <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row">
                <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gray-900 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-800">
                  <span className="px-2 text-lg leading-8 font-semibold text-white">
                    Login with Google
                  </span>
                </button>
                <button className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-gray-100 px-6 py-3 transition-all duration-700 ease-in-out hover:bg-gray-900">
                  <span className="px-2 text-lg leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Login with Facebook
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
