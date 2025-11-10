export default function BasicTailwindUiForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-4">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Insured Information
          </h2>
          <p className="text-center text-base leading-relaxed font-normal text-gray-500">
            Please complete insure information
          </p>
        </div>
        <div className="my-10 inline-flex w-full flex-col items-start justify-start gap-8 sm:gap-5 lg:my-14 lg:gap-8">
          <div className="flex w-full flex-col items-start justify-start gap-8 sm:gap-5 md:flex-row lg:gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Name of co-applicant
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Name"
              />
            </div>
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
                placeholder="Address"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8 sm:gap-5 md:flex-row lg:gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="City"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Country
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Country"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="State"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-8 sm:gap-5 md:flex-row lg:gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Zip
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Zip"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Resident type
              </label>
              <div className="flex gap-3.5">
                <div className="flex w-full items-center py-0.5">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_1"
                    className="flex w-full cursor-pointer items-center py-[1px] text-base leading-7 font-normal text-gray-600"
                  >
                    <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                    Rented
                  </label>
                </div>
                <div className="flex w-full items-center py-0.5">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_2"
                    className="flex w-full cursor-pointer items-center py-[1px] text-base leading-7 font-normal text-gray-600"
                  >
                    <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 checked:border-indigo-600" />
                    Owner
                  </label>
                </div>
              </div>
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
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 sm:gap-5 md:grid-cols-3 lg:gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Business Phone Number
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Business Phone Number"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700">
          <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
            Submit
          </span>
        </button>
      </div>
    </section>
  )
}
