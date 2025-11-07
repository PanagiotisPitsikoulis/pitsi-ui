export default function RatingsAndFeedbackWithSlider() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 mb-14">
          <div className="lg:w-fit w-full h-fit p-5 rounded-2xl border border-gray-200 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Average Rating
              </h3>
              <div className="flex gap-4">
                <h3 className="text-gray-500 text-3xl font-semibold font-manrope leading-normal">
                  4.5
                </h3>
                <div className="flex gap-1.5 items-center"></div>
              </div>
            </div>
            <div className="box flex flex-col gap-y-2.5 w-full">
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">5</p>
                <p className="h-2.5 w-full lg:w-[339px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[90%] rounded-[30px] bg-emerald-800 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  90%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">4</p>
                <p className="h-2.5 w-full lg:w-[339px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[60%] rounded-[30px] bg-emerald-800 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  60%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">3</p>
                <p className="h-2.5 w-full lg:w-[339px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[40%] rounded-[30px] bg-emerald-800 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  40%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">2</p>
                <p className="h-2.5 w-full lg:w-[339px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[30%] rounded-[30px] bg-emerald-800 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  30%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">1</p>
                <p className="h-2.5 w-full lg:w-[339px] rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[3%] rounded-[30px] bg-emerald-800 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  3%
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 rounded-2xl border border-gray-200 flex-col justify-center items-start gap-8 inline-flex">
            <h3 className="w-full text-gray-900 text-3xl font-semibold font-manrope leading-normal">
              Submit Your Review
            </h3>
            <form className="w-full flex flex-col gap-6 mb-0">
              <div className="w-full justify-start items-start gap-1 flex flex-col">
                <div className="justify-start items-center gap-0.5 inline-flex">
                  <span className="text-gray-600 text-xs font-medium">
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
              <div className="w-full flex sm:flex-row flex-col gap-8">
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full leading-normal px-2.5 py-1.5 text-gray-400 text-xs font-normal rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                  <div className="justify-start items-center gap-0.5 inline-flex">
                    <span className="text-gray-600 text-xs font-medium leading-5">
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full px-2.5 py-1.5 text-gray-400 text-xs font-normal leading-normal rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none"
                    placeholder="mail@pagedone.com"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-1.5 flex flex-col">
                <div className="justify-start items-center gap-0.5 inline-flex">
                  <span className="text-gray-600 text-xs font-medium leading-5">
                    Write Your Review
                  </span>
                </div>
                <textarea
                  rows={3}
                  className="w-full resize-none px-3 py-2 text-gray-400 text-xs font-normal leading-7 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none"
                  placeholder="Write here..."
                />
              </div>
            </form>
            <button className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center inline-flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Submit Reviews
              </span>
            </button>
          </div>
        </div>
        <h3 className="w-full text-gray-900 text-3xl font-semibold font-manrope leading-normal pb-8">
          Customer Feedbacks
        </h3>
        <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-full gap-2 flex flex-col">
            <div className="w-full justify-between items-center inline-flex">
              <h5 className="text-black text-lg font-semibold leading-8">
                Robert Karmazov
              </h5>
              <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                20 days ago
              </h6>
            </div>
            <div className="justify-start items-center gap-1.5 inline-flex">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-gray-400 text-base font-normal leading-relaxed">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
        <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex my-6">
          <div className="w-full gap-2 flex flex-col">
            <div className="w-full justify-between items-center inline-flex">
              <h5 className="text-black text-lg font-semibold leading-8">
                Nilesh Shah
              </h5>
              <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                1 months ago
              </h6>
            </div>
            <div className="justify-start items-center gap-1.5 inline-flex">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-gray-400 text-base font-normal leading-relaxed">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
        <div className="w-full p-6 rounded-3xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-full gap-2 flex flex-col">
            <div className="w-full justify-between items-center inline-flex">
              <h5 className="text-black text-lg font-semibold leading-8">
                Edna Watson
              </h5>
              <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                8 months ago
              </h6>
            </div>
            <div className="justify-start items-center gap-1.5 inline-flex">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <p className="text-gray-400 text-base font-normal leading-relaxed">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow. The system
            seamlessly blends user-friendly features with a robust set of design
            components, making it a go-to for creating visually stunning and
            consistent interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
