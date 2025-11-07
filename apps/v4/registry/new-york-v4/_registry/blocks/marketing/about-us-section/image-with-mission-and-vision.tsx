export default function ImageWithMissionAndVision() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2 lg:items-end lg:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <h5 className="text-center text-lg leading-relaxed font-normal text-indigo-600 lg:text-start">
                WHO WE ARE
              </h5>
              <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 lg:max-w-lg lg:text-start">
                Making Life Smoother and Easier Every Day
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              We are dedicated to making life smoother and easier every day with
              practical and user-friendly solutions. Our focus is on simplifying
              your daily routines and enhancing your overall convenience.
              Experience seamless solutions designed to fit effortlessly into
              your lifestyle.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <div className="relative inline-flex w-full flex-col items-start justify-end gap-2.5 rounded-3xl">
                <img
                  className="h-auto w-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724144697.png"
                  alt="About Us image"
                />
                <div className="absolute m-4 flex flex-col items-start justify-start gap-2 rounded-xl bg-white p-5 max-[330px]:p-2.5 max-[300px]:m-3 md:m-6">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Our Vision
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    To be the leading innovator, transforming industries with
                    cutting-edge solutions that improve lives.
                  </p>
                </div>
              </div>
              <div className="relative inline-flex w-full flex-col items-start justify-end gap-2.5 rounded-3xl">
                <img
                  className="h-auto w-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724144708.png"
                  alt="About Us image"
                />
                <div className="absolute m-4 flex flex-col items-start justify-start gap-2 rounded-xl bg-white p-5 max-[330px]:p-2.5 max-[300px]:m-3 md:m-6">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Our Goal
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    To consistently deliver exceptional value and achieve
                    excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-end gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="borderBox relative inline-flex w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-white p-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-indigo-600">
                  92%
                </h3>
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Happy Clients
                </h6>
              </div>
              <div className="borderBox relative inline-flex w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-white p-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-indigo-600">
                  24
                </h3>
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Year of Experience
                </h6>
              </div>
              <div className="borderBox relative inline-flex w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-white p-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-indigo-600">
                  14.2k+
                </h3>
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Completed Project
                </h6>
              </div>
              <div className="borderBox relative inline-flex w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-white p-3 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-indigo-600">
                  12+
                </h3>
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Awards Won
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
