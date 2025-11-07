export default function SimpleContactFrom() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-9 rounded-2xl bg-white p-7 md:p-9 lg:gap-14 lg:p-11">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Contact Form
            </h2>
            <p className="max-w-2xl text-center text-base leading-relaxed font-normal text-gray-500">
              Contact forms serve as a convenient and secure way for users to
              reach out to website owners without having.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8 md:max-w-md">
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Name"
              />
            </div>
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
            <div className="flex w-full flex-col items-start justify-start gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                name=""
                rows={4}
                className="inline-flex w-full resize-none items-center justify-start gap-2 rounded-lg border border-gray-200 bg-transparent px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Message"
              />
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
