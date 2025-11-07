export default function ImageWithMissionAndVision() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-start lg:items-end items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <h5 className="text-indigo-600 text-lg font-normal leading-relaxed lg:text-start text-center">
                WHO WE ARE
              </h5>
              <h2 className="lg:max-w-lg w-full text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Making Life Smoother and Easier Every Day
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              We are dedicated to making life smoother and easier every day with
              practical and user-friendly solutions. Our focus is on simplifying
              your daily routines and enhancing your overall convenience.
              Experience seamless solutions designed to fit effortlessly into
              your lifestyle.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full rounded-3xl flex-col justify-end items-start gap-2.5 inline-flex relative">
                <img
                  className="w-full h-auto rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724144697.png"
                  alt="About Us image"
                />
                <div className="md:m-6 m-4 max-[300px]:m-3 max-[330px]:p-2.5 p-5 bg-white rounded-xl flex-col justify-start items-start gap-2 flex absolute">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Our Vision
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    To be the leading innovator, transforming industries with
                    cutting-edge solutions that improve lives.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-3xl flex-col justify-end items-start gap-2.5 inline-flex relative">
                <img
                  className="w-full h-auto rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724144708.png"
                  alt="About Us image"
                />
                <div className="md:m-6 m-4 max-[300px]:m-3 max-[330px]:p-2.5 p-5 bg-white rounded-xl flex-col justify-start items-start gap-2 flex absolute">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Our Goal
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    To consistently deliver exceptional value and achieve
                    excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full justify-end items-center gap-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              <div className="w-full p-3 borderBox relative bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-center gap-0.5 inline-flex">
                <h3 className="text-center text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                  92%
                </h3>
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Happy Clients
                </h6>
              </div>
              <div className="w-full p-3 borderBox relative bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-center gap-0.5 inline-flex">
                <h3 className="text-center text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                  24
                </h3>
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Year of Experience
                </h6>
              </div>
              <div className="w-full p-3 borderBox relative bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-center gap-0.5 inline-flex">
                <h3 className="text-center text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                  14.2k+
                </h3>
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Completed Project
                </h6>
              </div>
              <div className="w-full p-3 borderBox relative bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-center gap-0.5 inline-flex">
                <h3 className="text-center text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                  12+
                </h3>
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Awards Won
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
