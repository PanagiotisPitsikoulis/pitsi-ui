export default function TailwindBlogCardsWithSlider() {
  return (
    <section className="py-24 relative bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:justify-between justify-center items-center gap-8 lg:flex grid mb-14">
          <div className="flex-col justify-start lg:items-start items-center gap-4 inline-flex">
            <h2 className="text-white text-4xl font-bold font-manrope leading-snug lg:text-start text-center">
              Our Recent Blog Entries
            </h2>
            <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
              Stay curious, stay informed, and embrace the journey of continuous
              learning.
            </p>
          </div>
          <div className="flex items-center lg:justify-start justify-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group w-12 h-12 justify-center items-center flex border border-white hover:bg-white hover:border-transparent transition-all duration-500 ease-in-out rounded-full"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group w-12 h-12 justify-center items-center flex border border-white hover:bg-white hover:border-transparent transition-all duration-500 ease-in-out rounded-full"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex overflow-hidden">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-full grid ">
              <div className="w-full group overflow-hidden relative bg-zinc-900 bg-opacity-20 rounded-2xl flex-col justify-end items-center gap-2.5 inline-flex">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="overflow-hidden transition-all ease-in-out duration-700 relative bg-cover bg-no-repeat rounded-2xl object-cover"
                />
                <div className="absolute bottom-2 px-6 py-3 mx-2.5 bg-white/70 rounded-lg backdrop-blur-sm flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-center text-black text-base font-medium leading-relaxed">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-gray-500 text-sm font-normal leading-snug">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group mx-auto px-6 py-3 rounded-full bg-zinc-900 shadow border border-white hover:bg-white ease-in-out transition-all duration-700 justify-center items-center flex">
          <span className="px-2 py-px text-white group-hover:text-black ease-in-out transition-all duration-700 text-lg font-semibold leading-7">
            View All
          </span>
        </button>
      </div>
    </section>
  );
}
