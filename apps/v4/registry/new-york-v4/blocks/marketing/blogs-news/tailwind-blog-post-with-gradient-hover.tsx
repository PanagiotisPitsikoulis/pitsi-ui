export default function TailwindBlogPostWithGradientHover() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-manrope mb-3 text-4xl font-bold text-gray-900 max-lg:text-center">
            Our recent blogs
          </h2>
          <p className="text-lg text-gray-500 max-lg:mx-auto max-lg:max-w-xl max-lg:text-center">
            Surround yourself with the community and resources to help bring
            your vision to life.
          </p>
        </div>
        <div className="grid w-full flex-wrap gap-8 max-lg:mx-auto max-lg:max-w-xl lg:grid-cols-2">
          <div className="before:content[' '] relative before:absolute before:h-full before:w-full before:rounded-xl before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245105.png"
              alt="blogs tailwind section"
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 flex w-full items-center justify-between gap-3 p-4 md:gap-24 md:p-8">
              <h4 className="font-manrope flex-1 text-xl font-semibold text-white md:text-3xl md:leading-[3rem]">
                Empowering financial freedom &amp; solutions
              </h4>
              <a
                href="#"
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="before:content[' '] relative before:absolute before:h-full before:w-full before:rounded-xl before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245122.png"
              alt="blogs tailwind section"
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 flex w-full items-center justify-between gap-3 p-4 md:gap-24 md:p-8">
              <h4 className="font-manrope flex-1 text-xl font-semibold text-white md:text-3xl md:leading-[3rem]">
                Up-to-date investor database
              </h4>
              <a
                href="#"
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="relative order-last flex flex-col justify-center max-lg:items-center lg:order-none">
            <h3 className="font-manrope mb-14 text-xl font-bold text-gray-900 max-lg:text-center md:text-3xl md:leading-[3rem]">
              Pagedone has helped investors at all stages to grow investments.
            </h3>
            <a
              href="#"
              className="flex w-full cursor-pointer justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-700 lg:w-52"
            >
              View All
            </a>
          </div>
          <div className="before:content[' '] relative before:absolute before:h-full before:w-full before:rounded-xl before:bg-gradient-to-b before:from-gray-900/0 before:to-gray-900/100 before:transition-all before:duration-500 hover:before:from-gray-900/0 hover:before:to-indigo-900/100">
            <img
              src="https://pagedone.io/asset/uploads/1696245142.png"
              alt="blogs tailwind section"
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 flex w-full items-center justify-between gap-3 p-4 md:gap-24 md:p-8">
              <h4 className="font-manrope flex-1 text-xl font-semibold text-white md:text-3xl md:leading-[3rem]">
                Tailoring education to individual needs
              </h4>
              <a
                href="#"
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
