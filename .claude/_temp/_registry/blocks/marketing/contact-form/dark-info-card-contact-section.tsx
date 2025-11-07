export default function DarkInfoCardContactSection() {
  return (
    <section className="py-24 relative bg-gray-900 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full md:col-span-5 lg:col-span-5 flex flex-col gap-10">
            <div>
              <h6 className="text-base font-medium leading-7 font-inter text-blue-600">
                Contact
              </h6>
              <h2 className="font-manrope font-bold text-4xl leading-10 text-white pt-5">
                Let’s Get in Touch
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-7 font-inter pt-3">
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
          <div className="col-span-full md:col-span-7 lg:col-span-7 p-8 rounded-2xl border border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                className="py-2.5 px-4 rounded-lg shadow-sm border border-gray-700 text-base font-normal leading-6 text-gray-400 bg-gray-900 outline-none focus:border-gray-500 transition-all duration-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="py-2.5 px-4 rounded-lg shadow-sm border border-gray-700 text-base font-normal leading-6 text-gray-400 bg-gray-900 outline-none focus:border-gray-500 transition-all duration-500"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="py-2.5 px-4 rounded-lg shadow-sm border border-gray-700 text-base font-normal leading-6 text-gray-400 bg-gray-900 outline-none focus:border-gray-500 transition-all duration-500"
                placeholder="Email"
              />
              <input
                type="text"
                className="py-2.5 px-4 rounded-lg shadow-sm border border-gray-700 text-base font-normal leading-6 text-gray-400 bg-gray-900 outline-none focus:border-gray-500 transition-all duration-500"
                placeholder="Phone Number"
              />
              <textarea
                name=""
                id=""
                className="col-span-full h-44 resize-none py-2.5 px-4 rounded-lg shadow-sm border border-gray-700 text-base font-normal leading-6 text-gray-400 bg-gray-900 outline-none focus:border-gray-500 transition-all duration-500"
                placeholder="Message"
              />
            </div>
            <div className="pt-12">
              <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-white font-inter text-base font-semibold leading-7 transition-all duration-500 hover:bg-blue-700">
                Send Your Message
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-700 rounded-xl gap-8 p-8 mt-8">
          <div className="flex flex-col gap-3">
            {/* SVG removed */}
            <a className="text-lg font-inter font-medium leading-7 text-gray-400">
              +00 00000 00000
            </a>
          </div>
          <div className="sm:border-l sm:border-gray-700 sm:pl-8 flex flex-col gap-3">
            {/* SVG removed */}
            <a className="text-lg font-inter font-medium leading-7 text-gray-400">
              mail@pagedone.io
            </a>
          </div>
          <div className="lg:border-l lg:border-gray-700 lg:pl-8 flex flex-col gap-3">
            {/* SVG removed */}
            <a className="text-lg font-inter font-medium leading-7 text-gray-400">
              Alpha Plus, Rajkot
            </a>
          </div>
          <div className="sm:border-l sm:border-gray-700 sm:pl-8 flex flex-col gap-3">
            {/* SVG removed */}
            <a className="text-lg font-inter font-medium leading-7 text-gray-400">
              Mon - Fri : 9AM to 6PM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
