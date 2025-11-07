export default function TailwindContactWithGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:p-11 p-8 lg:rounded-bl-3xl rounded-bl-none rounded-tl-3xl lg:rounded-tr-none rounded-tr-3xl bg-gradient-to-b from-indigo-700 to-indigo-500">
            <div className="h-full flex-col justify-between items-start flex lg:gap-0 gap-10">
              <div className="flex-col justify-start items-start lg:gap-14 gap-10 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <h2 className="text-white text-4xl font-semibold font-manrope leading-snug">
                    Contact Information
                  </h2>
                  <p className="text-indigo-100 text-base font-normal leading-relaxed">
                    This statement reflects a dedication to customer
                    satisfaction and a commitment to delivering outstanding
                    service and support.
                  </p>
                </div>
                <div className="flex-col justify-start items-start gap-8 flex">
                  <a className="justify-start items-center gap-3 inline-flex">
                    {/* SVG removed */}
                    <h5 className="text-white text-lg font-medium leading-8">
                      789 Oak Lane, Lakeside, TX 54321
                    </h5>
                  </a>
                  <a className="justify-start items-start gap-3 inline-flex">
                    {/* SVG removed */}
                    <h5 className="text-white text-lg font-medium leading-8">
                      470-601-1911
                    </h5>
                  </a>
                  <a className="justify-start items-start gap-3 inline-flex">
                    {/* SVG removed */}
                    <h5 className="text-white text-lg font-medium leading-8">
                      pagedone1234@gmail.com
                    </h5>
                  </a>
                </div>
              </div>
              <div className="justify-start items-start gap-6 inline-flex">
                <a className="p-1 hover:border-white border border-transparent rounded-lg transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
                <a className="p-1 hover:border-white border border-transparent rounded-lg transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
                <a className="p-1 hover:border-white border border-transparent rounded-lg transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
                <a className="p-1 hover:border-white border border-transparent rounded-lg transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:p-11 p-8 bg-gray-50 lg:rounded-tr-3xl rounded-tr-none rounded-br-3xl lg:rounded-bl-none rounded-bl-3xl flex flex-col gap-10">
            <div className="w-full justify-start items-start gap-1 flex">
              <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                <div className="justify-start items-center gap-1 inline-flex">
                  <span className="text-gray-600 text-base font-medium leading-7">
                    Name
                  </span>
                  {/* SVG removed */}
                </div>
                <input
                  type="text"
                  className="w-full px-5 py-3 bg-transparent rounded-lg border border-gray-200 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Name"
                />
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
                  className="w-full px-5 py-3 bg-transparent rounded-lg border border-gray-200 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div className="w-full justify-start items-end gap-5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="w-full justify-start items-center inline-flex">
                  <span className="text-gray-500 text-lg font-normal leading-5">
                    Preferred method of communication
                  </span>
                </div>
                <div className="flex flex-row gap-11 w-full">
                  <div className="flex items-center ">
                    <input
                      id="radio_1"
                      type="radio"
                      name="radio"
                      className="hidden sr-only peer"
                    />
                    <label
                      htmlFor="radio_1"
                      className="text-gray-600 text-base font-normal leading-7 w-full flex items-center cursor-pointer bg-transparent"
                    >
                      <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                      Web design
                    </label>
                  </div>
                  <div className="flex items-center ">
                    <input
                      id="radio_2"
                      type="radio"
                      name="radio"
                      className="hidden sr-only peer"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_2"
                      className="text-gray-600 text-base font-normal leading-7 w-full flex items-center cursor-pointer bg-transparent"
                    >
                      <span className="w-5 h-5 mr-2 rounded-full border bg-white border-gray-300 checked:border-indigo-600" />
                      Web Development
                    </label>
                  </div>
                </div>
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
                  className="w-full px-5 py-3 bg-transparent rounded-lg border border-gray-200 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <span className="px-2 text-white text-base font-semibold leading-7">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
