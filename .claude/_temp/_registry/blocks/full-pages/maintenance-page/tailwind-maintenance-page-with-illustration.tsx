export default function TailwindMaintenancePageWithIllustration() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex">
          <img
            src="https://pagedone.io/asset/uploads/1718004816.png"
            alt="under maintenance image"
            className="object-cover"
          />
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <h2 className="max-w-2xl text-center text-black text-4xl font-bold font-manrope leading-normal">
              Coming Soon: Prepare for Something Spectacular
            </h2>
            <p className="max-w-3xl text-center text-gray-500 text-base font-medium leading-relaxed">
              Apologies for the inconvenience! Sleeknote is currently undergoing
              scheduled maintenance to enhance your experience. We anticipate
              being back online in just a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
