export default function TailwindContactWithSocialIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h2 className="text-gray-900 text-4xl font-semibold font-manrope leading-snug pb-5">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg font-normal pb-6">
              This is your gateway to connect with us directly. Whether you have
              inquiries, feedback, or simply want to say hello.
            </p>
            <div className="py-6 border-y border-indigo-100">
              <div className="group flex gap-4">
                <a className="rounded-lg bg-cyan-600 group-hover:bg-cyan-700 transition-all duration-700 ease-in-out p-3">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-gray-900 text-sm font-medium">Address</h6>
                  <p className="text-gray-700 text-xs font-normal">
                    789 Oak Lane, Lakeside, TX 54321
                  </p>
                </div>
              </div>
              <div className="group flex gap-4 my-8">
                <a className="rounded-lg bg-cyan-600 group-hover:bg-cyan-700 transition-all duration-700 ease-in-out p-3">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-gray-900 text-sm font-medium">Contact</h6>
                  <p className="text-gray-700 text-xs font-normal">
                    470-601-1911
                  </p>
                </div>
              </div>
              <div className="group flex gap-4">
                <a className="rounded-lg bg-cyan-600 group-hover:bg-cyan-700 transition-all duration-700 ease-in-out p-3">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-2">
                  <h6 className="text-gray-900 text-sm font-medium">Email</h6>
                  <p className="text-gray-700 text-xs font-normal">
                    pagedone1234@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <div className="lg:p-11 p-7 rounded-3xl bg-gray-50 gap-10 flex flex-col">
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
            <button className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
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
