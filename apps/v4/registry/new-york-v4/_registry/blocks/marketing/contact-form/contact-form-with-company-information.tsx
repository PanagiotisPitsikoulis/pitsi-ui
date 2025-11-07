export default function ContactFormWithCompanyInformation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-center text-base font-normal text-gray-500">
            Feel free to contact us? submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="my-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group flex flex-col gap-5 rounded-xl bg-indigo-50 px-6 py-11 transition-all duration-700 ease-in-out hover:bg-indigo-600">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-center text-2xl font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Address
                </h5>
                <p className="text-center text-lg font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </a>
          </div>
          <div className="group flex flex-col gap-5 rounded-xl bg-indigo-50 px-6 py-11 transition-all duration-700 ease-in-out hover:bg-indigo-600">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-center text-2xl font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Contact
                </h5>
                <p className="text-center text-lg font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  470-601-1911
                </p>
              </div>
            </a>
          </div>
          <div className="group flex flex-col gap-5 rounded-xl bg-indigo-50 px-6 py-11 transition-all duration-700 ease-in-out hover:bg-indigo-600">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-center text-2xl font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Email
                </h5>
                <p className="text-center text-lg font-medium break-all text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  pagedone1234@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="h-[400px] rounded-2xl md:h-full">
            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30351.83749201609!2d-122.22553133624363!3d47.74752916602641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e0c36c27745%3A0x720a91823b6de89b!2sBlyth%20Park!5e0!3m2!1sen!2sin!4v1714604987922!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
            <button className="rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
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
