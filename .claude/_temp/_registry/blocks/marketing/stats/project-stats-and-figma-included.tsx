export default function ProjectStatsAndFigmaIncluded() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded-2xl p-9 flex flex-col gap-4">
            <h2 className="text-5xl font-bold font-manrope text-indigo-600">
              240%
            </h2>
            <h3 className="text-2xl font-medium text-gray-900 leading-9">
              Company growth
            </h3>
            <p className="text-base font-normal leading-6 text-gray-600">
              Company's remarkable growth journey as we continually innovate and
              drive towards new heights of success.
            </p>
          </div>
          <div className="border border-gray-300 rounded-2xl p-9 flex flex-col gap-4">
            <h2 className="text-5xl font-bold font-manrope text-indigo-600">
              120+
            </h2>
            <h3 className="text-2xl font-medium text-gray-900 leading-9">
              Projects Delivered
            </h3>
            <p className="text-base font-normal leading-6 text-gray-600">
              Each project reflects our dedication to understanding client needs
              and delivering tailored solutions.
            </p>
          </div>
          <div className="col-span-full lg:col-span-1 border border-gray-300 rounded-2xl p-9 flex flex-col gap-4">
            {/* SVG removed */}
            <h3 className="text-2xl font-medium text-gray-900 leading-9">
              Figma file Included
            </h3>
            <p className="text-base font-normal leading-6 text-gray-600">
              This file includes all design elements, layouts, and assets used
              in the project, allowing for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
