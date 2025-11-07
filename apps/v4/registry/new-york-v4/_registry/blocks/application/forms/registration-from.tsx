export default function RegistrationFrom() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-12 rounded-2xl bg-white">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              Registration Form
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Fill out the form carefully for registration
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-9">
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl leading-loose font-medium text-gray-900">
                Profile Details
              </h4>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="XXXXXXXXXXX"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="XXXXXXXXXXX"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-xs leading-snug font-medium text-gray-600"
                  >
                    About
                  </label>
                  <textarea
                    name=""
                    rows={6}
                    className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Enter a description..."
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-1">
                  <div className="inline-flex w-full items-center justify-start gap-1">
                    <span className="text-sm leading-snug font-medium text-gray-600">
                      Upload Profile Picture
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <label
                      htmlFor="dropzone-file"
                      className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-9"
                    >
                      <div className="mb-3 flex items-center justify-center"></div>
                      <span className="mb-1 text-center text-xs leading-4 font-normal text-gray-400">
                        PNG, JPG or JPEG, smaller than 15MB
                      </span>
                      <h6 className="text-center text-sm leading-5 font-medium text-gray-900">
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
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl leading-loose font-medium text-gray-900">
                Personal Details
              </h4>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Date of Birth
                    </label>
                    <div className="inline-flex h-10 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                      <div className="dropdown relative inline-flex w-full items-center justify-between gap-2">
                        <button
                          data-target="dropdown-check-in"
                          className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                        >
                          <p className="py-px text-sm leading-relaxed font-normal text-gray-400">
                            October 01, 1999
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
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Birth Place
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Rajkot"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Nationality
                    </label>
                    <div className="flex w-full">
                      <div className="flex w-full flex-col items-start justify-start">
                        <div className="flex w-full">
                          <div className="relative w-full">
                            <select
                              id="nationality"
                              className="block h-auto w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                  <div className="flex w-full flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Gender
                    </label>
                    <div className="flex w-full">
                      <div className="flex w-full flex-col items-start justify-start">
                        <div className="flex w-full">
                          <div className="relative w-full">
                            <select
                              id="gender"
                              className="block h-auto w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="William"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Occupation
                    </label>
                    <div className="flex w-full">
                      <div className="flex w-full flex-col items-start justify-start">
                        <div className="flex w-full">
                          <div className="relative w-full">
                            <select
                              id="Occupation"
                              className="block h-auto w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Mother Name
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Metlinda"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Occupation
                    </label>
                    <div className="flex w-full">
                      <div className="flex w-full flex-col items-start justify-start">
                        <div className="flex w-full">
                          <div className="relative w-full">
                            <select
                              id="Occupation"
                              className="block h-auto w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl leading-loose font-medium text-gray-900">
                Contact Details
              </h4>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="emilysmith@gmail.com"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="+01 23456 78900"
                    />
                  </div>
                </div>
                <a className="inline-flex items-center justify-start gap-2.5">
                  <span className="text-sm leading-snug font-medium text-blue-700">
                    Add Other Phone Number
                  </span>
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl leading-loose font-medium text-gray-900">
                Address Details
              </h4>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-xs leading-snug font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    name=""
                    rows={6}
                    className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Enter a Address"
                  />
                  <input type="text" />
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="India"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Gujrat"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-snug font-medium text-gray-600"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      className="inline-flex h-10 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium text-white">
                Save &amp; Next
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-lg bg-indigo-50 px-7 py-2 transition-all duration-700 ease-in-out hover:bg-indigo-600 sm:w-fit">
              <span className="px-2 text-sm leading-6 font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
