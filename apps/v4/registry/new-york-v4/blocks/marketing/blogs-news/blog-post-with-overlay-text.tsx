export default function BlogPostWithOverlayText() {
  return (
    <div className="overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Our Latest Blog
          </h2>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="w-full rounded-xl bg-cover bg-center max-sm:pt-20 sm:aspect-video md:aspect-square">
            <div className="flex h-full w-full items-end rounded-xl bg-gradient-to-b from-transparent to-gray-900/60">
              <div className="flex flex-col gap-4 px-8 py-6">
                <h4 className="font-manrope text-3xl leading-normal font-semibold text-white">
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="aspect-video w-full rounded-xl bg-cover bg-center md:aspect-square">
              <div className="flex h-full w-full items-end rounded-xl bg-gradient-to-b from-black/40 to-black/40">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm leading-normal font-semibold text-white">
                    Conducting UX Review Presentations
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    This blog delves into essential techniques and best
                    practices
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl bg-cover bg-center md:aspect-square">
              <div className="flex h-full w-full items-end rounded-xl bg-gradient-to-b from-black/40 to-black/40">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm leading-normal font-semibold text-white">
                    How Fintech Is Bridging the Gap
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    The gap between underserved populations and mainstream
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl bg-cover bg-center md:aspect-square">
              <div className="flex h-full w-full items-end rounded-xl bg-gradient-to-b from-black/40 to-black/40">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm leading-normal font-semibold text-white">
                    Harnessing Feedback to Boost Team
                  </h6>
                  <p className="text-xs font-normal text-gray-200">
                    The transformative impact of constructive feedback
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl bg-cover bg-center md:aspect-square">
              <div className="flex h-full w-full items-end rounded-xl bg-gradient-to-b from-black/40 to-black/40">
                <div className="flex flex-col gap-4 p-2.5">
                  <h6 className="text-sm leading-normal font-semibold text-white">
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
  )
}
