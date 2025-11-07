export default function BlackAndOrangeContactSectionWithMap() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid  md:grid-cols-12 gap-14">
          <div className="col-span-full md:col-span-5">
            <h2 className="font-manrope text-6xl leading-leading88 font-bold text-white lg:max-w-xs">
              Let's <span className="text-orange-400">Connect</span>
            </h2>
            <p className="font-inter text-gray-400 text-lg font-normal leading-8 pt-5">
              Reach out to us for expert legal advice tailored to your needs.
              We're here to assist you with any questions or concerns—let's
              connect today!
            </p>
          </div>
          <div className="col-span-full md:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-inter mb-8">
              <input
                type="text"
                className="px-4 py-2.5 bg-neutral-900 rounded-xl shadow-sm placeholder:text-gray-400 text-gray-200 text-base font-normal leading-7 outline-none focus:bg-neutral-800 transition-all duration-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="px-4 py-2.5 bg-neutral-900 rounded-xl shadow-sm placeholder:text-gray-400 text-gray-200 text-base font-normal leading-7 outline-none focus:bg-neutral-800 transition-all duration-500"
                placeholder="Last Name"
              />
            </div>
            <textarea
              className="px-4 py-2.5 bg-neutral-900 rounded-xl shadow-sm placeholder:text-gray-400 text-gray-200 text-base font-normal leading-7 outline-none w-full resize-none h-44 focus:bg-neutral-800 transition-all duration-500"
              placeholder="Message"
            />
            <div className="pt-12">
              <button className="w-full bg-orange-400 rounded-xl text-white py-2.5 px-5 text-center text-base font-semibold leading-7 font-inter flex items-center justify-center gap-2 transition-all duration-500 hover:bg-orange-500">
                Send Your Message{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-5 border border-gray-200 rounded-2xl flex flex-col gap-3">
            <div className="w-max"></div>
            <h3 className="text-xl font-inter font-semibold leading-8 text-white">
              Phone Number
            </h3>
            <a className="text-base text-orange-400 leading-6 font-semibold">
              +00 00000 00000
            </a>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl flex flex-col gap-3">
            <div className="w-max"></div>
            <h3 className="text-xl font-inter font-semibold leading-8 text-white">
              Email
            </h3>
            <a className="text-base text-orange-400 leading-6 font-semibold">
              mail@pagedone.io
            </a>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl flex flex-col gap-3">
            <div className="w-max"></div>
            <h3 className="text-xl font-inter font-semibold leading-8 text-white">
              Opening Hours
            </h3>
            <a className="text-base text-orange-400 leading-6 font-semibold">
              9am to 7pm
            </a>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl flex flex-col gap-3">
            <div className="w-max"></div>
            <h3 className="text-xl font-inter font-semibold leading-8 text-white">
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
        <div className="mt-8 rounded-3xl overflow-hidden">
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
  );
}
