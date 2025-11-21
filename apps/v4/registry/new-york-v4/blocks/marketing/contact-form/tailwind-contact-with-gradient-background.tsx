export default function TailwindContactWithGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="rounded-tl-3xl rounded-tr-3xl rounded-bl-none bg-gradient-to-b from-indigo-700 to-indigo-500 p-8 lg:rounded-tr-none lg:rounded-bl-3xl lg:p-11">
            <div className="flex h-full flex-col items-start justify-between gap-10 lg:gap-0">
              <div className="flex flex-col items-start justify-start gap-10 lg:gap-14">
                <div className="flex flex-col items-start justify-start gap-5">
                  <h2 className="font-manrope text-4xl leading-snug font-semibold text-white">
                    Contact Information
                  </h2>
                  <p className="text-base leading-relaxed font-normal text-indigo-100">
                    This statement reflects a dedication to customer
                    satisfaction and a commitment to delivering outstanding
                    service and support.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-8">
                  <a className="inline-flex items-center justify-start gap-3">
                    {/* SVG removed */}
                    <h5 className="text-lg leading-8 font-medium text-white">
                      789 Oak Lane, Lakeside, TX 54321
                    </h5>
                  </a>
                  <a className="inline-flex items-start justify-start gap-3">
                    {/* SVG removed */}
                    <h5 className="text-lg leading-8 font-medium text-white">
                      470-601-1911
                    </h5>
                  </a>
                  <a className="inline-flex items-start justify-start gap-3">
                    {/* SVG removed */}
                    <h5 className="text-lg leading-8 font-medium text-white">
                      pagedone1234@gmail.com
                    </h5>
                  </a>
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-6">
                <a className="rounded-lg border border-transparent p-1 transition-all duration-700 ease-in-out hover:border-white">
                  {/* SVG removed */}
                </a>
                <a className="rounded-lg border border-transparent p-1 transition-all duration-700 ease-in-out hover:border-white">
                  {/* SVG removed */}
                </a>
                <a className="rounded-lg border border-transparent p-1 transition-all duration-700 ease-in-out hover:border-white">
                  {/* SVG removed */}
                </a>
                <a className="rounded-lg border border-transparent p-1 transition-all duration-700 ease-in-out hover:border-white">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 rounded-tr-none rounded-br-3xl rounded-bl-3xl bg-gray-50 p-8 lg:rounded-tr-3xl lg:rounded-bl-none lg:p-11">
            <div className="flex w-full items-start justify-start gap-1">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <div className="inline-flex items-center justify-start gap-1">
                  <span className="text-base leading-7 font-medium text-gray-600">
                    Name
                  </span>
                  {/* SVG removed */}
                </div>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Name"
                />
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
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div className="inline-flex w-full items-end justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex w-full items-center justify-start">
                  <span className="text-lg leading-5 font-normal text-gray-500">
                    Preferred method of communication
                  </span>
                </div>
                <div className="flex w-full flex-row gap-11">
                  <div className="flex items-center">
                    <input
                      id="radio_1"
                      type="radio"
                      name="radio"
                      className="peer sr-only hidden"
                    />
                    <label
                      htmlFor="radio_1"
                      className="flex w-full cursor-pointer items-center bg-transparent text-base leading-7 font-normal text-gray-600"
                    >
                      <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                      Web design
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio_2"
                      type="radio"
                      name="radio"
                      className="peer sr-only hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio_2"
                      className="flex w-full cursor-pointer items-center bg-transparent text-base leading-7 font-normal text-gray-600"
                    >
                      <span className="mr-2 h-5 w-5 rounded-full border border-gray-300 bg-white checked:border-indigo-600" />
                      Web Development
                    </label>
                  </div>
                </div>
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
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 text-base leading-7 font-semibold text-white">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
