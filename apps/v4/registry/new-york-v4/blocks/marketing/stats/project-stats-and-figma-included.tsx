export default function ProjectStatsAndFigmaIncluded() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-300 p-9">
            <h2 className="font-manrope text-5xl font-bold text-indigo-600">
              240%
            </h2>
            <h3 className="text-2xl leading-9 font-medium text-gray-900">
              Company growth
            </h3>
            <p className="text-base leading-6 font-normal text-gray-600">
              Company's remarkable growth journey as we continually innovate and
              drive towards new heights of success.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-300 p-9">
            <h2 className="font-manrope text-5xl font-bold text-indigo-600">
              120+
            </h2>
            <h3 className="text-2xl leading-9 font-medium text-gray-900">
              Projects Delivered
            </h3>
            <p className="text-base leading-6 font-normal text-gray-600">
              Each project reflects our dedication to understanding client needs
              and delivering tailored solutions.
            </p>
          </div>
          <div className="col-span-full flex flex-col gap-4 rounded-2xl border border-gray-300 p-9 lg:col-span-1">
            {/* SVG removed */}
            <h3 className="text-2xl leading-9 font-medium text-gray-900">
              Figma file Included
            </h3>
            <p className="text-base leading-6 font-normal text-gray-600">
              This file includes all design elements, layouts, and assets used
              in the project, allowing for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
