export default function TailwindBlogWithCreativeImageLayout() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 xl:flex-nowrap">
          <div className="inline-flex w-96 flex-col items-start justify-start">
            <div className="w-full xl:w-96">
              <h2 className="font-manrope pb-5 text-6xl leading-normal font-extrabold text-white md:text-7xl">
                Latest
                <br />
                Projects
              </h2>
              <p className="pb-8 text-lg leading-7 font-normal text-white">
                Meet Our Exceptional Team! Our diverse talents converge to
                create a dynamic force
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="inline-flex items-center justify-start border-t border-white pt-5">
                <h3 className="font-manrope text-4xl leading-relaxed font-semibold text-white">
                  UX review presentations
                </h3>
                <button className="group flex items-center justify-center rounded-full border border-white p-2.5 shadow transition-all duration-700 ease-in-out hover:bg-white">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-lg leading-7 font-normal text-white">
                Unveiling the Talent Behind Our Success
              </p>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710829140.png"
                alt="presentations image"
              />
            </div>
          </div>
          <div className="inline-flex w-96 flex-col items-end justify-end xl:items-center xl:justify-center">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="inline-flex items-center justify-start border-t border-white pt-5">
                <h3 className="font-manrope text-4xl leading-relaxed font-semibold text-white">
                  Navigating the Migration{" "}
                </h3>
                <button className="group flex items-center justify-center rounded-full border border-white p-2.5 shadow transition-all duration-700 ease-in-out hover:bg-white">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-lg leading-7 font-normal text-white">
                Unveiling the Faces Behind Excellence
              </p>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710829803.png"
                alt="Excellence image"
              />
            </div>
          </div>
          <div className="inline-flex w-96 flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="inline-flex items-center justify-start border-t border-white pt-5">
                <h3 className="font-manrope text-4xl leading-relaxed font-semibold text-white">
                  Building a Robust Inventory
                </h3>
                <button className="group flex items-center justify-center rounded-full border border-white p-2.5 shadow transition-all duration-700 ease-in-out hover:bg-white">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-lg leading-7 font-normal text-white">
                Faces Behind Our Success
              </p>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710829816.png"
                alt="Inventory image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
