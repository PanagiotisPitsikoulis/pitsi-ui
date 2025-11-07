export default function StatsWithBorderAndActions() {
  return (
    <section className="py-20 font-inter bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-manrope w-9/12 mx-auto lg:w-full lg:mx-0">
          <div className="border border-zinc-700 rounded-2xl p-5 flex flex-col gap-20">
            <h3 className="text-white text-3xl font-semibold text-start md:text-right leading-10">
              Expert Consultants
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white ">
              260+{" "}
              <a className="rounded-full shadow-sm p-3 bg-white">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-2xl p-5 flex flex-col gap-20">
            <h3 className="text-white text-3xl font-semibold text-start md:text-right leading-10">
              Projects Delivered
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white ">
              120+{" "}
              <a className="rounded-full shadow-sm p-3 bg-white">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-2xl p-5 flex flex-col gap-20">
            <h3 className="hidden md:block text-white text-3xl font-semibold text-start md:text-right leading-10">
              Orders <br />
              in Queue
            </h3>
            <h3 className="block md:hidden text-white text-3xl font-semibold text-start md:text-right leading-10">
              Orders in Queue
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white ">
              150+{" "}
              <a className="rounded-full shadow-sm p-3 bg-white">
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-2xl p-5 flex flex-col gap-20">
            <h3 className="hidden md:block text-white text-3xl font-semibold text-start md:text-right leading-10">
              Company
              <br />
              growth
            </h3>
            <h3 className="block md:hidden text-white text-3xl font-semibold text-start md:text-right leading-10">
              Company growth
            </h3>
            <div className="flex items-center justify-between text-5xl font-bold text-white ">
              520+{" "}
              <a className="rounded-full shadow-sm p-3 bg-white">
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
