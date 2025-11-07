export default function TwoColumnBlogPostWithNameOverlap() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-4">
            Our latest blogs
          </h2>
          <p className="text-gray-500 text-center">
            A daily dose of knowledge will keep build you to your next stage
          </p>
        </div>
        <div className="flex justify-center mb-16 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="group w-full lg:w-1/3">
            <div className="flex items-center mb-5 overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104298.png"
                alt="blogs tailwind section"
                className="group-hover:skew-y-3 group-hover:scale-110 transition-all duration-700 ease-in-out rounded-2xl w-full object-cover"
              />
            </div>
            <div className="block ">
              <span className="text-sm text-gray-500 mb-2 block">
                25 May 2023
              </span>
              <h4 className="text-lg text-gray-900 font-semibold leading-8 mb-2 transition-all duration-700 ease-in-out cursor-pointer">
                10 Tips for Capturing Stunning Landscape Photos
              </h4>
              <p className="text-gray-500 leading-6">
                Landscape photography is one of the most popular genres among
                photographers.
              </p>
            </div>
          </div>
          <div className="group w-full lg:w-1/3">
            <div className="flex items-center mb-5 overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104312.png"
                alt="blogs tailwind section"
                className="group-hover:skew-y-3 group-hover:scale-110 transition-all duration-700 ease-in-out rounded-2xl w-full object-cover"
              />
            </div>
            <div className="block">
              <span className="text-sm text-gray-500  mb-2 block">
                25 Jun 2023
              </span>
              <h4 className="text-lg text-gray-900 font-semibold leading-8 mb-2  transition-all duration-700 ease-in-out cursor-pointer">
                How Technology is Changing the Field of Architecture
              </h4>
              <p className="text-gray-500 leading-6">
                Macro photography is a fascinating genre that allows you to
                capture the intricate details.
              </p>
            </div>
          </div>
          <div className="group w-full lg:w-1/3">
            <div className="flex items-center mb-5 overflow-hidden rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1711104323.png"
                alt="blogs tailwind section"
                className="group-hover:skew-y-3 group-hover:scale-110 transition-all duration-700 ease-in-out rounded-2xl w-full object-cover"
              />
            </div>
            <div className="block">
              <span className="text-sm text-gray-500  mb-2 block">
                25 Dec 2023
              </span>
              <h4 className="text-lg text-gray-900 font-semibold leading-8 mb-2 transition-all duration-700 ease-in-out cursor-pointer">
                Preserving History: The Importance of Architectural Conservation
                and Restoration
              </h4>
              <p className="text-gray-500 leading-6">
                Preserving historic buildings and sites is an important
                consideration in the field of architecture
              </p>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-700 ease-in-out hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
}
