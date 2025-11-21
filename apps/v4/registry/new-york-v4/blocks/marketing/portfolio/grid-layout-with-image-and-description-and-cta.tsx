export default function GridLayoutWithImageAndDescriptionAndCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-center gap-5">
          <span className="rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-medium text-indigo-500">
            Portfolio
          </span>
          <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
            Structural Elegance
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500">
            {" "}
            In the world of architecture or organization, structure provides the
            backbone for a purposeful and harmonious existence.
          </p>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col justify-end rounded-lg bg-cover bg-center px-7 py-6 max-md:h-80 sm:col-span-2">
            <h6 className="mb-4 text-xl leading-8 font-medium text-white">
              Architecture Designer
            </h6>
            <p className="text-base font-normal text-white/70">
              where knowledge meets innovation, and success is sculpted through
              a blend of skill and vision.
            </p>
          </div>
          <div className="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713007.png"
              alt="Building structure image"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713018.png"
              alt="Building structure image"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="block">
            <img
              src="https://pagedone.io/asset/uploads/1707713032.png"
              alt="Building structure image"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-start rounded-lg bg-cover px-7 py-6 max-sm:h-80">
            <h6 className="mb-4 text-xl leading-8 font-medium text-white">
              Interior Designer
            </h6>
            <p className="text-base font-normal text-white/70">
              Crafting exceptional interiors, where aesthetics meet
              functionality for spaces that inspire and elevate.
            </p>
          </div>
          <div className="block">
            <img
              src="	https://pagedone.io/asset/uploads/1707713055.png"
              alt="Building structure image"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-end rounded-lg bg-cover px-7 py-6 max-sm:h-80">
            <h6 className="mb-4 text-xl leading-8 font-medium text-white">
              Business Building
            </h6>
            <p className="text-base font-normal text-white/70">
              Architecting business success through innovation, resilience, and
              strategic leadership.
            </p>
          </div>
        </div>
        <button className="w-full rounded-lg bg-indigo-100 px-6 py-4 text-center text-lg font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
          Load More
        </button>
      </div>
    </section>
  )
}
