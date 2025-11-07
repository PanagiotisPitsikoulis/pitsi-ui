export default function CenterAlignedWithInfoCardBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="text-gray-900 text-center text-4xl font-bold font-manrope leading-snug">
            Contact Us
          </h2>
          <p className="text-gray-500 text-center text-base font-normal">
            Feel free to contact us? submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="my-14 lg:p-11 p-6 rounded-3xl border border-gray-100 bg-white flex flex-col gap-11">
          <div className="flex md:flex-row flex-col gap-8">
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
                  className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Name"
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
                  className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
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
                  className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="w-full justify-start items-start gap-1 flex">
              <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                <div className="justify-start items-center gap-1 inline-flex">
                  <span className="text-gray-600 text-base font-medium leading-7">
                    Phone Number
                  </span>
                  {/* SVG removed */}
                </div>
                <input
                  type="text"
                  className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Phone"
                />
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
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-8 resize-none"
                placeholder="Write Message . . ."
              />
            </div>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
            <span className="px-2 text-white text-center text-base font-semibold leading-7">
              Send Message
            </span>
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="w-full group rounded-2xl border border-gray-200 bg-white lg:p-6 md:p-4 p-6 flex gap-4">
            <div className="w-fit h-fit p-3 rounded-lg bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-700 ease-in-out">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-gray-900 text-sm font-medium">Address</h6>
              <p className="text-gray-500 text-xs font-normal">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>
          </div>
          <div className="w-full group rounded-2xl border border-gray-200 bg-white lg:p-6 md:p-4 p-6 flex gap-4">
            <div className="w-fit h-fit p-3 rounded-lg bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-700 ease-in-out">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-gray-900 text-sm font-medium">Contact</h6>
              <p className="text-gray-500 text-xs font-normal">470-601-1911</p>
            </div>
          </div>
          <div className="w-full group rounded-2xl border border-gray-200 bg-white lg:p-6 md:p-4 p-6 flex gap-4">
            <div className="w-fit h-fit p-3 rounded-lg bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-700 ease-in-out">
              {/* SVG removed */}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-gray-900 text-sm font-medium">Email</h6>
              <p className="text-gray-500 text-xs font-normal break-all">
                pagedone1234@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
