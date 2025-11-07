export default function SplittedAboutUsTailwindTemplate() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="max-w-xl text-center text-gray-500 text-base font-normal leading-relaxed">
              As a Web Development Services We are Committed to Building Custom
              Web Solutions that Drive Business Success.
            </p>
          </div>
          <div className="justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:w-full mx-auto lg:h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717753930.png"
              alt="about Us image"
            />
            <div className="flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="flex-col justify-center items-start gap-3 flex">
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  At our web development agency, we specialize in crafting
                  bespoke online solutions tailored to elevate businesses toward
                  their digital objectives. Committed to continuous evolution,
                  we remain abreast of cutting-edge web technologies and trends,
                  ensuring a constant delivery of unparalleled excellence.
                </p>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Our ethos is rooted in equipping clients with the essential
                  tools for triumph in the digital realm. Committed to
                  continuous evolution, we remain abreast of cutting-edge web
                  technologies and trends, ensuring a constant delivery of
                  unparalleled excellence. We firmly believe in furnishing every
                  business with a digital presence that authentically embodies
                  their brand essence and effectively resonates with their
                  target demographic.
                </p>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-700 ease-in-out justify-center items-center flex">
                <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                  Get in Touch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
