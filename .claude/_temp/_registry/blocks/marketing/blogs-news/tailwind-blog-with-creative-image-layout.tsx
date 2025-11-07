export default function TailwindBlogWithCreativeImageLayout() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex xl:flex-nowrap flex-wrap gap-8 justify-center">
          <div className="w-96 flex-col justify-start items-start inline-flex">
            <div className="xl:w-96 w-full">
              <h2 className="text-white md:text-7xl text-6xl font-extrabold font-manrope leading-normal pb-5">
                Latest
                <br />
                Projects
              </h2>
              <p className="text-white text-lg font-normal leading-7 pb-8">
                Meet Our Exceptional Team! Our diverse talents converge to
                create a dynamic force
              </p>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-center inline-flex pt-5 border-t border-white">
                <h3 className=" text-white text-4xl font-semibold font-manrope leading-relaxed">
                  UX review presentations
                </h3>
                <button className="p-2.5 shadow justify-center items-center flex border group hover:bg-white ease-in-out duration-700 transition-all border-white rounded-full">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-white text-lg font-normal leading-7">
                Unveiling the Talent Behind Our Success
              </p>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710829140.png"
                alt="presentations image"
              />
            </div>
          </div>
          <div className="w-96 flex-col xl:justify-center xl:items-center justify-end items-end inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-center inline-flex pt-5 border-t border-white">
                <h3 className=" text-white text-4xl font-semibold font-manrope leading-relaxed">
                  Navigating the Migration{" "}
                </h3>
                <button className="p-2.5 shadow justify-center items-center flex border group hover:bg-white ease-in-out duration-700 transition-all border-white rounded-full">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-white text-lg font-normal leading-7">
                Unveiling the Faces Behind Excellence
              </p>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710829803.png"
                alt="Excellence image"
              />
            </div>
          </div>
          <div className="w-96 flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-center inline-flex pt-5 border-t border-white">
                <h3 className=" text-white text-4xl font-semibold font-manrope leading-relaxed">
                  Building a Robust Inventory
                </h3>
                <button className="p-2.5 shadow justify-center items-center flex border group hover:bg-white ease-in-out duration-700 transition-all border-white rounded-full">
                  {/* SVG removed */}
                </button>
              </div>
              <p className="text-white text-lg font-normal leading-7">
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
  );
}
