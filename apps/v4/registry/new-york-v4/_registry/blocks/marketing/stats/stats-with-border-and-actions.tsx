export default function StatsWithBorderAndActions() {
  return (
    <section className="font-inter bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="font-manrope mx-auto grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:w-full lg:grid-cols-4">
          <div className="flex flex-col gap-20 rounded-2xl border border-zinc-700 p-5">
            <h3 className="text-start text-3xl leading-10 font-semibold text-white md:text-right">
              Expert Consultants
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white">
              260+{" "}
              <a className="rounded-full bg-white p-3 shadow-sm">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-20 rounded-2xl border border-zinc-700 p-5">
            <h3 className="text-start text-3xl leading-10 font-semibold text-white md:text-right">
              Projects Delivered
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white">
              120+{" "}
              <a className="rounded-full bg-white p-3 shadow-sm">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-20 rounded-2xl border border-zinc-700 p-5">
            <h3 className="hidden text-start text-3xl leading-10 font-semibold text-white md:block md:text-right">
              Orders <br />
              in Queue
            </h3>
            <h3 className="block text-start text-3xl leading-10 font-semibold text-white md:hidden md:text-right">
              Orders in Queue
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white">
              150+{" "}
              <a className="rounded-full bg-white p-3 shadow-sm">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-20 rounded-2xl border border-zinc-700 p-5">
            <h3 className="hidden text-start text-3xl leading-10 font-semibold text-white md:block md:text-right">
              Company
              <br />
              growth
            </h3>
            <h3 className="block text-start text-3xl leading-10 font-semibold text-white md:hidden md:text-right">
              Company growth
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white">
              520+{" "}
              <a className="rounded-full bg-white p-3 shadow-sm">
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
