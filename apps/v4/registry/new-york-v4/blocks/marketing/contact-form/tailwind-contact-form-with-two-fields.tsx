export default function TailwindContactFormWithTwoFields() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-gray-900">
          Connect With Us
        </h2>
        <p className="font-inter pt-3 text-center text-lg leading-7 font-normal text-gray-500">
          our dedicated team is ready to support you.
        </p>
        <div className="mx-auto grid w-full max-w-4xl grid-cols-12 gap-8 pt-14 lg:px-16">
          <div className="font-inter col-span-full flex flex-col gap-1.5 sm:col-span-6">
            <label
              htmlFor=""
              className="text-sm leading-6 font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-7 font-normal text-gray-600 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-500"
              placeholder="John Smith"
            />
          </div>
          <div className="font-inter col-span-full flex flex-col gap-1.5 sm:col-span-6">
            <label
              htmlFor=""
              className="text-sm leading-6 font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-7 font-normal text-gray-600 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-500"
              placeholder="mail@pagedone.com"
            />
          </div>
          <div className="font-inter col-span-full flex flex-col gap-1.5">
            <label
              htmlFor=""
              className="text-sm leading-6 font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              name=""
              id=""
              className="h-36 resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-7 font-normal text-gray-600 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-500"
              placeholder="Enter a description..."
            />
          </div>
          <div className="col-span-full pt-6">
            <button className="font-inter w-full rounded-xl bg-emerald-700 px-5 py-2.5 text-center text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-emerald-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
