export default function HowItWorksWithTheCta() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full justify-start lg:items-start items-center lg:gap-24 gap-10 flex lg:flex-row flex-col">
            <h2 className="max-w-xl text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Empowering Your Business for Effortless Success
            </h2>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-5 inline-flex">
              <p className="text-gray-500 text-lg font-normal leading-tight lg:text-start text-center">
                Streamlining your operations, enhancing efficiency, and
                maximizing productivity - we're dedicated to making every facet
                of your business{" "}
              </p>
              <a className="group py-2.5 rounded-full justify-center items-center flex">
                <span className="pr-2 py-px text-indigo-600 group-hover:text-indigo-700 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                  Get Started
                </span>
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="group w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-5 flex">
                <div className="justify-start items-center gap-6 inline-flex">
                  <div className="px-6 py-2 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full flex-col justify-center items-center inline-flex">
                    <span className="text-center text-white text-3xl font-bold font-manrope leading-normal">
                      1
                    </span>
                  </div>
                </div>
                <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                  Create your Account
                </h4>
              </div>
              <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                Creating your account is the first step towards seamless
                integration and access to our suite of tools.
              </p>
            </div>
            <div className="group w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-5 flex">
                <div className="justify-start items-center gap-6 inline-flex">
                  <div className="w-[62px] px-6 py-2 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full flex-col justify-center items-center inline-flex">
                    <span className="text-center text-white text-3xl font-bold font-manrope leading-normal">
                      2
                    </span>
                  </div>
                </div>
                <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                  Setup your Account
                </h4>
              </div>
              <p className="lg:max-w-sm text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                Our user-friendly platform guides you through each step,
                ensuring a smooth and efficient process.
              </p>
            </div>
            <div className="group w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-5 flex">
                <div className="justify-start items-center gap-6 inline-flex">
                  <div className="w-[62px] px-6 py-2 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full flex-col justify-center items-center inline-flex">
                    <span className="text-center text-white text-3xl font-bold font-manrope leading-normal">
                      3
                    </span>
                  </div>
                </div>
                <h4 className="text-gray-900 text-xl font-medium leading-8 lg:text-start text-center">
                  Team Management
                </h4>
              </div>
              <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                our platform simplifies every aspect of team collaboration. With
                intuitive features like real-time communication and task
                prioritization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
