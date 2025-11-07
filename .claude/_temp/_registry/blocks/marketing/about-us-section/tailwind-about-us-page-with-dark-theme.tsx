export default function TailwindAboutUsPageWithDarkTheme() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="justify-center items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Financial Success with These Simple and Effective Strategies
              </h2>
            </div>
            <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
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
          <div className="w-full justify-start items-center lg:gap-8 gap-5 grid md:grid-cols-3 grid-cols-1">
            <div className="w-full lg:p-6 md:p-5 p-6 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Why Choose SAP?
                  </h6>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-normal">
                  Our platform offers a comprehensive suite of project
                  management tools, including collaboration features.
                </p>
              </div>
            </div>
            <div className="w-full lg:p-6 md:p-5 p-6 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 relative"></div>
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Our Vision
                  </h6>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-normal">
                  We are committed to transforming the landscape by equipping
                  our team with the skills.
                </p>
              </div>
            </div>
            <div className="w-full lg:p-6 md:p-5 p-6 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 px-0.5 py-[3px] justify-center items-center flex">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Our Team
                  </h6>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-normal">
                  Behind SAP is a team of passionate professionals dedicated to
                  delivering exceptional products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
