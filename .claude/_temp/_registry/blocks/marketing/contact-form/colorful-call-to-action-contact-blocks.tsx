export default function ColorfulCallToActionContactBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-indigo-600 text-4xl font-bold leading-10 font-manrope text-center">
          Contact Information
        </h2>
        <p className="font-inter text-gray-700 text-base font-normal leading-7 pt-4 text-center">
          We’re here to assist you with any questions, concerns, or feedback.
          Whether you need support, more information.
        </p>
        <div className="pt-14 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="order-2 md:order-2 lg:order-1 xl:order-1 flex flex-col gap-8">
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white pt-2">
                  1800-2541-2541, 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group p-6 flex items-center gap-4 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg font-medium leading-7 text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <a className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  pagedone1234@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-full order-3 md:order-3 xl:col-span-1 lg:order-3 xl:order-2 rounded-2xl overflow-hidden">
            <iframe
              className="w-full"
              src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
              height={365}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="order-1 md:order-1 lg:order-2 xl:order-3 flex flex-col gap-6">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="text-base font-medium leading-6 text-gray-600 flex items-center gap-1"
              >
                Your Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Name"
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
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300"
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
                className="py-3 px-5 border rounded-lg border-gray-200 text-gray-400 text-lg font-normal leading-7 outline-none bg-white placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Phone"
              />
            </div>
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-2xl transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
