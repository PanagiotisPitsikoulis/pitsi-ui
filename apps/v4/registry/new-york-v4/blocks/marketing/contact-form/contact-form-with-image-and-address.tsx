export default function ContactFormWithImageAndAddress() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1714472788.png"
              alt="Contact Us image"
              className="mx-auto h-full w-[450px] rounded-3xl object-cover sm:w-[510px] md:w-[592px] lg:w-full"
            />
          </div>
          <div className="mx-auto mt-5 w-[450px] p-1 sm:w-[510px] md:w-[592px] lg:mt-0 lg:w-full lg:p-11">
            <div className="mb-11 grid gap-5">
              <h2 className="font-manrope text-4xl leading-normal font-semibold text-gray-900">
                Send us a message
              </h2>
              <p className="text-lg font-normal text-gray-600">
                Your satisfaction is our top priority, and we are committed to
                providing exceptional service and support
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex w-full items-start justify-start gap-1">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-base leading-7 font-medium text-gray-600">
                      Your Name
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex w-full items-start justify-start gap-1">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-1">
                    <span className="text-base leading-7 font-medium text-gray-600">
                      Phone Number
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Phone"
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
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="text-base leading-7 font-semibold text-white">
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[450px] sm:w-[510px] md:w-[592px] lg:w-full">
          <ul className="grid grid-cols-1 gap-8 rounded-3xl border border-gray-200 bg-white p-6 md:grid-cols-2 lg:grid-cols-4">
            <li className="group flex flex-col gap-5">
              <a className="mx-auto w-fit rounded-lg bg-orange-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-orange-100">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-2">
                <h5 className="text-center text-lg font-medium text-black">
                  Address
                </h5>
                <p className="text-center text-sm font-normal text-gray-500">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </li>
            <li className="group flex flex-col gap-5">
              <div className="mx-auto w-fit rounded-lg bg-cyan-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-cyan-100">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-center text-lg font-medium text-black">
                  Contact
                </h5>
                <p className="text-center text-sm font-normal text-gray-500">
                  1800-2541-2541, 1800-14-0147
                </p>
              </div>
            </li>
            <li className="group flex flex-col gap-5">
              <div className="mx-auto w-fit rounded-lg bg-green-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-green-100">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-center text-lg font-medium text-black">
                  Email
                </h5>
                <p className="text-center text-sm font-normal text-gray-500">
                  pagedone1234@gmail.com
                </p>
              </div>
            </li>
            <li className="group flex flex-col gap-5">
              <div className="mx-auto w-fit rounded-lg bg-pink-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-pink-100">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-center text-lg font-medium text-black">
                  Google Map
                </h5>
                <p className="text-center text-sm font-normal text-gray-500">
                  Discover our prime location{" "}
                  <a className="text-indigo-600"> View More </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
