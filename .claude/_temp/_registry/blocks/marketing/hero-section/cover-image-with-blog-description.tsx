export default function CoverImageWithBlogDescription() {
  return (
    <section className="lg:pt-36 pt-10 lg:pb-16 pb-10">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-20 gap-10 inline-flex">
          <div className="w-full justify-start items-center gap-8 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-center items-start gap-7 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-5 flex">
                <div className="w-full justify-start items-center gap-5 flex">
                  <button className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded justify-start items-center gap-1.5 flex">
                    <span className="text-center text-white text-xs font-medium leading-normal">
                      Lifestyle
                    </span>
                  </button>
                  <div className="pl-2 pr-3 py-1 bg-gray-200 rounded justify-start items-center flex gap-1">
                    {/* SVG removed */}
                    <span className="text-center text-gray-700 text-xs font-medium leading-normal">
                      Jun 14, 2023
                    </span>
                  </div>
                </div>
                <h2 className="w-full text-gray-900 text-5xl font-bold font-manrope leading-snug">
                  Explore the Art of Living with Our Lifestyle Blog
                </h2>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Welcome to our lifestyle blog, your ultimate destination for
                embracing the richness of life. Dive into a world of
                inspiration, from wellness and fashion to travel and food,
                curated by our team of lifestyle enthusiasts...
              </p>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <img
                    className="w-6 h-6 object-cover"
                    src="https://pagedone.io/asset/uploads/1710225484.png"
                  />
                  <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Priya Mishra
                  </h6>
                </div>
                <h6 className="text-center text-black text-sm font-normal leading-normal">
                  /
                </h6>
                <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                  6 mins to read
                </h6>
              </div>
            </div>
            <img
              className="mx-auto lg:w-auto w-full h-[512px] rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1718967109.png"
            />
          </div>
          <div className="w-full justify-center items-center gap-5 grid lg:grid-cols-3 grid-cols-1">
            <div className="w-full justify-start items-center gap-3 flex">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967142.png"
              />
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  6 Secrets to an Easy Meditation Practice
                </h4>
                <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                  Sep 26, 2023
                </h6>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-3 flex">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967152.png"
              />
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8 ">
                  20 Best Places for Amazing Travel Experiences
                </h4>
                <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                  Nov 15, 2023
                </h6>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-3 flex">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967179.png"
              />
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  The Best Ideas to Improve Self-Love
                </h4>
                <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                  Jan 30, 2024
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
