export default function DarkContactFormWithGreenInfoCards() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-white text-4xl font-semibold leading-10 font-manrope">
              Get In Touch
            </h2>
            <p className="max-w-3xl font-inter text-gray-300 text-lg font-normal leading-8 pt-5">
              Whether you have a concern or simply want to say hello, We are
              here to facilitate communication with you.
            </p>
          </div>
          <button className="w-36 text-center bg-gradient-to-r from-green-500 to-green-300 py-2.5 px-5 text-black font-inter text-base font-semibold leading-7 rounded-xl shadow-sm hover:bg-green-200 hover:from-none hover:to-none transition-all duration-500">
            Contact Us
          </button>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-neutral-900 rounded-xl p-2 flex items-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-xl">
                {/* SVG removed */}
              </div>
              <a className="text-base font-semibold leading-7 font-inter text-white">
                3680 Schamberger Pass
              </a>
            </div>
            <div className="bg-neutral-900 rounded-xl p-2 flex items-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-xl">
                {/* SVG removed */}
              </div>
              <a className="text-base font-semibold leading-7 font-inter text-white">
                mail@pagedone.io
              </a>
            </div>
            <div className="bg-neutral-900 rounded-xl p-2 flex items-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-xl">
                {/* SVG removed */}
              </div>
              <a className="text-base font-semibold leading-7 font-inter text-white">
                1800-14-0147
              </a>
            </div>
            <div className="bg-neutral-900 rounded-xl p-2 flex items-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-xl">
                {/* SVG removed */}
              </div>
              <a className="text-base font-semibold leading-7 font-inter text-white">
                Mon To Sat - 10 To 7
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-8 border-neutral-600 bg-neutral-900 rounded-xl mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
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
          <div className="font-inter pt-10 w-full flex flex-col gap-1.5">
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
          <div className="pt-10">
            <button className="w-full text-center py-2.5 px-5 bg-gradient-to-r from-green-500 to-green-300 rounded-xl font-inter text-base font-semibold leading-7 text-black transition-all duration-500 hover:bg-gray-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
