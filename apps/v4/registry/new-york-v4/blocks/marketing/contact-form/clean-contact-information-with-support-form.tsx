export default function CleanContactInformationWithSupportForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-manrope text-4xl leading-10 font-semibold text-black">
              We’re Here to Help
            </h2>
            <p className="font-inter max-w-3xl pt-5 text-lg leading-8 font-normal text-gray-700">
              Whatever your needs, we’re here to assist you. Whether you have
              questions, need support, or want more information, our team is
              ready to help.
            </p>
          </div>
          <button className="font-inter w-36 rounded-xl bg-emerald-700 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-emerald-800">
            Contact Us
          </button>
        </div>
        <div className="grid grid-cols-12 gap-8 pt-14">
          <div className="col-span-full lg:col-span-5">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
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
                  Descripation
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-600 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="col-span-full h-12 w-full rounded-xl bg-emerald-700 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-emerald-800">
                Send
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-emerald-200 p-3">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg leading-7 font-medium text-black">
                    Address
                  </h3>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500">
                    Visit our location in real life.
                  </p>
                </div>
                <a className="text-base leading-7 font-medium text-emerald-700">
                  789 Oak Lane, Lakeside, TX 54321
                </a>
              </div>
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-emerald-200 p-3">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg leading-7 font-medium text-black">
                    Contact
                  </h3>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500">
                    Connect with our team for assistance.
                  </p>
                </div>
                <a className="text-base leading-7 font-medium text-emerald-700">
                  1800-2541-2541, 1800-14-0147
                </a>
              </div>
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-emerald-200 p-3">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg leading-7 font-medium text-black">
                    Email
                  </h3>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500">
                    Send us an email for assistance.
                  </p>
                </div>
                <a className="text-base leading-7 font-medium text-emerald-700">
                  pagedone1234@gmail.com
                </a>
              </div>
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-emerald-200 p-3">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg leading-7 font-medium text-black">
                    Working Hours
                  </h3>
                  <p className="pt-2 text-sm leading-5 font-normal text-gray-500">
                    Our working hours are
                  </p>
                </div>
                <a className="text-base leading-7 font-medium text-emerald-700">
                  Mon to Sat 10 am To 07 pm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
