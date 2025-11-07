export default function BlogPostWithOverlayText() {
  return (
    <div className="py-24  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex items-center flex-col justify-center mb-12">
          <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 text-center">
            Our Latest Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-xl mx-auto lg:max-w-full">
          <div className="bg-cover max-sm:pt-20 sm:aspect-video md:aspect-square bg-center w-full rounded-xl">
            <div className="bg-gradient-to-b from-transparent to-gray-900/60 w-full h-full rounded-xl flex items-end">
              <div className="flex flex-col gap-4 py-6 px-8">
                <h4 className="text-3xl font-semibold leading-normal font-manrope text-white">
                  Smart Strategies for Investing.
                </h4>
                <p className="text-sm font-medium text-white">
                  Investing in the right tools can significantly enhance the
                  efficiency and effectiveness of your portfolio management. In
                  this blog.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cover aspect-video md:aspect-square bg-center w-full rounded-xl">
              <div className="bg-gradient-to-b from-black/40 to-black/40 w-full h-full rounded-xl flex items-end">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm font-semibold leading-normal text-white">
                    Conducting UX Review Presentations
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    This blog delves into essential techniques and best
                    practices
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cover aspect-video md:aspect-square bg-center w-full rounded-xl">
              <div className="bg-gradient-to-b from-black/40 to-black/40 w-full h-full rounded-xl flex items-end">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm font-semibold leading-normal text-white">
                    How Fintech Is Bridging the Gap
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    The gap between underserved populations and mainstream
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cover aspect-video md:aspect-square bg-center w-full rounded-xl">
              <div className="bg-gradient-to-b from-black/40 to-black/40 w-full h-full rounded-xl flex items-end">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm font-semibold leading-normal text-white">
                    Harnessing Feedback to Boost Team
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    The transformative impact of constructive feedback
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cover aspect-video md:aspect-square bg-center w-full rounded-xl">
              <div className="bg-gradient-to-b from-black/40 to-black/40 w-full h-full rounded-xl flex items-end">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm font-semibold leading-normal text-white">
                    Boosting Your Mood for a Productive
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    This blog explores practical strategies and habits that can
                    positively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
