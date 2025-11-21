export default function SideBySideImageWithContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <span className="text-center text-lg leading-relaxed font-normal text-gray-500">
              About Us
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Innovative Solutions for a Smoother
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-4">
              <img
                className="h-auto w-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724396144.png"
                alt="About Us image"
              />
              <h3 className="font-manrope text-3xl leading-normal font-extrabold text-black">
                Innovative Solutions for a Smoother, More Efficient Life
              </h3>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-4">
              <img
                className="h-auto w-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724396126.png"
                alt="About Us image"
              />
              <p className="text-base leading-relaxed font-normal text-gray-600">
                Finding ways to simplify and streamline daily tasks is essential
                for achieving a more balanced and productive life. Our guide to
                innovative solutions offers practical strategies and
                cutting-edge technologies designed
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-7 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
                25+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Years of Experience
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
                90+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Team Members
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
                64+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Successful Projects
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
                60+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Happy Clients
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
