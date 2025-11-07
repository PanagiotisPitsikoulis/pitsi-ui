export default function TailwindCssContactFormWithMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-8">
            <div className="grid gap-5">
              <span className="text-indigo-600 text-base font-medium">
                Contact Us
              </span>
              <h2 className="text-indigo-600 text-4xl font-semibold font-manrope leading-snug">
                Send Us A Message
              </h2>
              <p className="text-gray-500 text-lg font-normal">
                We are deeply committed to delivering unparalleled service and
                unwavering support to ensure your experience.
              </p>
            </div>
            <div className="lg:h-full h-[400px] rounded-3xl">
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
          <div className="lg:p-11 p-8 rounded-3xl bg-gray-50 gap-10 flex flex-col">
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none bg-transparent border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none bg-transparent border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none bg-transparent border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                  className="w-full px-5 py-3 rounded-lg focus:outline-none bg-transparent border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <span className="px-2 text-white text-base font-semibold leading-7">
                Send
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
