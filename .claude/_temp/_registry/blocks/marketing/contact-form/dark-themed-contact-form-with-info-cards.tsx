export default function DarkThemedContactFormWithInfoCards() {
  return (
    <section className="py-24 relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-100 bg-clip-text text-transparent text-center font-manrope">
          Contact Our Team
        </h1>
        <p className="max-w-2xl text-neutral-400 text-center mx-auto pt-3.5 font-inter text-base font-normal leading-6">
          We are deeply committed to delivering unparalleled service and
          unwavering support to ensure your experience exceeds expectations.
        </p>
        <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-7 p-4 sm:p-8 border border-neutral-600 bg-neutral-900 rounded-rounded_20px">
            <div className="flex flex-col xl:flex-row xl:items-center gap-6">
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="text-base font-medium leading-6 text-white flex items-center gap-1"
                >
                  First Name
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 px-5 border rounded-lg border-neutral-500 text-white text-lg font-normal leading-7 outline-none bg-neutral-900 placeholder:text-neutral-600 focus:border-neutral-400 transition-all duration-500"
                  placeholder="First Name"
                />
              </div>
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="text-base font-medium leading-6 text-white flex items-center gap-1"
                >
                  Last Name{/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 px-5 border rounded-lg border-neutral-500 text-white text-lg font-normal leading-7 outline-none bg-neutral-900 placeholder:text-neutral-600 focus:border-neutral-400 transition-all duration-500"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center gap-6 pt-6 lg:pt-10">
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="text-base font-medium leading-6 text-white flex items-center gap-1"
                >
                  Email
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 px-5 border rounded-lg border-neutral-500 text-white text-lg font-normal leading-7 outline-none bg-neutral-900 placeholder:text-neutral-600 focus:border-neutral-400 transition-all duration-500"
                  placeholder="Email"
                />
              </div>
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="text-base font-medium leading-6 text-white flex items-center gap-1"
                >
                  Phone Number{/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 px-5 border rounded-lg border-neutral-500 text-white text-lg font-normal leading-7 outline-none bg-neutral-900 placeholder:text-neutral-600 focus:border-neutral-400 transition-all duration-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="font-inter pt-6 lg:pt-10 w-full flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-white flex items-center gap-1"
              >
                Description{/* SVG removed */}
              </label>
              <textarea
                name=""
                id=""
                className="w-full resize-none h-44 py-3 px-5 border rounded-lg border-neutral-500 text-white text-lg font-normal leading-7 outline-none bg-neutral-900 placeholder:text-neutral-600 focus:border-neutral-400 transition-all duration-500"
                placeholder="Message"
              />
            </div>
            <div className="pt-6 lg:pt-10">
              <button className="w-full text-center py-2.5 px-5 bg-white rounded-xl font-inter text-base font-semibold leading-7 text-black transition-all duration-500 hover:bg-gray-200">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 flex flex-col gap-6">
            <div className="border border-neutral-600 rounded-rounded_20px p-4 sm:p-8 bg-neutral-900 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold leading-9 font-manrope text-white">
                  Email Address
                </h5>
                <a className="text-lg font-medium leading-7 font-inter text-neutral-400">
                  pagedone1234@gmail.com
                </a>
              </div>
              <a className="w-max p-3.5 border border-neutral-600 bg-black rounded-xl">
                {/* SVG removed */}
              </a>
            </div>
            <div className="border border-neutral-600 rounded-rounded_20px p-4 sm:p-8 bg-neutral-900 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold leading-9 font-manrope text-white">
                  Contact
                </h5>
                <a className="text-lg font-medium leading-7 font-inter text-neutral-400">
                  1800-14-0147
                </a>
              </div>
              <a className="w-max p-3.5 border border-neutral-600 bg-black rounded-xl">
                {/* SVG removed */}
              </a>
            </div>
            <div className="border border-neutral-600 rounded-rounded_20px p-4 sm:p-8 bg-neutral-900 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold leading-9 font-manrope text-white">
                  Address
                </h5>
                <a className="text-lg font-medium leading-7 font-inter text-neutral-400">
                  pagedone1234@gmail.com
                </a>
              </div>
              <a className="w-max p-3.5 border border-neutral-600 bg-black rounded-xl">
                {/* SVG removed */}
              </a>
            </div>
            <div className="border border-neutral-600 rounded-rounded_20px p-4 sm:p-8 bg-neutral-900 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-semibold leading-9 font-manrope text-white">
                  Google Map
                </h5>
                <a className="text-lg font-medium leading-7 font-inter text-neutral-400">
                  Discover our prime location
                </a>
              </div>
              <a className="w-max p-3.5 border border-neutral-600 bg-black rounded-xl">
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
