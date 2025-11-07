export default function DefaultMaintenancePage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 flex">
            <a href="#"></a>
            <div className="w-full flex-col justify-start items-center gap-4 flex">
              <h2 className="text-center text-black text-3xl font-bold font-manrope leading-normal">
                We'll Be Back Soon
              </h2>
              <p className="max-w-3xl text-center text-gray-500 text-base font-normal leading-relaxed">
                Apologies for the inconvenience! Sleek note is currently
                undergoing scheduled maintenance to enhance your experience. We
                anticipate being back online in just a few minutes.
              </p>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1718004331.png"
            alt="under maintenance image"
            className="object-cover"
          />
          <p className="max-w-2xl text-center text-gray-400 text-base font-normal leading-relaxed">
            Meanwhile, take a moment to explore our blog, where you'll discover
            inspiring insights on crafting high-performing campaigns.
          </p>
        </div>
      </div>
    </section>
  );
}
