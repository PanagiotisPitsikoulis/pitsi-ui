export default function WithUserImageAndReviewsBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="mb-2 block text-center text-sm font-medium text-gray-500 lg:text-left">
            COUSTOMER STORY
          </span>
          <h2 className="text-center text-4xl font-bold text-gray-900 lg:text-left">
            Check what client think
          </h2>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col gap-5 max-lg:max-w-lg lg:flex-row lg:gap-8">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788205.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
                    <h6 className="border-solid border-gray-300 text-base font-medium text-gray-900 lg:mr-4 lg:border-r lg:pr-4">
                      Noah Anderson
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      Product Designer
                    </span>
                  </div>
                  <div className="my-5 flex items-center justify-center gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg leading-8 text-gray-600">
                    I've been using pagedone for a year now and it's made
                    managing my finances so much easier and quick.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col gap-5 max-lg:max-w-lg lg:flex-row lg:gap-8">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788220.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
                    <h6 className="border-solid border-gray-300 text-base font-medium text-gray-900 lg:mr-4 lg:border-r lg:pr-4">
                      Sophia Rodriguez
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      CEO
                    </span>
                  </div>
                  <div className="my-5 flex items-center justify-center gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg leading-8 text-gray-600">
                    With pagedone, I can easily track my investments and see how
                    they're performing in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col gap-5 max-lg:max-w-lg lg:flex-row lg:gap-8">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788205.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
                    <h6 className="border-solid border-gray-300 text-base font-medium text-gray-900 lg:mr-4 lg:border-r lg:pr-4">
                      Noah Anderson
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      Product Designer
                    </span>
                  </div>
                  <div className="my-5 flex items-center justify-center gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg leading-8 text-gray-600">
                    I've been using pagedone for a year now and it's made
                    managing my finances so much easier and quick.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col gap-5 max-lg:max-w-lg lg:flex-row lg:gap-8">
                <div className="relative mx-auto lg:mx-0">
                  <img
                    className="rounded-2xl object-cover"
                    src="https://pagedone.io/asset/uploads/1709788220.png"
                    alt="image"
                  />
                </div>
                <div className="block w-full text-center lg:w-96 lg:text-left">
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
                    <h6 className="border-solid border-gray-300 text-base font-medium text-gray-900 lg:mr-4 lg:border-r lg:pr-4">
                      Sophia Rodriguez
                    </h6>
                    <span className="text-sm font-medium text-indigo-600">
                      CEO
                    </span>
                  </div>
                  <div className="my-5 flex items-center justify-center gap-2 text-amber-500 lg:justify-start">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-lg leading-8 text-gray-600">
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
  )
}
