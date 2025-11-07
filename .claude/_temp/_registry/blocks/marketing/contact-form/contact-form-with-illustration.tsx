export default function ContactFormWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2">
          <div className="p-8 rounded-r-3xl border border-gray-100 bg-white">
            <div className="pb-11 flex flex-col gap-5">
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-snug">
                Contact Us
              </h2>
              <p className="text-gray-600 text-lg font-normal">
                This is your direct line to reach out to us with any questions,
                concerns, feedback, or inquiries you might have.
              </p>
            </div>
            <form className="flex flex-col gap-10 mb-0">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
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
                      className="w-full py-3 px-5 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                      placeholder="First Name"
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
                      className="w-full py-3 px-5 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                      placeholder="Last Name"
                    />
                  </div>
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
                    className="w-full py-3 px-5 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                    placeholder="Email"
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
                    className="w-full py-3 px-5 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <span className="px-2 text-white text-base font-semibold leading-7">
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
  );
}
