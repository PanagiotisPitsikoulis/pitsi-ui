export default function ItSolutionsCtaWithDualButtons() {
  return (
    <section className="font-inter bg-cover bg-no-repeat py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8">
        <img
          src="https://pagedone.io/asset/uploads/1759489946.png"
          alt="img"
          className="mx-auto"
        />
        <h2 className="font-manrope pt-2 text-center text-4xl font-bold text-white sm:leading-[52px]">
          Future-Proof Your Business with Smart IT Solutions
        </h2>
        <p className="mx-auto w-full max-w-4xl text-center text-base leading-6 font-normal text-gray-300">
          Secure your business’s future with innovative IT solutions tailored to
          your needs. Stay ahead of the competition and ensure long-term success
          with our smart technology strategies.
        </p>
        <div className="flex items-center justify-center gap-5 pt-6">
          <button className="flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-emerald-700">
            Contact Us {/* SVG removed */}
          </button>
          <button className="flex w-fit items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-base leading-7 font-semibold text-emerald-500 shadow-sm transition-all duration-500 hover:bg-emerald-600 hover:text-white">
            View Demo {/* SVG removed */}
          </button>
        </div>
      </div>
    </section>
  )
}
