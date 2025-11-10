export default function GallerySectionWithScaleEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Gallery
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-600">
            Explore our curated lineup of gaming characters, each pixel-packed{" "}
            <br /> avatar telling its own epic tale.
          </p>
        </div>
        <div className="gallery mt-16 gap-8 md:gap-5 lg:gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5 lg:gap-8">
            <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
              <img
                src="https://pagedone.io/asset/uploads/1714037872.png"
                alt="gallery image"
                className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
              />
            </div>
            <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
              <img
                src="https://pagedone.io/asset/uploads/1714037883.png"
                alt="gallery image"
                className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
              />
            </div>
            <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
              <img
                src="https://pagedone.io/asset/uploads/1714037893.png"
                alt="gallery image"
                className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
              />
            </div>
            <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
              <img
                src="https://pagedone.io/asset/uploads/1714037903.png"
                alt="gallery image"
                className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-8 md:my-5 md:grid-cols-12 md:gap-5 lg:my-8 lg:gap-8">
            <div className="group col-span-1 h-64 w-full overflow-hidden rounded-2xl object-cover md:col-span-9 md:h-[544px] lg:max-w-[904px]">
              <img
                src="https://pagedone.io/asset/uploads/1714037914.png"
                alt="gallery image"
                className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 md:h-[544px] lg:max-w-[904px]"
              />
            </div>
            <div className="col-span-1 grid gap-8 md:col-span-3 md:gap-5 lg:gap-8">
              <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
                <img
                  src="https://pagedone.io/asset/uploads/1714037926.png"
                  alt="gallery image"
                  className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
                />
              </div>
              <div className="group h-64 w-full overflow-hidden rounded-2xl object-cover lg:max-w-[280px]">
                <img
                  src="https://pagedone.io/asset/uploads/1714037936.png"
                  alt="gallery image"
                  className="gallery-image relative h-64 w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 lg:max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox" id="lightbox">
          <span className="close" id="close">
            ×
          </span>
          <img className="lightbox-image" id="lightbox-image" />
        </div>
      </div>
    </section>
  )
}
