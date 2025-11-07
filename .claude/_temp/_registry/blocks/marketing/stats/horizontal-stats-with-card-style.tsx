export default function HorizontalStatsWithCardStyle() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="border border-indigo-100 rounded-xl bg-white p-1.5">
            <div className="rounded-xl bg-indigo-50 py-5 px-12">
              <h3 className="font-manrope text-3xl font-semibold leading-10 text-black text-center">
                260+
              </h3>
              <h4 className="text-lg font-medium text-black leading-8 text-center">
                Expert Consultants
              </h4>
            </div>
          </div>
          <div className="border border-red-100 rounded-xl bg-white p-1.5">
            <div className="rounded-xl bg-red-50 py-5 px-12">
              <h3 className="font-manrope text-3xl font-semibold leading-10 text-black text-center">
                240+
              </h3>
              <h4 className="text-lg font-medium text-black leading-8 text-center">
                Company growth
              </h4>
            </div>
          </div>
          <div className="border border-amber-100 rounded-xl bg-white p-1.5">
            <div className="rounded-xl bg-amber-50 py-5 px-12">
              <h3 className="font-manrope text-3xl font-semibold leading-10 text-black text-center">
                724+
              </h3>
              <h4 className="text-lg font-medium text-black leading-8 text-center">
                Projects Delivered
              </h4>
            </div>
          </div>
          <div className="border border-emerald-100 rounded-xl bg-white p-1.5">
            <div className="rounded-xl bg-emerald-50 py-5 px-12">
              <h3 className="font-manrope text-3xl font-semibold leading-10 text-black text-center">
                200+
              </h3>
              <h4 className="text-lg font-medium text-black leading-8 text-center">
                Active Clients
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
