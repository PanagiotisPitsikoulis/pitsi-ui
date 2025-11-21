export default function AccountInformationForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Account Information
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <ol className="flex w-full items-center justify-center gap-8 text-xs font-medium text-gray-900 sm:text-base">
              <li className="relative flex justify-center text-center text-base leading-relaxed font-semibold text-indigo-600 after:absolute after:top-5 after:left-[100px] after:inline-block after:w-[150px] after:border after:border-dashed after:border-indigo-600 after:content-[''] sm:after:left-[110px] sm:after:w-[172px]">
                <div className="z-10 w-auto text-center sm:w-[176px] sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-dotted border-indigo-600 bg-indigo-600 text-base leading-relaxed font-bold text-white lg:h-10 lg:w-10">
                    1
                  </span>{" "}
                  Account Information
                  <h6 className="text-center text-base leading-relaxed font-normal text-indigo-600">
                    In Progress
                  </h6>
                </div>
              </li>
              <li className="relative flex justify-center text-base leading-relaxed font-semibold text-black after:absolute after:top-5 after:left-24 after:inline-block after:w-[150px] after:border after:border-dashed after:border-indigo-200 after:content-[''] sm:after:left-[106px] sm:after:w-[172px]">
                <div className="z-10 flex w-auto flex-col text-center sm:w-[176px] sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-base leading-relaxed font-bold text-indigo-600 lg:h-10 lg:w-10">
                    2
                  </span>{" "}
                  Company Information
                  <span className="text-center text-base leading-relaxed font-normal text-gray-500">
                    Pending
                  </span>
                </div>
              </li>
              <li className="relative flex justify-center text-base leading-relaxed font-semibold text-gray-500">
                <div className="z-10 flex w-auto flex-col items-center text-center sm:w-[176px] sm:whitespace-nowrap">
                  <span className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-transparent text-center text-base font-bold text-indigo-600 lg:h-10 lg:w-10">
                    3
                  </span>{" "}
                  Team Members
                  <span className="text-center text-base leading-relaxed font-normal text-gray-500">
                    Pending
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex w-full flex-col items-start justify-start rounded-3xl bg-white p-7 shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] md:p-8 lg:p-11">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Passward
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Passward"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Bio
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Bio"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-xl border border-indigo-600 px-6 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50">
                  <span className="px-2 py-px text-center text-lg leading-8 font-semibold text-indigo-600">
                    Cancel
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                  <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
                    Submit
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
