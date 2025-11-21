export default function OneLargeBlogWithThreeSmallerBlog() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
          Our Blog
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-4xl text-center text-base font-normal text-gray-500 lg:px-10">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="mx-auto mb-8 grid grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="w-full">
            <img
              src="https://pagedone.io/asset/uploads/1722665620.png"
              alt="blog cover image"
              className="w-full rounded-2xl object-cover lg:h-full"
            />
          </div>
          <div className="flex w-full items-center">
            <div>
              <p className="mb-4 text-xl leading-8 font-medium text-gray-500">
                25 May 2024
              </p>
              <h3 className="font-manrope mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl sm:leading-normal">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="mb-7 text-base text-gray-500">
                Fames libero pellentesque bibendum lectus et urna sit feugiat
                consequat. Sit enim neque vitae volutpat nunc mollis tellus.
                Lacus tristique non amet ut. Velit habitant pulvinar suspendisse
                nec et massa.
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="https://pagedone.io/asset/uploads/1722665769.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <span className="text-lg font-medium text-gray-900">
                  Emily Johnson
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:max-w-full md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            <img
              src="https://pagedone.io/asset/uploads/1722665696.png"
              alt="blog cover image"
              className="rounded-xl object-cover"
            />
            <div>
              <h5 className="mb-2 text-lg font-semibold text-gray-900">
                10 Tips for Capturing Stunning Landscape.
              </h5>
              <p className="text-base text-gray-500">
                Landscape photography is one of the most popular genres among
                photographers.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722665790.png"
                alt="auther image"
                className="rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-600">
                Christopher Mitchell
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img
              src="https://pagedone.io/asset/uploads/1722665734.png"
              alt="blog cover image"
              className="rounded-xl object-cover"
            />
            <div>
              <h5 className="mb-2 text-lg font-semibold text-gray-900">
                How Technology is Changing the Field.
              </h5>
              <p className="text-base text-gray-500">
                Macro photography is a fascinating genre that allows you to
                capture the intricate details.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722665849.png"
                alt="auther image"
                className="rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-600">
                Daniel Harrison
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img
              src="https://pagedone.io/asset/uploads/1722665755.png"
              alt="blog cover image"
              className="rounded-xl object-cover"
            />
            <div>
              <h5 className="mb-2 text-lg font-semibold text-gray-900">
                Preserving History: The Importance.
              </h5>
              <p className="text-base text-gray-500">
                Preserving historic buildings and sites is an important
                consideration in the field of architecture
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722665873.png"
                alt="auther image"
                className="rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-600">
                Olivia Carter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
