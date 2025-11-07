export default function TailwindAboutUsPage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-4 flex lg:flex-row flex-col">
            <h2 className="text-black sm:text-5xl text-4xl font-bold font-manrope sm:leading-tight leading-tight lg:text-start text-center">
              The Art of
              <span className="text-indigo-600">Architecture</span>
              Crafting Iconic Spaces.
            </h2>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3.5 inline-flex">
              <h4 className="text-black text-xl font-medium leading-8 lg:text-start text-center">
                The Art of Architecture, where we celebrate the most
                extraordinary architectural achievements.
              </h4>
              <p className="text-gray-600 text-sm font-normal leading-normal lg:text-start text-center">
                This section showcases the brilliance behind iconic buildings
                and innovative designs that shape our world. From historic
                masterpieces to contemporary marvels, delve into the stories,
                creative processes.
              </p>
            </div>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="w-full lg:h-full h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724325962.png"
              alt="About Us image"
            />
            <div className="w-full flex-col justify-start items-start gap-5 grid sm:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-10 bg-zinc-100 rounded-xl flex-col justify-center sm:items-start items-center gap-2 inline-flex">
                <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                  20k+
                </h3>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Satisfied Customer
                </h6>
              </div>
              <div className="w-full h-full p-10 bg-zinc-100 rounded-xl flex-col justify-center sm:items-start items-center gap-2 inline-flex">
                <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                  28+
                </h3>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Year of Experience
                </h6>
              </div>
              <div className="w-full h-full p-10 bg-zinc-100 rounded-xl flex-col justify-center sm:items-start items-center gap-2 inline-flex">
                <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                  10+
                </h3>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Award Winning
                </h6>
              </div>
              <div className="w-full h-full p-10 bg-zinc-100 rounded-xl flex-col justify-center sm:items-start items-center gap-2 inline-flex">
                <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                  42+
                </h3>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Property Collection
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
