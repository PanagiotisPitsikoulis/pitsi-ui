export default function ProductReviewWithCarousel() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <h2 className="font-manrope w-full text-center text-4xl leading-normal font-semibold text-black">
          Latest Reviews
        </h2>
        <div className="my-14 grid w-full grid-cols-1 items-start justify-start gap-14 rounded-2xl border border-gray-200 p-5 lg:grid-cols-2">
          <div className="inline-flex flex-col items-start justify-center gap-6">
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
                  <div className="text-base leading-relaxed font-medium text-gray-400">
                    50k Reviews
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5">
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">5</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50">
                  <span className="flex h-full w-[90%] rounded-[30px] bg-indigo-600" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  90%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">4</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50">
                  <span className="flex h-full w-[60%] rounded-[30px] bg-indigo-600" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  60%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">3</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50">
                  <span className="flex h-full w-[40%] rounded-[30px] bg-indigo-600" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  40%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">2</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50">
                  <span className="flex h-full w-[30%] rounded-[30px] bg-indigo-600" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  30%
                </p>
              </div>
              <div className="flex w-full items-center">
                <p className="py-[1px] text-lg font-medium text-black">1</p>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-gray-50">
                  <span className="flex h-full w-[3%] rounded-[30px] bg-indigo-600" />
                </p>
                <p className="mr-1.5 flex items-center py-[1px] text-sm font-medium text-gray-800">
                  3% <span className="text-transparent">0</span>
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-6">
            <div className="flex flex-col items-start justify-center gap-4">
              <h4 className="text-xl leading-loose font-semibold text-gray-900">
                Write your Experience
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-400">
                Share your feedback and contribute to shaping an exceptional
                shopping journey for all. Together, let's build a community
                where every voice is heard and every experience counts.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Submit Reviews
              </span>
            </button>
          </div>
        </div>
        <div className="swiper-container gallery-top overflow-hidden">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Samantha Jones
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Samantha Jones
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="inline-flex flex-col items-center justify-start gap-6">
                <div className="inline-flex items-center justify-center gap-1.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-base leading-relaxed font-normal text-black">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-lg leading-8 font-semibold text-blue-800">
                  Samantha Jones
                </h5>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  )
}
