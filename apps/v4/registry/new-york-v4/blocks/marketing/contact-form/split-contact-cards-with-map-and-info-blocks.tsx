export default function SplitContactCardsWithMapAndInfoBlocks() {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-manrope bg-gradient-to-r from-gray-600 to-gray-100 bg-clip-text text-center text-5xl font-bold text-transparent">
          Contact Our Team
        </h1>
        <p className="font-inter mx-auto max-w-2xl pt-3.5 text-center text-base leading-6 font-normal text-neutral-400">
          We are deeply committed to delivering unparalleled service and
          unwavering support to ensure your experience exceeds expectations.
        </p>
        <div className="grid grid-cols-1 gap-8 pt-14 lg:grid-cols-12">
          <div className="rounded-rounded_20px col-span-full border border-neutral-600 bg-neutral-900 p-4 sm:p-8 lg:col-span-7">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-6 font-medium text-white"
                >
                  First Name
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-lg border border-neutral-500 bg-neutral-900 px-5 py-3 text-lg leading-7 font-normal text-white transition-all duration-500 outline-none placeholder:text-neutral-600 focus:border-neutral-400"
                  placeholder="First Name"
                />
              </div>
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-6 font-medium text-white"
                >
                  Last Name{/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-lg border border-neutral-500 bg-neutral-900 px-5 py-3 text-lg leading-7 font-normal text-white transition-all duration-500 outline-none placeholder:text-neutral-600 focus:border-neutral-400"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-6 lg:pt-10 xl:flex-row xl:items-center">
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-6 font-medium text-white"
                >
                  Email
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-lg border border-neutral-500 bg-neutral-900 px-5 py-3 text-lg leading-7 font-normal text-white transition-all duration-500 outline-none placeholder:text-neutral-600 focus:border-neutral-400"
                  placeholder="Email"
                />
              </div>
              <div className="font-inter flex flex-col gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-6 font-medium text-white"
                >
                  Phone Number{/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-lg border border-neutral-500 bg-neutral-900 px-5 py-3 text-lg leading-7 font-normal text-white transition-all duration-500 outline-none placeholder:text-neutral-600 focus:border-neutral-400"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="font-inter flex w-full flex-col gap-1.5 pt-6 lg:pt-10">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-white"
              >
                Description{/* SVG removed */}
              </label>
              <textarea
                name=""
                id=""
                className="h-44 w-full resize-none rounded-lg border border-neutral-500 bg-neutral-900 px-5 py-3 text-lg leading-7 font-normal text-white transition-all duration-500 outline-none placeholder:text-neutral-600 focus:border-neutral-400"
                placeholder="Message"
              />
            </div>
            <div className="pt-6 lg:pt-10">
              <button className="font-inter w-full rounded-xl bg-white px-5 py-2.5 text-center text-base leading-7 font-semibold text-black transition-all duration-500 hover:bg-gray-200">
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-rounded_20px flex items-center justify-between border border-neutral-600 bg-neutral-900 p-4 sm:p-8">
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-2xl leading-9 font-semibold text-white">
                  Email Address
                </h5>
                <a className="font-inter text-lg leading-7 font-medium text-neutral-400">
                  pagedone1234@gmail.com
                </a>
              </div>
              <a className="w-max rounded-xl border border-neutral-600 bg-black p-3.5">
                {/* SVG removed */}
              </a>
            </div>
            <div className="rounded-rounded_20px flex items-center justify-between border border-neutral-600 bg-neutral-900 p-4 sm:p-8">
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-2xl leading-9 font-semibold text-white">
                  Contact
                </h5>
                <a className="font-inter text-lg leading-7 font-medium text-neutral-400">
                  1800-14-0147
                </a>
              </div>
              <a className="w-max rounded-xl border border-neutral-600 bg-black p-3.5">
                {/* SVG removed */}
              </a>
            </div>
            <div className="rounded-rounded_20px flex items-center justify-between border border-neutral-600 bg-neutral-900 p-4 sm:p-8">
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-2xl leading-9 font-semibold text-white">
                  Address
                </h5>
                <a className="font-inter text-lg leading-7 font-medium text-neutral-400">
                  pagedone1234@gmail.com
                </a>
              </div>
              <a className="w-max rounded-xl border border-neutral-600 bg-black p-3.5">
                {/* SVG removed */}
              </a>
            </div>
            <div className="rounded-rounded_20px flex items-center justify-between border border-neutral-600 bg-neutral-900 p-4 sm:p-8">
              <div className="flex flex-col gap-2">
                <h5 className="font-manrope text-2xl leading-9 font-semibold text-white">
                  Google Map
                </h5>
                <a className="font-inter text-lg leading-7 font-medium text-neutral-400">
                  Discover our prime location
                </a>
              </div>
              <a className="w-max rounded-xl border border-neutral-600 bg-black p-3.5">
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
