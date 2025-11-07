export default function LargeHorizontalBlogPost() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-gray-900 ">
          Popular News
        </h2>
        <p className="text-base font-normal text-gray-500 text-center mt-3 mb-12 max-w-4xl lg:px-10 mx-auto">
          Stay informed with Popular News, your go-to source for the latest
          headlines and trending stories. Covering a wide range of topics from
          current
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-w-full">
          <div className="w-full ">
            <img
              src="https://pagedone.io/asset/uploads/1722665508.png"
              alt="blog cover image"
              className="rounded-2xl lg:h-full w-full object-cover h-auto"
            />
          </div>
          <div className="w-full flex items-center">
            <div>
              <h3 className="font-manrope font-semibold text-4xl leading-normal text-gray-900 mb-4 max-sm:text-center">
                Imperdiet sed sit dapibus netus sit augue tristique nunc
                elementum.
              </h3>
              <p className="text-base text-gray-500 mb-10 max-sm:text-center">
                Fames libero pellentesque bibendum lectus et urna sit feugiat
                consequat. Sit enim neque vitae volutpat nunc mollis tellus.
                Lacus tristique non amet ut. Velit habitant pulvinar suspendisse
                nec et massa. Volutpat blandit lacinia lobortis est nam cursus.
              </p>
              <button className="sm:w-fit w-full py-2.5 pr-3.5 pl-5 rounded-lg flex items-center justify-center gap-1.5 bg-green-600 text-sm font-medium text-white transition-all duration-500 hover:bg-green-700">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full mx-auto">
            <img
              src="https://pagedone.io/asset/uploads/1722665523.png"
              alt="blog cover image"
              className="rounded-xl object-cover h-auto"
            />
            <div>
              <h4 className="text-xl font-medium leading-8 text-gray-900 mb-2">
                Discover the Newest Electronic Gadgets and Innovations
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                This guide highlights the essential gadgets that are shaping the
                future. Discover how these innovations.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722665569.png"
                  alt="auther image"
                  className="rounded-full object-cover h-auto"
                />
                <p className="text-base text-gray-600">Amelia Clark</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full mx-auto">
            <img
              src="https://pagedone.io/asset/uploads/1722665541.png"
              alt="blog cover image"
              className="rounded-xl object-cover h-auto"
            />
            <div>
              <h4 className="text-xl font-medium leading-8 text-gray-900 mb-2">
                we bring you a curated selection of the most exciting and
                impactful.
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                Stay ahead of the curve with the latest advancements in
                electronic gadgets and technology.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722665590.png"
                  alt="auther image"
                  className="rounded-full object-cover h-auto"
                />
                <p className="text-base text-gray-600">Benjamin Evans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
