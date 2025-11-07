export default function TailwindAboutUsSectionWithVideoLayout() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="max-w-3xl text-center text-gray-500 text-base font-normal leading-relaxed">
              As an IT solutions provider, we specialize in designing bespoke
              websites engineered for business growth. Elevate your business
              ambitions with our expert IT services tailored to your needs.
            </p>
          </div>
          <div className="w-full justify-center items-center gap-2.5 inline-flex relative">
            <img
              src="https://pagedone.io/asset/uploads/1717755297.png"
              alt="about Us image"
              className="w-full rounded-3xl object-cover"
            />
            <a className="p-3.5 rounded-full border border-gray-200 justify-start items-start gap-2.5 flex absolute">
              {/* SVG removed */}
            </a>
          </div>
          <div className="w-full justify-between items-center lg:gap-10 gap-7 grid md:grid-cols-4 grid-cols-2">
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h4 className="text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
                25+
              </h4>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h4 className="text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
                90+
              </h4>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Team Members
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h4 className="text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
                64+
              </h4>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h4 className="text-center text-indigo-700 text-4xl font-bold font-manrope leading-normal">
                60+
              </h4>
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
