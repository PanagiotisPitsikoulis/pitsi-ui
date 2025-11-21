export default function TailwindCssCtaWithCommunityRealPhotos() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <h3 className="font-inter text-center text-base leading-6 font-normal text-gray-500">
            Start Your Journey
          </h3>
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Start Your Adventure With a Supportive Community by Your Side
          </h2>
          <button className="mx-auto flex w-fit items-center gap-2 rounded-xl bg-lime-700 px-5 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-lime-800">
            Get Started {/* SVG removed */}
          </button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-8">
          <img
            src="https://pagedone.io/asset/uploads/1759490938.png"
            alt="image"
            className="mx-auto h-full sm:col-span-3"
          />
          <img
            src="https://pagedone.io/asset/uploads/1759491194.png"
            alt="image"
            className="mx-auto h-full sm:col-span-2"
          />
          <img
            src="https://pagedone.io/asset/uploads/1759491241.png"
            alt="image"
            className="mx-auto h-full sm:col-span-3"
          />
        </div>
      </div>
    </section>
  )
}
