export default function GallerySectionWithLightboxEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-4">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-indigo-700">
            Our Exquisite Gallery
          </h2>
          <p className="mx-auto max-w-lg text-center text-lg leading-8 font-normal text-gray-500 md:max-w-3xl">
            Welcome to Our Exquisite Gallery, where beauty finds its true
            expression in every stroke, hue, and form. Step into a realm where
            creativity knows no bounds
          </p>
        </div>
        <div id="gallery">
          <div
            className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2"
            id="image-gallery"
          >
            <div className="group image relative rounded-2xl">
              <div className="img-wrapper h-[333px] rounded-2xl lg:h-[698px]">
                <a href="https://pagedone.io/asset/uploads/1714040794.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714040794.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute bottom-0 inline-flex flex-col items-start justify-start gap-4 p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                    <h6 className="font-manrope text-3xl leading-snug font-semibold text-white">
                      Clever Ways to Organize Your Life{" "}
                    </h6>
                    <p className="text-sm leading-snug font-medium text-white">
                      Throughout this guide, you'll also find practical
                      resources, recommended readings, and actionable exercises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="group image relative rounded-2xl">
                  <div className="img-wrapper h-[333px] rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714040808.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040808.png"
                        alt="Gallery image"
                        className="img-responsive h-full w-full rounded-2xl object-cover"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 inline-flex flex-col items-start justify-start gap-4 p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="text-lg leading-8 font-medium text-white">
                          Sem pharetra libero ornare magna
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative rounded-2xl">
                  <div className="img-wrapper h-[333px] rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714040819.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040819.png"
                        alt="Gallery image"
                        className="img-responsive h-full w-full rounded-2xl object-cover"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 inline-flex flex-col items-start justify-start gap-4 p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="text-lg leading-8 font-medium text-white">
                          Facilisis lectus malesuada venenatis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gird-cols-2 grid-rows-2">
                <div className="group image relative rounded-2xl">
                  <div className="img-wrapper h-[333px] rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714040832.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040832.png"
                        alt="Gallery image"
                        className="img-responsive h-full w-full rounded-2xl object-cover"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 inline-flex flex-col items-start justify-start gap-4 p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="w-full text-lg leading-8 font-medium text-white">
                          In dolor risus urna mauris. Non risus ut egestas purus
                          pellentesque enim eu in porttitor.
                        </p>
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
