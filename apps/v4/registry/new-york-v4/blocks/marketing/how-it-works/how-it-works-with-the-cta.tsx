export default function HowItWorksWithTheCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row lg:items-start lg:gap-24">
            <h2 className="font-manrope max-w-xl text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Empowering Your Business for Effortless Success
            </h2>
            <div className="inline-flex w-full flex-col items-center justify-start gap-5 lg:items-start">
              <p className="text-center text-lg leading-tight font-normal text-gray-500 lg:text-start">
                Streamlining your operations, enhancing efficiency, and
                maximizing productivity - we're dedicated to making every facet
                of your business{" "}
              </p>
              <a className="group flex items-center justify-center rounded-full py-2.5">
                <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-700">
                  Get Started
                </span>
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3">
            <div className="group inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <div className="flex flex-col items-center justify-start gap-5 lg:items-start">
                <div className="inline-flex items-center justify-start gap-6">
                  <div className="inline-flex flex-col items-center justify-center rounded-full bg-indigo-600 px-6 py-2 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                    <span className="font-manrope text-center text-3xl leading-normal font-bold text-white">
                      1
                    </span>
                  </div>
                </div>
                <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                  Create your Account
                </h4>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600 lg:text-start">
                Creating your account is the first step towards seamless
                integration and access to our suite of tools.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <div className="flex flex-col items-center justify-start gap-5 lg:items-start">
                <div className="inline-flex items-center justify-start gap-6">
                  <div className="inline-flex w-[62px] flex-col items-center justify-center rounded-full bg-indigo-600 px-6 py-2 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                    <span className="font-manrope text-center text-3xl leading-normal font-bold text-white">
                      2
                    </span>
                  </div>
                </div>
                <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                  Setup your Account
                </h4>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600 lg:max-w-sm lg:text-start">
                Our user-friendly platform guides you through each step,
                ensuring a smooth and efficient process.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <div className="flex flex-col items-center justify-start gap-5 lg:items-start">
                <div className="inline-flex items-center justify-start gap-6">
                  <div className="inline-flex w-[62px] flex-col items-center justify-center rounded-full bg-indigo-600 px-6 py-2 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                    <span className="font-manrope text-center text-3xl leading-normal font-bold text-white">
                      3
                    </span>
                  </div>
                </div>
                <h4 className="text-center text-xl leading-8 font-medium text-gray-900 lg:text-start">
                  Team Management
                </h4>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600 lg:text-start">
                our platform simplifies every aspect of team collaboration. With
                intuitive features like real-time communication and task
                prioritization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
