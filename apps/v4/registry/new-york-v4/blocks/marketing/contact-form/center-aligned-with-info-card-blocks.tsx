export default function CenterAlignedWithInfoCardBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-center text-base font-normal text-gray-500">
            Feel free to contact us? submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="my-14 flex flex-col gap-11 rounded-3xl border border-gray-100 bg-white p-6 lg:p-11">
          <div className="flex flex-col gap-8 md:flex-row">
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
                  className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Name"
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
                  className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
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
          </div>
          <div className="flex w-full items-start justify-start gap-1">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <div className="inline-flex items-center justify-start gap-1">
                <span className="text-base leading-7 font-medium text-gray-600">
                  Description
                </span>
                {/* SVG removed */}
              </div>
              <textarea
                rows={4}
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-2.5 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Write Message . . ."
              />
            </div>
          </div>
          <button className="rounded-xl bg-yellow-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-yellow-600">
            <span className="px-2 text-center text-base leading-7 font-semibold text-white">
              Send Message
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group flex w-full gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:p-4 lg:p-6">
            <div className="h-fit w-fit rounded-lg bg-yellow-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-yellow-100">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-sm font-medium text-gray-900">Address</h6>
              <p className="text-xs font-normal text-gray-500">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>
          </div>
          <div className="group flex w-full gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:p-4 lg:p-6">
            <div className="h-fit w-fit rounded-lg bg-yellow-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-yellow-100">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-sm font-medium text-gray-900">Contact</h6>
              <p className="text-xs font-normal text-gray-500">470-601-1911</p>
            </div>
          </div>
          <div className="group flex w-full gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:p-4 lg:p-6">
            <div className="h-fit w-fit rounded-lg bg-yellow-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-yellow-100">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-sm font-medium text-gray-900">Email</h6>
              <p className="text-xs font-normal break-all text-gray-500">
                pagedone1234@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
