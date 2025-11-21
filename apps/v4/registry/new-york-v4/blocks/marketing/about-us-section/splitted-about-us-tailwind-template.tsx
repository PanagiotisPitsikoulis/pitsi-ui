export default function SplittedAboutUsTailwindTemplate() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              About Us
            </h2>
            <p className="max-w-xl text-center text-base leading-relaxed font-normal text-gray-500">
              As a Web Development Services We are Committed to Building Custom
              Web Solutions that Drive Business Success.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              className="mx-auto rounded-3xl object-cover lg:h-full lg:w-full"
              src="https://pagedone.io/asset/uploads/1717753930.png"
              alt="about Us image"
            />
            <div className="inline-flex flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex flex-col items-start justify-center gap-3">
                <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                  At our web development agency, we specialize in crafting
                  bespoke online solutions tailored to elevate businesses toward
                  their digital objectives. Committed to continuous evolution,
                  we remain abreast of cutting-edge web technologies and trends,
                  ensuring a constant delivery of unparalleled excellence.
                </p>
                <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
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
              <button className="flex w-full items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-400 hover:bg-gray-50 sm:w-fit">
                <span className="px-2 text-base leading-relaxed font-semibold text-gray-900">
                  Get in Touch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
