export default function ContactFromTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-8 inline-flex w-full flex-col items-center justify-start gap-4 md:mb-14">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="max-w-3xl text-center text-base leading-relaxed font-normal text-gray-500">
            Welcome to our Contact Us page, your gateway to connecting with us!
            Whether you have a question, feedback, or simply want to say hello,
            we're here to listen.
          </p>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start rounded-2xl bg-gray-50 p-7 md:p-11">
          <div className="flex w-full flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-center gap-8 sm:flex-row sm:gap-5 md:gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-8 sm:flex-row sm:gap-5 md:gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                name=""
                rows={5}
                className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-8 sm:flex-row sm:gap-5 md:gap-8">
              <button className="group flex w-full items-center justify-center rounded-xl border border-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600">
                <span className="px-2 py-px text-center text-lg leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Cancel
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
                  Send Message
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
