export default function CenterAlignedContactFormWithInfoCardBlocks() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          <div className="w-full grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 my-auto">
              <h2 className="font-manrope font-semibold text-4xl leading-10 text-black ">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg font-normal leading-7 font-inter mt-5">
                Whether you have a concern or simply want to say hello, <br />{" "}
                We are here to facilitate communication with you.
              </p>
              <div className="pt-7">
                <button className="font-inter h-full px-5 text-center text-base rounded-xl py-2.5 bg-indigo-600 leading-7 font-semibold  text-white transition-all duration-500 hover:bg-indigo-700">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-indigo-200 rounded-xl w-max">
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
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-indigo-200 rounded-xl w-max">
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
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-indigo-200 rounded-xl w-max">
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
              <div className="font-inter p-5 border border-gray-200 rounded-2xl bg-white flex flex-col gap-5">
                <div className="p-3 border border-indigo-200 rounded-xl w-max">
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
          <div className="grid grid-cols-12 gap-8 font-inter">
            <input
              type="text"
              className="col-span-12 lg:col-span-6 px-5 py-3 text-gray-400 text-lg font-normal leading-7 border border-gray-200 rounded-full shadow-sm transition-all duration-500 outline-none focus:border-gray-400"
              placeholder="Name"
            />
            <input
              type="email"
              className="col-span-12 lg:col-span-6 px-5 py-3 text-gray-400 text-lg font-normal leading-7 border border-gray-200 rounded-full shadow-sm transition-all duration-500 outline-none focus:border-gray-400"
              placeholder="Email"
            />
            <input
              type="text"
              className="col-span-12 lg:col-span-6 px-5 py-3 text-gray-400 text-lg font-normal leading-7 border border-gray-200 rounded-full shadow-sm transition-all duration-500 outline-none focus:border-gray-400"
              placeholder="Phone"
            />
            <div className="relative col-span-12 lg:col-span-6">
              <select className="w-full appearance-none px-5 py-3 text-gray-400 text-lg font-normal leading-7 border border-gray-200 rounded-full shadow-sm transition-all duration-500 outline-none focus:border-gray-400">
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
              className="col-span-12 resize-none h-48 px-5 py-3 text-gray-400 text-lg font-normal leading-7 border border-gray-200 rounded-2xl shadow-sm transition-all duration-500 outline-none focus:border-gray-400"
              placeholder="Write Message . . ."
            />
            <button className="col-span-12 font-inter h-full px-5 text-center text-base rounded-xl py-2.5 bg-indigo-600 leading-7 font-semibold  text-white transition-all duration-500 hover:bg-indigo-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
