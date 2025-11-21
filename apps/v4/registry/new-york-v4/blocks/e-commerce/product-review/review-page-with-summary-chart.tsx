export default function ReviewPageWithSummaryChart() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="w-full">
          <h2 className="font-manrope mb-8 text-center text-4xl font-bold text-black">
            Our customer reviews
          </h2>
          <div className="grid grid-cols-1 gap-11 border-b border-gray-100 pb-11 max-xl:mx-auto max-xl:max-w-2xl xl:grid-cols-2">
            <div className="box flex w-full flex-col gap-y-4">
              <div className="flex w-full items-center">
                <p className="mr-0.5 text-lg font-medium text-black">5</p>

                <p className="mr-3 ml-5 h-2 w-full rounded-3xl bg-amber-50 sm:min-w-[278px]">
                  <span className="flex h-full w-[30%] rounded-3xl bg-amber-400" />
                </p>
                <p className="mr-0.5 text-lg font-medium text-black">989</p>
              </div>
              <div className="flex w-full items-center">
                <p className="mr-0.5 text-lg font-medium text-black">4</p>

                <p className="mr-3 ml-5 h-2 w-full rounded-3xl bg-amber-50 xl:min-w-[278px]">
                  <span className="flex h-full w-[40%] rounded-3xl bg-amber-400" />
                </p>
                <p className="mr-0.5 text-lg font-medium text-black">4.5K</p>
              </div>
              <div className="flex items-center">
                <p className="mr-0.5 text-lg font-medium text-black">3</p>

                <p className="mr-3 ml-5 h-2 w-full rounded-3xl bg-amber-50 xl:min-w-[278px]">
                  <span className="flex h-full w-[20%] rounded-3xl bg-amber-400" />
                </p>
                <p className="mr-0.5 text-lg font-medium text-black">50</p>
              </div>
              <div className="flex items-center">
                <p className="mr-0.5 text-lg font-medium text-black">2</p>

                <p className="mr-3 ml-5 h-2 w-full rounded-3xl bg-amber-50 xl:min-w-[278px]">
                  <span className="flex h-full w-[16%] rounded-3xl bg-amber-400" />
                </p>
                <p className="mr-0.5 text-lg font-medium text-black">16</p>
              </div>
              <div className="flex items-center">
                <p className="mr-0.5 text-lg font-medium text-black">1</p>

                <p className="mr-3 ml-5 h-2 w-full rounded-3xl bg-amber-50 xl:min-w-[278px]">
                  <span className="flex h-full w-[8%] rounded-3xl bg-amber-400" />
                </p>
                <p className="mr-0.5 py-[1px] text-lg font-medium text-black">
                  8
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-amber-50 p-8">
              <h2 className="font-manrope mb-6 text-5xl font-bold text-amber-400">
                4.3
              </h2>
              <div className="mb-4 flex items-center justify-center gap-2 sm:gap-6"></div>
              <p className="text-center text-xl leading-8 font-medium text-gray-900">
                46 Ratings
              </p>
            </div>
          </div>
          <div className="border-b border-gray-100 pt-11 pb-8 max-xl:mx-auto max-xl:max-w-2xl">
            <div className="mb-4 flex items-center gap-3"></div>
            <h3 className="font-manrope mb-6 text-xl leading-9 font-semibold text-black sm:text-2xl">
              Outstanding Experience!!!
            </h3>
            <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                  John Watson
                </h6>
              </div>
              <p className="text-lg leading-8 font-normal text-gray-400">
                Nov 01, 2023
              </p>
            </div>
            <p className="text-lg leading-8 font-normal text-gray-400 max-xl:text-justify">
              One of the standout features of Pagedone is its intuitive and
              user-friendly interface. Navigating through the system feels
              natural, and the layout makes it easy to locate and utilize
              various design elements. This is particularly beneficial for
              designers looking to streamline their workflow.
            </p>
          </div>
          <div className="pt-8 max-xl:mx-auto max-xl:max-w-2xl">
            <div className="mb-4 flex items-center gap-3"></div>
            <h3 className="font-manrope mb-6 text-xl leading-9 font-semibold text-black sm:text-2xl">
              Pagedone's design system seamlessly bridges the gap between
              designers and developers!
            </h3>
            <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704351103.png"
                  alt="Robert image"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                  Robert Karmazov
                </h6>
              </div>
              <p className="text-lg leading-8 font-normal text-gray-400">
                Nov 01, 2023
              </p>
            </div>
            <p className="text-lg leading-8 font-normal text-gray-400 max-xl:text-justify">
              Pagedone doesn't disappoint when it comes to the variety and
              richness of its design components. From pre-built templates to
              customizable elements, the system caters to both beginners and
              seasoned designers. The extensive library ensures a diverse range
              of options to bring creative visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
