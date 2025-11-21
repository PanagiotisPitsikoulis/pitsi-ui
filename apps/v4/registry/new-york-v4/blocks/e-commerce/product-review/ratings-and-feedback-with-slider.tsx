export default function RatingsAndFeedbackWithSlider() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <div className="mb-14 flex flex-col gap-10 lg:flex-row">
          <div className="flex h-fit w-full flex-col gap-8 rounded-2xl border border-gray-200 p-5 lg:w-fit">
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
                Average Rating
              </h3>
              <div className="flex gap-4">
                <h3 className="font-manrope text-3xl leading-normal font-semibold text-gray-500">
                  4.5
                </h3>
                <div className="flex items-center gap-1.5"></div>
              </div>
            </div>
            <div className="box flex w-full flex-col gap-y-2.5">
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">5</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[339px]">
                  <span className="flex h-full w-[90%] rounded-[30px] bg-emerald-800" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  90%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">4</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[339px]">
                  <span className="flex h-full w-[60%] rounded-[30px] bg-emerald-800" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  60%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">3</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[339px]">
                  <span className="flex h-full w-[40%] rounded-[30px] bg-emerald-800" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  40%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">2</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[339px]">
                  <span className="flex h-full w-[30%] rounded-[30px] bg-emerald-800" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  30%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">1</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50 lg:w-[339px]">
                  <span className="flex h-full w-[3%] rounded-[30px] bg-emerald-800" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  3%
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-center gap-8 rounded-2xl border border-gray-200 p-5">
            <h3 className="font-manrope w-full text-3xl leading-normal font-semibold text-gray-900">
              Submit Your Review
            </h3>
            <form className="mb-0 flex w-full flex-col gap-6">
              <div className="flex w-full flex-col items-start justify-start gap-1">
                <div className="inline-flex items-center justify-start gap-0.5">
                  <span className="text-xs font-medium text-gray-600">
                    Add Your Rating
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>
              <div className="flex w-full flex-col gap-8 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="inline-flex items-center justify-start gap-0.5">
                    <span className="text-xs leading-5 font-medium text-gray-600">
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs leading-normal font-normal text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="mail@pagedone.com"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <div className="inline-flex items-center justify-start gap-0.5">
                  <span className="text-xs leading-5 font-medium text-gray-600">
                    Write Your Review
                  </span>
                </div>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-xs leading-7 font-normal text-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Write here..."
                />
              </div>
            </form>
            <button className="inline-flex items-center justify-center rounded-xl bg-emerald-800 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-emerald-900">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Submit Reviews
              </span>
            </button>
          </div>
        </div>
        <h3 className="font-manrope w-full pb-8 text-3xl leading-normal font-semibold text-gray-900">
          Customer Feedbacks
        </h3>
        <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
          <div className="flex w-full flex-col gap-2">
            <div className="inline-flex w-full items-center justify-between">
              <h5 className="text-lg leading-8 font-semibold text-black">
                Robert Karmazov
              </h5>
              <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                20 days ago
              </h6>
            </div>
            <div className="inline-flex items-center justify-start gap-1.5">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-base leading-relaxed font-normal text-gray-400">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
        <div className="my-6 inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
          <div className="flex w-full flex-col gap-2">
            <div className="inline-flex w-full items-center justify-between">
              <h5 className="text-lg leading-8 font-semibold text-black">
                Nilesh Shah
              </h5>
              <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                1 months ago
              </h6>
            </div>
            <div className="inline-flex items-center justify-start gap-1.5">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-base leading-relaxed font-normal text-gray-400">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
        <div className="inline-flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-gray-200 p-6">
          <div className="flex w-full flex-col gap-2">
            <div className="inline-flex w-full items-center justify-between">
              <h5 className="text-lg leading-8 font-semibold text-black">
                Edna Watson
              </h5>
              <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                8 months ago
              </h6>
            </div>
            <div className="inline-flex items-center justify-start gap-1.5">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-base leading-relaxed font-normal text-gray-400">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
      </div>
    </section>
  )
}
