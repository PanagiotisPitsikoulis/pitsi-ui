export default function GallerySectionWithLightboxEffect() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 mb-12">
          <h2 className="w-full text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
            Our Exquisite Gallery
          </h2>
          <p className="md:max-w-3xl max-w-lg mx-auto text-center text-gray-500 text-lg font-normal leading-8">
            Welcome to Our Exquisite Gallery, where beauty finds its true
            expression in every stroke, hue, and form. Step into a realm where
            creativity knows no bounds
          </p>
        </div>
        <div id="gallery">
          <div
            className="grid items-center justify-center lg:grid-cols-2 grid-cols-1 gap-8"
            id="image-gallery"
          >
            <div className="relative group rounded-2xl image">
              <div className="img-wrapper rounded-2xl lg:h-[698px] h-[333px]">
                <a href="https://pagedone.io/asset/uploads/1714040794.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714040794.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute bottom-0 flex-col justify-start items-start gap-4 inline-flex p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                    <h6 className="text-white text-3xl font-semibold font-manrope leading-snug">
                      Clever Ways to Organize Your Life{" "}
                    </h6>
                    <p className="text-white text-sm font-medium leading-snug">
                      Throughout this guide, you'll also find practical
                      resources, recommended readings, and actionable exercises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="relative group rounded-2xl image">
                  <div className="img-wrapper rounded-2xl h-[333px]">
                    <a href="https://pagedone.io/asset/uploads/1714040808.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040808.png"
                        alt="Gallery image"
                        className="img-responsive w-full h-full object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 flex-col justify-start items-start gap-4 inline-flex p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="text-white text-lg font-medium leading-8">
                          Sem pharetra libero ornare magna
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group rounded-2xl image">
                  <div className="img-wrapper rounded-2xl h-[333px]">
                    <a href="https://pagedone.io/asset/uploads/1714040819.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040819.png"
                        alt="Gallery image"
                        className="img-responsive w-full h-full object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 flex-col justify-start items-start gap-4 inline-flex p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="text-white text-lg font-medium leading-8">
                          Facilisis lectus malesuada venenatis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gird-cols-2 grid-rows-2">
                <div className="relative group rounded-2xl image">
                  <div className="img-wrapper rounded-2xl  h-[333px]">
                    <a href="https://pagedone.io/asset/uploads/1714040832.png">
                      <img
                        src="https://pagedone.io/asset/uploads/1714040832.png"
                        alt="Gallery image"
                        className="img-responsive w-full h-full object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 flex-col justify-start items-start gap-4 inline-flex p-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out">
                        <p className="w-full text-white text-lg font-medium leading-8">
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
  );
}
