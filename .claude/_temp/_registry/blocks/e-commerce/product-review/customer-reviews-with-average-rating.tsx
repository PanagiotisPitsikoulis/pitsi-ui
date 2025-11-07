export default function CustomerReviewsWithAverageRating() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="flex lg:flex-row flex-col gap-12">
          <div className="lg:w-fit w-full flex-col items-start gap-8 inline-flex">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Average Rating
            </h2>
            <div className="w-full p-5 rounded-2xl border border-gray-200 flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full flex-col justify-center items-start gap-4 flex">
                  <div className="justify-start items-center gap-4 inline-flex">
                    <h3 className="text-gray-800 text-3xl font-semibold font-manrope leading-normal">
                      4.5
                    </h3>
                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                      <div className="justify-start items-center gap-1.5 inline-flex">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                      </div>
                      <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                        50k Reviews
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black">5</p>
                    <p className="h-2.5 lg:w-[320px] w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                      <span className="h-full w-[90%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300 flex" />
                    </p>
                    <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                      90%
                    </p>
                  </div>
                  <div className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black">4</p>
                    <p className="h-2.5 lg:w-[320px] w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                      <span className="h-full w-[60%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300 flex" />
                    </p>
                    <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                      60%
                    </p>
                  </div>
                  <div className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black">3</p>
                    <p className="h-2.5 lg:w-[320px] w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                      <span className="h-full w-[40%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300 flex" />
                    </p>
                    <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                      40%
                    </p>
                  </div>
                  <div className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black">2</p>
                    <p className="h-2.5 lg:w-[320px] w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                      <span className="h-full w-[30%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300 flex" />
                    </p>
                    <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                      30%
                    </p>
                  </div>
                  <div className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black">1</p>
                    <p className="h-2.5 lg:w-[320px] w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                      <span className="h-full w-[3%] rounded-[30px] bg-gradient-to-tr from-orange-500 to-orange-300 flex" />
                    </p>
                    <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5 flex items-center">
                      3% <span className="text-transparent">0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-center items-start gap-4 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Write your Review
                  </h4>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    Share your feedback and help create a better shopping
                    experience for everyone.
                  </p>
                </div>
                <div className="sm:w-fit w-full px-5 py-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed cursor-pointer">
                    Submit Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Customer Feedback
            </h2>
            <div className="flex flex-col gap-6">
              <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-center gap-4 inline-flex">
                  <div className="justify-start items-start flex">
                    <div className="w-16 h-16 bg-sky-100 rounded-full justify-center items-center flex">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974877.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <h5 className="text-black text-lg font-semibold leading-8">
                        Rachel Patel
                      </h5>
                      <div className="justify-end items-center gap-1.5 flex"></div>
                    </div>
                    <h6 className="text-gray-400 text-sm font-medium leading-snug">
                      October 5, 2023
                    </h6>
                  </div>
                </div>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
                  Couldn't resist buying this watch after seeing it online, and
                  I'm so glad I did. It's even more stunning in person, and the
                  build quality is exceptional. Will definitely be purchasing
                  from this brand again!
                </p>
              </div>
              <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-center gap-4 inline-flex">
                  <div className="justify-start items-start flex">
                    <div className="w-16 h-16 bg-purple-100 rounded-full justify-center items-center flex">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974887.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <h5 className="text-black text-lg font-semibold leading-8">
                        Christopher Lee
                      </h5>
                      <div className="justify-end items-center gap-1.5 flex"></div>
                    </div>
                    <h6 className="text-gray-400 text-sm font-medium leading-snug">
                      June 25, 2023
                    </h6>
                  </div>
                </div>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
                  Really impressed with the quality and style of this watch.
                  It's exactly what I was looking for – versatile, durable, and
                  looks great with any outfit. Docked half a star because the
                  clasp is a bit tricky to open, but otherwise, it's perfect!
                </p>
              </div>
              <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-center gap-4 inline-flex">
                  <div className="justify-start items-start flex">
                    <div className="w-16 h-16 bg-red-100 rounded-full justify-center items-center flex">
                      <img
                        src="https://pagedone.io/asset/uploads/1714974897.png"
                        alt="avtar image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <h5 className="text-black text-lg font-semibold leading-8">
                        Brian Chen
                      </h5>
                      <div className="justify-end items-center gap-1.5 flex"></div>
                    </div>
                    <h6 className="text-gray-400 text-sm font-medium leading-snug">
                      April 15, 2022
                    </h6>
                  </div>
                </div>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
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
  );
}
