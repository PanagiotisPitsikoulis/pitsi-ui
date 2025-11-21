export default function TwoColumnBlogPostWithNameOverlap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Our latest blogs
          </h2>
          <p className="text-center text-gray-500">
            A daily dose of knowledge will keep build you to your next stage
          </p>
        </div>
        <div className="mb-16 flex flex-wrap justify-center gap-y-8 max-lg:mx-auto max-lg:max-w-xl md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group w-full lg:w-1/3">
            <div className="mb-5 flex items-center overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104298.png"
                alt="blogs tailwind section"
                className="w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:skew-y-3"
              />
            </div>
            <div className="block">
              <span className="mb-2 block text-sm text-gray-500">
                25 May 2023
              </span>
              <h4 className="mb-2 cursor-pointer text-lg leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                10 Tips for Capturing Stunning Landscape Photos
              </h4>
              <p className="leading-6 text-gray-500">
                Landscape photography is one of the most popular genres among
                photographers.
              </p>
            </div>
          </div>
          <div className="group w-full lg:w-1/3">
            <div className="mb-5 flex items-center overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104312.png"
                alt="blogs tailwind section"
                className="w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:skew-y-3"
              />
            </div>
            <div className="block">
              <span className="mb-2 block text-sm text-gray-500">
                25 Jun 2023
              </span>
              <h4 className="mb-2 cursor-pointer text-lg leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                How Technology is Changing the Field of Architecture
              </h4>
              <p className="leading-6 text-gray-500">
                Macro photography is a fascinating genre that allows you to
                capture the intricate details.
              </p>
            </div>
          </div>
          <div className="group w-full lg:w-1/3">
            <div className="mb-5 flex items-center overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104323.png"
                alt="blogs tailwind section"
                className="w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:skew-y-3"
              />
            </div>
            <div className="block">
              <span className="mb-2 block text-sm text-gray-500">
                25 Dec 2023
              </span>
              <h4 className="mb-2 cursor-pointer text-lg leading-8 font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                Preserving History: The Importance of Architectural Conservation
                and Restoration
              </h4>
              <p className="leading-6 text-gray-500">
                Preserving historic buildings and sites is an important
                consideration in the field of architecture
              </p>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="mx-auto flex w-52 cursor-pointer items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-700 ease-in-out hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  )
}
