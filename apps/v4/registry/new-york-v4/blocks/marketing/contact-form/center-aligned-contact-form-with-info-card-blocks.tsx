export default function CenterAlignedContactFormWithInfoCardBlocks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          <div className="grid w-full grid-cols-12 gap-8">
            <div className="col-span-12 my-auto lg:col-span-5">
              <h2 className="font-manrope text-4xl leading-10 font-semibold text-black">
                Get In Touch
              </h2>
              <p className="font-inter mt-5 text-lg leading-7 font-normal text-gray-600">
                Whether you have a concern or simply want to say hello, <br />{" "}
                We are here to facilitate communication with you.
              </p>
              <div className="pt-7">
                <button className="font-inter h-full rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7">
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-indigo-200 p-3">
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
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-indigo-200 p-3">
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
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-indigo-200 p-3">
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
              <div className="font-inter flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="w-max rounded-xl border border-indigo-200 p-3">
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
          <div className="font-inter grid grid-cols-12 gap-8">
            <input
              type="text"
              className="col-span-12 rounded-full border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-400 lg:col-span-6"
              placeholder="Name"
            />
            <input
              type="email"
              className="col-span-12 rounded-full border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-400 lg:col-span-6"
              placeholder="Email"
            />
            <input
              type="text"
              className="col-span-12 rounded-full border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-400 lg:col-span-6"
              placeholder="Phone"
            />
            <div className="relative col-span-12 lg:col-span-6">
              <select className="w-full appearance-none rounded-full border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-400">
                <option>Subject</option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                {/* SVG removed */}
              </div>
            </div>
            <textarea
              name=""
              id=""
              className="col-span-12 h-48 resize-none rounded-2xl border border-gray-200 px-5 py-3 text-lg leading-7 font-normal text-gray-400 shadow-sm transition-all duration-500 outline-none focus:border-gray-400"
              placeholder="Write Message . . ."
            />
            <button className="font-inter col-span-12 h-full rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
