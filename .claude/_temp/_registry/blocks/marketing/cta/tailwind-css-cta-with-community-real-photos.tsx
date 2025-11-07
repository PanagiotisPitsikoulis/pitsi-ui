export default function TailwindCssCtaWithCommunityRealPhotos() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          <h3 className="text-base font-normal leading-6 text-gray-500 font-inter text-center">
            Start Your Journey
          </h3>
          <h2 className="font-manrope text-4xl text-gray-900 font-bold mb-4 text-center">
            Start Your Adventure With a Supportive Community by Your Side
          </h2>
          <button className="mx-auto w-fit px-5 py-2.5 flex items-center gap-2 text-base font-semibold leading-7 text-white rounded-xl bg-lime-700 shadow-sm transition-all duration-500 hover:bg-lime-800">
            Get Started {/* SVG removed */}
          </button>
        </div>
        <div className="grid sm:grid-cols-8 gap-5 mt-8">
          <img
            src="https://pagedone.io/asset/uploads/1759490938.png"
            alt="image"
            className="h-full sm:col-span-3 mx-auto"
          />
          <img
            src="https://pagedone.io/asset/uploads/1759491194.png"
            alt="image"
            className="h-full sm:col-span-2 mx-auto"
          />
          <img
            src="https://pagedone.io/asset/uploads/1759491241.png"
            alt="image"
            className="h-full sm:col-span-3 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
