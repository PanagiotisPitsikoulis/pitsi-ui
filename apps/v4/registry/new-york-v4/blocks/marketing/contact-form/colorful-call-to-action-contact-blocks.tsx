export default function ColorfulCallToActionContactBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-indigo-600">
          Contact Information
        </h2>
        <p className="font-inter pt-4 text-center text-base leading-7 font-normal text-gray-700">
          We’re here to assist you with any questions, concerns, or feedback.
          Whether you need support, more information.
        </p>
        <div className="grid gap-8 pt-14 lg:grid-cols-2 xl:grid-cols-3">
          <div className="order-2 flex flex-col gap-8 md:order-2 lg:order-1 xl:order-1">
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Address
                </h5>
                <p className="pt-2 text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  789 Oak Lane, Lakeside, TX 54321
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Contact
                </h5>
                <p className="pt-2 text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  1800-2541-2541, 1800-14-0147
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl bg-indigo-50 p-6 transition-all duration-500 hover:bg-indigo-600">
              {/* SVG removed */}
              <div className="font-inter">
                <h5 className="text-lg leading-7 font-medium text-black transition-all duration-500 group-hover:text-white">
                  Email
                </h5>
                <a className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                  pagedone1234@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="order-3 col-span-full overflow-hidden rounded-2xl md:order-3 lg:order-3 xl:order-2 xl:col-span-1">
            <iframe
              className="w-full"
              src="https://www.google.com/maps?q=Rajkot,Gujarat,India&z=13&output=embed"
              height={365}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="order-1 flex flex-col gap-6 md:order-1 lg:order-2 xl:order-3">
            <div className="font-inter flex flex-col gap-1.5">
              <label
                htmlFor=""
                className="flex items-center gap-1 text-base leading-6 font-medium text-gray-600"
              >
                Your Name
                {/* SVG removed */}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Name"
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
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 outline-none placeholder:text-gray-500 focus:border-gray-300"
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
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-lg leading-7 font-normal text-gray-400 outline-none placeholder:text-gray-500 focus:border-gray-300"
                placeholder="Phone"
              />
            </div>
            <button className="h-12 w-full rounded-2xl bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
