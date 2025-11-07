export default function ThreeColumnInformationCardContactFormTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-black text-4xl font-bold leading-10 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-500 text-center text-base font-normal leading-6 mb-14">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-8 gap-y-8">
          <div className="h-96 grid p-6 rounded-b-2xl border-t-2 border-indigo-600 bg-white shadow-xl place-content-between">
            <div>
              <h3 className="text-gray-900 text-2xl font-bold leading-9 mb-4">
                Press
              </h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="w-full h-11 bg-indigo-50 focus:outline-none hover:bg-indigo-100 transition-all duration-700 rounded-full text-indigo-600 text-sm font-semibold text-center leading-5">
                Contact Us
              </button>
            </div>
          </div>
          <div className="h-96 grid p-6 rounded-b-2xl border-t-2 border-indigo-600 bg-white shadow-xl">
            <div>
              <h3 className="text-gray-900 text-2xl font-bold leading-9 mb-4">
                Help &amp; Supports
              </h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="w-full h-11 bg-indigo-50 focus:outline-none hover:bg-indigo-100 transition-all duration-700 rounded-full text-indigo-600 text-sm font-semibold text-center leading-5">
                Contact Us
              </button>
            </div>
          </div>
          <div className="h-96 grid p-6 rounded-b-2xl border-t-2 border-indigo-600 bg-white shadow-xl">
            <div>
              <h3 className="text-gray-900 text-2xl font-bold leading-9 mb-4">
                Sales
              </h3>
              <p className="text-gray-500 text-base font-normal leading-6">
                Are you interested in our latest news or working on a grammarly
                story and need to get in touch?
              </p>
            </div>
            <div className="flex items-end">
              <button className="w-full h-11 bg-indigo-50 focus:outline-none hover:bg-indigo-100 transition-all duration-700 rounded-full text-indigo-600 text-sm font-semibold text-center leading-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
