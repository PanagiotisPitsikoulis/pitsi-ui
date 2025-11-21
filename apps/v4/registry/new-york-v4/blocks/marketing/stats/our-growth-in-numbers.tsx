export default function OurGrowthInNumbers() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-4 lg:w-2/5">
            <h2 className="font-manrope text-center text-3xl font-semibold text-black lg:text-start">
              Our Growth in Numbers
            </h2>
            <p className="text-center text-base leading-7 font-normal text-gray-600 lg:text-start">
              Our growth is more than just words—it’s in the numbers. Discover
              how we’ve scaled our operations, improved results
            </p>
            <button className="mx-auto mt-6 flex w-fit justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-cyan-600 lg:mx-0">
              Lets get started
            </button>
            <div className="mt-10">
              <img
                src="https://pagedone.io/asset/uploads/1760003815.png"
                alt="img"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-3/5">
            <div className="flex flex-col gap-3.5 rounded-xl bg-gray-50 px-5 py-11">
              <h3 className="font-manrope text-center text-5xl font-bold text-cyan-500">
                200+
              </h3>
              <h4 className="text-center text-xl leading-8 font-medium text-black">
                Active Clients
              </h4>
              <p className="pt-1.5 text-center text-sm font-normal text-gray-600">
                Our active clients are at the heart of everything we do. We’re
                proud to collaborate.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 rounded-xl bg-gray-50 px-5 py-11">
              <h3 className="font-manrope text-center text-5xl font-bold text-cyan-500">
                55M
              </h3>
              <h4 className="text-center text-xl leading-8 font-medium text-black">
                Revenue Generated
              </h4>
              <p className="pt-1.5 text-center text-sm font-normal text-gray-600">
                Our strategies have helped generate substantial revenue,
                reflecting our ability to turn opportunities
              </p>
            </div>
            <div className="flex flex-col gap-3.5 rounded-xl bg-gray-50 px-5 py-11">
              <h3 className="font-manrope text-center text-5xl font-bold text-cyan-500">
                89+
              </h3>
              <h4 className="text-center text-xl leading-8 font-medium text-black">
                Orders in Queue
              </h4>
              <p className="pt-1.5 text-center text-sm font-normal text-gray-600">
                Our orders in queue reflect the trust clients place in us. We’re
                actively processing orders with precision.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 rounded-xl bg-gray-50 px-5 py-11">
              <h3 className="font-manrope text-center text-5xl font-bold text-cyan-500">
                175+
              </h3>
              <h4 className="text-center text-xl leading-8 font-medium text-black">
                Team Members
              </h4>
              <p className="pt-1.5 text-center text-sm font-normal text-gray-600">
                Our team members are the backbone of our success, bringing
                expertiseand dedication to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
