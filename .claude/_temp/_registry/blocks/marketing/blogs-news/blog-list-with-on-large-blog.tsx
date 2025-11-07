export default function BlogListWithOnLargeBlog() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:justify-between mb-12">
          <div className="block">
            <h2 className="font-manrope font-bold text-4xl leading-snug max-sm:text-center text-gray-900 mb-3 lg:text-start text-center">
              Our Recent Blog Entries
            </h2>
            <p className="text-lg font-normal leading-8 text-gray-500 max-sm:text-center max-w-2xl pr-9 lg:text-start text-center">
              the latest trends and cutting-edge technologies to practical tips
              and inspiring success stories, our blog is designed to inform.
            </p>
          </div>
          <button className=" rounded-full whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-indigo-600 py-2.5 px-10 text-white text-base font-semibold transition-all duration-300 hover:bg-indigo-700">
            View All
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 max-w-xl mx-auto lg:max-w-full">
          <div className="flex flex-col gap-5 w-full lg:max-w-[552px]">
            <img
              src="https://pagedone.io/asset/uploads/1722664729.png"
              alt="blog image"
              className="rounded-lg max-md:aspect-video h-auto object-cover"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-900">
                Unlock the potential of impactful advertising with this guide to
                creating.
              </h6>
              <p className="pt-4 pb-5 text-base font-normal text-gray-500">
                Discover how to craft memorable and effective brand messages
                that capture attention, resonate with your audience, and drive
                engagement.
              </p>
              <a
                href="javascript:;"
                className="flex items-center gap-1.5 py-2 text-xs font-medium text-indigo-600 transition-all duration-500 hover:gap-2.5"
              >
                Read more
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-5 w-full">
              <img
                src="https://pagedone.io/asset/uploads/1722664741.png"
                alt="blog image"
                className="rounded-lg max-md:aspect-video h-auto object-cover"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-900">
                  Tech-Enhanced Journeys: How the Travel Industry Embraces.
                </h6>
                <p className="pt-4 pb-5 text-base font-normal text-gray-500">
                  Discover how the travel industry is transforming with
                  cutting-edge.
                </p>
                <a
                  href="javascript:;"
                  className="flex items-center gap-1.5 py-2 text-xs font-medium text-indigo-600 transition-all duration-500 hover:gap-2.5"
                >
                  Read more
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <img
                src="https://pagedone.io/asset/uploads/1722664754.png"
                alt="blog image"
                className="rounded-lg max-md:aspect-video h-auto object-cover"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-900">
                  Tech essentials: exploring the latest electronic gadgets and
                </h6>
                <p className="pt-4 pb-5 text-base font-normal text-gray-500">
                  Explore the latest innovations that are reshaping travel
                  experiences.
                </p>
                <a
                  href="javascript:;"
                  className="flex items-center gap-1.5 py-2 text-xs font-medium text-indigo-600 transition-all duration-500 hover:gap-2.5"
                >
                  Read more
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
