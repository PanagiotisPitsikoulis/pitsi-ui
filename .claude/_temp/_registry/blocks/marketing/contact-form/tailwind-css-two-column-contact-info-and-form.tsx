export default function TailwindCssTwoColumnContactInfoAndForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-manrope font-semibold text-4xl leading-10 text-indigo-600">
                Contact Information
              </h2>
              <p className="pt-4 text-base font-normal leading-6 text-gray-700">
                We’re here to assist you with any questions, concerns, or
                feedback. Whether you need support, more information.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                    Address
                  </h5>
                  <p className="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                    3680 Schamberger Pass, North Catalina 01984-8381
                  </p>
                </div>
              </div>
              <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                    Contact
                  </h5>
                  <p className="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                    Talk to us and see how we can work 1800-14-0147
                  </p>
                </div>
              </div>
              <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                    Email
                  </h5>
                  <p className="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                    We're usually replaying within 24 hours
                    pagedone1234@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="rounded-full w-8 h-8 bg-sky-50 flex items-center justify-center">
                <a href="#"></a>
              </div>
              <div className="rounded-full w-8 h-8 bg-purple-50 flex items-center justify-center">
                <a href="#"></a>
              </div>
              <div className="rounded-full w-8 h-8 bg-sky-50 flex items-center justify-center">
                <a href="#"></a>
              </div>
              <div className="rounded-full w-8 h-8 bg-rose-50 flex items-center justify-center">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-0 lg:px-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 outline-none pl-4 mb-10 focus:border-gray-300 transition-all duration-500"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 outline-none pl-4 mb-10 focus:border-gray-300 transition-all duration-500"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 outline-none pl-4 mb-10 focus:border-gray-300 transition-all duration-500"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center mr-11">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="border border-gray-300 rounded-full w-4 h-4 mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="border border-gray-300 rounded-full w-4 h-4 mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 outline-none pl-4 mb-10 focus:border-gray-300 transition-all duration-500"
              placeholder="Message"
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
