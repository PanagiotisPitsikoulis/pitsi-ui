export default function FeatureListWithRoundedCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3.5">
            <div className="flex flex-col items-center justify-start gap-1">
              <span className="text-center text-sm leading-normal font-normal text-gray-500">
                Features
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Transforming Your Team Management
              </h2>
            </div>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              signifies a revolution in how teams operate, optimizing
              efficiency, communication, and collaboration through innovative
              tools and streamlined processes.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-11">
            <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row">
              <div className="relative inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg border-l-[3px] border-blue-700 bg-white py-3 pr-3 pl-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] md:w-fit">
                <div className="absolute top-0 right-0 h-[50px] w-[50px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Project Structure
                </h5>
                <p className="text-sm leading-relaxed font-normal text-gray-500">
                  Organize tasks and workflows for efficient project execution.
                </p>
                <a className="text-sm leading-relaxed font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                  Learn More
                </a>
              </div>
              <div className="relative inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg border-l-[3px] border-blue-700 bg-white py-3 pr-3 pl-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] md:w-fit">
                <div className="absolute top-0 right-0 h-[50px] w-[50px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Timeline Planning
                </h5>
                <p className="text-sm leading-relaxed font-normal text-gray-500">
                  Strategically schedule project milestones and deadlines.
                </p>
                <a className="text-sm leading-relaxed font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                  Learn More
                </a>
              </div>
              <div className="relative inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg border-l-[3px] border-blue-700 bg-white py-3 pr-3 pl-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] md:w-fit">
                <div className="absolute top-0 right-0 h-[50px] w-[50px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Financial Control
                </h5>
                <p className="text-sm leading-relaxed font-normal text-gray-500">
                  Monitor and meticulously manage project budgets and expenses.
                </p>
                <a className="text-sm leading-relaxed font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row md:px-20 lg:px-40 xl:px-52">
              <div className="relative inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg border-l-[3px] border-blue-700 bg-white py-3 pr-3 pl-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] md:w-fit">
                <div className="absolute top-0 right-0 h-[50px] w-[50px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Team Management
                </h5>
                <p className="text-sm leading-relaxed font-normal text-gray-500">
                  Coordinate and allocate team members and resources
                  effectively.
                </p>
                <a className="text-sm leading-relaxed font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                  Learn More
                </a>
              </div>
              <div className="relative inline-flex w-full flex-col items-start justify-start gap-3 rounded-lg border-l-[3px] border-blue-700 bg-white py-3 pr-3 pl-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] md:w-fit">
                <div className="absolute top-0 right-0 h-[50px] w-[50px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Quality Assurance
                </h5>
                <p className="text-sm leading-relaxed font-normal text-gray-500">
                  Implement processes to ensure high standards of project
                  deliverables.
                </p>
                <a className="text-sm leading-relaxed font-normal text-blue-700 transition-all duration-700 ease-in-out hover:text-blue-800">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
