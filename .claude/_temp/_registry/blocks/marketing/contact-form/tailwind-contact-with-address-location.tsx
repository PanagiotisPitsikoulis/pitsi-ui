export default function TailwindContactWithAddressLocation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-7 col-span-12 p-8 rounded-r-3xl bg-gray-50">
            <div className="grid gap-5 mb-11">
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-snug">
                Contact Us
              </h2>
              <p className="text-gray-600 text-lg font-normal">
                We are deeply committed to delivering unparalleled service and
                unwavering support to ensure your experience exceeds
                expectations.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex md:flex-row flex-col gap-6">
                <div className="w-full justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-base font-medium leading-7">
                        First Name
                      </span>
                      {/* SVG removed */}
                    </div>
                    <input
                      type="text"
                      className="w-full py-3 px-5 rounded-lg border border-gray-200 bg-transparent focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-1 flex">
                  <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-600 text-base font-medium leading-7">
                        Last Name
                      </span>
                      {/* SVG removed */}
                    </div>
                    <input
                      type="text"
                      className="w-full py-3 px-5 rounded-lg border border-gray-200 bg-transparent focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Email
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full py-3 px-5 rounded-lg border border-gray-200 bg-transparent focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Description
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full py-3 px-5 rounded-lg border border-gray-200 bg-transparent focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <span className="px-2 text-white text-base font-semibold leading-7">
                  Submit
                </span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 h-fit gap-8 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1">
            <div className="group p-6 h-fit bg-indigo-100 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-2xl flex gap-4 items-center">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-sm font-medium">
                  Address
                </h6>
                <p className="lg:w-60 w-auto text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                  3680 Schamberger Pass, North Catalina 01984-8381
                </p>
              </div>
            </div>
            <div className="group p-6 h-fit bg-indigo-100 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-2xl flex gap-4 items-center">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-sm font-medium">
                  Contact
                </h6>
                <p className="lg:w-60 w-auto text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                  Talk to us and see how we can work 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group p-6 h-fit bg-indigo-100 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-2xl flex gap-4 items-center">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-sm font-medium">
                  Email
                </h6>
                <p className="lg:w-60 w-auto text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                  We're usually replaying within 24 hours pagedone1234@gmail.com
                </p>
              </div>
            </div>
            <div className="group p-6 h-fit bg-indigo-100 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-2xl flex gap-4 items-center">
              <div className="flex items-center justify-center p-4">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-black group-hover:text-white transition-all duration-700 ease-in-out text-sm font-medium">
                  Working Hours
                </h6>
                <p className="lg:w-48 w-auto text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                  Mon To Sat - 10 am To 7 pm Sunday - 11am To 5 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
