export default function InfoCardBlocksContactUsForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-4 text-center text-4xl leading-10 font-bold text-black">
          Contact Us
        </h2>
        <p className="mb-14 text-center text-base leading-6 font-normal text-gray-500">
          Feel free to contact us? submit your queries here and we will listen
        </p>
        <div className="grid grid-cols-1 gap-0 md:gap-8 lg:grid-cols-3">
          <div className="mb-5 flex flex-col justify-between md:mb-0">
            <div className="mb-8 rounded-2xl bg-indigo-600 p-6">
              <div className="mb-3 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  {/* SVG removed */}
                </div>
                <h4 className="text-base leading-6 font-medium text-white">
                  Call Us Directly At
                </h4>
              </div>
              <h3 className="font-manrope mb-12 text-xl leading-10 font-bold text-white lg:text-2xl 2xl:text-3xl">
                470 - 601 - 1911
              </h3>
              <button className="h-11 w-full rounded-full bg-indigo-500 text-center text-sm leading-5 font-semibold text-white transition-all duration-700 hover:bg-indigo-700">
                Contact Us
              </button>
            </div>
            <div className="rounded-2xl bg-gray-100 p-6">
              <div className="mb-3 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  {/* SVG removed */}
                </div>
                <h4 className="text-base leading-6 font-medium text-black">
                  Chat With Our Team
                </h4>
              </div>
              <h3 className="font-manrope mb-12 text-xl leading-10 font-bold break-normal text-black md:break-words lg:text-2xl 2xl:text-3xl">
                email@pagedone.com
              </h3>
              <button className="h-11 w-full rounded-full bg-gray-300 text-center text-sm leading-5 font-semibold text-black transition-all duration-700 group-hover:bg-indigo-500 hover:bg-gray-400">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-span-2 rounded-2xl border border-gray-100 p-5 md:p-8">
            <form className="mb-0">
              <div className="relative mb-8 flex items-center">
                {/* SVG removed */}
                <input
                  type="text"
                  className="h-12 w-full rounded-full border border-gray-200 pl-12 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
                  placeholder="Name"
                />
              </div>
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative flex items-center">
                  {/* SVG removed */}
                  <input
                    type="text"
                    className="h-12 w-full rounded-full border border-gray-200 pl-12 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <div className="relative flex items-center">
                  {/* SVG removed */}
                  <input
                    type="text"
                    className="h-12 w-full rounded-full border border-gray-200 pl-12 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <textarea
                name=""
                className="mb-8 h-48 w-full resize-none rounded-2xl border border-gray-200 py-2 pl-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
                placeholder="Message Here..."
              />
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-gray-900 text-center text-base leading-6 font-semibold text-white shadow transition-all duration-200 hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
