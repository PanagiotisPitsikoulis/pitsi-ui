export default function ContactFormWithInfoAndMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-indigo-600">
          Connect with Us
        </h2>
        <p className="font-inter pt-4 text-center text-base leading-7 font-normal text-gray-500">
          Looking to get in touch? Connect with us through your preferred
          method—phone, email, or our online form.
        </p>
        <div className="grid grid-cols-1 items-center gap-8 pt-14 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Your Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-600 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Name"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Email
                {/* SVG removed */}
              </label>
              <input
                type="email"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-600 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Email"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Phone Number
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-600 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Phone"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Description
                {/* SVG removed */}
              </label>
              <textarea
                name=""
                id=""
                rows={4}
                className="resize-none rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-600 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Message"
              />
            </div>
            <button className="h-12 w-full rounded-xl bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Send
            </button>
          </div>
          <div className="flex h-full flex-col gap-8">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                className="w-full"
                src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
                height={320}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
                <h5 className="font-inter text-xl leading-8 font-semibold text-indigo-600">
                  Address
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg leading-7 font-normal text-gray-900">
                  3680 Schamberger Pass
                </a>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
                <h5 className="font-inter text-xl leading-8 font-semibold text-indigo-600">
                  Email Address
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg leading-7 font-normal text-gray-900">
                  Pagedone1234@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
                <h5 className="font-inter text-xl leading-8 font-semibold text-indigo-600">
                  Contact
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg leading-7 font-normal text-gray-900">
                  470-601-1911
                </a>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
                <h5 className="font-inter text-xl leading-8 font-semibold text-indigo-600">
                  Time
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg leading-7 font-normal text-gray-900">
                  Mon To Sat-10 am To 07pm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
