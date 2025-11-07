export default function SideBySideImageWithContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <span className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              About Us
            </span>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Innovative Solutions for a Smoother
            </h2>
          </div>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
              <img
                className="w-full h-auto rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724396144.png"
                alt="About Us image"
              />
              <h3 className="text-black text-3xl font-extrabold font-manrope leading-normal">
                Innovative Solutions for a Smoother, More Efficient Life
              </h3>
            </div>
            <div className="w-full h-full flex-col justify-start items-start gap-4 inline-flex">
              <img
                className="w-full h-auto rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724396126.png"
                alt="About Us image"
              />
              <p className="text-gray-600 text-base font-normal leading-relaxed">
                Finding ways to simplify and streamline daily tasks is essential
                for achieving a more balanced and productive life. Our guide to
                innovative solutions offers practical strategies and
                cutting-edge technologies designed
              </p>
            </div>
          </div>
          <div className="w-full justify-start items-center lg:gap-10 gap-7 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                25+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                90+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Team Members
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                64+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                60+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Happy Clients
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
