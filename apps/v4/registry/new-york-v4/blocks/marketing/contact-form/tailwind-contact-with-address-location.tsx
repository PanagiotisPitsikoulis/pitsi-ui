export default function TailwindContactWithAddressLocation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-12 rounded-r-3xl bg-gray-50 p-8 lg:col-span-7">
            <div className="mb-11 grid gap-5">
              <h2 className="font-manrope text-4xl leading-snug font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="text-lg font-normal text-gray-600">
                We are deeply committed to delivering unparalleled service and
                unwavering support to ensure your experience exceeds
                expectations.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex w-full items-start justify-start gap-1">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-base leading-7 font-medium text-gray-600">
                        First Name
                      </span>
                      {/* SVG removed */}
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="flex w-full items-start justify-start gap-1">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <div className="inline-flex items-center justify-start gap-1">
                      <span className="text-base leading-7 font-medium text-gray-600">
                        Last Name
                      </span>
                      {/* SVG removed */}
                    </div>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start justify-start gap-1">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-base leading-7 font-medium text-gray-600">
                      Email
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex w-full items-start justify-start gap-1">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-base leading-7 font-medium text-gray-600">
                      Description
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 text-base leading-7 font-semibold text-white">
                  Submit
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-12 grid h-fit grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="group flex h-fit items-center gap-4 rounded-2xl bg-indigo-100 p-6 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-medium text-black transition-all duration-700 ease-in-out group-hover:text-white">
                  Address
                </h6>
                <p className="w-auto text-xs leading-normal font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white lg:w-60">
                  3680 Schamberger Pass, North Catalina 01984-8381
                </p>
              </div>
            </div>
            <div className="group flex h-fit items-center gap-4 rounded-2xl bg-indigo-100 p-6 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-medium text-black transition-all duration-700 ease-in-out group-hover:text-white">
                  Contact
                </h6>
                <p className="w-auto text-xs leading-normal font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white lg:w-60">
                  Talk to us and see how we can work 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group flex h-fit items-center gap-4 rounded-2xl bg-indigo-100 p-6 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-medium text-black transition-all duration-700 ease-in-out group-hover:text-white">
                  Email
                </h6>
                <p className="w-auto text-xs leading-normal font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white lg:w-60">
                  We're usually replaying within 24 hours pagedone1234@gmail.com
                </p>
              </div>
            </div>
            <div className="group flex h-fit items-center gap-4 rounded-2xl bg-indigo-100 p-6 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-medium text-black transition-all duration-700 ease-in-out group-hover:text-white">
                  Working Hours
                </h6>
                <p className="w-auto text-xs leading-normal font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white lg:w-48">
                  Mon To Sat - 10 am To 7 pm Sunday - 11am To 5 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
