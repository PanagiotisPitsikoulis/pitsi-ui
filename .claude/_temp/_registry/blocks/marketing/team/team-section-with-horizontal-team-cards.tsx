export default function TeamSectionWithHorizontalTeamCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4">
            Meet the team
          </h2>
          <p className="text-lg text-gray-500 text-center">
            These people work on making our product best.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 gap-x-8  lg:grid-cols-2 md:grid-cols-1 max-w-lg md:max-w-2xl lg:max-w-full max-lg:mx-auto">
          <div className="w-full p-6 border border-solid border-transparent transition-all duration-500 hover:border-indigo-600 rounded-2xl">
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="relative ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238821.png"
                  className="w-32 h-32 rounded-xl object-cover mx-auto md:mx-0"
                  alt="Sam image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="block">
                    <h4 className="text-lg text-gray-900 font-semibold mb-2">
                      Sam Monic
                    </h4>
                    <span className="text-sm text-gray-600">Founder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="text-indigo-600 font-medium"
                    >
                      @sam_monic23
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 leading-6">
                  I’ve established pagedone in 2022 and it was one of the best
                  idea I’ve had in my life.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 border border-solid border-transparent transition-all duration-500 hover:border-indigo-600 rounded-2xl">
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="relative ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238838.png"
                  className="w-32 h-32 rounded-xl object-cover mx-auto md:mx-0"
                  alt="Radhika image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="block">
                    <h4 className="text-lg text-gray-900 font-semibold mb-2">
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
                      className="text-indigo-600 font-medium"
                    >
                      @radhika_lesli
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 leading-6">
                  I’m the chief executive of sales and closed valuable deals
                  that helped pagedone in growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 border border-solid border-transparent transition-all duration-500 hover:border-indigo-600 rounded-2xl">
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="relative ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238665.png"
                  className="w-32 h-32 rounded-xl object-cover mx-auto md:mx-0"
                  alt="Harshita image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="block">
                    <h4 className="text-lg text-gray-900 font-semibold mb-2">
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
                      className="text-indigo-600 font-medium"
                    >
                      @harshita_11
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 leading-6">
                  I am the co founder of pagedone and we’ve pushed our limit so
                  far to make it successful.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 border border-solid border-transparent transition-all duration-500 hover:border-indigo-600 rounded-2xl">
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="relative ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238852.png"
                  className="w-32 h-32 rounded-xl object-cover mx-auto md:mx-0"
                  alt="Alexa image"
                />
              </div>
              <div className="w-auto flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="block">
                    <h4 className="text-lg text-gray-900 font-semibold mb-2">
                      Alexa Kimberly
                    </h4>
                    <span className="text-sm text-gray-600">Lead Designer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* SVG removed */}
                    <a
                      href="javascript:;"
                      className="text-indigo-600 font-medium"
                    >
                      @alexakim.11
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 leading-6">
                  I’ve been lead designer for pagedone since the beginning of it
                  and enjoyed every bit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
