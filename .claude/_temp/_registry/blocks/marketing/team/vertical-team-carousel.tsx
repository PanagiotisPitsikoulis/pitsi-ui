export default function VerticalTeamCarousel() {
  return (
    <section className="py-24">
      <div className="w-full xl:pl-28 lg:pl-14 lg:px-0 px-4 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="w-full justify-start items-center lg:gap-8 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-4 lg:col-span-4 col-span-12 flex-col justify-center lg:items-start items-center lg:gap-14 gap-5 inline-flex">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-2.5 flex">
              <h6 className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our Team
              </h6>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Skilled Team Innovating the Product
              </h2>
            </div>
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                View all Professionals
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            {/*Slider wrapper*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper w-max">
                <div className="swiper-slide">
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full sliderImg bg-[#cdb5ba] rounded-full justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504879.png"
                        alt="Deep Mehta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Deep Mehta
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-[#d7c7c1] rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504892.png"
                        alt="Raj Malhotra Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Raj Malhotra
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-[#bdbdbd] rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504941.png"
                        alt="Tanay Verma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Tanay Verma
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-gray-200 rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504950.png"
                        alt="Sonu Sharma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Sonu Sharma
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-[33px] inline-flex flex-col">
                    <div className="w-full sliderImg bg-[#f1adc6] rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504959.png"
                        alt="Kushi Gupta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Kushi Gupta
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full flex-col justify-start items-start inline-flex">
                    <div className="w-full sliderImg bg-[#cdb5ba] rounded-full justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504879.png"
                        alt="Deep Mehta Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Deep Mehta
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-[#d7c7c1] rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504892.png"
                        alt="Raj Malhotra Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Raj Malhotra
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-[#bdbdbd] rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504941.png"
                        alt="Tanay Verma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Tanay Verma
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full justify-start items-center gap-8 inline-flex flex-col">
                    <div className="w-full sliderImg bg-gray-200 rounded-full justify-start items-start gap-2.5 flex">
                      <img
                        className="w-full rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1722504950.png"
                        alt="Sonu Sharma Image"
                      />
                    </div>
                    <div className="socialMediaIcon absolute w-full h-full pb-5 rounded-full flex-col justify-end items-center gap-1 inline-flex">
                      <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                        Sonu Sharma
                      </h5>
                      <div className="socialMediaIcons justify-start items-center gap-1.5 inline-flex">
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
                          {/* SVG removed */}
                        </a>
                        <a className="w-6 h-6 relative rounded-[15px]">
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
  );
}
