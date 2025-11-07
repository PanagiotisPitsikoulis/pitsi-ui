export default function PricingCardWithHighlightedPrice() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full justify-between items-center lg:gap-32 gap-8 lg:flex grid pb-12">
          <h2 className="max-w-3xl text-gray-900 text-5xl font-semibold font-manrope leading-normal lg:text-start text-center">
            Collaborative Strategies for Success in Product Innovation and
            Growth
          </h2>
          <div className="flex justify-center items-center">
            <label
              className="relative text-xl text-gray-900 checked:after:text-gray-500 mr-4 font-medium"
            >
              Bill Monthly
            </label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative whitespace-normal shrink-0 w-11 bg-none h-6 p-0.5 bg-gray-100 checked:bg-none checked:bg-gray-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:border-blue-600  appearance-none 

                      before:inline-block before:w-5 before:h-5 before:bg-gray-900 checked:before:bg-gray-900 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
            />
            <label className="whitespace-normal relative font-medium text-xl text-gray-500 ml-4 ">
              Bill Yearly
            </label>
          </div>
        </div>
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent"
        >
          <div className="relative flex items-center">
            {/*Slider Indicator*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $6,000
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 5,000
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $5,000
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 4,000
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $6,500
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 5,500
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="slider-button-left"
                className="swiper-button-prev p-2 group hidden  justify-center items-center border border-solid  border-gray-500 hover:bg-black w-16 h-16 transition-all duration-500 rounded-full lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next p-2 group hidden justify-center items-center border border-solid  border-gray-500 hover:bg-black w-16 h-16 transition-all duration-500 rounded-full lg:flex"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent"
        >
          <div className="relative flex items-center">
            {/*Slider Indicator*/}
            <div className="swiper mySwiper-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $7,000
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 6,000
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $8,000
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 7,000
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-gray-100 p-12 rounded-3xl items-center max-w-xl mx-auto flex justify-between lg:gap-32 gap-10 w-full flex-col lg:flex-row lg:max-w-3xl lg:py-12 lg:px-12 xl:max-w-4xl">
                    <div className="block w-full lg:w-1/2">
                      <span className="text-gray-600 text-xl font-medium line-through leading-loose pb-2.5 flex lg:justify-start justify-center">
                        $7,500
                      </span>
                      <div className="text-gray-500 text-lg font-medium leading-7 mb-8 lg:text-start text-center">
                        <span className="text-black xl:text-6xl text-5xl font-bold font-manrope leading-normal">
                          $ 6,500
                        </span>
                        /Month
                      </div>
                      <button className="w-full px-6 py-2.5 hover:bg-gray-800 transition-all ease-in-out duration-75 bg-gray-900 rounded-full shadow justify-center items-center inline-flex">
                        <span className="px-2 text-white text-base font-semibold leading-relaxed">
                          Purchase
                        </span>
                      </button>
                    </div>
                    <div className=" w-full lg:w-1/2">
                      <ul className="space-y-5 text-left text-base font-normal leading-relaxed text-gray-800 group-hover:text-white">
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>AI Advisor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Unlimited auto tracking</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>1 Day transaction clearing </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Priority customer support </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>All Widget Access </span>
                        </li>
                        <li className="flex items-center space-x-4">
                          {/* Icon */}
                          {/* SVG removed */}
                          <span>Everything in team plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="slider-button-left"
                className="swiper-button-prev p-2 group hidden  justify-center items-center border border-solid  border-gray-500 hover:bg-black w-16 h-16 transition-all duration-500 rounded-full lg:flex"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next p-2 group hidden justify-center items-center border border-solid  border-gray-500 hover:bg-black w-16 h-16 transition-all duration-500 rounded-full lg:flex"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
