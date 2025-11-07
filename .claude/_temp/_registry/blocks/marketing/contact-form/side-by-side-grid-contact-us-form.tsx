export default function SideBySideGridContactUsForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-black text-center font-manrope text-4xl font-bold leading-10 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center text-base font-normal leading-6 mb-14">
          Feel free to contact us? submit your queries here and we will listen
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-8 gap-0">
          <div className="md:mb-0 mb-5 flex flex-col justify-between">
            <div className="bg-indigo-600 rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4">
                  {/* SVG removed */}
                </div>
                <h4 className="text-white text-base font-medium leading-6">
                  Call Us Directly At
                </h4>
              </div>
              <h3 className="text-white font-manrope 2xl:text-3xl lg:text-2xl text-xl font-bold leading-10 mb-12">
                470 - 601 - 1911
              </h3>
              <button className="w-full h-11 text-white text-center text-sm font-semibold leading-5 rounded-full bg-indigo-500 transition-all duration-700 hover:bg-indigo-700 ">
                Contact Us
              </button>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4">
                  {/* SVG removed */}
                </div>
                <h4 className="text-black text-base font-medium leading-6">
                  Chat With Our Team
                </h4>
              </div>
              <h3 className="text-black font-manrope 2xl:text-3xl lg:text-2xl text-xl md:break-words break-normal font-bold leading-10 mb-12">
                email@pagedone.com
              </h3>
              <button className="w-full h-11 text-black text-center text-sm font-semibold leading-5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-all duration-700 hover:bg-gray-400 ">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-span-2 md:p-8 p-5 border border-gray-100 rounded-2xl">
            <form className="mb-0">
              <div className="flex items-center relative mb-8">
                {/* SVG removed */}
                <input
                  type="text"
                  className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                  placeholder="Name"
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div className="flex items-center relative">
                  {/* SVG removed */}
                  <input
                    type="text"
                    className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center relative">
                  {/* SVG removed */}
                  <input
                    type="text"
                    className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <textarea
                name=""
                className="w-full h-48 resize-none text-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none shadow-sm pl-4 py-2 mb-8"
                placeholder="Message Here..."
              />
              <button
                type="submit"
                className="w-full h-12 text-white text-center text-base font-semibold leading-6 bg-gray-900 rounded-full shadow transition-all duration-200 hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
