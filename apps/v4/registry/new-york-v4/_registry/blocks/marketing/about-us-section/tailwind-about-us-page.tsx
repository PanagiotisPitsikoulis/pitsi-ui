export default function TailwindAboutUsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-4 lg:flex-row lg:gap-8">
            <h2 className="font-manrope text-center text-4xl leading-tight font-bold text-black sm:text-5xl sm:leading-tight lg:text-start">
              The Art of
              <span className="text-indigo-600">Architecture</span>
              Crafting Iconic Spaces.
            </h2>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3.5 lg:items-start">
              <h4 className="text-center text-xl leading-8 font-medium text-black lg:text-start">
                The Art of Architecture, where we celebrate the most
                extraordinary architectural achievements.
              </h4>
              <p className="text-center text-sm leading-normal font-normal text-gray-600 lg:text-start">
                This section showcases the brilliance behind iconic buildings
                and innovative designs that shape our world. From historic
                masterpieces to contemporary marvels, delve into the stories,
                creative processes.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <img
              className="h-auto w-full rounded-xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1724325962.png"
              alt="About Us image"
            />
            <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-5 sm:grid-cols-2">
              <div className="inline-flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-zinc-100 p-10 sm:items-start">
                <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                  20k+
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Satisfied Customer
                </h6>
              </div>
              <div className="inline-flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-zinc-100 p-10 sm:items-start">
                <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                  28+
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Year of Experience
                </h6>
              </div>
              <div className="inline-flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-zinc-100 p-10 sm:items-start">
                <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                  10+
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Award Winning
                </h6>
              </div>
              <div className="inline-flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-zinc-100 p-10 sm:items-start">
                <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                  42+
                </h3>
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Property Collection
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
