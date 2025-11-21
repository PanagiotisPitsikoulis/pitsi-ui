export default function ContactSectionWithImageDetailsAndMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-orange-500">
          How to Reach Us
        </h2>
        <p className="font-inter mx-auto max-w-4xl pt-4 text-center text-base leading-7 font-normal text-gray-500">
          Wondering how to get in touch? We’re available through multiple
          channels—phone, email, or our online contact form. No matter your
          preference, we’re here to assist
        </p>
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="grid grid-cols-1 items-center gap-8 pt-14 lg:grid-cols-2">
            <div className="h-full overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1759223065.png"
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="font-inter grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <a className="flex items-center gap-2.5 text-base leading-7 font-normal text-gray-900">
                  {/* SVG removed */}470-601-1911
                </a>
                <a className="flex items-center gap-2.5 text-base leading-7 font-normal text-gray-900">
                  {/* SVG removed */}Pagedone1234@gmail.com
                </a>
                <a className="flex items-center gap-2.5 text-base leading-7 font-normal text-gray-900">
                  {/* SVG removed */}789 Oak Lane, Lakeside, TX 54321
                </a>
                <a className="flex items-center gap-2.5 text-base leading-7 font-normal text-gray-900">
                  {/* SVG removed */}Mon To Sat - 10 am To 07 pm
                </a>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
                  height={344}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-14 md:grid-cols-2">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                First Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="First Name"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Last Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Last Name"
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
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
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
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 transition-all duration-500 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Number"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Message
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 outline-none placeholder:text-gray-500"
                placeholder="Message"
              />
            </div>
            <div>
              <button className="font-inter w-full rounded-xl bg-orange-500 px-6 py-3 text-center text-lg leading-8 font-semibold text-white transition-all duration-500 hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
