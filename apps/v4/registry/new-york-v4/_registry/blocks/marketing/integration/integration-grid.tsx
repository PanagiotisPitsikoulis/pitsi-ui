export default function IntegrationGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl lg:col-span-5">
            <div className="flex w-full flex-col items-start justify-center gap-7 lg:gap-9">
              <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start">
                <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900 lg:max-w-sm lg:text-start">
                  Harnessing the Power of Integrations
                </h2>
                <p className="w-full text-center text-sm leading-snug font-normal text-gray-500 lg:max-w-sm lg:text-start">
                  Whether it's connecting customer relationship management
                  software with email marketing platforms
                </p>
              </div>
              <button className="group mx-auto flex items-center justify-center rounded-full py-2.5 lg:ml-0">
                <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-700">
                  Check All app
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="col-span-12 inline-flex flex-col items-start justify-start gap-8 lg:col-span-7">
            <div className="flex flex-col items-start justify-start gap-8 sm:flex-row">
              <div className="group inline-flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="inline-flex items-start justify-start gap-2.5 rounded bg-indigo-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Youtube
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Experience the power of our specific tools, which are
                    tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="group inline-flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="inline-flex items-start justify-start gap-2.5 rounded bg-indigo-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Google
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Real examples provide you with valuable insights to optimize
                    use of our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-8 sm:flex-row">
              <div className="group inline-flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="inline-flex items-start justify-start gap-2.5 rounded bg-indigo-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Spotify
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Information designed to help you navigate the complex data
                    problems
                  </p>
                </div>
              </div>
              <div className="group inline-flex flex-col items-start justify-start gap-3 lg:gap-5">
                <div className="inline-flex items-start justify-start gap-2.5 rounded bg-indigo-50 p-3 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Facebook
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Provides you with access to experts and pro’s knowledge in
                    your community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
