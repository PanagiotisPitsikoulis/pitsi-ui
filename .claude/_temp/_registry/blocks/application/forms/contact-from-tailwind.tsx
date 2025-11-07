export default function ContactFromTailwind() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-4 inline-flex md:mb-14 mb-8">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Get In Touch
          </h2>
          <p className="max-w-3xl text-center text-gray-500 text-base font-normal leading-relaxed">
            Welcome to our Contact Us page, your gateway to connecting with us!
            Whether you have a question, feedback, or simply want to say hello,
            we're here to listen.
          </p>
        </div>
        <div className="w-full md:p-11 p-7 bg-gray-50 rounded-2xl flex-col justify-start items-center inline-flex">
          <div className="w-full flex-col justify-start items-center gap-8 flex">
            <div className="w-full justify-center items-start md:gap-8 sm:gap-5 gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-full justify-center items-start md:gap-8 sm:gap-5 gap-8 flex sm:flex-row flex-col">
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
                rows={5}
                className="w-full resize-none focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                placeholder=""
              />
            </div>
            <div className="w-full justify-center items-start md:gap-8 sm:gap-5 gap-8 flex sm:flex-row flex-col">
              <button className="group w-full px-6 py-3 rounded-xl shadow border hover:border-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out border-indigo-600 justify-center items-center flex">
                <span className="px-2 py-px text-center group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-lg font-semibold leading-7">
                  Cancel
                </span>
              </button>
              <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 text-center text-white text-lg font-semibold leading-8">
                  Send Message
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
