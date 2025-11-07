export default function StatsWithCreativeCardDesign() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl text-center p-5 relative w-fit mx-auto lg:w-full">
            <div className="absolute z-10 left-10 top-6">
              <img
                src="https://pagedone.io/asset/uploads/1760007817.png"
                alt="img"
              />
            </div>
            <h2 className="font-manrope text-3xl font-bold text-gray-900">
              100+
            </h2>
            <h4 className="text-xl font-medium text-gray-800 pt-5 leading-8">
              Active Clients
            </h4>
            <p className="text-base font-normal text-gray-500 pt-1">
              Supporting a growing network of active clients worldwide.
            </p>
            <div className="absolute z-10 right-0 bottom-0">
              <img
                src="https://pagedone.io/asset/uploads/1760007831.png"
                alt="img"
              />
            </div>
          </div>
          <div className="rounded-xl text-center p-5 relative w-fit mx-auto lg:w-full">
            <div className="absolute z-10 left-10 top-6">
              <img
                src="https://pagedone.io/asset/uploads/1760007842.png"
                alt="img"
              />
            </div>
            <h2 className="font-manrope text-3xl font-bold text-gray-900">
              80+
            </h2>
            <h4 className="text-xl font-medium text-gray-800 pt-5 leading-8">
              Projects Delivered
            </h4>
            <p className="text-base font-normal text-gray-500 pt-1">
              Successfully delivered projects that drive lasting impact.
            </p>
            <div className="absolute z-10 right-0 bottom-0">
              <img
                src="https://pagedone.io/asset/uploads/1760007852.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
