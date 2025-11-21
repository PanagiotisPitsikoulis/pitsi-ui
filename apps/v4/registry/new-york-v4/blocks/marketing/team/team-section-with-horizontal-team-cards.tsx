export default function TeamSectionWithHorizontalTeamCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Meet the team
          </h2>
          <p className="text-center text-lg text-gray-500">
            These people work on making our product best.
          </p>
        </div>
        <div className="grid max-w-lg grid-cols-1 gap-x-8 gap-y-8 max-lg:mx-auto md:max-w-2xl md:grid-cols-1 lg:max-w-full lg:grid-cols-2">
          <div className="w-full rounded-2xl border border-solid border-transparent p-6 transition-all duration-500 hover:border-indigo-600">
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696238821.png"
                  className="mx-auto h-32 w-32 rounded-xl object-cover md:mx-0"
                  alt="Sam image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div className="block">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">
                      Sam Monic
                    </h4>
                    <span className="text-sm text-gray-600">Founder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="font-medium text-indigo-600"
                    >
                      @sam_monic23
                    </a>
                  </div>
                </div>
                <p className="leading-6 text-gray-600">
                  I’ve established pagedone in 2022 and it was one of the best
                  idea I’ve had in my life.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl border border-solid border-transparent p-6 transition-all duration-500 hover:border-indigo-600">
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696238838.png"
                  className="mx-auto h-32 w-32 rounded-xl object-cover md:mx-0"
                  alt="Radhika image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div className="block">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">
                      Radhika Leslic
                    </h4>
                    <span className="text-sm text-gray-600">
                      Sales Executive
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="font-medium text-indigo-600"
                    >
                      @radhika_lesli
                    </a>
                  </div>
                </div>
                <p className="leading-6 text-gray-600">
                  I’m the chief executive of sales and closed valuable deals
                  that helped pagedone in growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl border border-solid border-transparent p-6 transition-all duration-500 hover:border-indigo-600">
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696238665.png"
                  className="mx-auto h-32 w-32 rounded-xl object-cover md:mx-0"
                  alt="Harshita image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div className="block">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">
                      Harshita Patel
                    </h4>
                    <span className="text-sm text-gray-600">
                      Co-Founder &amp; CEO
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="font-medium text-indigo-600"
                    >
                      @harshita_11
                    </a>
                  </div>
                </div>
                <p className="leading-6 text-gray-600">
                  I am the co founder of pagedone and we’ve pushed our limit so
                  far to make it successful.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl border border-solid border-transparent p-6 transition-all duration-500 hover:border-indigo-600">
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696238852.png"
                  className="mx-auto h-32 w-32 rounded-xl object-cover md:mx-0"
                  alt="Alexa image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div className="block">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">
                      Alexa Kimberly
                    </h4>
                    <span className="text-sm text-gray-600">Lead Designer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="font-medium text-indigo-600"
                    >
                      @alexakim.11
                    </a>
                  </div>
                </div>
                <p className="leading-6 text-gray-600">
                  I’ve been lead designer for pagedone since the beginning of it
                  and enjoyed every bit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
