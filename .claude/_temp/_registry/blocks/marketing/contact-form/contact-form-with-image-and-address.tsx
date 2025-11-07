export default function ContactFormWithImageAndAddress() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-14">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1714472788.png"
              alt="Contact Us image"
              className="mx-auto h-full lg:w-full md:w-[592px] sm:w-[510px] w-[450px] rounded-3xl object-cover"
            />
          </div>
          <div className="lg:w-full md:w-[592px] sm:w-[510px] w-[450px] mx-auto lg:p-11 p-1 lg:mt-0 mt-5">
            <div className="grid gap-5 mb-11">
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-normal">
                Send us a message
              </h2>
              <p className="text-gray-600 text-lg font-normal">
                Your satisfaction is our top priority, and we are committed to
                providing exceptional service and support
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Your Name
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Email
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Phone Number
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1 flex">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-600 text-base font-medium leading-7">
                      Description
                    </span>
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    className="w-full px-5 py-3 focus:outline-none rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-lg font-normal leading-relaxed"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <span className="text-white text-base font-semibold leading-7">
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-full md:w-[592px] sm:w-[510px] w-[450px] mx-auto">
          <ul className="p-6 gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border border-gray-200 bg-white rounded-3xl">
            <li className="flex flex-col gap-5 group">
              <a className="w-fit rounded-lg bg-orange-50 p-3 mx-auto group-hover:bg-orange-100 transition-all duration-700 ease-in-out">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-2">
                <h5 className="text-black text-center text-lg font-medium">
                  Address
                </h5>
                <p className="text-gray-500 text-center text-sm font-normal">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-5 group">
              <div className="w-fit rounded-lg bg-cyan-50 p-3 mx-auto group-hover:bg-cyan-100 transition-all duration-700 ease-in-out">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-black text-center text-lg font-medium">
                  Contact
                </h5>
                <p className="text-gray-500 text-center text-sm font-normal">
                  1800-2541-2541, 1800-14-0147
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-5 group">
              <div className="w-fit rounded-lg bg-green-50 p-3 mx-auto group-hover:bg-green-100 transition-all duration-700 ease-in-out">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-black text-center text-lg font-medium">
                  Email
                </h5>
                <p className="text-gray-500 text-center text-sm font-normal">
                  pagedone1234@gmail.com
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-5 group">
              <div className="w-fit rounded-lg bg-pink-50 p-3 mx-auto group-hover:bg-pink-100 transition-all duration-700 ease-in-out">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-black text-center text-lg font-medium">
                  Google Map
                </h5>
                <p className="text-gray-500 text-center text-sm font-normal">
                  Discover our prime location{" "}
                  <a className="text-indigo-600"> View More </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
