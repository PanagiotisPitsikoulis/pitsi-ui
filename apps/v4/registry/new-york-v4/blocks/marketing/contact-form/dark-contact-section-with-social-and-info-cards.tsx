export default function DarkContactSectionWithSocialAndInfoCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-indigo-600">
          Talk to Us
        </h2>
        <p className="font-inter mx-auto max-w-4xl pt-4 text-center text-base leading-7 font-normal text-gray-500">
          Don’t hesitate to talk to us—whether it’s for support, information, or
          feedback. Our team is available via phone, email, or our online form,
          and we’ll respond as soon as possible to assist you.
        </p>
        <div className="grid grid-cols-1 gap-8 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-inter flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor=""
                    className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                  >
                    First Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                  >
                    Last Name {/* SVG removed */}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                >
                  Email {/* SVG removed */}
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-inter mb-1.5 flex items-center gap-1 text-base leading-7 font-medium text-gray-600"
                >
                  Description
                  {/* SVG removed */}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-14 w-full rounded-lg border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-500 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-300"
                  placeholder="Message"
                />
              </div>
              <button className="font-inter w-full rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
              <div className="overflow-hidden rounded-2xl">
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
          <div className="relative lg:col-span-7">
            <img
              src="https://pagedone.io/asset/uploads/1759223173.png"
              alt="image"
              className="hidden h-full w-full sm:block"
            />
            <div className="absolute top-0 bottom-0 w-full sm:top-auto sm:p-5 lg:p-6">
              <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white/80 backdrop-blur-sm sm:grid-cols-2">
                <div className="font-inter flex flex-col gap-3.5 rounded-2xl p-4">
                  <div className="w-max rounded-xl bg-indigo-600 p-3">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg leading-7 font-medium text-black">
                      Address
                    </h3>
                    <p className="pt-2 text-sm leading-5 font-normal text-gray-600">
                      Visit our location in real life.
                    </p>
                  </div>
                  <a className="text-base leading-7 font-medium text-indigo-600">
                    789 Oak Lane, Lakeside, TX 54321
                  </a>
                </div>
                <div className="font-inter flex flex-col gap-3.5 rounded-2xl p-4">
                  <div className="w-max rounded-xl bg-indigo-600 p-3">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg leading-7 font-medium text-black">
                      Contact
                    </h3>
                    <p className="pt-2 text-sm leading-5 font-normal text-gray-600">
                      Connect with our team for assistance.
                    </p>
                  </div>
                  <a className="text-base leading-7 font-medium text-indigo-600">
                    1800-2541-2541, 1800-14-0147
                  </a>
                </div>
                <div className="font-inter flex flex-col gap-3.5 rounded-2xl p-4">
                  <div className="w-max rounded-xl bg-indigo-600 p-3">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg leading-7 font-medium text-black">
                      Email
                    </h3>
                    <p className="pt-2 text-sm leading-5 font-normal text-gray-600">
                      Send us an email for assistance.
                    </p>
                  </div>
                  <a className="text-base leading-7 font-medium text-indigo-600">
                    pagedone1234@gmail.com
                  </a>
                </div>
                <div className="font-inter flex flex-col gap-3.5 rounded-2xl p-4">
                  <div className="w-max rounded-xl bg-indigo-600 p-3">
                    {/* SVG removed */}
                  </div>
                  <div>
                    <h3 className="text-lg leading-7 font-medium text-black">
                      Working Hours
                    </h3>
                    <p className="pt-2 text-sm leading-5 font-normal text-gray-600">
                      Our working hours are
                    </p>
                  </div>
                  <a className="text-base leading-7 font-medium text-indigo-600">
                    Mon to Sat 10 am To 07 pm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
