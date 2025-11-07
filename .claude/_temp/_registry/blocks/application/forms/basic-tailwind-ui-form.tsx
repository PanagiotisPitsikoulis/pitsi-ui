export default function BasicTailwindUiForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Insured Information
          </h2>
          <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
            Please complete insure information
          </p>
        </div>
        <div className="w-full flex-col justify-start items-start lg:gap-8 sm:gap-5 gap-8 inline-flex lg:my-14 my-10">
          <div className="w-full justify-start items-start lg:gap-8 sm:gap-5 gap-8 flex md:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Name of co-applicant
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Name"
              />
            </div>
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
                placeholder="Address"
              />
            </div>
          </div>
          <div className="w-full justify-start items-start lg:gap-8 sm:gap-5 gap-8 flex md:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                City
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="City"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Country
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Country"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                State
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="State"
              />
            </div>
          </div>
          <div className="w-full justify-center items-start lg:gap-8 sm:gap-5 gap-8 flex md:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Zip
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Zip"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Resident type
              </label>
              <div className="flex gap-3.5">
                <div className="py-0.5 w-full flex items-center ">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_1"
                    className="py-[1px] text-gray-600 text-base font-normal leading-7 w-full flex items-center cursor-pointer"
                  >
                    <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                    Rented
                  </label>
                </div>
                <div className="py-0.5 w-full flex items-center ">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_2"
                    className="py-[1px] text-gray-600 text-base font-normal leading-7 w-full flex items-center cursor-pointer"
                  >
                    <span className="w-5 h-5 mr-2 rounded-full border border-gray-300 checked:border-indigo-600" />
                    Owner
                  </label>
                </div>
              </div>
            </div>
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
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-start items-start lg:gap-8 sm:gap-5 gap-8">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Business Phone Number
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Business Phone Number"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Email Address
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
          <span className="px-2 text-center text-white text-lg font-semibold leading-8">
            Submit
          </span>
        </button>
      </div>
    </section>
  );
}
