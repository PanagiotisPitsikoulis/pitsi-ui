export default function HorizontalStatsWithCardStyle() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-indigo-100 bg-white p-1.5">
            <div className="rounded-xl bg-indigo-50 px-12 py-5">
              <h3 className="font-manrope text-center text-3xl leading-10 font-semibold text-black">
                260+
              </h3>
              <h4 className="text-center text-lg leading-8 font-medium text-black">
                Expert Consultants
              </h4>
            </div>
          </div>
          <div className="rounded-xl border border-red-100 bg-white p-1.5">
            <div className="rounded-xl bg-red-50 px-12 py-5">
              <h3 className="font-manrope text-center text-3xl leading-10 font-semibold text-black">
                240+
              </h3>
              <h4 className="text-center text-lg leading-8 font-medium text-black">
                Company growth
              </h4>
            </div>
          </div>
          <div className="rounded-xl border border-amber-100 bg-white p-1.5">
            <div className="rounded-xl bg-amber-50 px-12 py-5">
              <h3 className="font-manrope text-center text-3xl leading-10 font-semibold text-black">
                724+
              </h3>
              <h4 className="text-center text-lg leading-8 font-medium text-black">
                Projects Delivered
              </h4>
            </div>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-white p-1.5">
            <div className="rounded-xl bg-emerald-50 px-12 py-5">
              <h3 className="font-manrope text-center text-3xl leading-10 font-semibold text-black">
                200+
              </h3>
              <h4 className="text-center text-lg leading-8 font-medium text-black">
                Active Clients
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
