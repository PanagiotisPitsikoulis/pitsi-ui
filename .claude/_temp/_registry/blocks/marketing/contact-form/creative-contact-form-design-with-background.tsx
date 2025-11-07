export default function CreativeContactFormDesignWithBackground() {
  return (
    <section className="block">
      <div className="grid gap-4 py-32 bg-gray-900">
        <h2 className="text-white text-center text-4xl font-manrope font-bold leading-snug">
          CONTACT US
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 text-center text-base font-normal">
          The assurance of a prompt response, and we will get back to you as
          soon as possible, underscores attentiveness and commitment to
          addressing inquiries.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -translate-y-16">
        <div className="lg:p-11 p-7 rounded-3xl bg-white shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)]">
          <h3 className="text-gray-900 text-center text-3xl font-semibold font-manrope leading-normal pb-9">
            Send Us Message
          </h3>
          <div className="flex flex-col gap-8">
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
                    className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
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
                    className="w-full px-5 py-3 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                    placeholder="Last Name"
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
                  className="w-full py-2.5 px-4 rounded-lg focus:outline-none border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-8 resize-none"
                  placeholder="Write Message . . ."
                />
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <span className="text-white text-center text-base font-semibold leading-7">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
