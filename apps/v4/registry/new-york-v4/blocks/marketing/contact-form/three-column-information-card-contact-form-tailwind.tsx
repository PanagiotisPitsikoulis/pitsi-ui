export default function ThreeColumnInformationCardContactFormTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-4 text-center text-4xl leading-10 font-bold text-black">
          Get In Touch
        </h2>
        <p className="mb-14 text-center text-base leading-6 font-normal text-gray-500">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
          <div className="grid h-96 place-content-between rounded-b-2xl border-t-2 border-indigo-600 bg-white p-6 shadow-xl">
            <div>
              <h3 className="mb-4 text-2xl leading-9 font-bold text-gray-900">
                Press
              </h3>
              <p className="text-base leading-6 font-normal text-gray-500">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="h-11 w-full rounded-full bg-indigo-50 text-center text-sm leading-5 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100 focus:outline-none">
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid h-96 rounded-b-2xl border-t-2 border-indigo-600 bg-white p-6 shadow-xl">
            <div>
              <h3 className="mb-4 text-2xl leading-9 font-bold text-gray-900">
                Help &amp; Supports
              </h3>
              <p className="text-base leading-6 font-normal text-gray-500">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="h-11 w-full rounded-full bg-indigo-50 text-center text-sm leading-5 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100 focus:outline-none">
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid h-96 rounded-b-2xl border-t-2 border-indigo-600 bg-white p-6 shadow-xl">
            <div>
              <h3 className="mb-4 text-2xl leading-9 font-bold text-gray-900">
                Sales
              </h3>
              <p className="text-base leading-6 font-normal text-gray-500">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="h-11 w-full rounded-full bg-indigo-50 text-center text-sm leading-5 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100 focus:outline-none">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
