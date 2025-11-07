export default function TailwindContactFormWithTwoFields() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-gray-900 text-center">
          Connect With Us
        </h2>
        <p className="text-gray-500 text-lg font-normal leading-7 font-inter pt-3 text-center">
          our dedicated team is ready to support you.
        </p>
        <div className="w-full mx-auto max-w-4xl lg:px-16 pt-14 grid grid-cols-12 gap-8">
          <div className="col-span-full sm:col-span-6 font-inter flex flex-col gap-1.5">
            <label
              htmlFor=""
              className="text-sm font-medium leading-6 text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="py-2.5 px-4 border rounded-lg border-gray-300 text-gray-600 text-base font-normal leading-7 outline-none  placeholder:text-gray-400 shadow-sm focus:border-gray-500 transition-all duration-500"
              placeholder="John Smith"
            />
          </div>
          <div className="col-span-full sm:col-span-6 font-inter flex flex-col gap-1.5">
            <label
              htmlFor=""
              className="text-sm font-medium leading-6 text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              className="py-2.5 px-4 border rounded-lg border-gray-300 text-gray-600 text-base font-normal leading-7 outline-none  placeholder:text-gray-400 shadow-sm focus:border-gray-500 transition-all duration-500"
              placeholder="mail@pagedone.com"
            />
          </div>
          <div className="col-span-full font-inter flex flex-col gap-1.5">
            <label
              htmlFor=""
              className="text-sm font-medium leading-6 text-gray-600"
            >
              Message
            </label>
            <textarea
              name=""
              id=""
              className="py-2.5 px-4 resize-none h-36 border rounded-lg border-gray-300 text-gray-600 text-base font-normal leading-7 outline-none  placeholder:text-gray-400 shadow-sm focus:border-gray-500 transition-all duration-500"
              placeholder="Enter a description..."
            />
          </div>
          <div className="col-span-full pt-6">
            <button className="w-full py-2.5 px-5 text-center text-white font-inter text-base font-semibold leading-7 bg-emerald-700 rounded-xl transition-all duration-500 hover:bg-emerald-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
