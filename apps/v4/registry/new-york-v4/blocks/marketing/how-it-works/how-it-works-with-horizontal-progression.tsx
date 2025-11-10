export default function HowItWorksWithHorizontalProgression() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
              How It Works
            </h2>
            <p className="max-w-2xl text-center text-base leading-relaxed font-normal text-gray-500">
              A detailed breakdown of processes and mechanisms behind a system
              or product, simplifying complex concepts for easy understanding.
            </p>
          </div>
          <div className="w-full flex-col items-center justify-center gap-7 lg:gap-8">
            <ol className="flex w-full flex-col items-center justify-between gap-7 lg:flex-row lg:gap-0">
              <li className="group relative flex w-full justify-start after:absolute after:top-24 after:inline-block after:h-0.5 after:border-dashed after:content-[''] lg:w-64 lg:after:left-52 lg:after:w-48 lg:after:border lg:after:bg-indigo-600 xl:w-60 xl:after:left-60 xl:after:w-60">
                <div className="z-10 mr-4 block flex w-full flex-col items-center gap-3 lg:w-64 xl:w-60">
                  <a className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                    {/* SVG removed */}
                  </a>
                  <div className="flex flex-col gap-2.5 text-center">
                    <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                      Register
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                      Sign up quickly with your email or social media account to
                      get started.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group relative flex w-full justify-center after:absolute after:top-24 after:inline-block after:h-0.5 after:border-dashed after:content-[''] lg:w-64 lg:after:left-56 lg:after:w-48 lg:after:border lg:after:bg-indigo-600 xl:w-60 xl:after:left-64 xl:after:w-60">
                <div className="z-10 mx-4 block flex w-full flex-col items-center gap-3 lg:w-64 xl:w-60">
                  <a className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                    {/* SVG removed */}
                  </a>
                  <div className="flex flex-col gap-2.5 text-center">
                    <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                      Complete Setup
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                      Follow the easy setup guide to customize your preferences
                      and settings.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group relative flex w-full justify-end after:absolute after:top-4 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-[''] lg:w-64 xl:w-60">
                <div className="z-10 ml-4 block flex w-full flex-col items-center gap-3 lg:w-64 xl:w-60">
                  <a className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-gray-500">
                    {/* SVG removed */}
                  </a>
                  <div className="flex flex-col gap-2.5 text-center">
                    <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                      Access The App
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal text-gray-400">
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
  )
}
