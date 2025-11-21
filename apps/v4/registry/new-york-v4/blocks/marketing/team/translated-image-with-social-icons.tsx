export default function TranslatedImageWithSocialIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="mx-auto flex w-96 flex-col items-center justify-start gap-5 lg:w-full">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Welcome our talented team
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              We are thrilled to introduce the newest members of our team. Each
              pidual brings a wealth of experience, creativity, and passion to
              our organization.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-8 lg:grid-cols-3 lg:justify-start">
            <div className="group relative mx-auto inline-flex w-96 flex-col items-center justify-center lg:w-full lg:items-start lg:justify-start">
              <div className="inline-flex items-start justify-start gap-2.5 bg-[#cdd3c5]">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512819.png"
                  alt="Emma Davis image"
                />
              </div>
              <div className="absolute bottom-0 inline-flex w-full items-center justify-between gap-11 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                <div className="inline-flex flex-col items-start justify-center gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-900">
                    Emma Davis
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Founder
                  </h6>
                </div>
                <a className="transition-all duration-700 ease-in-out hover:scale-110">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="group relative mx-auto inline-flex w-96 flex-col items-start justify-start lg:w-full">
              <div className="inline-flex items-start justify-start gap-2.5 bg-[#cfd0d2]">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512829.png"
                  alt="Ethan Parker image"
                />
              </div>
              <div className="absolute bottom-0 inline-flex w-full items-center justify-between gap-11 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                <div className="inline-flex flex-col items-start justify-center gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-900">
                    Ethan Parker
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Co-Founder
                  </h6>
                </div>
                <a className="transition-all duration-700 ease-in-out hover:scale-110">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="group relative mx-auto inline-flex w-96 flex-col items-start justify-start lg:w-full">
              <div className="inline-flex items-start justify-start gap-2.5 bg-gray-300">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512839.png"
                  alt="Metlinda Parker image"
                />
              </div>
              <div className="absolute bottom-0 inline-flex w-full items-center justify-between gap-11 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                <div className="inline-flex flex-col items-start justify-center gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-900">
                    Metlinda Parker
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    CEO
                  </h6>
                </div>
                <a className="transition-all duration-700 ease-in-out hover:scale-110">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
