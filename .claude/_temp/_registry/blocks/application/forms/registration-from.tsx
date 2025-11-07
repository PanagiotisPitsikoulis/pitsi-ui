export default function RegistrationFrom() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full bg-white rounded-2xl flex-col justify-start items-center gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              Registration Form
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              Fill out the form carefully for registration
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-9 flex">
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <h4 className="text-gray-900 text-xl font-medium leading-loose">
                Profile Details
              </h4>
              <div className="w-full flex-col justify-center items-start gap-5 flex">
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="XXXXXXXXXXX"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="XXXXXXXXXXX"
                    />
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-xs font-medium leading-snug"
                  >
                    About
                  </label>
                  <textarea
                    name=""
                    rows={6}
                    className="w-full resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="Enter a description..."
                  />
                </div>
                <div className="w-full flex-col justify-center items-start gap-1 flex">
                  <div className="w-full justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-sm font-medium leading-snug">
                      Upload Profile Picture
                    </span>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 "
                    >
                      <div className="mb-3 flex items-center justify-center"></div>
                      <span className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
                        PNG, JPG or JPEG, smaller than 15MB
                      </span>
                      <h6 className="text-center text-gray-900 text-sm font-medium leading-5">
                        Drag and Drop your file here or
                        <a className="text-indigo-600"> Browse file</a>
                      </h6>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <h4 className="text-gray-900 text-xl font-medium leading-loose">
                Personal Details
              </h4>
              <div className="w-full flex-col justify-center items-start gap-5 flex">
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="John"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Date of Birth
                    </label>
                    <div className="w-full h-10 px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex ">
                      <div className="dropdown relative inline-flex gap-2 justify-between w-full items-center">
                        <button
                          data-target="dropdown-check-in"
                          className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                        >
                          <p className="text-gray-400 text-sm font-normal leading-relaxed py-px">
                            October 01, 1999
                          </p>
                        </button>

                        <div
                          id="dropdown-check-in"
                          className="dropdown-menu rounded-xl shadow-lg z-10 bg-white absolute w-max top-6 mt-2 open hidden"
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
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Birth Place
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Rajkot"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Nationality
                    </label>
                    <div className="w-full flex">
                      <div className="w-full flex-col justify-start items-start flex">
                        <div className="flex w-full">
                          <div className="relative w-full ">
                            <select
                              id="nationality"
                              className="block w-full px-3.5 py-2 text-sm font-normal leading-normal
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                                   border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                            >
                              <option value={1}>Indian</option>
                              <option value={2} selected>
                                American
                              </option>
                              <option value={3}>Autralian</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Gender
                    </label>
                    <div className="w-full flex">
                      <div className="w-full flex-col justify-start items-start flex">
                        <div className="flex w-full">
                          <div className="relative w-full ">
                            <select
                              id="gender"
                              className="block w-full px-3.5 py-2 text-sm font-normal leading-normal
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                                   border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                            >
                              <option value={1}>Male</option>
                              <option value={2} selected>
                                Female
                              </option>
                              <option value={3}>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="William"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Occupation
                    </label>
                    <div className="w-full flex">
                      <div className="w-full flex-col justify-start items-start flex">
                        <div className="flex w-full">
                          <div className="relative w-full ">
                            <select
                              id="Occupation"
                              className="block w-full px-3.5 py-2 text-sm font-normal leading-normal
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                                   border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                            >
                              <option value={1}>Business</option>
                              <option value={2} selected>
                                Government Job
                              </option>
                              <option value={3}>Private Job</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Mother Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Metlinda"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Occupation
                    </label>
                    <div className="w-full flex">
                      <div className="w-full flex-col justify-start items-start flex">
                        <div className="flex w-full">
                          <div className="relative w-full ">
                            <select
                              id="Occupation"
                              className="block w-full px-3.5 py-2 text-sm font-normal leading-normal
                                              shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-400 focus:outline-none border
                                   border-gray-300 rounded-lg placeholder-gray-400 h-auto"
                            >
                              <option value={1}>Business</option>
                              <option value={2} selected>
                                Government Job
                              </option>
                              <option value={3}>Private Job</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <h4 className="text-gray-900 text-xl font-medium leading-loose">
                Contact Details
              </h4>
              <div className="w-full flex-col justify-center items-start gap-5 flex">
                <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="emilysmith@gmail.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="+01 23456 78900"
                    />
                  </div>
                </div>
                <a className="justify-start items-center gap-2.5 inline-flex">
                  <span className="text-blue-700 text-sm font-medium leading-snug">
                    Add Other Phone Number
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <h4 className="text-gray-900 text-xl font-medium leading-loose">
                Address Details
              </h4>
              <div className="w-full flex-col justify-center items-start gap-5 flex">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-xs font-medium leading-snug"
                  >
                    Address
                  </label>
                  <textarea
                    name=""
                    rows={6}
                    className="w-full resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="Enter a Address"
                  />
                  <input type="text" />
                </div>
                <div className="w-full justify-center items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="India"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Gujrat"
                    />
                  </div>
                </div>
                <div className="w-full justify-center items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-snug"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-center gap-3 flex sm:flex-row flex-col">
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Save &amp; Next
              </span>
            </button>
            <button className="sm:w-fit w-full group px-7 py-2 bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
              <span className="px-2 text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-medium leading-6">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
