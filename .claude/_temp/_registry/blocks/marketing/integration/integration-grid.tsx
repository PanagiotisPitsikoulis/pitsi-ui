export default function IntegrationGrid() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center lg:gap-16 gap-8 grid lg:grid-cols-12 grid-cols-1">
          <div className="w-full lg:col-span-5 col-span-12 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-full flex-col justify-center items-start lg:gap-9 gap-7 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="lg:max-w-sm w-full lg:text-start text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                  Harnessing the Power of Integrations
                </h2>
                <p className="lg:max-w-sm w-full lg:text-start text-center text-gray-500 text-sm font-normal leading-snug">
                  Whether it's connecting customer relationship management
                  software with email marketing platforms
                </p>
              </div>
              <button className="lg:ml-0 mx-auto group py-2.5 rounded-full justify-center items-center flex">
                <span className="pr-2 py-px text-indigo-600 group-hover:text-indigo-700 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                  Check All app
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 flex-col justify-start items-start gap-8 inline-flex">
            <div className="justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="group flex-col justify-start items-start lg:gap-5 gap-3 inline-flex">
                <div className="p-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Youtube
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Experience the power of our specific tools, which are
                    tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="group flex-col justify-start items-start lg:gap-5 gap-3 inline-flex">
                <div className="p-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Google
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Real examples provide you with valuable insights to optimize
                    use of our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="group flex-col justify-start items-start lg:gap-5 gap-3 inline-flex">
                <div className="p-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Spotify
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Information designed to help you navigate the complex data
                    problems
                  </p>
                </div>
              </div>
              <div className="group flex-col justify-start items-start lg:gap-5 gap-3 inline-flex">
                <div className="p-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Facebook
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
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
  );
}
