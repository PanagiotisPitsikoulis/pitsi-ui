export default function TailwindCssTwoColumnContactInfoAndForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-manrope text-4xl leading-10 font-semibold text-indigo-600">
                Contact Information
              </h2>
              <p className="pt-4 text-base leading-6 font-normal text-gray-700">
                We’re here to assist you with any questions, concerns, or
                feedback. Whether you need support, more information.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                    Address
                  </h5>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                    3680 Schamberger Pass, North Catalina 01984-8381
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                    Contact
                  </h5>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                    Talk to us and see how we can work 1800-14-0147
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
                {/* SVG removed */}
                <div className="font-inter">
                  <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                    Email
                  </h5>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                    We're usually replaying within 24 hours
                    pagedone1234@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50">
                <a href="#"></a>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50">
                <a href="#"></a>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50">
                <a href="#"></a>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 px-0 lg:rounded-r-2xl lg:px-11">
            <h2 className="font-manrope mb-11 text-4xl leading-10 font-semibold text-indigo-600">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-300"
              placeholder="Name"
            />
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-300"
              placeholder="Email"
            />
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-300"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="mb-4 text-lg leading-7 font-normal text-gray-500">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="mr-11 flex items-center">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="mr-2 h-4 w-4 rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex cursor-pointer items-center text-base leading-6 font-normal text-gray-500"
                  >
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="mr-2 h-4 w-4 rounded-full border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex cursor-pointer items-center text-base leading-6 font-normal text-gray-500"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-300"
              placeholder="Message"
            />
            <button className="h-12 w-full rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
