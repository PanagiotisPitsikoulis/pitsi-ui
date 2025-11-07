export default function VisualImageWithStats() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <div className="w-full flex-col justify-start items-center gap-3 flex">
              <h5 className="text-center text-orange-500 text-lg font-normal leading-relaxed">
                About Us
              </h5>
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Projects with Unique Construction Solutions
              </h2>
            </div>
            <p className="lg:max-w-5xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed lg:pr-14">
              Our projects stand out through our commitment to unique
              construction solutions. We approach each project with a fresh
              perspective, employing innovative techniques and customized
            </p>
          </div>
          <div className="w-full justify-start items-center lg:gap-10 gap-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-orange-500 text-4xl font-bold font-manrope leading-normal">
                25+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-orange-500 text-4xl font-bold font-manrope leading-normal">
                90+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Team Members
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-orange-500 text-4xl font-bold font-manrope leading-normal">
                64+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-orange-500 text-4xl font-bold font-manrope leading-normal">
                60+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Happy Clients
              </h6>
            </div>
          </div>
          <img
            className="w-full h-auto rounded-2xl object-cover"
            src="https://pagedone.io/asset/uploads/1724829118.png"
            alt="About Us image"
          />
        </div>
      </div>
    </section>
  );
}
