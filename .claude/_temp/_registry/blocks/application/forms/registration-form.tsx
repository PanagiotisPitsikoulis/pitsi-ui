export default function RegistrationForm() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="xl:px-40 lg:px-20 px-0">
          <div className="w-full flex-col justify-start items-center gap-9 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-12 flex">
              <div className="justify-start items-end inline-flex">
                <div className="p-1 rounded-full border border-gray-100 justify-start items-start gap-2.5 flex">
                  <div className="w-[100px] h-[100px] bg-gray-100 rounded-full justify-center items-center flex"></div>
                </div>
                <div className="w-[34px] h-[34px] justify-center items-center relative flex">
                  <label
                    htmlFor="dropzone-file"
                    className="w-[34px] h-[34px] flex items-center justify-center -translate-x-7 absolute bg-gray-100 rounded-full border-2 border-white cursor-pointer"
                  >
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-5 flex">
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
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
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                        placeholder="pagedone123"
                      />
                    </div>
                  </div>
                  <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                        placeholder="mail@pagedone.com"
                      />
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <div className="flex gap-1 items-center">
                        <span className="text-gray-600 text-sm font-medium leading-5">
                          Mobile Number
                        </span>
                      </div>
                      <div className="w-full flex relative items-center h-12">
                        <button
                          id="dropdown-button"
                          data-target="dropdown-1"
                          className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 pr-2 pl-4 text-base font-normal text-center text-gray-900 bg-transparent absolute  "
                        >
                          IN
                        </button>
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
                  </div>
                  <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                      >
                        Password
                      </label>
                      <div className="w-full flex gap-2 relative">
                        <input
                          type="text"
                          className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                          placeholder=".........."
                        />
                        <a className="absolute right-5 top-4 ml-2"></a>
                      </div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                      >
                        Confirm Password
                      </label>
                      <div className="w-full flex gap-2 relative">
                        <input
                          type="text"
                          className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                          placeholder=".........."
                        />
                        <a className="absolute right-5 top-4 ml-2"></a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
                    <div className="w-full flex flex-col gap-1.5">
                      <label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-sm font-medium leading-snug"
                      >
                        DOB
                      </label>
                      <div className="w-full h-12 px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex ">
                        <div className="dropdown relative inline-flex gap-2 justify-start w-full items-center">
                          <button
                            data-target="dropdown-check-out"
                            className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                          >
                            <p className="text-gray-400 text-base font-normal leading-relaxed py-px">
                              Nov 26, 2001
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
                    <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                      <span className="text-gray-600 text-sm font-medium leading-snug">
                        Country
                      </span>
                      <div className="flex w-full">
                        <div className="relative w-full ">
                          <select
                            id="countries"
                            className="block w-full px-4 py-2.5 text-base font-normal leading-normal
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
                </div>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 appearance-none border cursor-pointer border-gray-400 rounded-md mr-2 bg-white checked:bg-no-repeat checked:bg-center checked:border-gray-900 checked:bg-gray-100"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="text-sm font-normal leading-normal cursor-pointer text-gray-400"
                  >
                    I agree to the Terms of Services and Privacy Policy
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-center items-center sm:gap-7 gap-4 flex">
              <button className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 text-white text-lg font-semibold leading-8">
                  Create Account
                </span>
              </button>
              <span className="w-full text-center text-gray-400 text-base font-medium leading-relaxed">
                or
              </span>
              <div className="w-full justify-center items-center gap-8 flex sm:flex-row flex-col">
                <button className="w-full px-6 py-3 flex items-center justify-center gap-1.5 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <span className="px-2 text-white text-lg font-semibold leading-8">
                    Login with Google
                  </span>
                </button>
                <button className="group w-full px-6 py-3 flex items-center justify-center gap-1.5 rounded-xl bg-gray-100 hover:bg-gray-900 transition-all duration-700 ease-in-out">
                  <span className="px-2 text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
                    Login with Facebook
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
