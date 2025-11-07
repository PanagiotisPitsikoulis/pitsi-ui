export default function BlogPostCardsWithBottomImage() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-gray-900 ">
          Our recent blogs
        </h2>
        <p className="text-base font-normal text-gray-500 text-center mt-3 mb-12 max-w-4xl px-4 mx-auto">
          This blog explores the importance of surrounding yourself with
          like-minded individuals, mentors, and networks.
        </p>
        <div className="grid grid-cols-1 min-[827px]:grid-cols-2 lg:grid-cols-1 gap-5 max-w-lg mx-auto min-[827px]:max-w-full lg:gap-8">
          <div className="grid grid-cols-12 lg:gap-8 gap-6 p-3 lg:p-6 rounded-2xl bg-gray-50 ">
            <div className="col-span-12 lg:col-span-5 ">
              <img
                src="https://pagedone.io/asset/uploads/1722664501.png"
                alt="blog image"
                className="rounded-xl h-full object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 flex items-center">
              <div>
                <h4 className="text-3xl font-manrope font-semibold leading-snug text-gray-900">
                  How to grow your profit through systematic investment..
                </h4>
                <p className="pt-2 pb-4 text-base font-normal text-gray-500 ">
                  This blog explores the principles and practices of disciplined
                  investment approaches that can enhance your financial returns.
                </p>
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722664539.png"
                      alt="auther avatar image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-900">
                      Alexa Kimberly
                    </span>
                  </div>
                  <p className="text-base font-medium text-indigo-600">
                    Mar 26, 2024
                  </p>
                </div>
                <button className="py-2 px-3.5 rounded-full bg-indigo-600 text-white text-xs font-medium transition-all duration-500 hover:bg-indigo-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-8 gap-6 p-3 lg:p-6 rounded-2xl bg-gray-50 ">
            <div className="col-span-12 lg:col-span-7 flex items-center">
              <div>
                <h4 className="text-3xl font-manrope font-semibold leading-snug text-gray-900">
                  Tile Renovation Services: Transforming Your Space with Expert
                </h4>
                <p className="pt-2 pb-4 text-base font-normal text-gray-500 ">
                  This blog explores how expert tile renovation services can
                  breathe new life into kitchens, bathrooms, floors, and more.
                </p>
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722664567.png"
                      alt="auther avatar image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-900">
                      Emily Johnson
                    </span>
                  </div>
                  <p className="text-base font-medium text-indigo-600">
                    Mar 26, 2024
                  </p>
                </div>
                <button className="py-2 px-3.5 rounded-full bg-indigo-600 text-white text-xs font-medium transition-all duration-500 hover:bg-indigo-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 max-lg:row-start-1">
              <img
                src="https://pagedone.io/asset/uploads/1722664521.png"
                alt="blog image"
                className="rounded-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
