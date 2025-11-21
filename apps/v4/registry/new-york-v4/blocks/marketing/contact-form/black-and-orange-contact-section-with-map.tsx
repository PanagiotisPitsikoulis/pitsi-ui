export default function BlackAndOrangeContactSectionWithMap() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="col-span-full md:col-span-5">
            <h2 className="font-manrope leading-leading88 text-6xl font-bold text-white lg:max-w-xs">
              Let's <span className="text-orange-400">Connect</span>
            </h2>
            <p className="font-inter pt-5 text-lg leading-8 font-normal text-gray-400">
              Reach out to us for expert legal advice tailored to your needs.
              We're here to assist you with any questions or concerns—let's
              connect today!
            </p>
          </div>
          <div className="col-span-full md:col-span-7">
            <div className="font-inter mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <input
                type="text"
                className="rounded-xl bg-neutral-900 px-4 py-2.5 text-base leading-7 font-normal text-gray-200 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:bg-neutral-800"
                placeholder="First Name"
              />
              <input
                type="text"
                className="rounded-xl bg-neutral-900 px-4 py-2.5 text-base leading-7 font-normal text-gray-200 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:bg-neutral-800"
                placeholder="Last Name"
              />
            </div>
            <textarea
              className="h-44 w-full resize-none rounded-xl bg-neutral-900 px-4 py-2.5 text-base leading-7 font-normal text-gray-200 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:bg-neutral-800"
              placeholder="Message"
            />
            <div className="pt-12">
              <button className="font-inter flex w-full items-center justify-center gap-2 rounded-xl bg-orange-400 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-orange-500">
                Send Your Message{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
            <div className="w-max"></div>
            <h3 className="font-inter text-xl leading-8 font-semibold text-white">
              Phone Number
            </h3>
            <a className="text-base leading-6 font-semibold text-orange-400">
              +00 00000 00000
            </a>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
            <div className="w-max"></div>
            <h3 className="font-inter text-xl leading-8 font-semibold text-white">
              Email
            </h3>
            <a className="text-base leading-6 font-semibold text-orange-400">
              mail@pagedone.io
            </a>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
            <div className="w-max"></div>
            <h3 className="font-inter text-xl leading-8 font-semibold text-white">
              Opening Hours
            </h3>
            <a className="text-base leading-6 font-semibold text-orange-400">
              9am to 7pm
            </a>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-5">
            <div className="w-max"></div>
            <h3 className="font-inter text-xl leading-8 font-semibold text-white">
              Follow Us
            </h3>
            <div className="flex items-center gap-2.5">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl">
          <iframe
            className="w-full"
            src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
            height={418}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
