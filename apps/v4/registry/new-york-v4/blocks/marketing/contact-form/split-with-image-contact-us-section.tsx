export default function SplitWithImageContactUsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-10 lg:mb-0">
            <div className="group h-full w-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="h-full w-full rounded-2xl bg-indigo-700 object-cover bg-blend-multiply lg:rounded-l-2xl"
                />
                <h1 className="font-manrope absolute top-11 left-11 text-4xl leading-10 font-bold text-white">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full p-5 lg:p-11">
                  <div className="block rounded-lg bg-white p-6">
                    <a href="javascript:;" className="mb-6 flex items-center">
                      {/* SVG removed */}
                      <h5 className="ml-5 text-base leading-6 font-normal text-black">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="javascript:;" className="mb-6 flex items-center">
                      {/* SVG removed */}
                      <h5 className="ml-5 text-base leading-6 font-normal text-black">
                        Pagedone1234@gmail.com
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      {/* SVG removed */}
                      <h5 className="ml-5 text-base leading-6 font-normal text-black">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-5 lg:rounded-r-2xl lg:p-11">
            <h2 className="font-manrope mb-11 text-4xl leading-10 font-semibold text-indigo-600">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm focus:outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm focus:outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm focus:outline-none"
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
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex cursor-pointer items-center text-base leading-6 font-normal text-gray-500"
                  >
                    <span className="mr-2 ml-2 h-4 w-4 rounded-full border border-gray-300" />{" "}
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-2"
                    type="radio"
                    name="radio-group"
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio-group-2"
                    className="flex cursor-pointer items-center text-base leading-6 font-normal text-gray-500"
                  >
                    <span className="mr-2 ml-2 h-4 w-4 rounded-full border border-gray-300" />{" "}
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="mb-10 h-12 w-full rounded-full border border-gray-200 bg-transparent pl-4 text-lg leading-7 font-normal text-gray-600 placeholder-gray-400 shadow-sm focus:outline-none"
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
