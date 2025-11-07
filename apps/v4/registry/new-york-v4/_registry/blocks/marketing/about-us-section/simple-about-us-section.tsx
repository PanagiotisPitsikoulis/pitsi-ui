export default function SimpleAboutUsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <img
            className="h-auto w-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1724838949.png"
            alt="About Us image"
          />
          <div className="flex w-full flex-col items-center justify-start gap-4 lg:gap-8">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-lg leading-relaxed font-normal text-black lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black md:text-5xl md:leading-tight lg:text-start">
                Masterpieces in Design The Art of Architecture
              </h2>
            </div>
            <h3 className="font-manrope text-center text-xl leading-normal font-medium text-gray-600 md:text-2xl md:leading-9 lg:text-start">
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
  )
}
