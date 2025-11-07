export default function DarkContactSectionWithSocialAndInfoCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-indigo-600 text-4xl font-bold leading-10 font-manrope text-center">
          Talk to Us
        </h2>
        <p className="max-w-4xl mx-auto font-inter text-gray-500 text-base font-normal leading-7 pt-4 text-center">
          Don’t hesitate to talk to us—whether it’s for support, information, or
          feedback. Our team is available via phone, email, or our online form,
          and we’ll respond as soon as possible to assist you.
        </p>
        <div className="pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-8 font-inter">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                  >
                    First Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                  >
                    Last Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                >
                  Email {/* SVG removed */}
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="flex items-center gap-1 font-inter text-base font-medium leading-7 text-gray-600 mb-1.5"
                >
                  Description
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-14 border border-gray-200 placeholder:text-gray-400 text-gray-500 shadow-sm text-lg font-normal leading-7 rounded-lg outline-none px-5 py-3 transition-all duration-500 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="w-full bg-indigo-600 rounded-xl py-2.5 px-5 text-center text-white font-inter text-base leading-7 font-semibold transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
                  height={390}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <img
              src="https://pagedone.io/asset/uploads/1759223173.png"
              alt="image"
              className="hidden sm:block w-full h-full"
            />
            <div className="absolute top-0 sm:top-auto bottom-0 w-full lg:p-6 sm:p-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="font-inter p-4 rounded-2xl  flex flex-col gap-3.5">
                  <div className="p-3 bg-indigo-600 rounded-xl w-max">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium leading-7 text-black">
                      Address
                    </h3>
                    <p className="text-sm font-normal leading-5 text-gray-600 pt-2">
                      Visit our location in real life.
                    </p>
                  </div>
                  <a className="text-base font-medium leading-7 text-indigo-600">
                    789 Oak Lane, Lakeside, TX 54321
                  </a>
                </div>
                <div className="font-inter p-4 rounded-2xl  flex flex-col gap-3.5">
                  <div className="p-3 bg-indigo-600 rounded-xl w-max">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium leading-7 text-black">
                      Contact
                    </h3>
                    <p className="text-sm font-normal leading-5 text-gray-600 pt-2">
                      Connect with our team for assistance.
                    </p>
                  </div>
                  <a className="text-base font-medium leading-7 text-indigo-600">
                    1800-2541-2541, 1800-14-0147
                  </a>
                </div>
                <div className="font-inter p-4 rounded-2xl  flex flex-col gap-3.5">
                  <div className="p-3 bg-indigo-600 rounded-xl w-max">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium leading-7 text-black">
                      Email
                    </h3>
                    <p className="text-sm font-normal leading-5 text-gray-600 pt-2">
                      Send us an email for assistance.
                    </p>
                  </div>
                  <a className="text-base font-medium leading-7 text-indigo-600">
                    pagedone1234@gmail.com
                  </a>
                </div>
                <div className="font-inter p-4 rounded-2xl  flex flex-col gap-3.5">
                  <div className="p-3 bg-indigo-600 rounded-xl w-max">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium leading-7 text-black">
                      Working Hours
                    </h3>
                    <p className="text-sm font-normal leading-5 text-gray-600 pt-2">
                      Our working hours are
                    </p>
                  </div>
                  <a className="text-base font-medium leading-7 text-indigo-600">
                    Mon to Sat 10 am To 07 pm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
