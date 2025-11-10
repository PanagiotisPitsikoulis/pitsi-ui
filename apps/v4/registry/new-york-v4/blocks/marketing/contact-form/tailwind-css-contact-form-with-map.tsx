export default function TailwindCssContactFormWithMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="grid gap-5">
              <span className="text-base font-medium text-indigo-600">
                Contact Us
              </span>
              <h2 className="font-manrope text-4xl leading-snug font-semibold text-indigo-600">
                Send Us A Message
              </h2>
              <p className="text-lg font-normal text-gray-500">
                We are deeply committed to delivering unparalleled service and
                unwavering support to ensure your experience.
              </p>
            </div>
            <div className="h-[400px] rounded-3xl lg:h-full">
              <iframe
                className="rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.549591809164!2d70.80461154753597!3d22.305444828364244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9f81ab2b1af%3A0x498025747ee75779!2sCivil%20Hospital!5e0!3m2!1sen!2sin!4v1714605316730!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 rounded-3xl bg-gray-50 p-8 lg:p-11">
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
