export default function CreativeContactFormDesignWithBackground() {
  return (
    <section className="block">
      <div className="grid gap-4 bg-gray-900 py-32">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-white">
          CONTACT US
        </h2>
        <p className="mx-auto max-w-2xl text-center text-base font-normal text-gray-200">
          The assurance of a prompt response, and we will get back to you as
          soon as possible, underscores attentiveness and commitment to
          addressing inquiries.
        </p>
      </div>
      <div className="mx-auto max-w-7xl -translate-y-16 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-7 shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] lg:p-11">
          <h3 className="font-manrope pb-9 text-center text-3xl leading-normal font-semibold text-gray-900">
            Send Us Message
          </h3>
          <div className="flex flex-col gap-8">
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
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Last Name"
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
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Write Message . . ."
                />
              </div>
            </div>
            <button className="rounded-xl bg-gray-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
              <span className="text-center text-base leading-7 font-semibold text-white">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
