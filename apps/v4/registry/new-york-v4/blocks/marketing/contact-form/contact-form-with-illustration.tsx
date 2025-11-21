export default function ContactFormWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-r-3xl border border-gray-100 bg-white p-8">
            <div className="flex flex-col gap-5 pb-11">
              <h2 className="font-manrope text-4xl leading-snug font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="text-lg font-normal text-gray-600">
                This is your direct line to reach out to us with any questions,
                concerns, feedback, or inquiries you might have.
              </p>
            </div>
            <form className="mb-0 flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                      className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
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
                    className="w-full rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 text-base leading-7 font-semibold text-white">
                  Submit
                </span>
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1714650730.png"
              alt="Contact Us image"
              className="mx-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
