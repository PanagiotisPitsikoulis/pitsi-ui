export default function ItSolutionsCtaWithDualButtons() {
  return (
    <section className="py-24 font-inter bg-cover bg-no-repeat">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
        <img
          src="https://pagedone.io/asset/uploads/1759489946.png"
          alt="img"
          className="mx-auto"
        />
        <h2 className="text-4xl font-bold sm:leading-[52px] text-white font-manrope text-center pt-2">
          Future-Proof Your Business with Smart IT Solutions
        </h2>
        <p className="text-gray-300 text-base font-normal leading-6 text-center max-w-4xl mx-auto w-full">
          Secure your business’s future with innovative IT solutions tailored to
          your needs. Stay ahead of the competition and ensure long-term success
          with our smart technology strategies.
        </p>
        <div className="flex items-center justify-center gap-5 pt-6">
          <button className=" w-fit px-5 py-2.5 flex items-center gap-2 text-base font-semibold leading-7 text-white rounded-xl bg-emerald-600 shadow-sm transition-all duration-500 hover:bg-emerald-700">
            Contact Us {/* SVG removed */}
          </button>
          <button className=" w-fit px-5 py-2.5 flex items-center gap-2 text-base font-semibold leading-7 text-emerald-500 rounded-xl border border-gray-300 shadow-sm transition-all duration-500 hover:bg-emerald-600 hover:text-white">
            View Demo {/* SVG removed */}
          </button>
        </div>
      </div>
    </section>
  );
}
