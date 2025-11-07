export default function ProductReviewWithCarousel() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="w-full text-center text-black text-4xl font-semibold font-manrope leading-normal">
          Latest Reviews
        </h2>
        <div className="w-full my-14 p-5 rounded-2xl border border-gray-200 justify-start items-start gap-14 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-col justify-center items-start gap-6 inline-flex">
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
                  <div className="text-gray-400 text-base font-medium leading-relaxed">
                    50k Reviews
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-2.5 flex">
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">5</p>
                <p className="h-2.5 w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[90%] rounded-[30px] bg-indigo-600 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  90%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">4</p>
                <p className="h-2.5 w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[60%] rounded-[30px] bg-indigo-600 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  60%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">3</p>
                <p className="h-2.5 w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[40%] rounded-[30px] bg-indigo-600 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  40%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">2</p>
                <p className="h-2.5 w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[30%] rounded-[30px] bg-indigo-600 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  30%
                </p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg py-[1px] text-black">1</p>
                <p className="h-2.5 w-full rounded-[30px] bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[3%] rounded-[30px] bg-indigo-600 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5 flex items-center">
                  3% <span className="text-transparent">0</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-6 inline-flex">
            <div className="flex-col justify-center items-start gap-4 flex">
              <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                Write your Experience
              </h4>
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                Share your feedback and contribute to shaping an exceptional
                shopping journey for all. Together, let's build a community
                where every voice is heard and every experience counts.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Submit Reviews
              </span>
            </button>
          </div>
        </div>
        <div className="swiper-container gallery-top overflow-hidden">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Samantha Jones
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Samantha Jones
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Impressed by the range and quality of furniture available at
                  this store. The pieces I bought are not only stylish but also
                  durable. Great value for money!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Olivia Sanchez
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Absolutely love the furniture I purchased here! The quality
                  is superb, and it looks even better in my home than I
                  imagined. Will definitely be back for more!”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Kevin Robinson
                </h5>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <p className="text-center text-black text-base font-normal leading-relaxed">
                  “Highly recommend this furniture store! The customer service
                  was excellent, and the delivery process was smooth.”
                </p>
                <h5 className="text-center text-blue-800 text-lg font-semibold leading-8">
                  Samantha Jones
                </h5>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
