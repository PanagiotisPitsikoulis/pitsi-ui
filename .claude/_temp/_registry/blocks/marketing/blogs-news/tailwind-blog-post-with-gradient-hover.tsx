export default function TailwindBlogPostWithGradientHover() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-3 max-lg:text-center">
            Our recent blogs
          </h2>
          <p className="text-lg text-gray-500 max-lg:text-center max-lg:max-w-xl max-lg:mx-auto">
            Surround yourself with the community and resources to help bring
            your vision to life.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 flex-wrap w-full max-lg:max-w-xl max-lg:mx-auto">
          <div className="relative before:content[' '] before:absolute before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:w-full before:h-full before:rounded-xl before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245105.png"
              alt="blogs tailwind section"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex items-center justify-between absolute bottom-0 gap-3 md:gap-24 w-full p-4 md:p-8 ">
              <h4 className="font-manrope text-white text-xl md:text-3xl font-semibold md:leading-[3rem] flex-1">
                Empowering financial freedom &amp; solutions
              </h4>
              <a
                href="#"
                className="w-16 cursor-pointer h-16 bg-white rounded-full flex justify-center items-center"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="relative before:content[' '] before:absolute before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:w-full before:h-full before:rounded-xl before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245122.png"
              alt="blogs tailwind section"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex items-center justify-between absolute bottom-0 gap-3 md:gap-24 w-full p-4 md:p-8">
              <h4 className="font-manrope text-white text-xl md:text-3xl font-semibold md:leading-[3rem] flex-1">
                Up-to-date investor database
              </h4>
              <a
                href="#"
                className="w-16 cursor-pointer h-16 bg-white rounded-full flex justify-center items-center"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="relative flex flex-col justify-center max-lg:items-center lg:order-none order-last">
            <h3 className="font-manrope text-xl md:text-3xl text-gray-900 font-bold mb-14 md:leading-[3rem] max-lg:text-center">
              Pagedone has helped investors at all stages to grow investments.
            </h3>
            <a
              href="#"
              className="bg-indigo-600 cursor-pointer shadow-sm rounded-full py-4 px-8 w-full lg:w-52 flex justify-center text-lg text-white font-semibold hover:bg-indigo-700"
            >
              View All
            </a>
          </div>
          <div className="relative before:content[' '] before:absolute before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:w-full before:h-full before:rounded-xl before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245142.png"
              alt="blogs tailwind section"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex items-center justify-between absolute bottom-0 gap-3 md:gap-24 w-full p-4 md:p-8">
              <h4 className="font-manrope text-white text-xl md:text-3xl font-semibold md:leading-[3rem] flex-1">
                Tailoring education to individual needs
              </h4>
              <a
                href="#"
                className="w-16 cursor-pointer h-16 bg-white rounded-full flex justify-center items-center"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
