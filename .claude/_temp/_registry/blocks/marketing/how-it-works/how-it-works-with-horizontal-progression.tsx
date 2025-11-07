export default function HowItWorksWithHorizontalProgression() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              How It Works
            </h2>
            <p className="max-w-2xl text-center text-gray-500 text-base font-normal leading-relaxed">
              A detailed breakdown of processes and mechanisms behind a system
              or product, simplifying complex concepts for easy understanding.
            </p>
          </div>
          <div className="w-full flex-col justify-center items-center lg:gap-8 gap-7">
            <ol className="flex lg:flex-row flex-col items-center justify-between w-full lg:gap-0 gap-7">
              <li className="group flex xl:w-60 lg:w-64 w-full relative justify-start after:content-[''] xl:after:w-60 lg:after:w-48 after:h-0.5 lg:after:border after:border-dashed lg:after:bg-indigo-600 after:inline-block after:absolute after:top-24 xl:after:left-60 lg:after:left-52">
                <div className="xl:w-60 lg:w-64 w-full block z-10 flex flex-col items-center gap-3 mr-4">
                  <a className="w-[60px] h-[60px] justify-center items-center flex bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    {/* SVG removed */}
                  </a>
                  <div className="text-center flex flex-col gap-2.5">
                    <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                      Register
                    </h4>
                    <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                      Sign up quickly with your email or social media account to
                      get started.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group flex xl:w-60 lg:w-64 w-full relative justify-center after:content-[''] xl:after:w-60 lg:after:w-48 after:h-0.5 lg:after:border after:border-dashed lg:after:bg-indigo-600 after:inline-block after:absolute after:top-24 xl:after:left-64 lg:after:left-56">
                <div className="xl:w-60 lg:w-64 w-full block z-10 flex flex-col items-center gap-3 mx-4">
                  <a className="w-[60px] h-[60px] justify-center items-center flex bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    {/* SVG removed */}
                  </a>
                  <div className="text-center flex flex-col gap-2.5">
                    <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                      Complete Setup
                    </h4>
                    <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                      Follow the easy setup guide to customize your preferences
                      and settings.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group flex xl:w-60 lg:w-64 w-full relative justify-end after:content-['']  after:w-full after:h-0.5 after:inline-block after:absolute after:top-4 after:left-4">
                <div className="xl:w-60 lg:w-64 w-full block z-10 flex flex-col items-center gap-3 ml-4">
                  <a className="w-[60px] h-[60px] justify-center items-center flex rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-gray-500 transition-all duration-700 ease-in-out">
                    {/* SVG removed */}
                  </a>
                  <div className="text-center flex flex-col gap-2.5">
                    <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                      Access The App
                    </h4>
                    <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                      Begin using the app to enjoy all its features and benefits
                      right away.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
