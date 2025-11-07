export default function MultiPanelContactWithMapAndForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-indigo-600 text-4xl font-bold leading-10 font-manrope text-center">
          Contact Us
        </h2>
        <p className="max-w-5xl mx-auto  font-inter text-gray-500 text-base font-normal leading-7 pt-4 text-center">
          Need to get in touch? Contact us via phone, email, or our online form,
          and we’ll respond to your inquiries promptly. We’re here to assist
          with any questions or concerns.
        </p>
        <div className="pt-14 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-7 p-8 bg-indigo-50 rounded-2xl">
            <div className="flex flex-col gap-8 font-inter">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                  >
                    First Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-14 border border-gray-200 bg-indigo-50 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 focus:border-gray-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                  >
                    Last Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-14 border border-gray-200 bg-indigo-50 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 focus:border-gray-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                >
                  Email {/* SVG removed */}
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full h-14 border border-gray-200 bg-indigo-50 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 focus:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                >
                  Description
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-14 border border-gray-200 bg-indigo-50 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="w-full bg-indigo-600 rounded-xl py-2.5 px-5 text-center text-white font-inter text-base leading-7 font-semibold transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  3680 Schamberger Pass, North Catalina 01984-8381
                </p>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  Talk to us and see how we can work 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  We're usually replaying within 24 hours pagedone1234@gmail.com
                </a>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Working Hours
                </h5>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Mon To Sat - 10 am To 7 pm Sunday - 11am To 5 pm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden w-full">
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
  );
}
