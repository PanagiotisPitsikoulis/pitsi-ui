export default function ThreeColumnTeamCardComponent() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-center lg:gap-5 gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Meet Our Most Valuable Team
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              We are thrilled to introduce the newest members of our team. Each
              individual brings a wealth of experience, creativity, and passion
              to our organization.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start xl:gap-x-28 lg:gap-x-20 lg:gap-0 md:gap-16 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start inline-flex">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850997.png"
                alt="Julia Roberts Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Julia Roberts
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850946.png"
                alt="Mia Thompson Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Mia Thompson
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850955.png"
                alt="Samuel Turner Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Samuel Turner
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850966.png"
                alt="Benjamin Evans Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-center items-center gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850975.png"
                alt="Harshita Patel Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Harshita Patel
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850986.png"
                alt="Julia Roberts Image"
              />
              <div className="w-full p-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Julia Roberts
                  </h3>
                  <span className="text-center text-indigo-600 text-base font-medium leading-relaxed">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
