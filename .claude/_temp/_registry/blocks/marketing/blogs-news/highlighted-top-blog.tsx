export default function HighlightedTopBlog() {
  return (
    <div className="py-24  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex items-center flex-col justify-center mb-12">
          <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 text-center">
            The Ultimate Guide to Crafting Engaging Blog Content
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1722664217.png"
              alt="blog-image"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="font-manrope text-4xl font-semibold leading-snug text-gray-900 mb-4">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="text-base font-normal text-gray-500 mb-10">
                Fames libero pellentesque bibendum lectus et urna sit feugiat
                consequat. Sit enim neque vitae volutpat nunc mollis tellus.
                Lacus tristique non amet ut. Velit habitant pulvinar suspendisse
                nec et massa. Volutpat blandit lacinia lobortis est nam cursus.
              </p>
              <button className="rounded-lg border border-gray-500 py-2 px-5 text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-500 hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664235.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <h4 className="text-3xl font-semibold font-manrope leading-snug text-gray-900">
              How technology is revolutionizing the travel experience
            </h4>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722664265.png"
                alt="avatar image"
                className="rounded-full object-cover"
              />
              <p className="text-xl font-normal leading-8 text-gray-600">
                By Steven Nice
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664249.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <h4 className="text-3xl font-semibold font-manrope leading-snug text-gray-900">
              From Payments to Investments: Unveiling the Future of Fintech
            </h4>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722664265.png"
                alt="avatar image"
                className="rounded-full object-cover"
              />
              <p className="text-xl font-normal leading-8 text-gray-600">
                By Steven Nice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
