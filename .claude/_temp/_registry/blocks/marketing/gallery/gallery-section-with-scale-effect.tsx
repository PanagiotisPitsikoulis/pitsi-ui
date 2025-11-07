export default function GallerySectionWithScaleEffect() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore our curated lineup of gaming characters, each pixel-packed{" "}
            <br /> avatar telling its own epic tale.
          </p>
        </div>
        <div className="mt-16 lg:gap-8 md:gap-5 gap-8 gallery">
          <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-8 md:gap-5 gap-8">
            <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
              <img
                src="https://pagedone.io/asset/uploads/1714037872.png"
                alt="gallery image"
                className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
              />
            </div>
            <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
              <img
                src="https://pagedone.io/asset/uploads/1714037883.png"
                alt="gallery image"
                className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
              />
            </div>
            <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
              <img
                src="https://pagedone.io/asset/uploads/1714037893.png"
                alt="gallery image"
                className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
              />
            </div>
            <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
              <img
                src="https://pagedone.io/asset/uploads/1714037903.png"
                alt="gallery image"
                className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-8 md:gap-5 gap-8 lg:my-8 md:my-5 my-8">
            <div className="md:col-span-9 col-span-1 group object-cover overflow-hidden rounded-2xl lg:max-w-[904px] w-full md:h-[544px] h-64">
              <img
                src="https://pagedone.io/asset/uploads/1714037914.png"
                alt="gallery image"
                className="gallery-image lg:max-w-[904px] w-full md:h-[544px] h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
              />
            </div>
            <div className="md:col-span-3  col-span-1 grid lg:gap-8 md:gap-5 gap-8">
              <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
                <img
                  src="https://pagedone.io/asset/uploads/1714037926.png"
                  alt="gallery image"
                  className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
                />
              </div>
              <div className="group object-cover overflow-hidden rounded-2xl lg:max-w-[280px] w-full h-64">
                <img
                  src="https://pagedone.io/asset/uploads/1714037936.png"
                  alt="gallery image"
                  className="gallery-image lg:max-w-[280px] w-full h-64 object-cover group-hover:scale-105 ease-in-out transition-all relative duration-500 rounded-2xl"
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
  );
}
