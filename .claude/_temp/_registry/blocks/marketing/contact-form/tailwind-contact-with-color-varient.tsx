export default function TailwindContactWithColorVarient() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 mb-14">
          <h2 className="text-gray-900 text-center text-4xl font-manrope font-bold leading-snug">
            Contact Us!
          </h2>
          <p className="text-gray-500 text-center text-base font-normal">
            The promise to "get back to you as soon as possible" assures prompt
            attention to inquiries.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-8">
            <div className="w-full justify-start items-start gap-1 flex">
              <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                <div className="justify-start items-center gap-1 inline-flex">
                  <span className="text-gray-600 text-base font-medium leading-7">
                    Your Name
                  </span>
                  {/* SVG removed */}
                </div>
                <input
                  type="text"
                  className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Phone"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <span className="px-2 text-white text-base font-semibold leading-7">
                Send
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 border-b border-gray-100 pb-6">
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="text-gray-800 text-base font-normal flex items-center">
                  470-601-1911
                </h6>
              </a>
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="text-gray-800 text-base font-normal flex items-center">
                  Pagedone1234@gmail.com
                </h6>
              </a>
              <a className="flex gap-5">
                {/* SVG removed */}
                <h6 className="text-gray-800 text-base font-normal flex items-center">
                  789 Oak Lane, Lakeside, TX 54321
                </h6>
              </a>
            </div>
            <div className="lg:h-full h-[336px] rounded-2xl">
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
  );
}
