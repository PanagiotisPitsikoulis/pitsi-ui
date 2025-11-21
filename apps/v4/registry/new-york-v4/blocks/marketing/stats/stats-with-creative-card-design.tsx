export default function StatsWithCreativeCardDesign() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative mx-auto w-fit rounded-xl p-5 text-center lg:w-full">
            <div className="absolute top-6 left-10 z-10">
              <img
                src="https://pagedone.io/asset/uploads/1760007817.png"
                alt="img"
              />
            </div>
            <h2 className="font-manrope text-3xl font-bold text-gray-900">
              100+
            </h2>
            <h4 className="pt-5 text-xl leading-8 font-medium text-gray-800">
              Active Clients
            </h4>
            <p className="pt-1 text-base font-normal text-gray-500">
              Supporting a growing network of active clients worldwide.
            </p>
            <div className="absolute right-0 bottom-0 z-10">
              <img
                src="https://pagedone.io/asset/uploads/1760007831.png"
                alt="img"
              />
            </div>
          </div>
          <div className="relative mx-auto w-fit rounded-xl p-5 text-center lg:w-full">
            <div className="absolute top-6 left-10 z-10">
              <img
                src="https://pagedone.io/asset/uploads/1760007842.png"
                alt="img"
              />
            </div>
            <h2 className="font-manrope text-3xl font-bold text-gray-900">
              80+
            </h2>
            <h4 className="pt-5 text-xl leading-8 font-medium text-gray-800">
              Projects Delivered
            </h4>
            <p className="pt-1 text-base font-normal text-gray-500">
              Successfully delivered projects that drive lasting impact.
            </p>
            <div className="absolute right-0 bottom-0 z-10">
              <img
                src="https://pagedone.io/asset/uploads/1760007852.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
