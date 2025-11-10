export default function ThreeColumnTeamCardComponent() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Meet Our Most Valuable Team
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              We are thrilled to introduce the newest members of our team. Each
              individual brings a wealth of experience, creativity, and passion
              to our organization.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-0 lg:gap-x-20 xl:gap-x-28">
            <div className="inline-flex w-full flex-col items-start justify-start">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850997.png"
                alt="Julia Roberts Image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Julia Roberts
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850946.png"
                alt="Mia Thompson Image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Mia Thompson
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850955.png"
                alt="Samuel Turner Image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Samuel Turner
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850966.png"
                alt="Benjamin Evans Image"
              />
              <div className="flex w-full flex-col items-center justify-center gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850975.png"
                alt="Harshita Patel Image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Harshita Patel
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start lg:mt-16">
              <img
                className="w-full object-cover"
                src="https://pagedone.io/asset/uploads/1722850986.png"
                alt="Julia Roberts Image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-2.5 bg-white p-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.05)]">
                <div className="flex w-full flex-col items-center justify-start gap-2.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Julia Roberts
                  </h3>
                  <span className="text-center text-base leading-relaxed font-medium text-indigo-600">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
