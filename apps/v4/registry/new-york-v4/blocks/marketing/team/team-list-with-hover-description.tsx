export default function TeamListWithHoverDescription() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-1.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Our Exceptional Team
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Empowered by passion and skill, our Exceptional Team turns
              challenges into opportunities for growth.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative flex h-full w-full items-start justify-start gap-5 rounded-2xl bg-[#bdbdbd]">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334508.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-[#bdbdbd]">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Aman Shah
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    CEO &amp; Owner
                  </span>
                </div>
              </div>
              <div className="group relative inline-flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border border-gray-200 bg-slate-100">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334519.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-slate-100">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Krishna Sharma
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    Associate
                  </span>
                </div>
              </div>
              <div className="group relative flex h-full w-full items-start justify-start gap-5 rounded-2xl bg-gray-200">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334532.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-200">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Priya Sharma
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    Designer
                  </span>
                </div>
              </div>
              <div className="group relative flex h-full w-full items-start justify-start gap-5 rounded-2xl bg-[#d7c7c1]">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334542.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-[#d7c7c1]">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Amit Desai
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="hidden h-full w-full lg:flex"></div>
              <div className="group relative flex h-full w-full items-start justify-start gap-5 rounded-2xl bg-[#d3ddee]">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334555.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-[#d3ddee]">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Aditi Chandra
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    Associate
                  </span>
                </div>
              </div>
              <div className="group relative flex h-full w-full items-start justify-start gap-5 rounded-2xl bg-[#c7bcbd]">
                <img
                  className="h-auto w-full rounded-2xl object-cover lg:h-full"
                  src="https://pagedone.io/asset/uploads/1722334565.png"
                  alt="Team Member Image"
                />
                <div className="absolute left-0 -z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-[#c7bcbd]">
                  <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
                    Neel Kapoor
                  </h6>
                  <span className="text-center text-xs leading-relaxed font-normal text-indigo-600">
                    Developer
                  </span>
                </div>
              </div>
              <div className="hidden h-full w-full lg:flex"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
