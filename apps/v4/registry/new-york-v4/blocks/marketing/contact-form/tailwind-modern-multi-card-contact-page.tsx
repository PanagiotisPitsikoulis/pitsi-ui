export default function TailwindModernMultiCardContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-full pb-0 md:col-span-7 md:pb-8">
            <h2 className="font-manrope text-4xl leading-10 font-semibold text-gray-900">
              Contact Us
            </h2>
            <p className="font-inter pt-5 text-lg leading-8 font-normal text-gray-500">
              our dedicated team is ready to support you.
            </p>
            <div className="font-inter flex flex-col gap-8 pt-11">
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
                    className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
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
                    className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
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
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
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
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="font-inter w-full rounded-xl bg-orange-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-orange-700">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-8 md:col-span-5">
            <div className="group flex items-center gap-4 rounded-2xl bg-orange-50 p-6 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  3680 Schamberger Pass, North Catalina
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  01984-8381
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-orange-50 p-6 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Talk to us and see how we can work
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  1800-14-0147
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-orange-50 p-6 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  We're usually replaying within 24 hours
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  pagedone1234@gmail.com
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-orange-50 p-6 transition-all duration-500 hover:bg-orange-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-sm leading-5 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Working Hours
                </h5>
                <p className="pt-2 text-xs leading-4 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Mon To Sat - 10 am To 7 pm
                </p>
                <a className="text-xs font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  Sunday - 11am To 5 pm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-orange-50 p-6">
            <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900">
              Press
            </h3>
            <p className="font-inter pt-4 text-center text-base leading-6 font-normal text-gray-500">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter w-full rounded-lg bg-orange-600 px-3.5 py-2 text-center text-sm leading-6 font-medium text-white transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-orange-50 p-6">
            <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900">
              Help &amp; Supports
            </h3>
            <p className="font-inter pt-4 text-center text-base leading-6 font-normal text-gray-500">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter w-full rounded-lg bg-orange-600 px-3.5 py-2 text-center text-sm leading-6 font-medium text-white transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-orange-50 p-6">
            <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900">
              Sales
            </h3>
            <p className="font-inter pt-4 text-center text-base leading-6 font-normal text-gray-500">
              Are you interested in our latest news or working on a grammarly
              story and need to get in touch?
            </p>
            <div className="pt-5">
              <button className="font-inter w-full rounded-lg bg-orange-600 px-3.5 py-2 text-center text-sm leading-6 font-medium text-white transition-all duration-500 hover:bg-orange-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
