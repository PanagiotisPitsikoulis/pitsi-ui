export default function ContactSectionWithImageDetailsAndMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-orange-500 text-4xl font-bold leading-10 font-manrope text-center">
          How to Reach Us
        </h2>
        <p className="font-inter text-gray-500 text-base font-normal leading-7 pt-4 text-center max-w-4xl mx-auto">
          Wondering how to get in touch? We’re available through multiple
          channels—phone, email, or our online contact form. No matter your
          preference, we’re here to assist
        </p>
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="pt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-full rounded-2xl overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1759223065.png"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 font-inter">
                <a className="flex items-center gap-2.5 text-base font-normal leading-7 text-gray-900">
                  {/* SVG removed */}470-601-1911
                </a>
                <a className="flex items-center gap-2.5 text-base font-normal leading-7 text-gray-900">
                  {/* SVG removed */}Pagedone1234@gmail.com
                </a>
                <a className="flex items-center gap-2.5 text-base font-normal leading-7 text-gray-900">
                  {/* SVG removed */}789 Oak Lane, Lakeside, TX 54321
                </a>
                <a className="flex items-center gap-2.5 text-base font-normal leading-7 text-gray-900">
                  {/* SVG removed */}Mon To Sat - 10 am To 07 pm
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden mt-6">
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
          <div className="pt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                First Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="First Name"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Last Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Last Name"
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
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
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
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300 transition-all duration-500"
                placeholder="Number"
              />
            </div>
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Message
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500"
                placeholder="Message"
              />
            </div>
            <div>
              <button className="w-full text-center py-3 px-6 bg-orange-500 rounded-xl font-inter text-lg font-semibold leading-8 text-white transition-all duration-500 hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
