export default function TailwindContactWithColorVarient() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-4">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Contact Us!
          </h2>
          <p className="text-center text-base font-normal text-gray-500">
            The promise to "get back to you as soon as possible" assures prompt
            attention to inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
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
            <button className="rounded-xl bg-orange-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-orange-600">
              <span className="px-2 text-base leading-7 font-semibold text-white">
                Send
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 border-b border-gray-100 pb-6">
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="flex items-center text-base font-normal text-gray-800">
                  470-601-1911
                </h6>
              </a>
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="flex items-center text-base font-normal text-gray-800">
                  Pagedone1234@gmail.com
                </h6>
              </a>
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="flex items-center text-base font-normal text-gray-800">
                  789 Oak Lane, Lakeside, TX 54321
                </h6>
              </a>
            </div>
            <div className="h-[336px] rounded-2xl lg:h-full">
              <iframe
                className="rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21471.767410203043!2d-122.34488923248774!3d47.723813389539266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901148850afde9%3A0x5558d4a85abfcf0c!2sHaller%20Lake!5e0!3m2!1sen!2sin!4v1714604154627!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
