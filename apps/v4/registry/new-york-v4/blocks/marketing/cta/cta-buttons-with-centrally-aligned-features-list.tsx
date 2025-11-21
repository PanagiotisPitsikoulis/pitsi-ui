export default function CtaButtonsWithCentrallyAlignedFeaturesList() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-indigo-600 p-8 xl:p-11">
          <h2 className="font-manrope mb-6 text-center text-4xl font-bold text-white">
            The best stock advice is provided for your portfolio growth.
          </h2>
          <ul className="mb-11 flex flex-col items-center justify-center gap-8 md:flex-row">
            <li className="flex items-center gap-3 text-white">
              {/* SVG removed */}
              24*7 chat support of any time
            </li>
            <li className="flex items-center gap-3 text-white">
              {/* SVG removed */}
              Library of our specualist team{" "}
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            <a
              href="#"
              className="block rounded-full bg-white px-7 py-3.5 font-semibold text-indigo-600 shadow-sm"
            >
              Download app
            </a>
            <a
              href="#"
              className="block rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-white shadow-sm"
            >
              View demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
