export default function ApplicationLayoutWithFileUpload() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
          <div className="w-full flex-col justify-center items-center gap-4 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Job Application Form
            </h2>
            <p className="max-w-4xl text-center text-gray-500 text-base font-normal leading-relaxed">
              A job application form is a standardized document used by
              employers to collect essential information from job seekers
              applying for a position within their organization.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-loose">
              Personal Details
            </h4>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="028 2154-2541"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Johnsmith@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="396 Matilda Falls, New Theresiaboro 14897-2774"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Work Experience
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="5 Year"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-loose">
              What's your skill set
            </h4>
            <div className="justify-start items-start gap-7 flex flex-wrap">
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  UI Ux
                </span>
              </button>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  HTML
                </span>
              </button>
              <button className="sm:w-fit w-full group px-5 py-2.5 hover:bg-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 justify-center items-center flex">
                <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  CSS
                </span>
              </button>
              <button className="sm:w-fit w-full group px-5 py-2.5 hover:bg-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 justify-center items-center flex">
                <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  C++
                </span>
              </button>
              <button className="sm:w-fit w-full group px-5 py-2.5 hover:bg-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 justify-center items-center flex">
                <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  Java Script
                </span>
              </button>
              <button className="sm:w-fit w-full group px-5 py-2.5 hover:bg-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 justify-center items-center flex">
                <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  Java
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-2.5 flex">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 "
            >
              <div className="mb-3 flex items-center justify-center"></div>
              <span className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
                PNG, JPG or PDF, smaller than 15MB
              </span>
              <h6 className="text-center text-gray-900 text-sm font-medium leading-5">
                Drag and Drop your file here or
              </h6>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <button className="mx-auto sm:w-fit w-full px-9 py-3 bg-indigo-600 hover:bg-indigo-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex">
            <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
