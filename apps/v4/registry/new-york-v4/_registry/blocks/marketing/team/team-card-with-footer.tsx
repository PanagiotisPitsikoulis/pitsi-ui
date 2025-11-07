export default function TeamCardWithFooter() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row lg:gap-12 xl:gap-20">
          <div className="inline-flex w-full flex-col items-center justify-start gap-7 sm:w-[515px] lg:items-start lg:gap-10 xl:gap-16">
            <div className="flex w-full flex-col items-center justify-start gap-5 lg:items-start lg:gap-7">
              <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-gray-900 lg:text-start">
                Our leading, strong &amp; creative team
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Our team is a group of highly skilled and passionate
                professionals committed to making our product.
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Join our team
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 flex-col items-start justify-start gap-7 sm:grid-cols-2 xl:gap-8">
            <div className="group relative inline-flex flex-col items-start justify-start gap-2.5 rounded-xl">
              <div className="flex items-start justify-start gap-2.5 rounded-xl bg-slate-300">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722576097.png"
                  alt="Benjamin Evans Image"
                />
              </div>
              <div className="absolute -z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-indigo-600/90 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-sm leading-snug font-normal text-white">
                    Sales Manager
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-3.5">
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-start justify-start gap-2.5 rounded-xl">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-xl bg-gray-300">
                <img
                  className="rounded-xl object-cover"
                  src="	https://pagedone.io/asset/uploads/1722576107.png"
                  alt="team members Image"
                />
              </div>
              <div className="absolute -z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-indigo-600/90 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                    Sylvia Morales
                  </h3>
                  <span className="text-center text-sm leading-snug font-normal text-white">
                    Product Manager
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-3.5">
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-start justify-start gap-2.5 rounded-xl">
              <div className="flex items-start justify-start gap-2.5 rounded-xl bg-[#cdd3c5]">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722576117.png"
                  alt="Julia Roberts Image"
                />
              </div>
              <div className="absolute -z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-indigo-600/90 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                    Julia Roberts
                  </h3>
                  <span className="text-center text-sm leading-snug font-normal text-white">
                    Seo Manager
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-3.5">
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-start justify-start gap-2.5 rounded-xl">
              <div className="flex items-start justify-start gap-2.5 rounded-xl bg-[#c7bcbd]">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722576128.png"
                  alt="James Miller Image"
                />
              </div>
              <div className="absolute -z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-indigo-600/90 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                    James Miller
                  </h3>
                  <span className="text-center text-sm leading-snug font-normal text-white">
                    Co-Founder
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-3.5">
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                  <a className="relative h-7 w-7 rounded-[15px]">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
