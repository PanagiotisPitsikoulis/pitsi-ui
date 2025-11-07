export default function CtaButtonsWithCentrallyAlignedFeaturesList() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-6">
            The best stock advice is provided for your portfolio growth.
          </h2>
          <ul className="flex items-center justify-center gap-8 mb-11 flex-col md:flex-row">
            <li className="flex items-center gap-3 text-white">
              {/* SVG removed */}
              24*7 chat support of any time
            </li>
            <li className="flex items-center gap-3 text-white">
              {/* SVG removed */}
              Library of our specualist team{" "}
            </li>
          </ul>
          <div className="md:flex-row gap-5 flex-col flex items-center justify-center">
            <a
              href="#"
              className="bg-white shadow-sm rounded-full font-semibold text-indigo-600 block py-3.5 px-7"
            >
              Download app
            </a>
            <a
              href="#"
              className="border border-gray-300 shadow-sm rounded-full font-semibold text-white block py-3.5 px-7"
            >
              View demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
