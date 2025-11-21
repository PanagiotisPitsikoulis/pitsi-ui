export default function TailwindContactWithSocialIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-manrope pb-5 text-4xl leading-snug font-semibold text-gray-900">
              Contact Us
            </h2>
            <p className="pb-6 text-lg font-normal text-gray-600">
              This is your gateway to connect with us directly. Whether you have
              inquiries, feedback, or simply want to say hello.
            </p>
            <div className="border-y border-indigo-100 py-6">
              <div className="group flex gap-4">
                <a className="rounded-lg bg-cyan-600 p-3 transition-all duration-700 ease-in-out group-hover:bg-cyan-700">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-medium text-gray-900">Address</h6>
                  <p className="text-xs font-normal text-gray-700">
                    789 Oak Lane, Lakeside, TX 54321
                  </p>
                </div>
              </div>
              <div className="group my-8 flex gap-4">
                <a className="rounded-lg bg-cyan-600 p-3 transition-all duration-700 ease-in-out group-hover:bg-cyan-700">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-medium text-gray-900">Contact</h6>
                  <p className="text-xs font-normal text-gray-700">
                    470-601-1911
                  </p>
                </div>
              </div>
              <div className="group flex gap-4">
                <a className="rounded-lg bg-cyan-600 p-3 transition-all duration-700 ease-in-out group-hover:bg-cyan-700">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-medium text-gray-900">Email</h6>
                  <p className="text-xs font-normal text-gray-700">
                    pagedone1234@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-6">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <div className="flex flex-col gap-10 rounded-3xl bg-gray-50 p-7 lg:p-11">
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
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="rounded-xl bg-cyan-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-cyan-800">
              <span className="px-2 text-base leading-7 font-semibold text-white">
                Send
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
