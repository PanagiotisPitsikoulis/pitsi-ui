export default function TailwindAboutUsPageWithDarkTheme() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-white lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white lg:text-start">
                Financial Success with These Simple and Effective Strategies
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-200 lg:text-start">
              Achieving financial success doesn't have to be complicated. This
              guide provides a collection of straightforward and effective
              strategies designed to help you manage your finances.
            </p>
          </div>
          <img
            className="h-auto rounded-2xl object-cover"
            src="https://pagedone.io/asset/uploads/1724404803.png"
            alt="About Us image"
          />
          <div className="grid w-full grid-cols-1 items-center justify-start gap-5 md:grid-cols-3 lg:gap-8">
            <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-zinc-900 p-6 transition-all duration-700 ease-in-out hover:border-zinc-700 md:p-5 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center px-1 py-[3px]">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Why Choose SAP?
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-400">
                  Our platform offers a comprehensive suite of project
                  management tools, including collaboration features.
                </p>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-zinc-900 p-6 transition-all duration-700 ease-in-out hover:border-zinc-700 md:p-5 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="relative h-6 w-6"></div>
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Our Vision
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-400">
                  We are committed to transforming the landscape by equipping
                  our team with the skills.
                </p>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-zinc-900 p-6 transition-all duration-700 ease-in-out hover:border-zinc-700 md:p-5 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center px-0.5 py-[3px]">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Our Team
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-400">
                  Behind SAP is a team of passionate professionals dedicated to
                  delivering exceptional products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
