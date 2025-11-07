export default function WithUserImageAndReviewsBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 ">
          <span className="text-sm text-gray-500 font-medium block mb-2 text-center lg:text-left">
            COUSTOMER STORY
          </span>
          <h2 className="text-4xl  font-bold text-gray-900 text-center lg:text-left">
            Check what client think
          </h2>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex  w-full gap-5 lg:gap-8 flex-col lg:flex-row max-lg:max-w-lg mx-auto">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788205.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex items-center flex-col justify-center lg:justify-start lg:flex-row">
                    <h6 className="text-base text-gray-900 font-medium  lg:border-r border-solid border-gray-300 lg:pr-4 lg:mr-4">
                      Noah Anderson
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      Product Designer
                    </span>
                  </div>
                  <div className="flex items-center justify-center  my-5 gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg text-gray-600 leading-8 ">
                    I've been using pagedone for a year now and it's made
                    managing my finances so much easier and quick.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex  w-full gap-5 lg:gap-8 flex-col lg:flex-row max-lg:max-w-lg mx-auto">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788220.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex items-center flex-col justify-center lg:justify-start lg:flex-row">
                    <h6 className="text-base text-gray-900 font-medium lg:border-r border-solid border-gray-300 lg:pr-4 lg:mr-4">
                      Sophia Rodriguez
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      CEO
                    </span>
                  </div>
                  <div className="flex items-center justify-center my-5 gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg text-gray-600 leading-8 ">
                    With pagedone, I can easily track my investments and see how
                    they're performing in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex  w-full gap-5 lg:gap-8 flex-col lg:flex-row max-lg:max-w-lg mx-auto">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788205.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex items-center flex-col justify-center lg:justify-start lg:flex-row">
                    <h6 className="text-base text-gray-900 font-medium  lg:border-r border-solid border-gray-300 lg:pr-4 lg:mr-4">
                      Noah Anderson
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      Product Designer
                    </span>
                  </div>
                  <div className="flex items-center justify-center  my-5 gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg text-gray-600 leading-8 ">
                    I've been using pagedone for a year now and it's made
                    managing my finances so much easier and quick.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex  w-full gap-5 lg:gap-8 flex-col lg:flex-row max-lg:max-w-lg mx-auto">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788220.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex items-center flex-col justify-center lg:justify-start lg:flex-row">
                    <h6 className="text-base text-gray-900 font-medium lg:border-r border-solid border-gray-300 lg:pr-4 lg:mr-4">
                      Sophia Rodriguez
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      CEO
                    </span>
                  </div>
                  <div className="flex items-center justify-center my-5 gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg text-gray-600 leading-8 ">
                    With pagedone, I can easily track my investments and see how
                    they're performing in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
