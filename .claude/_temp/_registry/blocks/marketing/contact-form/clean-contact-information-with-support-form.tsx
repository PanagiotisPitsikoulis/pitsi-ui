export default function CleanContactInformationWithSupportForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-black text-4xl font-semibold leading-10 font-manrope">
              We’re Here to Help
            </h2>
            <p className="max-w-3xl font-inter text-gray-700 text-lg font-normal leading-8 pt-5">
              Whatever your needs, we’re here to assist you. Whether you have
              questions, need support, or want more information, our team is
              ready to help.
            </p>
          </div>
          <button className="w-36 text-center bg-emerald-700 py-2.5 px-5 text-white font-inter text-base font-semibold leading-7 rounded-xl shadow-sm transition-all duration-500 hover:bg-emerald-800">
            Contact Us
          </button>
        </div>
        <div className="pt-14 grid grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
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
                  Descripation
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 px-5 border rounded-lg border-gray-200 text-gray-600 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                  placeholder="Message"
                />
              </div>
              <button className="col-span-full w-full h-12 text-white text-base font-semibold leading-6 rounded-xl transition-all duration-500 bg-emerald-700 hover:bg-emerald-800 shadow-sm">
                Send
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-emerald-200 rounded-xl w-max">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-7 text-black">
                    Address
                  </h3>
                  <p className="text-sm font-normal leading-5 text-gray-500 pt-2">
                    Visit our location in real life.
                  </p>
                </div>
                <a className="text-base font-medium leading-7 text-emerald-700">
                  789 Oak Lane, Lakeside, TX 54321
                </a>
              </div>
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-emerald-200 rounded-xl w-max">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-7 text-black">
                    Contact
                  </h3>
                  <p className="text-sm font-normal leading-5 text-gray-500 pt-2">
                    Connect with our team for assistance.
                  </p>
                </div>
                <a className="text-base font-medium leading-7 text-emerald-700">
                  1800-2541-2541, 1800-14-0147
                </a>
              </div>
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-emerald-200 rounded-xl w-max">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-7 text-black">
                    Email
                  </h3>
                  <p className="text-sm font-normal leading-5 text-gray-500 pt-2">
                    Send us an email for assistance.
                  </p>
                </div>
                <a className="text-base font-medium leading-7 text-emerald-700">
                  pagedone1234@gmail.com
                </a>
              </div>
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-emerald-200 rounded-xl w-max">
                  {/* SVG removed */}
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-7 text-black">
                    Working Hours
                  </h3>
                  <p className="text-sm font-normal leading-5 text-gray-500 pt-2">
                    Our working hours are
                  </p>
                </div>
                <a className="text-base font-medium leading-7 text-emerald-700">
                  Mon to Sat 10 am To 07 pm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
