export default function TailwindModernMultiCardContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-full md:col-span-7 pb-0 md:pb-8">
            <h2 className="text-gray-900 text-4xl font-semibold leading-10 font-manrope">
              Contact Us
            </h2>
            <p className="font-inter text-gray-500 text-lg font-normal leading-8 pt-5">
              our dedicated team is ready to support you.
            </p>
            <div className="pt-11 flex flex-col gap-8 font-inter">
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
                    className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
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
                    className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
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
                  className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
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
                  className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="w-full bg-orange-600 rounded-xl py-2.5 px-5 text-center text-white font-inter text-base leading-7 font-semibold transition-all duration-500 hover:bg-orange-700">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full md:col-span-5 flex flex-col gap-8">
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-orange-50 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  3680 Schamberger Pass, North Catalina
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  01984-8381
                </a>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-orange-50 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  Talk to us and see how we can work
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  1800-14-0147
                </a>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-orange-50 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  We're usually replaying within 24 hours
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  pagedone1234@gmail.com
                </a>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-orange-50 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm font-medium leading-5 text-black transition-all duration-500 group-hover:text-white">
                  Working Hours
                </h5>
                <p className="text-xs font-normal leading-4 text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  Mon To Sat - 10 am To 7 pm
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Sunday - 11am To 5 pm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-orange-50">
            <h3 className="text-2xl font-manrope font-bold leading-9 text-gray-900 text-center">
              Press
            </h3>
            <p className="pt-4 text-base font-normal leading-6 text-gray-500 font-inter text-center">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter py-2 px-3.5 text-center w-full text-sm font-medium leading-6 text-white bg-orange-600 rounded-lg transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-orange-50">
            <h3 className="text-2xl font-manrope font-bold leading-9 text-gray-900 text-center">
              Help &amp; Supports
            </h3>
            <p className="pt-4 text-base font-normal leading-6 text-gray-500 font-inter text-center">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter py-2 px-3.5 text-center w-full text-sm font-medium leading-6 text-white bg-orange-600 rounded-lg transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-orange-50">
            <h3 className="text-2xl font-manrope font-bold leading-9 text-gray-900 text-center">
              Sales
            </h3>
            <p className="pt-4 text-base font-normal leading-6 text-gray-500 font-inter text-center">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter py-2 px-3.5 text-center w-full text-sm font-medium leading-6 text-white bg-orange-600 rounded-lg transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
