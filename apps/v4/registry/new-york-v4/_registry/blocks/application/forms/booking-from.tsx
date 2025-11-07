export default function BookingFrom() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Institute Verification Form
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 bg-white p-8">
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
              <div className="inline-flex w-full flex-col items-start justify-start gap-6 border-r border-gray-200 pr-8">
                <h4 className="text-xl leading-loose font-medium text-gray-900">
                  Student Information
                </h4>
                <div className="flex w-full flex-col items-start justify-center gap-5">
                  <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
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
                        placeholder="mail@pagedone.com"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      name=""
                      rows={5}
                      className="inline-flex h-[148px] w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter a Address"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="India"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Gujrat"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="India"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Gujrat"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        DOB
                      </label>
                      <div className="inline-flex h-12 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                        <div className="dropdown relative inline-flex w-full items-center justify-between gap-2">
                          <button
                            data-target="dropdown-check-in"
                            className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                          >
                            <p className="py-px text-base leading-relaxed font-normal text-gray-400">
                              Nov 26, 2001
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
                    <div className="flex w-full flex-col gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-5 font-medium text-gray-600"
                      >
                        Gender
                      </label>
                      <div className="flex w-full">
                        <div className="flex w-full flex-col items-start justify-start">
                          <div className="flex w-full">
                            <div className="relative w-full">
                              <select
                                id="gender"
                                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-normal font-normal text-gray-400 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-6">
                <h4 className="text-xl leading-loose font-medium text-gray-900">
                  Parents / Guardian Information
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Parents/ Guardian First Name
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Sonia"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Parents/ Guardian Last Name
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Mishra"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Relationship to Student
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Write your relation"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
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
                        placeholder="mail@pagedone.com"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      name=""
                      rows={5}
                      className="inline-flex h-[148px] w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter a Address"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="India"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Gujrat"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="India"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1.5">
                      <label
                        htmlFor=""
                        className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                        placeholder="Gujrat"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h4 className="w-full text-xl leading-loose font-medium text-gray-900">
                Signature
              </h4>
              <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="inline-flex w-full flex-col items-end justify-center gap-4">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                    >
                      Student Signature
                    </label>
                    <textarea
                      name=""
                      rows={5}
                      className="inline-flex h-[148px] w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="flex w-full flex-col items-end justify-end gap-4 sm:flex-row">
                    <button className="group flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-600 sm:w-[120px]">
                      <span className="px-1.5 text-xs leading-5 font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                        Reset
                      </span>
                    </button>
                    <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-[120px]">
                      <span className="px-1.5 text-xs leading-5 font-medium text-white">
                        Accept
                      </span>
                    </button>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-end justify-center gap-4">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-sm leading-snug font-medium text-gray-600"
                    >
                      Parents / Guardian Signature
                    </label>
                    <textarea
                      name=""
                      rows={5}
                      className="inline-flex h-[148px] w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="flex w-full flex-col items-end justify-end gap-4 sm:flex-row">
                    <button className="group flex w-full items-center justify-center rounded-md bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-600 sm:w-[120px]">
                      <span className="px-1.5 text-xs leading-5 font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                        Reset
                      </span>
                    </button>
                    <button className="flex w-full items-center justify-center rounded-md bg-indigo-600 p-1.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-[120px]">
                      <span className="px-1.5 text-xs leading-5 font-medium text-white">
                        Accept
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-48">
            <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
