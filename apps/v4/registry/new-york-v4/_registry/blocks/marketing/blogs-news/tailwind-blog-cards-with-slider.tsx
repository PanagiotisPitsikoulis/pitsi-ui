export default function TailwindBlogCardsWithSlider() {
  return (
    <section className="relative bg-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid w-full items-center justify-center gap-8 lg:flex lg:justify-between">
          <div className="inline-flex flex-col items-center justify-start gap-4 lg:items-start">
            <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-white lg:text-start">
              Our Recent Blog Entries
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-white lg:text-start">
              Stay curious, stay informed, and embrace the journey of continuous
              learning.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 lg:justify-start">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-white transition-all duration-500 ease-in-out hover:border-transparent hover:bg-white"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-white transition-all duration-500 ease-in-out hover:border-transparent hover:bg-white"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020374.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Strategies for Wealth Creation
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020402.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Financial Services for a Digital
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Learn how these disruptions are empowering consumers with
                      greater accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid max-w-full">
              <div className="group bg-opacity-20 relative inline-flex w-full flex-col items-center justify-end gap-2.5 overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="https://pagedone.io/asset/uploads/1711020413.png"
                  alt="blog image"
                  className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 mx-2.5 flex flex-col items-start justify-start gap-2.5 rounded-lg bg-white/70 px-6 py-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <h3 className="text-center text-base leading-relaxed font-medium text-black">
                      Exploring the Latest Electronic Gadgets
                    </h3>
                    <p className="w-80 text-center text-sm leading-snug font-normal text-gray-500">
                      Our comprehensive approach provides you with the tools and
                      strategies needed to navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group mx-auto flex items-center justify-center rounded-full border border-white bg-zinc-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-white">
          <span className="px-2 py-px text-lg leading-7 font-semibold text-white transition-all duration-700 ease-in-out group-hover:text-black">
            View All
          </span>
        </button>
      </div>
    </section>
  )
}
