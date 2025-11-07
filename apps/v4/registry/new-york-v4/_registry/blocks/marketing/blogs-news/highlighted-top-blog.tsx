export default function HighlightedTopBlog() {
  return (
    <div className="overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            The Ultimate Guide to Crafting Engaging Blog Content
          </h2>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1722664217.png"
              alt="blog-image"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="font-manrope mb-4 text-4xl leading-snug font-semibold text-gray-900">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="mb-10 text-base font-normal text-gray-500">
                Fames libero pellentesque bibendum lectus et urna sit feugiat
                consequat. Sit enim neque vitae volutpat nunc mollis tellus.
                Lacus tristique non amet ut. Velit habitant pulvinar suspendisse
                nec et massa. Volutpat blandit lacinia lobortis est nam cursus.
              </p>
              <button className="rounded-lg border border-gray-500 px-5 py-2 text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-500 hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664235.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <h4 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              How technology is revolutionizing the travel experience
            </h4>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722664265.png"
                alt="avatar image"
                className="rounded-full object-cover"
              />
              <p className="text-xl leading-8 font-normal text-gray-600">
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
            <h4 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              From Payments to Investments: Unveiling the Future of Fintech
            </h4>
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1722664265.png"
                alt="avatar image"
                className="rounded-full object-cover"
              />
              <p className="text-xl leading-8 font-normal text-gray-600">
                By Steven Nice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
