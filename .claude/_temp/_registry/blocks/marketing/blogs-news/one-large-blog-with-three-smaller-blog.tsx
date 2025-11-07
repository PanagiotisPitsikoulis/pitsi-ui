export default function OneLargeBlogWithThreeSmallerBlog() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-gray-900 ">
          Our Blog
        </h2>
        <p className="text-base font-normal text-gray-500 text-center mt-3 mb-12 max-w-4xl lg:px-10 mx-auto">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mx-auto lg:max-w-full mb-8">
          <div className="w-full">
            <img
              src="https://pagedone.io/asset/uploads/1722665620.png"
              alt="blog cover image"
              className="rounded-2xl lg:h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center w-full">
            <div>
              <p className="text-xl font-medium leading-8 text-gray-500 mb-4">
                25 May 2024
              </p>
              <h3 className="font-manrope font-semibold text-3xl sm:text-4xl sm:leading-normal text-gray-900 mb-4 ">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="text-base text-gray-500 mb-7 ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  md:max-w-full">
          <div className="flex flex-col gap-5">
            <img
              src="https://pagedone.io/asset/uploads/1722665696.png"
              alt="blog cover image"
              className="rounded-xl object-cover"
            />
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
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
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
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
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
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
  );
}
