export default function ContactFormWithInfoAndMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-indigo-600 text-4xl font-bold leading-10 font-manrope text-center">
          Connect with Us
        </h2>
        <p className="font-inter text-gray-500 text-base font-normal leading-7 pt-4 text-center">
          Looking to get in touch? Connect with us through your preferred
          method—phone, email, or our online form.
        </p>
        <div className="pt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-10 ">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Your Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-600 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Name"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Email
                {/* SVG removed */}
              </label>
              <input
                type="email"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-600 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Email"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Phone Number
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-600 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Phone"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Description
                {/* SVG removed */}
              </label>
              <textarea
                name=""
                id=""
                rows={4}
                className="resize-none py-3 px-5 border rounded-lg border-gray-200 text-gray-600 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Message"
              />
            </div>
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-xl transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Send
            </button>
          </div>
          <div className="h-full flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                className="w-full"
                src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
                height={320}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="p-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
                <h5 className="font-inter text-xl font-semibold leading-8 text-indigo-600">
                  Address
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg font-normal leading-7 text-gray-900">
                  3680 Schamberger Pass
                </a>
              </div>
              <div className="p-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
                <h5 className="font-inter text-xl font-semibold leading-8 text-indigo-600">
                  Email Address
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg font-normal leading-7 text-gray-900">
                  Pagedone1234@gmail.com
                </a>
              </div>
              <div className="p-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
                <h5 className="font-inter text-xl font-semibold leading-8 text-indigo-600">
                  Contact
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg font-normal leading-7 text-gray-900">
                  470-601-1911
                </a>
              </div>
              <div className="p-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
                <h5 className="font-inter text-xl font-semibold leading-8 text-indigo-600">
                  Time
                </h5>
                {/* SVG removed */}
                <a className="font-inter text-lg font-normal leading-7 text-gray-900">
                  Mon To Sat-10 am To 07pm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
