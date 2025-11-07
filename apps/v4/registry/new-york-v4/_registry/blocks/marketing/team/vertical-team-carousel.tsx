export default function VerticalTeamCarousel() {
  return (
    <section className="py-24">
      <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 bg-white px-4 lg:px-0 lg:pl-14 xl:pl-28">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-y-10 lg:grid-cols-12 lg:gap-8 lg:gap-y-0">
          <div className="col-span-12 inline-flex flex-col items-center justify-center gap-5 lg:col-span-4 lg:items-start lg:gap-14 xl:col-span-4">
            <div className="flex w-full flex-col items-center justify-center gap-2.5 lg:items-start">
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Our Team
              </h6>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Skilled Team Innovating the Product
              </h2>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                View all Professionals
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-8">
            {/*Slider wrapper*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper w-max">
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="sliderImg inline-flex w-full items-start justify-start gap-2.5 rounded-full bg-[#cdb5ba]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504879.png"
                        alt="Deep Mehta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Deep Mehta
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-[#d7c7c1]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504892.png"
                        alt="Raj Malhotra Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Raj Malhotra
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-[#bdbdbd]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504941.png"
                        alt="Tanay Verma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Tanay Verma
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-gray-200">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504950.png"
                        alt="Sonu Sharma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Sonu Sharma
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-[33px]">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-[#f1adc6]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504959.png"
                        alt="Kushi Gupta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Kushi Gupta
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-start justify-start">
                    <div className="sliderImg inline-flex w-full items-start justify-start gap-2.5 rounded-full bg-[#cdb5ba]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504879.png"
                        alt="Deep Mehta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Deep Mehta
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-[#d7c7c1]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504892.png"
                        alt="Raj Malhotra Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Raj Malhotra
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-[#bdbdbd]">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504941.png"
                        alt="Tanay Verma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Tanay Verma
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-8">
                    <div className="sliderImg flex w-full items-start justify-start gap-2.5 rounded-full bg-gray-200">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504950.png"
                        alt="Sonu Sharma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute inline-flex h-full w-full flex-col items-center justify-end gap-1 rounded-full pb-5">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                        Sonu Sharma
                      </h5>
                      <div className="socialMediaIcons inline-flex items-center justify-start gap-1.5">
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="relative h-6 w-6 rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
