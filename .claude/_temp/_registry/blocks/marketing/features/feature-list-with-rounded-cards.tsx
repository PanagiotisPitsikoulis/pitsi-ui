export default function FeatureListWithRoundedCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full flex-col justify-center items-center gap-3.5 flex">
            <div className="flex-col justify-start items-center gap-1 flex">
              <span className="text-center text-gray-500 text-sm font-normal leading-normal">
                Features
              </span>
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Transforming Your Team Management
              </h2>
            </div>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              signifies a revolution in how teams operate, optimizing
              efficiency, communication, and collaboration through innovative
              tools and streamlined processes.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-11 flex">
            <div className="w-full justify-center items-start gap-8 flex md:flex-row flex-col">
              <div className="md:w-fit w-full pl-5 pr-3 py-3 relative bg-white rounded-lg shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-l-[3px] border-blue-700 flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[50px] h-[50px] absolute top-0 right-0">
                  {/* SVG removed */}
                </div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Project Structure
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Organize tasks and workflows for efficient project execution.
                </p>
                <a className="text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                  Learn More
                </a>
              </div>
              <div className="md:w-fit w-full pl-5 pr-3 py-3 relative bg-white rounded-lg shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-l-[3px] border-blue-700 flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[50px] h-[50px] absolute top-0 right-0">
                  {/* SVG removed */}
                </div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Timeline Planning
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Strategically schedule project milestones and deadlines.
                </p>
                <a className="text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                  Learn More
                </a>
              </div>
              <div className="md:w-fit w-full pl-5 pr-3 py-3 relative bg-white rounded-lg shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-l-[3px] border-blue-700 flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[50px] h-[50px] absolute top-0 right-0">
                  {/* SVG removed */}
                </div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Financial Control
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Monitor and meticulously manage project budgets and expenses.
                </p>
                <a className="text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full xl:px-52 lg:px-40 md:px-20 justify-center items-start gap-8 flex md:flex-row flex-col">
              <div className="md:w-fit w-full pl-5 pr-3 py-3 relative bg-white rounded-lg shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-l-[3px] border-blue-700 flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[50px] h-[50px] absolute top-0 right-0">
                  {/* SVG removed */}
                </div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Team Management
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Coordinate and allocate team members and resources
                  effectively.
                </p>
                <a className="text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                  Learn More
                </a>
              </div>
              <div className="md:w-fit w-full pl-5 pr-3 py-3 relative bg-white rounded-lg shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border-l-[3px] border-blue-700 flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[50px] h-[50px] absolute top-0 right-0">
                  {/* SVG removed */}
                </div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Quality Assurance
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  Implement processes to ensure high standards of project
                  deliverables.
                </p>
                <a className="text-blue-700 hover:text-blue-800 transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
