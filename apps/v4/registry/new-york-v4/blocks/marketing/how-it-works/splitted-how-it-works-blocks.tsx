export default function SplittedHowItWorksBlocks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="flex w-full flex-col items-start justify-start gap-10 lg:flex-row lg:gap-20 xl:gap-36">
          <div className="mx-auto inline-flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-50 px-8 py-11 md:px-14 md:py-20 lg:max-w-lg lg:items-start lg:justify-start">
            <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:max-w-sm lg:text-start">
                A Guide to How It Works
              </h2>
              <p className="max-w-2xl text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Embark on a journey of understanding with our comprehensive
                guide to how it.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-2">
              <div className="group inline-flex w-full flex-col items-center justify-start gap-5 md:items-start">
                <div className="flex h-12 w-[47px] flex-col items-center justify-center gap-2.5 rounded bg-indigo-50 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                    1
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Search Food
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 md:text-start">
                    Whether you're craving a specific cuisine or exploring new
                    culinary horizons.
                  </p>
                </div>
              </div>
              <div className="group inline-flex w-full flex-col items-center justify-start gap-5 md:items-start">
                <div className="flex h-12 w-[47px] flex-col items-center justify-center gap-2.5 rounded bg-indigo-50 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                    2
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Select Order
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 md:text-start">
                    Selecting your order is a breeze with our intuitive
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-2">
              <div className="group inline-flex w-full flex-col items-center justify-start gap-5 md:items-start">
                <div className="flex h-12 w-[47px] flex-col items-center justify-center gap-2.5 rounded bg-indigo-50 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                    3
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Take Food
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 md:text-start">
                    Taking your food to go has never been easier with our
                    streamlined process.
                  </p>
                </div>
              </div>
              <div className="group inline-flex w-full flex-col items-center justify-start gap-5 md:items-start">
                <div className="flex h-12 w-[47px] flex-col items-center justify-center gap-2.5 rounded bg-indigo-50 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                    4
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Enjoy Food
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 md:text-start">
                    Savor the moment and indulge in culinary bliss with our
                    delectable dishes.
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
