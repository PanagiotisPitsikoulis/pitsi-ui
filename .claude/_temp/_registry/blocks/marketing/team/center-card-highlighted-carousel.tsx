export default function CenterCardHighlightedCarousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Welcome our talented team
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              We are thrilled to introduce the newest members of our team. Each
              individual brings a wealth of experience, creativity, and passion
              to our organization.
            </p>
          </div>
          <div className="w-full justify-start items-center xl:gap-8 gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="w-full py-5 flex-col justify-end items-center inline-flex bg-cover bg-norepeat bg-center lg:h-[280px] h-96">
              <div className="flex-col justify-start items-center flex">
                <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                  Benjamin Evans
                </h5>
                <span className="text-center text-gray-50 text-sm font-normal leading-normal">
                  Co-Founder
                </span>
              </div>
            </div>
            <div className="w-full py-5 flex-col justify-end items-center inline-flex bg-cover bg-norepeat bg-center lg:h-[280px] h-96">
              <div className="flex-col justify-start items-center flex">
                <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                  Mia Thompson
                </h5>
                <span className="text-center text-gray-50 text-sm font-normal leading-normal">
                  Founder
                </span>
              </div>
            </div>
            <div className="w-full py-5 flex-col justify-end items-center inline-flex bg-cover bg-norepeat bg-center lg:h-[280px] h-96">
              <div className="flex-col justify-start items-center flex">
                <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                  Harshita Patel
                </h5>
                <span className="text-center text-gray-50 text-sm font-normal leading-normal">
                  CEO
                </span>
              </div>
            </div>
            <div className="w-full py-5 flex-col justify-end items-center inline-flex bg-cover bg-norepeat bg-center lg:h-[280px] h-96">
              <div className="flex-col justify-start items-center flex">
                <h5 className="text-center text-white text-lg font-medium leading-relaxed">
                  Amelia Clark
                </h5>
                <span className="text-center text-gray-50 text-sm font-normal leading-normal">
                  HR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
