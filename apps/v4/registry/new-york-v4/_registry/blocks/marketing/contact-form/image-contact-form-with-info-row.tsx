export default function ImageContactFormWithInfoRow() {
  return (
    <section className="relative w-full bg-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full flex flex-col gap-10 md:col-span-5 lg:col-span-5">
            <div>
              <h6 className="font-inter text-base leading-7 font-medium text-blue-600">
                Contact
              </h6>
              <h2 className="font-manrope pt-5 text-4xl leading-10 font-bold text-white">
                Let’s Get in Touch
              </h2>
              <p className="font-inter pt-3 text-lg leading-7 font-normal text-gray-500">
                our dedicated team is ready to support you.
              </p>
            </div>
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1759223307.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-span-full rounded-2xl border border-gray-700 p-8 md:col-span-7 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <input
                type="text"
                className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-base leading-6 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-base leading-6 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-500"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-base leading-6 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-500"
                placeholder="Email"
              />
              <input
                type="text"
                className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-base leading-6 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-500"
                placeholder="Phone Number"
              />
              <textarea
                name=""
                id=""
                className="col-span-full h-44 resize-none rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-base leading-6 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-500"
                placeholder="Message"
              />
            </div>
            <div className="pt-12">
              <button className="font-inter rounded-xl bg-blue-600 px-5 py-2.5 text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-blue-700">
                Send Your Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 rounded-xl border border-gray-700 p-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            {/* SVG removed */}
            <a className="font-inter text-lg leading-7 font-medium text-gray-400">
              +00 00000 00000
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:border-l sm:border-gray-700 sm:pl-8">
            {/* SVG removed */}
            <a className="font-inter text-lg leading-7 font-medium text-gray-400">
              mail@pagedone.io
            </a>
          </div>
          <div className="flex flex-col gap-3 lg:border-l lg:border-gray-700 lg:pl-8">
            {/* SVG removed */}
            <a className="font-inter text-lg leading-7 font-medium text-gray-400">
              Alpha Plus, Rajkot
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:border-l sm:border-gray-700 sm:pl-8">
            {/* SVG removed */}
            <a className="font-inter text-lg leading-7 font-medium text-gray-400">
              Mon - Fri : 9AM to 6PM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
