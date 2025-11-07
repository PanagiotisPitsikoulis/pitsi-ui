export default function SimpleAboutUsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <img
            className="w-full h-auto rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1724838949.png"
            alt="About Us image"
          />
          <div className="w-full flex-col justify-start items-center lg:gap-8 gap-4 flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <span className="text-black text-lg font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-black md:text-5xl text-4xl font-bold font-manrope md:leading-tight leading-normal lg:text-start text-center">
                Masterpieces in Design The Art of Architecture
              </h2>
            </div>
            <h3 className="text-gray-600 md:text-2xl text-xl font-medium font-manrope md:leading-9 leading-normal lg:text-start text-center">
              The Art of Architecture, where we celebrate the most extraordinary
              architectural achievements. This section explores iconic buildings
              and innovative designs that exemplify the pinnacle of
              architectural artistry. From historical landmarks to contemporary
              marvels, uncover the stories and creative visions behind
              structures that have left an indelible mark on the world.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
