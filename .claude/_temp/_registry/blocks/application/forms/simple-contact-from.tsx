export default function SimpleContactFrom() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full lg:p-11 md:p-9 p-7 bg-white rounded-2xl flex-col justify-start items-center lg:gap-14 gap-9 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Contact Form
            </h2>
            <p className="max-w-2xl text-center text-gray-500 text-base font-normal leading-relaxed">
              Contact forms serve as a convenient and secure way for users to
              reach out to website owners without having.
            </p>
          </div>
          <div className="md:max-w-md w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="w-full focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
              >
                Message
              </label>
              <textarea
                name=""
                rows={4}
                className="w-full resize-none focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder="Message"
              />
            </div>
            <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 text-center text-white text-lg font-semibold leading-8">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
