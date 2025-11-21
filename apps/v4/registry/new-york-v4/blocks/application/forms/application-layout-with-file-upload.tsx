export default function ApplicationLayoutWithFileUpload() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 md:gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Job Application Form
            </h2>
            <p className="max-w-4xl text-center text-base leading-relaxed font-normal text-gray-500">
              A job application form is a standardized document used by
              employers to collect essential information from job seekers
              applying for a position within their organization.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <h4 className="text-xl leading-loose font-semibold text-gray-900">
              Personal Details
            </h4>
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
                    placeholder="John"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
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
                    placeholder="028 2154-2541"
                  />
                </div>
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
                    placeholder="Johnsmith@gmail.com"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="396 Matilda Falls, New Theresiaboro 14897-2774"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Work Experience
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="5 Year"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <h4 className="text-xl leading-loose font-semibold text-gray-900">
              What's your skill set
            </h4>
            <div className="flex flex-wrap items-start justify-start gap-7">
              <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  UI Ux
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  HTML
                </span>
              </button>
              <button className="group flex w-full items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600 sm:w-fit">
                <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  CSS
                </span>
              </button>
              <button className="group flex w-full items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600 sm:w-fit">
                <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  C++
                </span>
              </button>
              <button className="group flex w-full items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600 sm:w-fit">
                <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Java Script
                </span>
              </button>
              <button className="group flex w-full items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600 sm:w-fit">
                <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Java
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2.5">
            <label
              htmlFor="dropzone-file"
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-9"
            >
              <div className="mb-3 flex items-center justify-center"></div>
              <span className="mb-1 text-center text-xs leading-4 font-normal text-gray-400">
                PNG, JPG or PDF, smaller than 15MB
              </span>
              <h6 className="text-center text-sm leading-5 font-medium text-gray-900">
                Drag and Drop your file here or
              </h6>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <button className="mx-auto flex w-full items-center justify-center rounded-xl bg-indigo-600 px-9 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
            <span className="px-3.5 text-center text-lg leading-8 font-semibold text-white">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
