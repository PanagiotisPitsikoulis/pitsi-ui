export default function CustomerReviewsWithAverageRating() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start gap-8 lg:w-fit">
            <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
              Average Rating
            </h2>
            <div className="flex w-full flex-col items-start justify-center gap-8 rounded-2xl border border-gray-200 p-5">
              <div className="flex w-full flex-col items-start justify-center gap-6">
                <div className="flex w-full flex-col items-start justify-center gap-4">
                  <div className="inline-flex items-center justify-start gap-4">
                    <h3 className="font-manrope text-3xl leading-normal font-semibold text-gray-800">
                      4.5
                    </h3>
                    <div className="inline-flex flex-col items-start justify-center gap-1">
                      <div className="inline-flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                      </div>
                      <h6 className="text-base leading-relaxed font-medium text-gray-400">
                        50k Reviews
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <div className="flex w-full items-center">
                    <p className="py-[1px] text-lg font-medium text-black">5</p>
                    <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[320px]">
                      <span className="flex h-full w-[90%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300" />
                    </p>
                    <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                      90%
                    </p>
                  </div>
                  <div className="flex w-full items-center">
                    <p className="py-[1px] text-lg font-medium text-black">4</p>
                    <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[320px]">
                      <span className="flex h-full w-[60%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300" />
                    </p>
                    <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                      60%
                    </p>
                  </div>
                  <div className="flex w-full items-center">
                    <p className="py-[1px] text-lg font-medium text-black">3</p>
                    <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[320px]">
                      <span className="flex h-full w-[40%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300" />
                    </p>
                    <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                      40%
                    </p>
                  </div>
                  <div className="flex w-full items-center">
                    <p className="py-[1px] text-lg font-medium text-black">2</p>
                    <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[320px]">
                      <span className="flex h-full w-[30%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300" />
                    </p>
                    <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                      30%
                    </p>
                  </div>
                  <div className="flex w-full items-center">
                    <p className="py-[1px] text-lg font-medium text-black">1</p>
                    <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[320px]">
                      <span className="flex h-full w-[3%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300" />
                    </p>
                    <p className="mr-1.5 flex items-center py-[1px] text-sm font-medium text-gray-800">
                      3% <span className="text-transparent">0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Write your Review
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-400">
                    Share your feedback and help create a better shopping
                    experience for everyone.
                  </p>
                </div>
                <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-orange-300 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:from-orange-600 hover:to-orange-400 sm:w-fit">
                  <span className="cursor-pointer px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Submit Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
              Customer Feedback
            </h2>
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
                <div className="inline-flex w-full items-center justify-start gap-4">
                  <div className="flex items-start justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974877.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-center gap-2">
                    <div className="inline-flex w-full items-center justify-between">
                      <h5 className="text-lg leading-8 font-semibold text-black">
                        Rachel Patel
                      </h5>
                      <div className="flex items-center justify-end gap-1.5"></div>
                    </div>
                    <h6 className="text-sm leading-snug font-medium text-gray-400">
                      October 5, 2023
                    </h6>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-400">
                  Couldn't resist buying this watch after seeing it online, and
                  I'm so glad I did. It's even more stunning in person, and the
                  build quality is exceptional. Will definitely be purchasing
                  from this brand again!
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
                <div className="inline-flex w-full items-center justify-start gap-4">
                  <div className="flex items-start justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974887.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-center gap-2">
                    <div className="inline-flex w-full items-center justify-between">
                      <h5 className="text-lg leading-8 font-semibold text-black">
                        Christopher Lee
                      </h5>
                      <div className="flex items-center justify-end gap-1.5"></div>
                    </div>
                    <h6 className="text-sm leading-snug font-medium text-gray-400">
                      June 25, 2023
                    </h6>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-400">
                  Really impressed with the quality and style of this watch.
                  It's exactly what I was looking for – versatile, durable, and
                  looks great with any outfit. Docked half a star because the
                  clasp is a bit tricky to open, but otherwise, it's perfect!
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
                <div className="inline-flex w-full items-center justify-start gap-4">
                  <div className="flex items-start justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974897.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="inline-flex w-full flex-col items-start justify-center gap-2">
                    <div className="inline-flex w-full items-center justify-between">
                      <h5 className="text-lg leading-8 font-semibold text-black">
                        Brian Chen
                      </h5>
                      <div className="flex items-center justify-end gap-1.5"></div>
                    </div>
                    <h6 className="text-sm leading-snug font-medium text-gray-400">
                      April 15, 2022
                    </h6>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-400">
                  While this watch has its merits, such as its sleek design and
                  comfortable wear, I found the strap to be somewhat flimsy, and
                  the clasp occasionally difficult to secure. Despite these
                  minor drawbacks, it does keep accurate time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
