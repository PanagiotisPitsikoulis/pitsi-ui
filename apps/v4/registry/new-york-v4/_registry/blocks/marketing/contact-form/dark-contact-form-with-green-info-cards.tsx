export default function DarkContactFormWithGreenInfoCards() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-manrope text-4xl leading-10 font-semibold text-white">
              Get In Touch
            </h2>
            <p className="font-inter max-w-3xl pt-5 text-lg leading-8 font-normal text-gray-300">
              Whether you have a concern or simply want to say hello, We are
              here to facilitate communication with you.
            </p>
          </div>
          <button className="font-inter hover:from-none hover:to-none w-36 rounded-xl bg-gradient-to-r from-green-500 to-green-300 px-5 py-2.5 text-center text-base leading-7 font-semibold text-black shadow-sm transition-all duration-500 hover:bg-green-200">
            Contact Us
          </button>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-2.5 rounded-xl bg-neutral-900 p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-300">
                {/* SVG removed */}
              </div>
              <a className="font-inter text-base leading-7 font-semibold text-white">
                3680 Schamberger Pass
              </a>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-neutral-900 p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-300">
                {/* SVG removed */}
              </div>
              <a className="font-inter text-base leading-7 font-semibold text-white">
                mail@pagedone.io
              </a>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-neutral-900 p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-300">
                {/* SVG removed */}
              </div>
              <a className="font-inter text-base leading-7 font-semibold text-white">
                1800-14-0147
              </a>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-neutral-900 p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-300">
                {/* SVG removed */}
              </div>
              <a className="font-inter text-base leading-7 font-semibold text-white">
                Mon To Sat - 10 To 7
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-xl border-neutral-600 bg-neutral-900 p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
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
          <div className="font-inter flex w-full flex-col gap-1.5 pt-10">
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
          <div className="pt-10">
            <button className="font-inter w-full rounded-xl bg-gradient-to-r from-green-500 to-green-300 px-5 py-2.5 text-center text-base leading-7 font-semibold text-black transition-all duration-500 hover:bg-gray-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
