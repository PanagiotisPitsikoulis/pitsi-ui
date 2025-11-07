export default function ContactFormWithCompanyInformation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="text-gray-900 text-center text-4xl font-manrope font-bold leading-snug">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-center text-base font-normal">
            Feel free to contact us? submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="my-14 grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="group py-11 px-6 flex flex-col gap-5 rounded-xl bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center font-manrope text-2xl font-semibold">
                  Address
                </h5>
                <p className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center text-lg font-medium">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </a>
          </div>
          <div className="group py-11 px-6 flex flex-col gap-5 rounded-xl bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center font-manrope text-2xl font-semibold">
                  Contact
                </h5>
                <p className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center text-lg font-medium">
                  470-601-1911
                </p>
              </div>
            </a>
          </div>
          <div className="group py-11 px-6 flex flex-col gap-5 rounded-xl bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out">
            <a className="flex flex-col gap-5">
              {/* SVG removed */}
              <div className="flex flex-col gap-2">
                <h5 className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center font-manrope text-2xl font-semibold">
                  Email
                </h5>
                <p className="text-indigo-600 group-hover:text-white transition-all duration-700 ease-in-out text-center text-lg font-medium break-all">
                  pagedone1234@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="md:h-full h-[400px] rounded-2xl">
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
