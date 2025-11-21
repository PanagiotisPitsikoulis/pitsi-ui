export default function TailwindContactSectionWithSplitFormInfoCardsAndMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-indigo-600">
          Contact Us
        </h2>
        <p className="font-inter mx-auto max-w-5xl pt-4 text-center text-base leading-7 font-normal text-gray-500">
          Need to get in touch? Contact us via phone, email, or our online form,
          and we’ll respond to your inquiries promptly. We’re here to assist
          with any questions or concerns.
        </p>
        <div className="grid grid-cols-1 gap-8 pt-14 md:grid-cols-12">
          <div className="col-span-full rounded-2xl bg-indigo-50 p-8 lg:col-span-7">
            <div className="font-inter flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor=""
                    className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                  >
                    First Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-14 w-full rounded-lg border border-gray-200 bg-indigo-50 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                  >
                    Last Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-14 w-full rounded-lg border border-gray-200 bg-indigo-50 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                >
                  Email {/* SVG removed */}
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="h-14 w-full rounded-lg border border-gray-200 bg-indigo-50 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                >
                  Description
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-14 w-full rounded-lg border border-gray-200 bg-indigo-50 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="font-inter w-full rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  3680 Schamberger Pass, North Catalina 01984-8381
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Talk to us and see how we can work 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  We're usually replaying within 24 hours pagedone1234@gmail.com
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Working Hours
                </h5>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Mon To Sat - 10 am To 7 pm Sunday - 11am To 5 pm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full overflow-hidden rounded-2xl">
          <iframe
            className="w-full"
            src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
            height={364}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
