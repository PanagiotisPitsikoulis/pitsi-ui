export default function GallerySectionWithGridLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 pb-10 lg:pb-16">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Our Gallery
          </h2>
          <div className="w-full text-center text-lg leading-8 font-normal text-gray-600">
            Step into a realm where art comes to life.
          </div>
        </div>
        <div className="gallery">
          <div className="mb-10 flex flex-col">
            <div className="mb-7 grid gap-8 md:grid-cols-12 lg:mb-11">
              <div className="h-[277px] w-full rounded-3xl md:col-span-4 md:h-[404px]">
                <img
                  src="https://pagedone.io/asset/uploads/1713942989.png"
                  alt="Gallery image"
                  className="gallery-image mx-auto h-full w-full rounded-3xl object-cover transition-all duration-700 ease-in-out hover:grayscale md:col-span-6 lg:col-span-4"
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl md:col-span-8 md:h-[404px]">
                <img
                  src="https://pagedone.io/asset/uploads/1713943004.png"
                  alt="Gallery image"
                  className="gallery-image mx-auto h-full w-full rounded-3xl object-cover transition-all duration-700 ease-in-out hover:grayscale md:col-span-6 lg:col-span-8"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://pagedone.io/asset/uploads/1713943024.png"
                  alt="Gallery image"
                  className="gallery-image mx-auto h-full w-full rounded-3xl object-cover transition-all duration-700 ease-in-out hover:grayscale"
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://pagedone.io/asset/uploads/1713943039.png"
                  alt="Gallery image"
                  className="gallery-image mx-auto h-full w-full rounded-3xl object-cover transition-all duration-700 ease-in-out hover:grayscale"
                />
              </div>
              <div className="h-[277px] w-full rounded-3xl">
                <img
                  src="https://pagedone.io/asset/uploads/1713943054.png"
                  alt="Gallery image"
                  className="gallery-image mx-auto h-full w-full rounded-3xl object-cover transition-all duration-700 ease-in-out hover:grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lightbox" id="lightbox">
        <span className="close" id="close">
          ×
        </span>
        <img src="" className="lightbox-image" id="lightbox-image" />
      </div>
    </section>
  )
}
