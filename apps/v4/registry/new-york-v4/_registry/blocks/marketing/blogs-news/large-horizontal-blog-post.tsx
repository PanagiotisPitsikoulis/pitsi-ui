export default function LargeHorizontalBlogPost() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
          Popular News
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-4xl text-center text-base font-normal text-gray-500 lg:px-10">
          Stay informed with Popular News, your go-to source for the latest
          headlines and trending stories. Covering a wide range of topics from
          current
        </p>
        <div className="grid w-full grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="w-full">
            <img
              src="https://pagedone.io/asset/uploads/1722665508.png"
              alt="blog cover image"
              className="h-auto w-full rounded-2xl object-cover lg:h-full"
            />
          </div>
          <div className="flex w-full items-center">
            <div>
              <h3 className="font-manrope mb-4 text-4xl leading-normal font-semibold text-gray-900 max-sm:text-center">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="mb-10 text-base text-gray-500 max-sm:text-center">
                Fames libero pellentesque bibendum lectus et urna sit feugiat
                consequat. Sit enim neque vitae volutpat nunc mollis tellus.
                Lacus tristique non amet ut. Velit habitant pulvinar suspendisse
                nec et massa. Volutpat blandit lacinia lobortis est nam cursus.
              </p>
              <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-green-600 py-2.5 pr-3.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-green-700 sm:w-fit">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src="https://pagedone.io/asset/uploads/1722665523.png"
              alt="blog cover image"
              className="h-auto rounded-xl object-cover"
            />
            <div>
              <h4 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                Discover the Newest Electronic Gadgets and Innovations
              </h4>
              <p className="mb-4 text-xs text-gray-500">
                This guide highlights the essential gadgets that are shaping the
                future. Discover how these innovations.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722665569.png"
                  alt="auther image"
                  className="h-auto rounded-full object-cover"
                />
                <p className="text-base text-gray-600">Amelia Clark</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src="https://pagedone.io/asset/uploads/1722665541.png"
              alt="blog cover image"
              className="h-auto rounded-xl object-cover"
            />
            <div>
              <h4 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                we bring you a curated selection of the most exciting and
                impactful.
              </h4>
              <p className="mb-4 text-xs text-gray-500">
                Stay ahead of the curve with the latest advancements in
                electronic gadgets and technology.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722665590.png"
                  alt="auther image"
                  className="h-auto rounded-full object-cover"
                />
                <p className="text-base text-gray-600">Benjamin Evans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
